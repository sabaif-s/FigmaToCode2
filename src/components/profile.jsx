import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const Navigate = useNavigate();

  const options = [
    { label: "Profile", description: "Edit Your Profile", icon: "src/assets/Profile-icon.png" },
    { label: "Coins", description: "See Your Coin Stat", icon: "src/assets/coin-icon.png" },
    { label: "Withdrawal", description: "Withdraw Your Coin", icon: "src/assets/withdrawal-icon.png" },
    { label: "Manage your YouTube", description: "Withdraw Your Coin", icon: "src/assets/youtube-icon.png" },
    { label: "Help & Support", description: "", icon: "src/assets/help and support.png" },
    { label: "Log out", description: "Further secure your account for safety", icon: "src/assets/Logout.png" },
  ];
useEffect(()=>{
  if(activeIndex == 1){
    Navigate("/coin");
  }
  if(activeIndex == 2){
    Navigate("/withdraw");
  }
  if(activeIndex == 0){
    Navigate("/edit");
  }
},[activeIndex]);
  return (
    <div className="flex justify-center md:items-center md:h-screen md:bg-red-300" >
    <motion.div
      className="w-[390px] h-[844px] bg-white flex flex-col items-center rounded-[24px] rounded-tl-[32px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-16 flex items-center px-4">
        <button
          onClick={() => {
            Navigate(-1);
          }}
          className="text-gray-700 text-2xl bg-[#F5F5F5] font-bold w-10 h-10 rounded-full flex items-center justify-center"
        >
          &larr;
        </button>
        <h1 className="text-lg font-semibold text-center flex-grow">Profile</h1>
      </div>
 
      <motion.div
        className="flex justify-center mt-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-[84px] h-[84px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
          <img
            src="src/assets/profile.png"
            alt="Avatar"
            className="w-3/4 h-3/4 rounded-full"
          />
        </div>
      </motion.div>

      
      <motion.p
        className="text-center mt-4 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        @user_name
      </motion.p>
      <motion.div
        className="flex justify-between items-center w-[276px] mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div>
          <p className="text-lg font-semibold text-[#181D27]">300</p>
          <p className="text-sm text-gray-500">Subscribers</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-[#181D27]">1.5k</p>
          <p className="text-sm text-gray-500">Coins</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-[#181D27]">200</p>
          <p className="text-sm text-gray-500">Referrals</p>
        </div>
      </motion.div>

      
      <motion.div
        className="mt-6 w-[353px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {options.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-between cursor-pointer py-4 px-4 rounded-lg ${
              activeIndex === index ? "bg-[#E6F5F6]" : "hover:bg-gray-100"
            } transition-all`}
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            
            <div className="flex items-center space-x-4">
              <img src={item.icon} alt="" className="w-6 h-6" />
              <div>
                <p
                  className={`text-sm ${
                    activeIndex === index ? "text-[#0C6374]" : "text-[#181D27]"
                  }`}
                >
                  {item.label}
                </p>
                {item.description && (
                  <p className="text-xs text-[#ABABAB]">{item.description}</p>
                )}
              </div>
            </div>

          
            <span
              className={`text-lg ${
                activeIndex === index ? "text-[#0C6374]" : "text-gray-400"
              }`}
            >
              &#8250;
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    </div>
  );
};

export default ProfilePage;