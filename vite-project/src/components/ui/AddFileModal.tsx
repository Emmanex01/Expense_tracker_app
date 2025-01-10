import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { IoIosDocument } from "react-icons/io";
import { GoDash } from "react-icons/go";

interface PropsData {
    updateChangeModal: () => void;
    updateSelectedFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AddFileModal: React.FC<PropsData> = ({ updateChangeModal, updateSelectedFile }) => {

    const handleOnClick = () => {
        updateChangeModal();
    };

    const cameraRef = useRef<HTMLInputElement | null>(null);
    const galleryRef = useRef<HTMLInputElement | null>(null);
    const documentRef = useRef<HTMLInputElement | null>(null);

    return (
        <div
            className="flex items-end w-full absolute top-0 bottom-0 z-10 bg-black bg-opacity-50"
            onClick={handleOnClick}
        >
            <div
                className="w-full bg-white h-48 rounded-t-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside it
            >
                <div className="flex justify-center">
                    <GoDash className="w-16 h-10" />
                </div>

                <div className="grid grid-cols-3 items-center gap-2 p-2 mt-5">
                    <div
                        className="py-3 flex flex-col items-center justify-center rounded-md bg-purple-300 gap-2"
                        onClick={() => {
                            cameraRef.current?.click();
                        }}
                    >
                        <FaCamera className="text-blue-600" />
                        <p className="font-semibold">Camera</p>
                    </div>
                    <div
                        className="py-3 flex flex-col items-center justify-center rounded-md bg-purple-300 gap-2"
                        onClick={() => {
                            galleryRef.current?.click();
                        }}
                    >
                        <GrGallery className="text-blue-600" />
                        <p className="font-semibold">Gallery</p>
                    </div>
                    <div
                        className="py-3 flex flex-col items-center justify-center rounded-md bg-purple-300 gap-2"
                        onClick={() => {
                            documentRef.current?.click();
                        }}
                    >
                        <IoIosDocument className="text-blue-600" />
                        <p className="font-semibold">Document</p>
                    </div>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        ref={cameraRef}
                        accept="image/*"
                        onChange={updateSelectedFile}
                    />
                    <input
                        type="file"
                        style={{ display: "none" }}
                        ref={galleryRef}
                        accept="image/*, video/*"
                        onChange={updateSelectedFile}
                    />
                    <input
                        type="file"
                        style={{ display: "none" }}
                        ref={documentRef}
                        accept=".pdf,.doc,.docx"
                        onChange={updateSelectedFile}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddFileModal;
