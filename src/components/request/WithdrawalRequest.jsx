import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { referralsData } from "../dashboard/data";
import iconCoin from "../../assets/imageDashboard/coinIcon.png";

const WithdrawalRequest = () => {
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

  useEffect(() => {
    if (activeIndex === 1) {
      Navigate("/coin");
    }
    if (activeIndex === 2) {
      Navigate("/withdraw");
    }
    if (activeIndex === 0) {
      Navigate("/edit");
    }
  }, [activeIndex]);

  return (
    <div className="flex justify-center md:items-center md:bg-red-300">
      <motion.div
        className="w-[390px] bg-white flex flex-col items-center rounded-[24px] rounded-tl-[32px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-[390px] h-16 flex items-center px-4 fixed top-0 bg-white z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={() => {
              Navigate(-1);
            }}
            className="text-gray-700 text-2xl bg-[#F5F5F5] font-bold w-10 h-10 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            &larr;
          </motion.button>
          <motion.h1
            className="text-lg font-semibold text-center flex-grow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Withdrawal Request
          </motion.h1>
        </motion.div>

        <motion.div
          className="flex justify-center mt-20"
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
          className="text-center mt-4 text-[12px text-[#00000080] opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Admin
        </motion.p>
        <div
          key={"third"}
          className="w-full min-h-screen pb-20 px-4 flex flex-col gap-y-4 overflow-x-hidden mt-4"
        >
          {referralsData.map((user, index) => (
            <motion.div
              key={user.id}
              className="w-full flex border-b-2 pb-4 border-gray-200 justify-between items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-2/3 flex justify-start gap-x-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={user.imageUser} className="w-20" alt={user.name} />
                </motion.div>
                <div className="flex flex-col gap-y-1">
                  <motion.span
                    className="text-lg font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {user.name}
                  </motion.span>
                  <div className="flex gap-x-1 justify-start items-center">
                    <motion.img
                      src={iconCoin}
                      className="w-4 h-4"
                      alt="coin icon"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {user.coins}
                    </motion.span>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-4">
                <motion.span
                  className="text-[#29CC39] text-[13px] font-bold cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Approve
                </motion.span>
                <motion.span
                  className="text-[#D83E3E] text-[13px] font-bold cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Cancel
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WithdrawalRequest;