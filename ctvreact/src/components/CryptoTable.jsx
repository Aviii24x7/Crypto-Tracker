import {useState, useEffect} from "react";
import { getCryptoData } from "../providers/data.provider";
import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Popup from "./Popup";


// Row Component
function CryptoTableRow(props) {
    const data = props.data;
    return <tr onClick={() => props.handleRowClick(data)} className="space-y-8 hover:curosr-pointer">
    <td className="text-gray-300 text-xs font-semibold"><FaRegStar /></td>
    <td className="hidden sm:table-cell text-gray-500 text-xs font-semibold">{props.sNo}</td>
    <td className="h-full flex items-center justify-left gap-1 text-xs font-semibold"><img className="h-5 px-1" src={data['image']} />
    <span>{data['name']}</span>
    <h3 className="text-xs text-gray-500">{data['symbol']}</h3></td>
    <td className="text-xs font-semibold">${data['price']}</td>
    {/* <td className="text-xs font-semibold ${data['24h'] > 0 ? 'text-green-700' : 'text-red-700'">{data['24h']} </td> */}
    <td className={`sm:table-cell text-xs font-semibold ${data['24h'] > 0 ? 'text-green-700' : 'text-red-700'}`}> {data['24h']}% </td>
    {/* <td className=`hidden sm:table-cell text-xs font-semibold data['7d'] > 0 ? 'text-green-700' : 'text-red-700'`>{data['7d']}</td> */}
    <td className={`hidden sm:table-cell text-xs font-semibold ${data['7d'] > 0 ? 'text-green-700' : 'text-red-700'}`}> {data['7d']}% </td>

    <td className="hidden sm:table-cell text-xs font-semibold">${data['market_cap']}</td>
    <td className="hidden sm:table-cell text-xs font-semibold">${data['volume_24h']}</td>
    <td className="hidden sm:table-cell text-xs font-semibold">{data['circulating_supply']} BTC</td>
    <td className="hidden sm:table-cell text-xs font-semibold"><BsThreeDotsVertical /></td>

</tr>
}

// Responsible for rendering table which contains crypto details
export default function CryptoTable() {

    const [showModal, setShowModal] =useState(false)

    const [cryptoData, setCryptoData] = useState({});

    // pagination
    const [currentPageNo, setCurrentPageNo] = useState(0);
    const [showRows, setShowRows] = useState(100);
    const [modalData, setModalData] = useState();
    // const [CurrentRows, setCurrentRows] = useState(100);

    async function fetchCryptoData(pageNo = 1) {
        const data = await getCryptoData(pageNo, showRows);
        setCurrentPageNo(pageNo);
        setCryptoData(data);
    }

    function handleRowClick(data) {
        setModalData(data);
        setShowModal(true);
    }

    function handleModalClose(){
        setModalData(undefined);
        setShowModal(false);
    }

    useEffect(() => {
        fetchCryptoData();
    }, [showRows]);

    return <>
{/* entire table and pagination */}
    <div className="p-1 mx-auto">

{/* Table part */}
        <div className="mx-auto sm:px-4 md:px-10 ">

        <div className="flex justify-end items-center gap-1">
        <label htmlFor="showRows" className="text-xs"> Show Rows:</label> 

        <input
        id="showRows"
        type="number"
        name="rows"
        step="10"
        className="text-sm bg-gray-100 w-12 rounded px-1"
        value={showRows}
        onChange={(e) => setShowRows(parseInt(e.target.value)) }
      />        
        </div>


        <table className="w-full mx-auto table-auto ">
            <thead className="border-b-2 border-gray-100">
                <tr>
                    <th className="p-3 text-[1px] font-bold tracking-wide text-left"></th>
                    <th className="hidden sm:table-cell p-3 text-[10px] font-semibold tracking-wide text-left">#</th>
                    <th className="p-3 text-[10px] font-bold tracking-wide text-left">NAME</th>
                    <th className="p-3 text-[10px] font-bold tracking-wide text-left">PRICE</th>
                    <th className="p-3 text-[10px] font-bold tracking-wide text-left">24H</th>
                    <th className="hidden sm:table-cell p-3 text-[10px] font-bold tracking-wide text-left">7D</th>
                    <th className="hidden sm:table-cell p-3 text-[10px] font-bold tracking-wide text-left">MARKET CAP</th>
                    <th className="hidden sm:table-cell p-3 text-[10px] font-bold tracking-wide text-left">VOLUME(24H)</th>
                    <th className="hidden sm:table-cell p-3 text-[10px] font-bold tracking-wide text-left">CIRCULATING SUPPLY</th>
                    <th className="hidden sm:table-cell p-3 text-[10px] font-bold tracking-wide text-left"></th>

                </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 flex-col">
                {
                    cryptoData['crypto_details']?.map((x, idx) => <CryptoTableRow key={idx} data={x} sNo={(currentPageNo*10)+idx+1 -10 } handleRowClick={handleRowClick} />)
                }
            </tbody>
        </table>
    </div>


        <div className="flex gap-2 justify-end items-center py-4 sm:px-24 px-4">
            <p className="font-mono text-sm pr-10 ">Page : {currentPageNo}</p>
            <button onClick={() => fetchCryptoData(currentPageNo - 1)} className="flex justify-center items-center hover:bg-slate-200 shadow-black rounded font-light bg-slate-100 text-gray-800 px-2 py-2 border size-7 disabled:bg-gray-400 disabled:text-gray-50" disabled={!cryptoData.has_prev}><IoIosArrowBack /></button>
                


            {Array.from({ length: Math.min(3, cryptoData['last_page']) }, (curr, i) => currentPageNo - 1 + i)
    .filter(pageNo => pageNo > 1 && pageNo <= cryptoData['last_page']) 
    .map(pageNo => (
      <button key={pageNo} onClick={() => fetchCryptoData(pageNo)}
              className={`px-2 py-2 ${currentPageNo === pageNo ? 'bg-blue-600 text-white flex justify-center items-center shadow-black rounded font-light px-2 py-2 border size-7 disabled:bg-gray-400 disabled:text-gray-50' : 'flex justify-center items-center shadow-black rounded font-light bg-slate-100 text-gray-800 px-2 py-2 border size-7 disabled:bg-gray-400 disabled:text-gray-50'}`}>
        {pageNo}
      </button>
  ))}
  

            <button onClick={() => fetchCryptoData(currentPageNo + 1)} className="flex justify-center items-center hover:bg-slate-200 shadow-black rounded font-light bg-slate-100 text-gray-800 px-2 py-2 border size-7 disabled:bg-gray-400 disabled:text-gray-50" disabled={!cryptoData.has_next}><IoIosArrowForward/></button>
        </div>
    </div>

    {showModal && <Popup onClose={handleModalClose} data={modalData} />}
    </>
};