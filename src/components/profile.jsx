import React, { useState } from "react";

const ProfilePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const options = [
    { label: "Profile", description: "Edit Your Profile", icon: "src/assets/Profile-icon.png" },
    { label: "Coins", description: "See Your Coin Stat", icon: "src/assets/coin-icon.png" },
    { label: "Withdrawal", description: "Withdraw Your Coin", icon: "src/assets/withdrawal-icon.png"},
    { label: "Manage your YouTube", description: "Withdraw Your Coin", icon: "src/assets/youtube-icon.png" },
    { label: "Help & Support", description: "", icon: "src/assets/help and support.png" },
    { label: "Log out", description: "Further secure your account for safety", icon: "src/assets/Logout.png" },
  ];

return (
    <div className="w-[390px] h-[844px] bg-white flex flex-col items-center rounded-tl-[32px]">
    
    <div className="w-full h-16 flex items-center px-4">
            <button className="text-gray-700 text-2xl bg-[#F5F5F5] font-bold w-10 h-10 rounded-full flex items-center justify-center">&larr;</button>
            <h1 className="text-lg font-semibold text-center flex-grow">Profile</h1>
    </div>

    {/* Profile Avatar */}
        <div className="flex justify-center mt-4">
            <div className="w-[84px] h-[84px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
                <img
                    src="src/assets/profile.png"
                    alt="Avatar"
                    className="w-3/4 h-3/4 rounded-full"
                />
            </div>
        </div>

        {/* Username and Stats */}
        <p className="text-center mt-4 text-gray-700">@user_name</p>
        <div className="flex justify-between items-center w-[276px] mt-4 text-center">
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
        </div>

        {/* Options List */}
        <div className="mt-6 w-[353px]">
            {options.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-between py-4 px-4 rounded-lg ${
                        activeIndex === index ? "bg-[#E6F5F6]" : "hover:bg-gray-100"
                    } transition-all`}
                    onClick={() => setActiveIndex(index)}
                >
                    {/* Icon and Text */}
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

                    {/* Chevron Icon */}
                    <span
                        className={`text-lg ${
                            activeIndex === index ? "text-[#0C6374]" : "text-gray-400"
                        }`}
                    >
                        &#8250;
                    </span>
                </div>
            ))}
        </div>
    </div>
);
};

export default ProfilePage;
