import React from 'react';
import { motion, useInView } from 'framer-motion';
import backImage from "../assets/images/4noko.png";
import logo from "../assets/images/4nokoLogo.png";
import facebook from "../assets/images/social0.png";
import twitter from "../assets/images/social1.png";
import linkedIn from "../assets/images/social2.jpg";
import youtube from "../assets/images/social3.jpg";
import instagram from "../assets/images/social4.jpg";
import { Link } from 'react-router-dom';

const LandingPageThree = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <>
            <motion.div
                className='w-full relative mt-8'
                style={{ height: "367px" }}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <div className='w-full h-full relative text-4xl z-50 gap-y-2 text-white flex flex-col justify-center items-center'>
                    <span className='relative z-50'>
                        Lorem ipsum dolor
                    </span>
                    <span className='relative z-50'>
                        sit amet consectetur.
                    </span>
                    <span className='relative z-50 '>
                        Elest in.
                    </span>
                    <Link to="/dashboard" className='w-full flex justify-center' >
                    <button
                        style={{ backgroundColor: "#D83E3E" }}
                        className='rounded-full p-2 w-1/2 relative  z-50 mt-4'
                    >
                        Get Started
                    </button>
                    </Link>
                    <img src={backImage} className='absolute z-10 top-0' alt="" />
                </div>
            </motion.div>
            <motion.div
                className='w-full bg-black text-white flex flex-col gap-y-4'
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className='px-4 w-full text-white flex flex-col gap-y-4'>
                    <div className='mb-8'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='w-full flex mb-16 justify-between items-start'>
                        <div className='flex flex-col gap-y-2'>
                            <span className='mb-4 text-lg font-semibold'>
                                About
                            </span>
                            <span className='text-gray-300'>
                                About
                            </span>
                            <span className='text-gray-300'>
                                Lorem
                            </span>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <span className='mb-4 text-lg font-semibold'>
                                Lorem Ipsum
                            </span>
                            <span className='text-gray-300'>
                                Lorem
                            </span>
                            <span className='text-gray-300'>
                                Lorem
                            </span>
                            <span className='text-gray-300'>
                                Lorem
                            </span>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <span className='mb-4 text-lg font-semibold'>
                                Lorem Ipsum
                            </span>
                            <span className='text-gray-300'>
                                Lorem
                            </span>
                        </div>
                    </div>
                </div>
                <div className='relative h-1 overflow-hidden' style={{ width: "100vw" }}>
                    <div style={{ height: "2px", width: "100vw" }} className='bg-white left-0 absolute mb-4'>
                    </div>
                </div>
                <div className='w-full mb-4 flex justify-center gap-x-4 items-center'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedIn} className='w-8 h-8' alt="" />
                    <img src={youtube} className='w-8 h-8' alt="" />
                    <img src={instagram} className='w-8 h-8' alt="" />
                </div>
                <div className='w-full mb-4 flex justify-center items-center'>
                    Copyright
                    <span className='tracking-wider ml-1'> &copy; 2025. All Rights Reserved</span>
                </div>
            </motion.div>
        </>
    );
};

export default LandingPageThree;