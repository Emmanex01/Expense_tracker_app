import React, { FormEvent, useState } from "react";
import { IoMdAttach } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import AddFileModal from "../components/ui/AddFileModal"


const ExpenseScreen = () => {
    const [formData, setFormData] = useState({
        selectedCategory: "category",
        inputData: "",
        selectedWallet:"wallet"
    });
    const [selectedFile, setSelectedFile] = useState<string>()
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        console.log(formData)
    };

    console.log(selectedFile)

    const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.files) {
            const data = e.target.files[0];
            setSelectedFile(URL.createObjectURL(data));
            handleModalChange()
        }
    }

    const handleModalChange = () => {
        setOpenModal(!openModal)
    }

    const handlesImageRemoval = () => {
        setSelectedFile(undefined);
    }

    return (
        <div className="bg-green-300 relative">
            <form 
                action=""
                onSubmit={handleSubmit}
            >
                <div className="px-3">
                    <div className="text-center mb-20 mt-4 p-2 font-medium text-xl relative">
                        <FaArrowLeftLong className="absolute top-4"/>
                        Income
                    </div>
                    <h1 className="font-medium">How Much?</h1>
                    <h2 className="text-5xl font-semibold my-3">$0</h2>
                </div>
                
                <div className="bg-white rounded-t-3xl p-2">
                    <select 
                        name="selectedCategory" 
                        id="" 
                        value={formData.selectedCategory}
                        className="w-full p-2 border-gray-200 border-2 rounded-2xl mb-2 outline-none"
                        onChange={e => {
                            const {name, value} = e.target
                            setFormData((prevState) => ({...prevState, [name]: value}))
                        }}
                    >
                        <option value="category">Category</option>
                        <option value="subscription">Subscription</option>
                        <option value="food">Food</option>
                    </select>
                    <input 
                        name="inputData"
                        value={formData.inputData}
                        type="text" 
                        placeholder="Description" 
                        className="w-full p-2 border-gray-200 border-2 rounded-2xl mb-2 outline-none"
                        onChange={e => {
                            const {name, value} = e.target
                            setFormData((prevState) => ({...prevState, [name]: value}))
                        }}
                    />
                    <select 
                        name="selectedWallet" 
                        value={formData.selectedWallet}
                        id=""  
                        className="w-full p-2 border-gray-200 border-2 rounded-2xl mb-2 outline-none"
                        onChange={e => {
                            const {name, value} = e.target
                            setFormData((prevState) => ({...prevState, [name]: value}))
                        }}
                    >
                        <option value="wallet">Wallet</option>
                        <option value="palmpay">Palmpay</option>
                        <option value="paypal">Paypal</option>
                    </select>
                    <div 
                        className="flex items-center justify-center py-2 gap-2 border-gray-200 border-2 rounded-2xl mb-2"
                        onClick={handleModalChange}
                    >
                        <IoMdAttach/>
                        <p>Add Attachment</p>
                    </div>
                    <div className="w-24 relative">
                        {
                            selectedFile && 
                            <p 
                                className="absolute right-0 top-0 bg-slate-400 w-4 text-center rounded-2xl"
                                onClick={handlesImageRemoval}
                            >
                                X
                            </p>
                        }
                        
                        <img 
                            src={selectedFile} 
                            alt="" 
                            className="w-full"
                        />
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">Repeat</p>
                            <p className="text-sm">Repeat transaction</p>
                        </div>
                        <div>
                            <div className="w-12 bg-slate-400 rounded-full p-1">
                                <div className="w-5 h-5 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <button 
                        className="w-full bg-purple-600 p-2 rounded-full mt-4 font-medium"
                    >
                        Continue
                    </button>
                </div>
            </form>
            {
                openModal ?<AddFileModal updateChangeModal={handleModalChange} updateSelectedFile={handleSelectFile}/> : <div></div>
            }
            
        </div>
    )
}

export default ExpenseScreen