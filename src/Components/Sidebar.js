import React from 'react';
import {FaTachometerAlt,FaRegSun,FaChevronRight,FaWrench,FaStickyNote,FaRegChartBar,FaRegCalendarAlt,FaChevronLeft,FaBolt} from "react-icons/fa";

export function Sidebar() {
  return (
    <div className='bg-[#4E73DF] h-[150vh] px-[25px]'>
       <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
          <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer underline'>Admin</h1>
       </div>
       <div className='flex items-center gap-[15px] py-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
         <FaTachometerAlt color='white'/>
         <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
       </div>
       <div className='pt-[10px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <p className='text-[14px] leading-[20px] font-bold text-white'>Interfaces</p>
        <div className='flex items-center justify-between gap-[10px] py-[10px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaRegSun color='white'/>
            <p className='text-[14px] text-white leading-[20px]'>Components</p>
          </div>
           <FaChevronRight color='white'/>   
        </div>
        <div className='flex items-center justify-between gap-[10px] py-[10px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaWrench color='white'/>
            <p className='text-[14px] text-white leading-[20px]'>Utilities</p>
          </div>
           <FaChevronRight color='white'/>   
        </div>
       </div>
       <div className='pt-[10px] border-b-[1px] border-[#EDEDED]/[0.3] pb-[7px]'>
        <p className='text-[14px] leading-[20px] font-bold text-white'>ADDONS</p>
        <div className='flex items-center justify-between gap-[10px] py-[10px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaStickyNote color='white'/>
            <p className='text-[14px] text-white leading-[20px]'>Pages</p>
          </div>
           <FaChevronRight color='white'/>   
        </div>
        <div className='flex items-center justify-between gap-[10px] py-[10px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaRegChartBar color='white'/>
            <p className='text-[14px] text-white leading-[20px]'>Charts</p>
          </div>
           <FaChevronRight color='white'/>   
        </div>
        <div className='flex items-center gap-[10px] py-[10px]'>
            <FaRegCalendarAlt color='white'/>
            <p className='text-[14px] text-white leading-[20px]'>Tables</p>
        </div>
       </div>
       
       <div>
           <div className='flex items-center justify-center pt-[10px]'>
              <div className='h-[30px] w-[30px] rounded-full bg-[#3C5EC1] flex items-center justify-center cursor-pointer'>
                  <FaChevronLeft color='white'/>
              </div>
           </div>
       </div>
       <div className='bg-[#395CBF] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded'>
         <FaBolt color='white'/>
         <p>This is just for sample purpose</p>
         <button className='bg-green-500 rounded px-[10px] text-white'>Upgrade</button>
       </div>
    </div>
  )
}
