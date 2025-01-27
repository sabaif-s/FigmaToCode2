import React, { useState } from "react";
import backArrow from "../../assets/coin/Logout.png";
import visa from "../../assets/withdraw/visa.png";
import cbeIcon from "../../assets/withdraw/cbe.png";
import telebirr from "../../assets/withdraw/telebir.jpg";
import paypal from "../../assets/withdraw/paypal.png";
import right from "../../assets/withdraw/right.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const WithdrawPage = () => {
  const [clickedRadio, setClickedRadio] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const Navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-red-300 flex justify-center md:items-center">
      <div className="md:rounded-[24px] bg-white pt-10 flex flex-col gap-y-2 w-full h-full md:w-[390px] md:h-[844px] justify-start md:rounded-tl-[32px] items-center px-4">
        <div className="flex justify-center items-center relative w-full">
          <span className="text-[#323434] text-[22px] font-semibold leading-sm">
            Withdrawal
          </span>
          <img
            onClick={() => Navigate(-1)}
            src={backArrow}
            className="w-12 absolute cursor-pointer left-0 h-12 object-cover"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col gap-y-2 mt-4 justify-start items-start">
          <span className="text-[#323434] font-semibold text-[16px]">
            Phone Number
          </span>
          <div className="w-full border-2 border-gray-300 rounded-lg p-4 flex justify-start px-4 gap-x-2 items-center">
            <PhoneInput
              country={"us"} // Set the default country
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
              placeholder="Enter phone number"
              inputClass="text-[#757575] text-[12px] border-none focus:outline-none"
              containerClass="flex items-center"
              buttonClass="bg-white border-none"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <span className="text-[#323434] text-[12px] leading-[16px]">
            Haven't verified yet?{" "}
            <strong className="text-[#D83E3E] text-[12px] cursor-pointer">
              Verify now
            </strong>
          </span>
        </div>
        <div className="w-full flex flex-col gap-y-2 mt-4 justify-start items-start">
          <span className="text-[#323434] font-semibold text-[16px]">
            Amount
          </span>
          <div className="w-full border-2 border-gray-300 rounded-lg p-4 flex justify-start px-4 gap-x-2 items-center">
            <input
              type="text"
              onBlur={(e) => {
                if (e.target.value === "") {
                  e.target.placeholder = "Amount Of Withdrawal Request";
                }
              }}
              onFocus={(e) => (e.target.placeholder = "")}
              placeholder="Amount Of Withdrawal Request"
              className="text-[#757575] text-[12px] h-full border-none w-full focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-start items-start">
          <span className="text-[#303437] leading-[30px] font-semibold text-[20px]">
            Payment
          </span>
          <motion.div
            className="w-full relative flex justify-start items-center gap-x-4"
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
            className="w-full flex relative justify-start items-center gap-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-[#F2F4F5] p-3 rounded-[12px] flex justify-center items-center">
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
            className="w-full flex relative justify-start items-center gap-x-4"
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
            className="w-full bg-[#D83E3E] rounded-xl leading-[18.75px] text-base text-white py-3 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Withdraw
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;