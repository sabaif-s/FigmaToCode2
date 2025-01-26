import React from 'react';
import arrowLeft from "../../assets/coin/Logout.png";
import topMan from "../../assets/coin/topMan.png";
import coin from "../../assets/coin/coin.png";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CoinCheck = () => {
  const Navigate = useNavigate();
  return (
    <div className='w-full h-screen bg-red-300  flex justify-center md:items-center'>
      <div className=' md:rounded-[24px] bg-white pt-4 flex flex-col gap-y-2 w-full h-full md:w-[390px] md:h-[844px] justify-start md:rounded-tl-[32px] items-center px-4'>
        <div className='w-full flex relative text-[#323434] font-semibold text-2xl flex-row justify-center items-center'>
          <span className='text-[#323434]'>Coins</span>
          <img
            onClick={() => {
              Navigate(-1);
            }}
            src={arrowLeft} className='w-10 h-10 object-cover cursor-pointer left-0 absolute' alt="" />
        </div>
        <div className='w-full flex flex-col gap-y-2 justify-start items-center'>
          <motion.img src={topMan} className='w-24 h-24 object-cover' alt=""
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <span className='text-black opacity-50 text-[16px]'>@user_name</span>
        </div>
        <div className='w-full flex justify-center gap-x-1 items-center'>
          <motion.img src={coin} className='w-16 h-16 object-cover' alt=""
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className='flex flex-col justify-start items-center h-full'>
            <span className='font-bold text-black'>12k</span>
            <span className='text-[#9098A3]'>Coins</span>
          </div>
        </div>
        <div className='w-full flex flex-row gap-x-6 justify-center items-center'>
          <div className='flex flex-col gap-y-4 items-center justify-start'>
            <span>Subscribers</span>
            <div className='relative w-32 h-32 flex justify-center items-center'>
              <div style={{ border: "12px solid #F2F2F2" }} className='w-32 h-32 absolute rounded-full flex justify-center items-center bg-white'></div>
              <motion.div
                initial={{ clipPath: `inset(0 0 0 100%)` }}
                animate={{ clipPath: `inset(0 0 0 ${100 - 50}%)` }}
                transition={{ duration: 1 }}
                style={{
                  border: "12px solid #0C6374",
                  width: "100%",
                  height: "100%",
                }}
                className='rounded-full bg-white absolute top-0'
              ></motion.div>
              <motion.div
                initial={{ clipPath: `inset(0 0 0 100%)` }}
                animate={{ clipPath: `inset(${100 - 40}% ${100 - 60}% 0 0)` }}
                transition={{ duration: 1 }}
                style={{
                  border: "12px solid #0C6374",
                  width: "100%",
                  height: "100%",
                }}
                className='rounded-full bg-white absolute z-0 top-0'
              ></motion.div>
              <div className='flex flex-col relative z-50'>
                <span className='text-[#969393] z-50 relative'>Coins</span>
                <span className='text-[#242425] font-semibold text-lg'>3500</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-4 items-center justify-start'>
            <span>Referrals</span>
            <div className='relative w-32 h-32 flex justify-center items-center'>
              <div style={{ border: "12px solid #F2F2F2" }} className='w-32 h-32 absolute rounded-full flex justify-center items-center bg-white'></div>
              <motion.div
                initial={{ clipPath: `inset(0 0 0 100%)` }}
                animate={{ clipPath: `inset(0 0 0 ${100 - 50}%)` }}
                transition={{ duration: 1 }}
                style={{
                  border: "12px solid #D83E3E",
                  width: "100%",
                  height: "100%",
                }}
                className='rounded-full bg-white absolute top-0'
              ></motion.div>
              <motion.div
                initial={{ clipPath: `inset(0 0 0 100%)` }}
                animate={{ clipPath: `inset(${100 - 40}% ${100 - 60}% 0 0)` }}
                transition={{ duration: 1 }}
                style={{
                  border: "12px solid #D83E3E",
                  width: "100%",
                  height: "100%",
                }}
                className='rounded-full bg-white absolute z-0 top-0'
              ></motion.div>
              <div className='flex flex-col relative z-50'>
                <span className='text-[#969393] z-50 relative'>Coins</span>
                <span className='text-[#242425] font-semibold text-lg'>2000</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-y-6 cursor-pointer mt-8 justify-start pl-2'>
          <motion.div
            className='flex flex-row justify-start items-center gap-x-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className='w-16 h-16'>
              <div className='w-full h-full flex flex-row gap-x-1 justify-center items-end rounded-full bg-[#0C6374] bg-opacity-10 p-4'>
                <div className='w-4 h-6 bg-[#0C6374]'></div>
                <div className='w-4 h-8 bg-[#0C6374]'></div>
                <div className='w-4 h-4 bg-[#0C6374]'></div>
              </div>
            </div>
            <div className='flex flex-col h-full justify-start items-start'>
              <span className='text-black font-semibold text-lg'>#2</span>
              <span className='text-[#9098A3] font-semibold '>Leaderboard</span>
            </div>
          </motion.div>
          <motion.div
            className='flex flex-row justify-start items-center gap-x-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className='w-16 h-16'>
              <div className='w-full h-full flex flex-row gap-x-1 justify-center items-end rounded-full bg-[#0C6374] bg-opacity-10 p-4'>
                <div className='w-4 h-6 bg-[#0C6374]'></div>
                <div className='w-4 h-8 bg-[#0C6374]'></div>
                <div className='w-4 h-4 bg-[#0C6374]'></div>
              </div>
            </div>
            <div className='flex flex-col h-full justify-start items-start'>
              <span className='text-black font-semibold text-lg'>#300</span>
              <span className='text-[#9098A3] font-semibold '>Subscribed Channel</span>
            </div>
          </motion.div>
          <motion.div
            className='flex flex-row justify-start items-center gap-x-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className='w-16 h-16'>
              <div className='w-full h-full flex flex-row gap-x-1 justify-center items-end rounded-full bg-[#0C6374] bg-opacity-10 p-4'>
                <div className='w-4 h-6 bg-[#0C6374]'></div>
                <div className='w-4 h-8 bg-[#0C6374]'></div>
                <div className='w-4 h-4 bg-[#0C6374]'></div>
              </div>
            </div>
            <div className='flex flex-col h-full justify-start items-start'>
              <span className='text-black font-semibold text-lg'>#15</span>
              <span className='text-[#9098A3] font-semibold '>Referrals</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoinCheck;