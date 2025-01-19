import React,{useEffect}from 'react';
import { motion } from 'framer-motion';
import plus from "../../assets/imageDashboard/plusIcon.png";
import userIcon from "../../assets/imageDashboard/userIcon.png";
import polyIcon from "../../assets/imageDashboard/polyIcon.png";

const DashBoardFooter = () => {
    useEffect(()=>{
        console.log("footer mounted")
    },[])
    return (
        <motion.div
            className='fixed  bg-gray-50 flex pb-4 justify-around items-center rounded-lg bottom-0 left-0 z-50 w-full'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                src={polyIcon}
                className='w-20'
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.img
                src={plus}
                className='w-20'
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.img
                src={userIcon}
                className='w-20'
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            />
        </motion.div>
    );
};

export default DashBoardFooter;