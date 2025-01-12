import React from 'react';
import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Button from '../components/ui/Button';
import NavBar from '../components/ui/NavBar';



export default function HomeScreen() {
  return (
    <div className='md:grid md:grid-cols-[auto_1fr]'>
      <NavBar/>
      
      <div >
        <div className='md:grid md:grid-cols-2 bg-slate-500 gap-4'>
          <div className='w-full md:border-2 md:border-rose-600 bg-gray-50'>
            <header className='flex justify-between items-center'>
              <img className='w-14 h-14 cover rounded-full' src="/user1.jpg" alt="Image" />
              <div className='flex items-center gap-2 rounded-full bg-red-200 py-2 px-3'>
                  <FaChevronDown className=''/>
                  <h1>October</h1>
              </div>
              <div>
                  <FaBell className='w-14 h-12'/>
              </div>
            </header>

            <div className='text-center'>
              <h2>Account Balance</h2>
              <h1 className=' my-2 text-5xl font-bold' >$9400</h1>
            </div>
            
            <div className='flex justify-around my-6'>
              <div className='flex bg-green-500 gap-2 p-2 rounded-2xl items-center'>
                  <img src="/camera.png" className='w-12 h-12' alt="" />
                  <div>
                      <h2>Income</h2>
                      <h1 className='text-2xl'>$5000</h1>
                  </div>
              </div>

              <div className='flex bg-red-500 gap-2 p-2 rounded-2xl items-center'>
                  <img src="/camera.png" className='w-12 h-12' alt="" />
                  <div>
                      <h2>Expense</h2>
                      <h1 className='text-2xl'>$5000</h1>
                  </div>
              </div>
            </div>

          </div>
          
          <div className=' md:border-2 md:border-rose-600'>
            <h1 className='font-bold'>Spend Frequency</h1>
            <img src="/Graph.png" alt="" className='w-full' />
          </div>
        </div>
        

        <div>
          <div className='grid grid-cols-4 my-4'>
            <div className='py-2 px-4 rounded-full bg-yellow-200'>Today</div>
            <div className='py-2 px-4 rounded-full '>Week</div>
            <div className='py-2 px-4 rounded-full '>Month</div>
            <div className='py-2 px-4 rounded-full '>Year</div>
          </div>

          <div className='flex justify-between items-center'>
            <h1 className='w-2/3 font-bold'>Recent Transaction</h1>
            <div className='p-2 bg-yellow-200 rounded-full'>See All</div>
          </div>

          <div className='flex gap-4 my-2'>
            <img src="/shopping.png" alt="" />
            <div className=' w-full gap-2 py-1'>
                <div className='flex justify-between min-w-full'>
                    <h1 className=''>Shopping</h1>
                    <h1>-$120</h1>
                </div>
                <div className='flex justify-between py-1'>
                    <h4>Buy some grocery</h4>
                    <h4>10:00 AM</h4>
                </div>
            </div>
          </div>

          <div className='flex gap-4 mb-2'>
            <img src="/food.png" alt="" />
            <div className=' w-full gap-2 py-1'>
                <div className='flex justify-between min-w-full'>
                    <h1 className=''>Shopping</h1>
                    <h1>-$120</h1>
                </div>
                <div className='flex justify-between py-1'>
                    <h4>Buy some grocery</h4>
                    <h4>10:00 AM</h4>
                </div>
            </div>
          </div>

          <div className='flex gap-4 mb-2'>
            <img src="/subscription.png" alt="" />
            <div className=' w-full gap-2 py-1'>
                <div className='flex justify-between min-w-full'>
                    <h1 className=''>Shopping</h1>
                    <h1>-$120</h1>
                </div>
                <div className='flex justify-between py-1'>
                    <h4>Buy some grocery</h4>
                    <h4>10:00 AM</h4>
                </div>
            </div>
          </div>
        </div>

        
      </div>
      
      
      
    </div>
  )
}
