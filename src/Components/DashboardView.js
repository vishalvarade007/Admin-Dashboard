import React, { useState } from 'react';
import {FaSearch,FaRegBell,FaEnvelope} from "react-icons/fa";
import menPic from "../menpic.png";

export function DashboardView() {
  const [open , setOpen] = useState(false);

  const showDropDown = ()=>{
     setOpen(!open);
  }
  return (
    <div className='flex items-center justify-between h-[65px] shadow-lg px-[25px]'>
      <div className='flex items-center rounded-[5px]'>
        <input type='text' placeholder='Search for...' className='bg-[#F8F9FC] h-[40px] w-[350px] outline-none rounded-[5px] pl-[13px]'/>
        <div className='bg-[#4E73DF] px-[14px] h-[40px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
          <FaSearch color='white'/>
        </div>
      </div>
      <div className='flex items-center gap-[15px]'> 
        <div className='flex items-center gap-[25px] border-r-[1px]'>
            <FaRegBell className='cursor-pointer'/>
            <FaEnvelope className='cursor-pointer'/>
        </div>
        <div className='flex items-center gap-[15px] cursor-pointer'>
            <p>John Doe</p>
            <div className='h-[40px] w-[40px] rounded-full' onClick={showDropDown}>
                <img src={menPic} alt="img"/>
            </div>
            {
              open ? (<div onClick={showDropDown} className='bg-white border h-[100px] w-[150px] absolute top-[70px] z-20 right-0 pt-[15px] pl-[15px] mr-[20px]'>
                 <p className='cursor-pointer hover:text-[blue] text-semibold'>Profile</p>
                 <p className='cursor-pointer hover:text-[blue] text-semibold'>Settings</p>
                 <p className='cursor-pointer hover:text-[blue] text-semibold'>Logout</p>
              </div>):("")
            }
        </div>
      </div>
    </div>
  )
}
