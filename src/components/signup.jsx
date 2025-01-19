import React from "react";
import backgroundImage from "/src/assets/backgroundimage.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 overflow-y-auto">
      {/* Signup Card with Background Image at the Top */}
      <div className="w-full max-w-[430px] bg-white rounded-[32px] shadow-lg overflow-hidden">
        
        {/* Background Image at the Top */}
        <div
          className="w-full relative z-0 h-[200px] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Signup Form */}
        <div className="p-6 absolute top-40 bg-white overflow-x-hidden left-0 w-full z-50 shadow-lg rounded-[32px]">
          <h2 className="text-4xl font-extrabold text-[#323434] leading-10">Sign up</h2>
          
          {/* Social Sign-up Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center justify-center w-[48%] h-[56px] bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200">
              <img src="/src/assets/google-icon.png" alt="Google" className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-[48%] h-[56px] bg-gray-100 rounded-lg hover:bg-gray-200">
              <img src="/src/assets/apple-icon.png" alt="Apple" className="w-6 h-6" />
            </button>
          </div>

       
        <div className="space-y-4 mt-6">
        <p className="text-sm text-gray-500 text-center mt-2">Or, register with email</p>

            <div>
                <label className="text-sm font-semibold text-gray-700">Full name</label>
                <input type="text" placeholder="Type your name" className="w-full h-[56px] px-4 bg-gray-100 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700">User name</label>
                <input type="text" placeholder="Type your user name" className="w-full h-[56px] px-4 bg-gray-100 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700">Email address</label>
                <input type="email" placeholder="Type your email" className="w-full h-[56px] px-4 bg-gray-100 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <input type="password" placeholder="Type your password" className="w-full h-[56px] px-4 bg-gray-100 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                <input type="password" placeholder="Confirm your password" className="w-full h-[56px] px-4 bg-gray-100 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
        </div>

        {/* Signup Button */}
          <button className="w-full h-[56px] mt-6 bg-[#D83E3E] text-white text-lg font-bold rounded-lg hover:bg-red-600 focus:outline-none">
            Sign up
          </button>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0C6374] font-medium cursor-pointer">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
