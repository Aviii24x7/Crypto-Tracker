import logo from "../assets/logo.png";
import promo1 from "../assets/promo1.png";
import promo2 from "../assets/promo2.png";
import promo3 from "../assets/promo3.png";


import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { getCryptoData } from "../providers/data.provider";



export default function NavxPromo() {
    
//     const [rowsValue, setRowsValue] = useState(100);

//     const handleInputChange = (event) => {
//       setRowsValue(event.target.value);
//     };

    return (
        <>
{/* everything inside Nav and promo */}
    <div className="p-4 mx-auto">

{/* Navbar */}
            <div className="sm:flex justify-between shadow-sm p-2 " >
                {/* logo and title */}
                <div className="flex items-center gap-3 px-10">
                    <FaBars className="sm:hidden align-left" />
                    <img className="size-5" src={logo} alt="logo" />
                    <h1 className="font-bold font-sans text-xl">Crypto Tracker</h1>
                </div>

                {/* search and burger */}
                <div className="hidden sm:flex gap-3 px-10 ">
                    <FaSearch />
                    <FaBars />
                </div>
            </div>

{/* Promo part */}
            <div className="md:flex justify-between items-center gap-5 p-4 ">

                <button className="hidden sm:inline-block shadow rounded-full font-light text-lg bg-gray-400 text-[#FFFFFF]" ><IoIosArrowBack /></button>

                <div className="md:w-[33%] w-[90%] flex border m-auto mb-5 shadow-lg rounded-xl h-24 p-[0.40rem]">
                    <img className="h-18 pr-2" src={promo1} alt="promo1" />
                    <div className="flex-col pt-3">
                    <h6  className="font-mono text-sm text-slate-500">Take a Quiz!</h6>
                    <h4 className="text-sm font-semibold">Learn and earn $CKB</h4>
                    </div>
                </div>

                <div className="hidden sm: inlinemd:w-[33%] w-[90%] m-auto mb-5 sm:flex border shadow-lg rounded-xl h-24 p-[0.40rem]">
                    <img className="h-18 pr-2" src={promo2} alt="promo2" />
                    <div className="flex-col pt-3">
                    <h6 className="font-mono text-sm text-slate-500"> Portfolio</h6>
                    <h4 className="text-sm font-semibold">Track your trades in one place, not all over the place</h4>
                    </div>
                </div>

                <div className="hidden md:w-[33%] w-[90%] m-auto mb-5 sm:flex border shadow-lg rounded-xl h-24 p-[0.40rem]">
                    <img className="h-18 pr-2" src={promo3} alt="promo3" />
                    <div className="flex-col pt-3">
                    <h6  className="font-mono text-sm text-slate-500">Portfolio</h6>
                    <h4 className="text-sm font-semibold">Track your trades in one place, not all over the place</h4>
                    </div>
                </div>
                <button className="hidden sm:inline-block shadow rounded-full font-light text-lg bg-gray-400 text-[#FFFFFF]" ><IoIosArrowForward /></button>
            </div>


            <h1 className="text-lg px-8 font-bold sm:px-14 sm:text-xl">Top 100 Cryptocurrencies by Market Cap</h1>
{/* favs buttons and show rows */}
            <div className="hidden md:flex justify-between gap-2 px-14 pt-6">

            <div className="flex gap-2">
                <a className="bg-slate-300 p-1 text-xs font-medium rounded-lg flex justify-center items-center gap-1" href=""><FaRegStar /> Favourites</a>
                <a className="bg-slate-300 p-1 text-xs text-blue-900 font-medium rounded-lg" href="">CryptoCurrencies</a>
                <a className="bg-slate-300 p-1 text-xs text-gray-600 font-semibold rounded-lg" href="">Defi</a>
                <a className="bg-slate-300 p-1 text-xs text-gray-600 font-semibold rounded-lg" href="">NFTs and Collections</a>
            </div>

       
            </div>
</div>
        </>
    )
};