import React from 'react'

import { IoMdClose } from "react-icons/io";


export default function Popup(props) {
    const data = props.data
  return (

    // whole page
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
{/* popup */}
    <div className='flex flex-col gap-4 mx-3 bg-white p-4 rounded-xl border shadow-sm w-[80%] sm:w-[33%]'>

    {/* imag and name */}
        <div className='flex gap-2 items-center'>
            <img className='size-5' src={data['image']} alt="" />
            <span  className="text-lg font-bold">{data.name}</span>
        </div>
        
        <button className="absolute ml-64 sm:ml-96 px-2 py-2  rounded-full text-gray-600 h-5 w-5" onClick={props.onClose}><IoMdClose/></button>

{/* price 24h 7d */}
        <div className='flex justify-between'>
            {/* price */}
            <div className='flex flex-col'>
                <span className='text-base font-bold'>PRICE</span>
                <span className="text-base font-semibold">${data.price}</span>
            </div>

            {/* 24h */}
            <div className='flex flex-col'>
                <span className="text-base font-bold">24H</span>
                <span className={`sm:table-cell text-xs font-semibold ${data['24h'] > 0 ? 'text-green-700' : 'text-red-700'}`}> {data['24h']}%</span>
            </div>
            
            {/* 7d */}
            <div className='flex flex-col'>
                <span className="text-base font-bold">7D</span>
                <span className={`sm:table-cell text-xs font-semibold ${data['7d'] > 0 ? 'text-green-700' : 'text-red-700'}`}>{data['7d']}%</span>
            </div>
        </div>

    {/* market cap */}
        <div className='flex flex-col'>
            <span className="text-base font-bold">MARKET CAP</span>
            <span className="text-base font-semibold">${data.market_cap}</span>
        </div>

    {/* Volume */}
        <div className='flex flex-col'>
            <span className="text-base font-bold">VOLUME (24H)</span>
            <span className="text-base font-semibold">${data.volume_24h}</span>
        </div>

    {/* cIRCULATING SUPPLY */}
        <div className='flex flex-col'>
            <span className="text-base font-bold">CIRCULATING SUPPLY</span>
            <span className="text-base font-semibold">{data.circulating_supply}</span>
        </div>
        
    </div>
    </div>
  )
}
