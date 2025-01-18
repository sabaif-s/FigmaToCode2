import React from 'react';
import backImage from "../assets/images/4noko.png";
const  LandingPageThree = () => {
    return (
        <>
        
        <div className='w-full relative mt-8' style={{height:"367px"}} >
            <div className='w-full h-full relative text-4xl z-50 gap-y-2 text-white flex flex-col justify-center items-center' >
                <span className='relative z-50' >
                Lorem ipsum dolor 
                </span>
                <span className='relative z-50' >
                sit amet consectetur.
                </span>
                <span className='relative z-50 ' >
                Elest in.
                </span>
                <button
                style={{backgroundColor:"#D83E3E"}}
                className='rounded-full p-2 relative z-50 mt-4' >
                    Get Started
                </button>
          <img src={backImage} className='absolute z-10 top-0' alt="" srcset="" />
          </div>
        </div>
        </>
    );
};

export default  LandingPageThree;