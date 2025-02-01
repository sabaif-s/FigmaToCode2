import React from "react";
import { motion, useInView } from "framer-motion";

const MoneyStats = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="shadow-md  rounded-lg p-2 mt-4 mb-4 w-[360px] aspect-[4.29/1] relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex justify-around items-center gap-x-2 relative">
        <motion.div
          className="flex cursor-pointer flex-col justify-between items-center"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-green-500 font-bold">15k</span>
          <div className="flex items-center gap-x-1">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <span className="text-gray-600 font-medium">Total Withdrawal</span>
          </div>
        </motion.div>
        <div className="absolute w-[1px] h-10 bg-gray-200 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <motion.div
          className="flex flex-col cursor-pointer justify-between items-center"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-blue-500 font-bold">200k</span>
          <div className="flex items-center gap-x-1">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 font-medium">Total Money</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoneyStats;