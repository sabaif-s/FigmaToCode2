import React from 'react';
import { motion, useInView } from 'framer-motion';
import threePage from '../assets/images/pageThree.png';
import fourthPage from '../assets/images/youtube.png';

const LandingPageSecond = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className='w-full md:w-[390px]  md:rounded-tl-[32px] md:rounded-[24px] md:bg-gray-300  bg-white flex flex-col gap-y-2 justify-center items-center'>
            <motion.div
                className='flex flex-col w-full  md:rounded-tl-[32px] md:rounded-[24px] md:bg-gray-300 bg-white px-16 py-2'
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <img src={threePage} className='mb-4' alt="" />
                <span className='w-full text-center text-2xl text-black font-semibold'>
                    Feature
                </span>
                <span className='text-black text-lg text-center'>
                    Lorem ipsum dolor sit amet
                </span>
                <span className='text-black text-lg'>
                    consectetur. Nec eget bibendum ipsum non sed. Turpis sed orci nibh
                </span>
            </motion.div>
            <motion.div
                className='flex flex-col w-full bg-white  md:rounded-tl-[32px] md:rounded-[24px] md:bg-gray-300 px-16 py-2'
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <img src={fourthPage} className='mb-4' alt="" />
                <span className='w-full text-center text-2xl text-black font-semibold'>
                    Feature
                </span>
                <span className='text-black text-lg text-center'>
                    Lorem ipsum dolor sit amet
                </span>
                <span className='text-black text-lg'>
                    consectetur. Nec eget bibendum ipsum non sed. Turpis sed orci nibh
                </span>
            </motion.div>
        </div>
    );
};

export default LandingPageSecond;