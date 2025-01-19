import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../assets/imageDashboard/4nokoLogo.png";
import notification from "../../assets/imageDashboard/notification.png";
import man from "../../assets/imageDashboard/topMan.png";
 
import { useNavigate } from 'react-router-dom';

const DashBoardTop = () => {
    const Navigate=useNavigate();
    return (
        <div className='w-full p-2 flex justify-between items-center' style={{ height: "9%" }}>
            <div className='w-1/2 flex justify-start items-center'>
                <motion.img
                    src={logo}
                    className='w-40'
                    alt=""
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className='w-1/2 flex justify-end gap-x-4 items-center'>
                <motion.img
                    src={notification}
                    className='w-12'
                    alt=""
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                />
                <motion.img
                onClick={()=>{
                    Navigate("/profile")
                }}
                    src={man}
                    className='w-12'
                    alt=""
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                />
            </div>
        </div>
    );
};

export default DashBoardTop;