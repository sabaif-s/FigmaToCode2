import React from 'react';
import { motion } from 'framer-motion';
import bellIcon from "../../assets/imageDashboard/notification.png";
import userIcon from "../../assets/profile.png";

const AdminHeader = () => {
  return (
    <motion.div
      className="flex w-full justify-between items-center bg-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.h1
          className="text-[28px] font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Admin Page
        </motion.h1>
        <motion.p
          className="text-[#888888] text-[16px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet
        </motion.p>
      </div>
      <div className="flex gap-2">
        <motion.button
          className="relative w-10 h-10 bg-gray-100 rounded-lg flex justify-center items-center"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <img src={bellIcon} alt="Notifications" className="w-6 h-6" />
        </motion.button>
        <motion.button
          className="w-10 h-10 bg-gray-100 rounded-lg flex justify-center items-center"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <img src={userIcon} alt="User" className="w-6 h-6 rounded-full" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AdminHeader;