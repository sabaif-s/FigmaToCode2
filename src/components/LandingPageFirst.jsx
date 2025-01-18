import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import backImage from '../assets/images/backImage.png';
import logo from "../assets/images/4nokoLogo.png";
import drop from "../assets/images/Drop.png";
import bar from "../assets/images/bar.png";

const LandingPageFirst = () => {
    const [height, setHeight] = useState("");
    const [renderComponent, setRenderComponent] = useState(false);
    const [clickedDrop, setClickedDrop] = useState(false);
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
                    className='w-full h-screen bg-red-200 relative flex flex-col justify-between items-center'
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
                        <button className='text-white w-1/2 bg-red-500 px-4 py-2 rounded-full'>
                            GET STARTED
                        </button>
                    </motion.div>
                    <img src={backImage} className='w-full h-full absolute z-0' alt="" />
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
                        <img src={logo} alt="Logo" className="h-2/3" />
                        <a href="#home" className="text-black text-xl text-semibold ">About</a>
                        <a href="#about" className="text-black text-xl text-semibold ">Feature</a>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-full">Login</button>
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
                                <span className={` ${height < 700 ? "text-sm" : "text-lg"} text-white`}>
                                    {currentMessage.titleLeft}
                                </span>
                                <img src={drop} className='h-4' alt="" />
                            </div>
                            <div className='w-1/2 flex justify-center items-center rounded-full text-white h-full' style={{ backgroundColor: "#FF014F" }}>
                                <span className='text-2xl'>
                                    {currentMessage.titleRight}
                                </span>
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
                        <span className={` ${clickedDrop && height < 700 ? "text-4xl":"text-6xl"} text-white font-semibold  w-full text-center`}>
                            {currentMessage.descriptionFirst}
                        </span>
                        <span className='text-white font-semibold text-4xl w-full text-center'>
                            {currentMessage.descriptionSecond} <span style={{ color: "#0C6374" }}> {currentMessage.descriptionThird} </span>
                        </span>
                        <span className='text-gray-300 text-xl mt-4 w-full text-center'>
                            Lorem ipsum dolor sit amet consectetur. Nulla bibendum eget urna fauceque.
                        </span>
                        <div className='w-full flex justify-center gap-x-4 items-center '>
                            <img src={bar} className='' alt="" />
                            <div className='w-4 h-4 rounded-full bg-white '>
                            </div>
                            <div className='w-4 h-4 rounded-full bg-white '>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default LandingPageFirst;