import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { BsFillPieChartFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="grid grid-cols-5 text-sm sticky bottom-0 bg-white py-2 md:bg-slate-600 md:sticky md:top-0 md:self-start md:h-lvh md:flex md:flex-col md:w-48 md:items-start md:gap-7" >
            <div className="flex flex-col justify-center items-center md:flex-row ">
                <FaHome className="h-8 w-12 text-green-500"/>
                <h2>Home</h2>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row ">
                <FaArrowRightArrowLeft className="h-8 w-12"/>
                <h2>Transaction</h2>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row ">
                <FaCirclePlus className="h-8 w-12"/>
                <h2>Home</h2>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row">
                <BsFillPieChartFill className="h-8 w-12"/>
                <h2>Budget</h2>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row">
                <FaRegUser className="h-8 w-12"/>
                <h2>Profile</h2>
            </div>
        </div>
    )
}

export default NavBar