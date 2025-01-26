import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import backImage from '../assets/images/backImage.png';
import logo from "../assets/images/4nokoLogo.png";
import drop from "../assets/images/Drop.png";
import bar from "../assets/images/bar.png";
import { Link } from 'react-router-dom';

const LandingPageFirst = () => {
    const [height, setHeight] = useState("");
    const [renderComponent, setRenderComponent] = useState(false);
    const [clickedDrop, setClickedDrop] = useState(false);
    const [clickedNow, setClickedNow] = useState(0);
    const [currentMessage, setCurrentMessage] = useState({
        titleLeft: "I'm Subscriber",
        titleRight: "Subscriber",
        descriptionFirst: "Get Paid to",
        descriptionSecond: "Subscribe",
        descriptionThird: "4NOKO!"
    });

    const arrayText = [
        {
            titleLeft: "I'm Subscriber",
            titleRight: "Subscriber",
            descriptionFirst: "Get Paid to",
            descriptionSecond: "Subscribe",
            descriptionThird: "4NOKO!"
        },
        {
            titleLeft: "I'm YouTuber",
            titleRight: "YouTuber",
            descriptionFirst: "Boost Your YouTube",
            descriptionSecond: "Subs with",
            descriptionThird: "4NOKO!"
        }
    ];

    useEffect(() => {
        const heightNew = window.innerHeight;
        setHeight(heightNew);
        setRenderComponent(true);
    }, []);

    useEffect(() => {
        if (clickedDrop) {
            setCurrentMessage(arrayText[1]);
        } else {
            setCurrentMessage(arrayText[0]);
        }
    }, [clickedDrop]);

    return (
        <>
            {renderComponent && (
                <motion.div
                    className='w-full md:w-[390px] md:h-[884px] md:rounded-[24px]  md:rounded-tl-[32px] h-screen bg-red-200 relative flex flex-col justify-between items-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className='w-full py-4 justify-center flex bg-white absolute z-50 bottom-0 left-0'
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/signup" className='w-full flex justify-center'>
                            <motion.button
                                className='text-white w-1/2 bg-red-500 px-4 py-2 rounded-full'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                GET STARTED
                            </motion.button>
                        </Link>
                    </motion.div>
                    <img src={backImage} className='w-full h-full  md:rounded-[24px]  md:rounded-tl-[32px] absolute z-0' alt="" />
                    <motion.div
                        className="w-full bg-white relative z-20 flex justify-around gap-x-2 items-center"
                        style={{
                            height: "10%",
                            borderTopLeftRadius: "40px",
                            borderTopRightRadius: "40px",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                        }}
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            src={logo}
                            alt="Logo"
                            className="h-2/3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                        <motion.a
                            href="#home"
                            className="text-black text-xl text-semibold"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            About
                        </motion.a>
                        <motion.a
                            href="#about"
                            className="text-black text-xl text-semibold"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Feature
                        </motion.a>
                        <Link to="/login">
                            <motion.button
                                className="bg-red-500 text-white px-4 py-2 rounded-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Login
                            </motion.button>
                        </Link>
                    </motion.div>
                    <motion.div
                        className='absolute top-0 w-full flex justify-center items-end'
                        style={{ height: "50%" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='z-50 relative flex justify-center rounded-full p-2' style={{ height: "18%", width: "90%", backgroundColor: "#0C6374" }}>
                            <div
                                onClick={() => {
                                    setClickedDrop((prev) => !prev);
                                }}
                                className='w-1/2 flex justify-center items-center gap-x-2 cursor-pointer'
                            >
                                <motion.span
                                    className={` ${height < 700 ? "text-sm" : "text-lg"} text-white`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    {currentMessage.titleLeft}
                                </motion.span>
                                <motion.img
                                    src={drop}
                                    className='h-4'
                                    alt=""
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                />
                            </div>
                            <div className='w-1/2 flex justify-center items-center rounded-full text-white h-full' style={{ backgroundColor: "#FF014F" }}>
                                <motion.span
                                    className='text-2xl'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    {currentMessage.titleRight}
                                </motion.span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className={` ${height < 700 ? "gap-y-2" : "gap-y-4"} relative flex flex-col py-4`}
                        style={{ height: "50%", width: "90%" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.span
                            className={` ${clickedDrop && height < 700 ? "text-4xl" : "text-6xl"} text-white font-semibold  w-full text-center`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            {currentMessage.descriptionFirst}
                        </motion.span>
                        <motion.span
                            className='text-white font-semibold text-4xl w-full text-center'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                        >
                            {currentMessage.descriptionSecond} <span style={{ color: "#0C6374" }}> {currentMessage.descriptionThird} </span>
                        </motion.span>
                        <motion.span
                            className='text-gray-300 text-xl mt-4 w-full text-center'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                        >
                            Lorem ipsum dolor sit amet consectetur. Nulla bibendum eget urna fauceque.
                        </motion.span>
                        <div className='w-full flex justify-center gap-x-4 items-center '>
                            <motion.img
                                src={bar}
                                className=''
                                alt=""
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                            />
                            <motion.div
                                onClick={() => {
                                    setClickedDrop((prev) => !prev);
                                    setClickedNow(1);
                                }}
                                className={` ${clickedNow == 1 ? "bg-green-900" : "bg-white"} w-4 h-4 rounded-full `}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.3 }}
                            />
                            <motion.div
                                onClick={() => {
                                    setClickedDrop((prev) => !prev);
                                    setClickedNow(2);
                                }}
                                className={` ${clickedNow == 2 ? "bg-green-900" : "bg-white"} w-4 h-4 rounded-full`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default LandingPageFirst;