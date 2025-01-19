import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "/src/assets/backgroundimage.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <motion.div
      className="justify-center w-full max-w-[430px] h-screen rounded-[32px] items-center relative shadow-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
     
      <motion.div
        className="w-full h-[35%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

       
      <motion.div
        className="w-full bg-white absolute top-[18.75%] rounded-t-[32px] p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          className="font-inter text-[#323434] text-4xl font-extrabold leading-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Login
        </motion.h1>

        
        <div className="space-y-4 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="email" className="text-sm font-semibold text-[#323434]">
              Email address or User name
            </label>
            <input
              type="text"
              id="email"
              placeholder="Type your email"
              className="w-full h-[56px] px-4 bg-[#F5F5F5] text-gray-700 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="password" className="text-sm font-inter font-semibold leading-6 text-gray-600">
              Pass word
            </label>
            <input
              type="password"
              id="password"
              placeholder="Type your password"
              className="w-full h-[56px] px-4 bg-[#F5F5F5] text-gray-700 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </motion.div>
        </div>

         
        <motion.button
          className="w-full h-[56px] mt-6 bg-[#D83E3E] text-white text-lg font-bold rounded-lg hover:bg-red-600 focus:outline-none"
          onClick={() => alert("Login button clicked!")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Login
        </motion.button>

        
        <motion.div
          className="text-center text-gray-500 my-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Or, login with
        </motion.div>
 
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="flex items-center justify-center w-[48%] h-[56px] bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200">
            <img
              src="/src/assets/google-icon.png"
              alt="Google"
              className="w-6 h-6"
            />
          </button>
          <button className="flex items-center justify-center w-[48%] h-[56px] bg-[#F5F5F5] rounded-lg hover:bg-gray-200">
            <img
              src="/src/assets/apple-icon.png"
              alt="Apple"
              className="w-6 h-6"
            />
          </button>
        </motion.div>

         
        <motion.div
          className="text-center mt-[5%] text-[0.9rem] text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Dont have an account?{" "}
          <Link
            to="/signup"
            className="text-red-500 font-medium cursor-pointer"
          >
            Create account
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;