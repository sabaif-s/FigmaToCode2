import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopUp = ({ clicked }) => {
  const [clickedButton, setClickedButton] = useState("YES");
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (button) => {
    setClickedButton(button);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        clicked(button.toLowerCase());
      }, 600); // Match the duration of the exit animation
    }, 300); // Show the button background for 1 second
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='w-[89.74%] aspect-[3.36/1] flex flex-col gap-y-4 justify-start bg-white'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className='text-[#000000] text-[14.5px] font-semibold text-center'>
            Are you sure you want to proceed
          </span>
          <div className='w-full h-1/2 border-t-[1px] border-t-[#EDF1F4]'>
            <button
              onClick={() => handleClick("NO")}
              className={`${
                clickedButton === "NO" ? "bg-[#D83E3E]" : "bg-white"
              } w-1/2 text-black text-[15px] font-semibold h-full`}
            >
              No
            </button>
            <button
              onClick={() => handleClick("YES")}
              className={`${
                clickedButton === "YES" ? "bg-[#D83E3E]" : "bg-white"
              } w-1/2 text-white text-[15px] font-semibold h-full`}
            >
              Yes
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;