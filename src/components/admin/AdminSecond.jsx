import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StatsCard = () => {
  const stats = [
    { label: 'YouTubers', value: '1000' },
    { label: 'Channels', value: '1000' },
    { label: 'Subscribers', value: '15k' },
    { label: 'Users', value: '200k' }
  ];

  return (
    <motion.div
      className="w-[350px] shadow-lg rounded-lg mt-4 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-2 bg-[#1126920D] gap-y-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-center cursor-pointer bg-white p-4 ${index % 2 === 0 ? 'border-r' : ''}`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FaUsers className="text-teal-700 text-2xl mr-4" />
            <div>
              <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsCard;