import React from 'react';
import { motion } from 'framer-motion';
import iconCoin from '../../assets/imageDashboard/iconCoin.png';

const DashboardThree = ({ data }) => {
    return (
        <motion.div
            className="flex flex-row flex-wrap gap-x-2 gap-y-2 justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {data.map((item, index) => (
                <motion.div
                    key={item.id}
                    className="bg-white pb-4 flex flex-col justify-start items-center shadow-lg"
                    style={{ width: "48%" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <motion.img
                        src={item.imgSrc}
                        className="h-24"
                        alt={item.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    />
                    <motion.span
                        className="text-black font-semibold"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                        {item.title}
                    </motion.span>
                    <motion.span
                        className="w-full px-4 mt-2 text-sm text-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.4 }}
                    >
                        {item.description}
                    </motion.span>
                    <div className="w-full flex flex-row mt-4 justify-between items-center">
                        <div className="flex gap-x-1 items-center justify-center">
                            <motion.img
                                src={iconCoin}
                                className="w-3"
                                alt="coin icon"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.5 }}
                            />
                            <motion.span
                                className="text-xs"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.6 }}
                            >
                                {item.coins}
                            </motion.span>
                        </div>
                        <motion.button
                            className="text-xs rounded-full text-center text-white bg-red-500 px-4 py-1"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.7 }}
                        >
                            {item.buttonText}
                        </motion.button>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default DashboardThree;