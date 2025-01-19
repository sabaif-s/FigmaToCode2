import React,{useEffect,useState} from 'react';
import iconCoin from "../../assets/imageDashboard/coinIcon.png";
import { motion } from 'framer-motion';
import { data,leaderboardData,referralsData } from './data';

const  DashboardThree = ({handleClick}) => {

    const [clickedAnchor,setClickedAnchor]=useState(1);
    
    
    return (
        <div className='w-full bg-gray-50 mt-4 flex flex-col justify-start items-center ' >
            <div className='flex flex-row mb-4 justify-between font-semibold w-full px-4 space-x-4'>
            <div
            onClick={()=>{
                setClickedAnchor(1);
                handleClick(1);
            }}
            className={` ${clickedAnchor == 1 ? "border-b-2 border-[#0C6374]":""} text-lg hover:text-[#0C6374] cursor-pointer`}>Channels</div>
            <div 
            onClick={()=>{
                setClickedAnchor(2);
                handleClick(2);
            }}
            className={` ${clickedAnchor == 2 ? "border-b-2 border-[#0C6374]":""} text-lg hover:text-[#0C6374] cursor-pointer`}>Leader Board</div>
            <div
            onClick={()=>{
                setClickedAnchor(3);
                handleClick(2);
            }}
            className={` ${clickedAnchor == 3 ? "border-b-2 border-[#0C6374]":""} text-lg hover:text-[#0C6374] cursor-pointer`}>Referrals</div>
            </div>
            {
                clickedAnchor == 1 && (
                   <motion.div
                              className="flex flex-row flex-wrap gap-x-2 gap-y-2 justify-center overflow-y-auto"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                          >
                              {data.map((item, index) => (
                                  <motion.div
                                      key={item.id}
                                      className="bg-white pb-4 flex flex-col justify-start items-center shadow-lg"
                                      style={{ width: "48%" }}
                                      initial={{ opacity: 0, y: 50 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.5, delay: index * 0.1 }}
                                  >
                                      <motion.img
                                          src={item.imgSrc}
                                          className="h-24"
                                          alt={item.title}
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ duration: 0.5, delay: index * 0.2 }}
                                      />
                                      <motion.span
                                          className="text-black font-semibold"
                                          initial={{ opacity: 0, x: -50 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.5, delay: index * 0.3 }}
                                      >
                                          {item.title}
                                      </motion.span>
                                      <motion.span
                                          className="w-full px-4 mt-2 text-sm text-center"
                                          initial={{ opacity: 0, x: -50 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.5, delay: index * 0.4 }}
                                      >
                                          {item.description}
                                      </motion.span>
                                      <div className="w-full flex flex-row mt-4 justify-between items-center">
                                          <div className="flex gap-x-1 items-center justify-center">
                                              <motion.img
                                                  src={iconCoin}
                                                  className="w-3"
                                                  alt="coin icon"
                                                  initial={{ opacity: 0, scale: 0.8 }}
                                                  animate={{ opacity: 1, scale: 1 }}
                                                  transition={{ duration: 0.5, delay: index * 0.5 }}
                                              />
                                              <motion.span
                                                  className="text-xs"
                                                  initial={{ opacity: 0, x: -50 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  transition={{ duration: 0.5, delay: index * 0.6 }}
                                              >
                                                  {item.coins}
                                              </motion.span>
                                          </div>
                                          <motion.button
                                              className="text-xs rounded-full text-center text-white bg-red-500 px-4 py-1"
                                              initial={{ opacity: 0, scale: 0.8 }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{ duration: 0.5, delay: index * 0.7 }}
                                          >
                                              {item.buttonText}
                                          </motion.button>
                                      </div>
                                  </motion.div>
                              ))}
                          </motion.div>
                )
            }
            {
                clickedAnchor == 2 && (
                     
                 <div className="w-full flex flex-col gap-y-4">
                             {leaderboardData.map((user, index) => (
                                 <motion.div
                                     key={user.id}
                                     className="w-full flex border-b-2 pb-4 border-gray-200 justify-between items-start"
                                     initial={{ opacity: 0, y: 50 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.5, delay: index * 0.1 }}
                                 >
                                     <div className="w-2/3 flex justify-start gap-x-2">
                                         <div>
                                             <motion.img
                                                 src={user.imageUser}
                                                 className="w-20"
                                                 alt={user.name}
                                                 initial={{ opacity: 0, scale: 0.8 }}
                                                 animate={{ opacity: 1, scale: 1 }}
                                                 transition={{ duration: 0.5, delay: index * 0.2 }}
                                             />
                                         </div>
                                         <div className="flex flex-col gap-y-1">
                                             <motion.span
                                                 className="text-lg font-bold"
                                                 initial={{ opacity: 0, x: -50 }}
                                                 animate={{ opacity: 1, x: 0 }}
                                                 transition={{ duration: 0.5, delay: index * 0.3 }}
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
                                                     transition={{ duration: 0.5, delay: index * 0.4 }}
                                                 />
                                                 <motion.span
                                                     initial={{ opacity: 0, x: -50 }}
                                                     animate={{ opacity: 1, x: 0 }}
                                                     transition={{ duration: 0.5, delay: index * 0.5 }}
                                                 >
                                                     {user.coins}
                                                 </motion.span>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="w-1/3 flex justify-end">
                                         {index < 3 ? (
                                             <motion.img
                                                 src={user.rankImage}
                                                 className="w-20"
                                                 alt={`Rank ${index + 1}`}
                                                 initial={{ opacity: 0, scale: 0.8 }}
                                                 animate={{ opacity: 1, scale: 1 }}
                                                 transition={{ duration: 0.5, delay: index * 0.6 }}
                                             />
                                         ) : (
                                             <motion.div
                                                 className='w-20 h-20 rounded-full flex justify-center items-center'
                                                 initial={{ opacity: 0, scale: 0.8 }}
                                                 animate={{ opacity: 1, scale: 1 }}
                                                 transition={{ duration: 0.5, delay: index * 0.7 }}
                                             >
                                                 <div className='w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full'>
                                                     <span>{index + 1}</span>
                                                 </div>
                                             </motion.div>
                                         )}
                                     </div>
                                 </motion.div>
                             ))}
                         </div>
                

                )
            }
            {
              clickedAnchor == 3 && (
                <div className="w-full flex flex-col gap-y-4">
                {referralsData.map((user, index) => (
                    <motion.div
                        key={user.id}
                        className="w-full flex border-b-2 pb-4 border-gray-200 justify-between items-start"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="w-2/3 flex justify-start gap-x-2">
                            <div>
                                <img src={user.imageUser} className="w-20" alt={user.name} />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <span className="text-lg font-bold">{user.name}</span>
                                <div className="flex gap-x-1 justify-start items-center">
                                    <img src={iconCoin} className="w-4 h-4" alt="coin icon" />
                                    <span>{user.coins}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
              )
            }
           
        </div>
    );
};

export default  DashboardThree;
