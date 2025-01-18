import React from 'react';
import backImage from '../assets/images/backImage.png'
import logo from "../assets/images/4nokoLogo.png";
const  LandingPageFirst = () => {
    return (
        <div className='w-full h-screen bg-red-200 relative flex flex-col justify-between items-center'
        >
        <img src={backImage} className='w-full h-full absolute z-0' alt="" />
        <div
  className="w-full bg-white relative z-20 flex justify-around gap-x-2 items-center"
  style={{
    height: "10%",
    borderTopLeftRadius: "40px", 
    borderTopRightRadius: "40px",
    borderBottomLeftRadius: "10px", 
    borderBottomRightRadius: "10px",
  }}
>
    
        <img src={logo} alt="Logo" className="h-2/3" />
        <a href="#home" className="text-black text-xl text-semibold ">About</a>
    
        <a href="#about" className="text-black text-xl text-semibold ">Feature</a>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">Login</button>

        </div>
        <div className='' >

        </div>
        </div>
    );
};

export default  LandingPageFirst;