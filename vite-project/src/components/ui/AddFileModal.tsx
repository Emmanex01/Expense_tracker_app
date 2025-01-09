import React from "react";
import { FaCamera } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { IoIosDocument } from "react-icons/io";
import { GoDash } from "react-icons/go";

interface propsData {
    setModal: boolean
}

const AddFileModal = ({setModal}: propsData) => {
    
    return (
        <div className="flex items-end w-full absolute top-0 bottom-0 z-10 bg-black bg-opacity-50" >
            
            <div className="w-full bg-red-500 h-48 rounded-t-2xl">
                <div className="flex justify-center">
                    <GoDash className="w-16 h-10"/>
                </div>
                
                <div className="grid grid-cols-3 items-center gap-2 p-2 mt-5">
                        <div className="py-3 flex flex-col items-center justify-center rounded-md bg-purple-300 gap-2">
                            <FaCamera/>
                            <p className="font-semibold">Camera</p>
                        </div>
                        <div className="py-3 flex flex-col items-center justify-center rounded-md bg-purple-300 gap-2">
                            <GrGallery/>
                            <p className="font-semibold">Gallery</p>
                        </div>
                        <div className="py-3 flex flex-col items-center justify-center rounded-md bg-purple-300 gap-2">
                            <IoIosDocument/>
                            <p className="font-semibold">Document</p>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default AddFileModal