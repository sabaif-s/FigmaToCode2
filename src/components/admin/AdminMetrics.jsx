import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const Metrics = () => {
  const data = [
    { name: 'Last Month', value: 156.86 },
    { name: '3M', value: 220 },
    { name: '6M', value: 170 },
    { name: 'Year', value: 250 },
    { name: 'All', value: 300 },
  ];

  return (
    <motion.div
      className='w-[390px] aspect-[1.252/1] flex flex-col justify-center items-center'
      initial={{ opacity: 0, y: -20, x:20 }}
      animate={{ opacity: 1, y: 0 , x:0}}
      transition={{ duration: 0.5 }}
    >
      <span className='w-full text-start mb-4 text-[22px] text-black font-bold pl-4'>
        User Metrics
      </span>
      <ResponsiveContainer width="95%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 10 }}
          style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', padding: '10px' }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#323434', fontSize: 12 }}
            axisLine={{ stroke: '#333' }}
            interval={0} // Ensures all labels are shown
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '12px',
            }}
            labelStyle={{
              color: '#323434',
              fontWeight: 'bold',
              fontSize: '12px',
            }}
            itemStyle={{
              color: '#5BDA8C',
              fontSize: '12px',
            }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{ paddingBottom: '20px' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#5BDA8C"
            strokeWidth={4}
            dot={{ fill: '#5BDA8C', r: 5 }}
            activeDot={{ r: 8, fill: '#ff7300' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default Metrics;