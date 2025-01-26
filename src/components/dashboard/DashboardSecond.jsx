import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import searchIcon from "../../assets/imageDashboard/searchIcon.png";
import filterIcon from "../../assets/imageDashboard/filter2.png";
const  DashBoardSecond = ({currentShow}) => {
    
    return (
        <> 
        {
            currentShow == 1 && (
                <motion.div
                style={{ backgroundColor: "#ffffff" }}
                className='w-full pl-4 flex flex-col gap-y-2 justify-start items-start'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    className='text-black text-4xl font-serif'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Lorem Ipsum
                </motion.span>
                <motion.span
                    className='text-gray-400 text-lg'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Lorem Ipsum dolor sit amet
                </motion.span>
                <motion.button
                    className='text-white px-4 py-1 bg-red-500 mt-2 cursor-pointer rounded-full'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Referral
                </motion.button>
            </motion.div>
            )
        } 
        {
            currentShow == 2 && (
                <motion.div
                style={{ backgroundColor: "#ffffff" }}
                className='w-full pl-4 flex flex-col gap-y-2 justify-start items-start'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    className='text-black text-4xl font-serif'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Lorem Ipsum
                </motion.span>
                <motion.span
                    className='text-gray-400 text-lg'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Lorem Ipsum dolor sit amet
                </motion.span>
                <motion.div
            className='w-full flex justify-start gap-x-2 relative items-start'
            style={{ height: "56px" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className='w-4/5 h-full relative pl-1 bg-gray-200 rounded-lg flex items-center justify-start gap-x-2'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <img src={searchIcon} style={{ width: "24px", height: "24px" }} className='' alt="" />
                <input
                    type="text"
                    placeholder="Search"
                    className='text-gray-700 bg-gray-200 border-none outline-none'
                    style={{ width: "100%" }}
                />
            </motion.div>
            <motion.div
                className='flex h-full justify-center items-center'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <img src={filterIcon} style={{}} className='h-full' alt="" />
            </motion.div>
        </motion.div>
                
            </motion.div>
            )
        }
               
        </>
    );
};

export default  DashBoardSecond;