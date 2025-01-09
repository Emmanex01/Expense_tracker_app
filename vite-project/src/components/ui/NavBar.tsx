import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { BsFillPieChartFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="grid grid-cols-5 text-sm sticky bottom-0 bg-white py-2">
            <div className="flex flex-col justify-center items-center">
                <FaHome className="h-8 w-12 text-green-500"/>
                <h2>Home</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaArrowRightArrowLeft className="h-8 w-12"/>
                <h2>Transaction</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaCirclePlus className="h-8 w-12"/>
                <h2>Home</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
                <BsFillPieChartFill className="h-8 w-12"/>
                <h2>Budget</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaRegUser className="h-8 w-12"/>
                <h2>Profile</h2>
            </div>
        </div>
    )
}

export default NavBar