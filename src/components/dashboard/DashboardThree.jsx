import React,{useEffect,useState} from 'react';
import dinkTv from "../../assets/imageDashboard/dinkIcon.png";
import iconCoin from "../../assets/imageDashboard/coinIcon.png";

const  DashboardThree = () => {
    const [clickedAnchor,setClickedAnchor]=useState(1);
    return (
        <div className='w-full bg-gray-50 mt-4 flex flex-col justify-start items-center' >
            <div className='flex flex-row mb-4 justify-between font-semibold w-full px-4 space-x-4'>
            <div
            onClick={()=>{
                setClickedAnchor(1);
            }}
            className={` ${clickedAnchor == 1 ? "border-b-2 border-[#0C6374]":""} text-lg hover:text-[#0C6374] cursor-pointer`}>Channels</div>
            <div 
            onClick={()=>{
                setClickedAnchor(2);
            }}
            className={` ${clickedAnchor == 2 ? "border-b-2 border-[#0C6374]":""} text-lg hover:text-[#0C6374] cursor-pointer`}>Leader Board</div>
            <div
            onClick={()=>{
                setClickedAnchor(3);
            }}
            className={` ${clickedAnchor == 3 ? "border-b-2 border-[#0C6374]":""} text-lg hover:text-[#0C6374] cursor-pointer`}>Referrals</div>
            </div>
           <div className='w-full px-4 bg-gray-50 flex gap-y-4 flex-wrap justify-between flex-row' >
               <div className=' bg-white pb-4 flex flex-col  justify-start items-center shadow-lg ' style={{width:"44%"}} >
                          <img src={dinkTv} className='h-24' alt="" />
                          <span className='text-black font-semibold' >DINK TV</span>
                          <span className='w-full px-4 mt-2 text-sm text-center' >
                            Lorem ipsum dolor sit amet consecutor
                          </span>
                          <div className='w-full flex flex-row mt-4 justify-between items-center' >
                        <div className='flex items-center justify-center' >
                              <img src={iconCoin} className='w-4' alt="" /> 
                              <span className=' text-sm' >4.8 coins</span>
                        </div>
                        <button className='text-sm rounded-full text-center text-white bg-red-500 px-4 py-1 ' >
                            Subscribe
                        </button>
                          </div>

               </div>
               <div className='  bg-red-400' style={{width:"44%"}} >

               </div>
               <div className='  bg-blue-300' style={{width:"44%"}} >

               </div>
           </div>
        </div>
    );
};

export default  DashboardThree;