import React from 'react';
import backArrow from '../../assets/coin/Logout.png';
const  WithdrawPage = () => {
    return (
        <div className='w-full h-screen bg-red-300  flex justify-center md:items-center'>
      <div className=' md:rounded-[24px] bg-white pt-10 flex flex-col gap-y-2 w-full h-full md:w-[390px] md:h-[844px] justify-start md:rounded-tl-[32px] items-center px-4'>
        <div className='flex justify-center items-center relative w-full' >
            <span className='text-[#323434] text-[22px] font-semibold leading-sm' >
                Withdrawal
            </span>
            <img src={backArrow} className='w-12  absolute cursor-pointer left-0 h-12 object-cover' alt="" />

        </div>
        <div className='w-full flex flex-col gap-y-2 justify-start items-start' >
                <span>
                    Phone Number
                </span>
                <div className='w-full flex justify-start px-4 gap-x-2 items-center' >

                </div>
        </div>
        </div>
        </div>
    );
};

export default  WithdrawPage;