import React, { useState } from 'react';
import BackArrow from "../../assets/edit/backArrow.png";
import cbeIcon from "../../assets/withdraw/cbe.png";
import telebirr from "../../assets/withdraw/telebir.jpg";
import { useNavigate } from "react-router-dom";
import right from "../../assets/withdraw/right.png";
import { motion } from 'framer-motion';
import PhoneInput from "react-phone-input-2";
import PopUp from '../popup/PopUp';
import "react-phone-input-2/lib/style.css";

const EditProfile = () => {
  const [fullName, setFullName] = useState('Mahder Solomon');
  const [fullName2, setFullName2] = useState("@mahoo");
  const [fullName3, setFullName3] = useState("youremail@domain.com");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [clickedRadio, setClickedRadio] = useState(0);
  const [showPopUp,setShowPopUp]=useState(false);
  
  const Navigate = useNavigate();

  const clickHandle = (clickedValue) => {
    console.log("clicked value: ", clickedValue);
    setShowPopUp(false);
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <motion.div
        className='rounded-[32px] bg-white md:w-[390px] md:h-[844px] relative flex flex-col  justify-start items-center w-full h-full drop-shadow'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='w-full pt-[6.4%] px-[4.1%]  flex justify-center items-center'>
          <span className='text-[#323434] font-semibold text-[22px]'>
            Edit Profile
          </span>
          <img
            src={BackArrow}
            className='object-cover w-[12.29%] aspect-square absolute left-2 cursor-pointer'
            alt=""
            onClick={() => Navigate(-1)}
          />
        </div>
        <div className='w-[87.69%] aspect-[0.58/1] mt-[8.4%] flex flex-col gap-y-4 justify-start items-start'>
          <motion.div
            className='w-full h-[8.57%] bg-white rounded-[8px] flex flex-col px-[12px] justify-center items-start border-[1px] border-[#9E9E9E]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className='text-[#757575] text-[10px] tracking-[0.25px]'>
              Full name
            </span>
            <input
              type='text'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onFocus={(e) => {
                if (e.target.value === 'Mahder Solomon') {
                  console.log('focused');
                }
              }}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setFullName('Mahder Solomon');
                }
              }}
              className='w-full bg-transparent text-[#212121] text-[14px] tracking-[0.25px] outline-none'
            />
          </motion.div>
          <motion.div
            className='w-full h-[8.57%] bg-white rounded-[8px] flex flex-col px-[12px] justify-center items-start border-[1px] border-[#9E9E9E]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className='text-[#757575] text-[10px] tracking-[0.25px]'>
              User name
            </span>
            <input
              type='text'
              value={fullName2}
              onChange={(e) => setFullName2(e.target.value)}
              onFocus={(e) => {
                if (e.target.value === '@mahoo') {
                  console.log('focused');
                }
              }}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setFullName2('@mahoo');
                }
              }}
              className='w-full bg-transparent text-[#212121] text-[14px] tracking-[0.25px] outline-none'
            />
          </motion.div>
          <motion.div
            className='w-full h-[8.57%] bg-white rounded-[8px] flex flex-col px-[12px] justify-center items-start border-[1px] border-[#9E9E9E]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className='text-[#757575] text-[10px] tracking-[0.25px]'>
              Email
            </span>
            <input
              type='text'
              value={fullName3}
              onChange={(e) => setFullName3(e.target.value)}
              onFocus={(e) => {
                if (e.target.value === 'youremail@domain.com') {
                  console.log('focused');
                }
              }}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setFullName3('youremail@domain.com');
                }
              }}
              className='w-full bg-transparent text-[#212121] text-[14px] tracking-[0.25px] outline-none'
            />
          </motion.div>
          <motion.div
            className="w-full border-[1px] border-[#9E9E9E] relative z-50 rounded-lg p-4 flex justify-start gap-x-2 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <PhoneInput
              country={"us"} // Set the default country
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
              placeholder="Enter phone number"
              inputClass="text-[#757575] text-[12px] border-none focus:outline-none"
              containerClass="flex items-center"
              buttonClass="bg-white border-none"
            />
          </motion.div>
          <div className="w-full flex flex-col gap-4 justify-start items-start">
            <span className="text-[#303437] leading-[30px] font-semibold text-[20px]">
              Payment
            </span>
            <motion.div
             onClick={() => {
              setClickedRadio(1);
            }}
              className="w-full relative flex cursor-pointer justify-start items-center gap-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-[#F2F4F5] p-3 rounded-[12px] flex justify-center items-center">
                <img src={cbeIcon} className="w-6 h-4 object-cover" alt="" />
              </div>
              <span className="text-[#404446] text-[10px] font-semibold text-base leading-[24px]">
                Bank
              </span>
              <div
                onClick={() => {
                  setClickedRadio(1);
                }}
                className={`${
                  clickedRadio == 1 ? "bg-green-400" : "bg-white"
                } absolute cursor-pointer right-4 rounded-full w-5 h-5 border-[1px] border-[#CDCFD0]`}
              ></div>
            </motion.div>
            <motion.div
            onClick={() => {
              setClickedRadio(2);
            }}
              className="w-full flex relative cursor-pointer justify-start items-center gap-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
              
              className="w-12 h-12 bg-[#F2F4F5] p-3 rounded-[12px] flex justify-center items-center">
                <img src={telebirr} className="w-8 h-8 object-cover" alt="" />
              </div>
              <span className="text-[#404446] text-[10px] font-semibold text-base leading-[24px]">
                Telebirr
              </span>
              <div
                onClick={() => {
                  setClickedRadio(2);
                }}
                className={`absolute cursor-pointer right-4 rounded-full w-5 h-5 border-[1px] border-[#CDCFD0] ${
                  clickedRadio == 2 ? "bg-green-400" : "bg-white"
                }`}
              ></div>
            </motion.div>
            <motion.div
              className="w-full flex relative cursor-pointer justify-start items-center gap-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-[#F2F4F5] pb-3 rounded-[12px] flex justify-center items-center">
                <span className="text-[24px] font-semibold">...</span>
              </div>
              <span className="text-[#404446] text-[10px] font-semibold text-base leading-[24px]">
                All other methods
              </span>
              <div className="absolute cursor-pointer right-4 w-5 h-5 border-[1px] border-[#CDCFD0]">
                <img src={right} className="w-full h-full object-cover" alt="" />
              </div>
            </motion.div>
            <motion.button
              onClick={()=>{
                setShowPopUp(true);
              }}
              className="w-full bg-[#D83E3E] rounded-xl leading-[18.75px] text-base text-white py-3 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Save
            </motion.button>
          </div>
          
        </div>
        {
          showPopUp && (
            <div className='absolute w-full h-full flex justify-center items-center ' >
             <PopUp  key={"popup"} clicked={clickHandle} />
            </div>
          )
        }
       
      </motion.div>
     
     
    </div>
  );
};

export default EditProfile;