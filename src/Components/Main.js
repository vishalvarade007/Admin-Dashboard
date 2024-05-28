import React from 'react';
import { FaCalendarMinus, FaEllipsisV } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Piechart } from './Piechart';
import { Progress } from 'antd';
import err from "../errorpng.png";

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function Main() {
  return (
    <div className='pt-[25px] px-[25px] pb-[10px] bg-[#f8f9fc]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Dashboard</h1>
        <button className='bg-[#2e59d9] h-[32px] rounded-[3px] text-[white] flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
      </div>
      <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-[8px] bg-[white] border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
          <div>
            <h2 className='text-[#b589df] text-[11px] leading-[17px] font-bold'>Earnings (Monthly)</h2>
            <h1 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold mt-[5px]'>$40,000</h1>
          </div>
          <FaCalendarMinus fontSize={28} />
        </div>
        <div className='h-[100px] rounded-[8px] bg-[white] border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
          <div>
            <h2 className='text-[#1CC88A] text-[11px] leading-[17px] font-bold'>EARNINGS (ANNUAL)</h2>
            <h1 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold mt-[5px]'>$240,000</h1>
          </div>
          <FaCalendarMinus fontSize={28} />
        </div>
        <div className='h-[100px] rounded-[8px] bg-[white] border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
          <div>
            <h2 className='text-[#b589df] text-[11px] leading-[17px] font-bold'>TASKS</h2>
            <h1 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold mt-[5px]'>$40,000</h1>
          </div>
          <FaCalendarMinus fontSize={28} />
        </div>
        <div className='h-[100px] rounded-[8px] bg-[white] border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
          <div>
            <h2 className='text-[#1CC88A] text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
            <h1 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold mt-[5px]'>$40,000</h1>
          </div>
          <FaCalendarMinus fontSize={28} />
        </div>
      </div>
      <div className='flex mt-[20px] w-full gap-[30px]'>
        <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px] '>
          <div className='bg-[#f8f9fc] py-[15px] px-[20px] border-b-[1px] border-[#ededed] flex items-center justify-between mb-[5px]'>
            <h2>EARNINGS OVERVIEW</h2>
            <FaEllipsisV color='gray' className='cursor-pointer' />
          </div>
          <LineChart
            width={760}
            height={280}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#ededed]'>
            <h2>Revenue Resources</h2>
            <FaEllipsisV color='gray' className='cursor-pointer' />
          </div>
          <div className=''>
            <Piechart />
          </div>
        </div>
      </div>
      <div className='flex mt-[22px] mb-[15px] w-full gap-[40px]'>
        <div className='basis-[55%] border bg-white cursor-pointer shadow-md rounded-[4px]'>
          <div className='bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#ededed]'>
            <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Project Overview</h2>
            <FaEllipsisV color='gray' className='cursor-pointer' />
          </div>
          <div className='px-[25px] space-y-[15px]'>
            <div>
              <h2>Server Migration</h2>
              <Progress percent={30} status='active' strokeColor="#e74a3b"/>
            </div>
            <div>
              <h2>Sales Tracking</h2>
              <Progress percent={50} status='exception' strokeColor="#f6c23e"/>
            </div>
            <div>
              <h2>Customer Database</h2>
              <Progress percent={70} status='active'  strokeColor="#4e73df"/>
            </div>
            <div>
              <h2>Payout Details</h2>
              <Progress percent={100} status='active' strokeColor="#36b9cc"/>
            </div>
          </div>
        </div>
        <div className='basis-[45%] border bg-white cursor-pointer shadow-md rounded-[4px]'>
          <div className='bg-[#f8f9fc] flex items-center justify-between px-[20px] py-[15px] border-b-[1px] border-[#ededed] cursor-pointer'>
             <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Resources</h2>
             <FaEllipsisV color='gray' className='cursor-pointer'/>
          </div>
          <div className='pl-[35px] flex items-center justify-center mt-[50px]'>
             <div>
                <img src={err} alt="img" height={100} width={100}/>
                <p className='text-semibold text-gray-500 mt-[5px]'>No Data Available</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
