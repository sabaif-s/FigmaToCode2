import React from 'react';
import threePage from '../assets/images/pageThree.png';
import fourthPage from '../assets/images/youtube.png';
const  LandingPageSecond = () => {
    return (
        <div className='w-full bg-white flex flex-col gap-y-2 justify-center items-center' >
               <div className='flex flex-col  w-full px-16 py-2' >
                      <img src={threePage} className='mb-4' alt="" />
                      <span className='w-full text-center text-2xl text-black font-semibold' >
                        Feature
                      </span>
                     
                      <span className='text-black text-lg text-center' >
                       Lorem ipsum dolor sit amet
                        </span>
                        <span className='text-black text-lg' >
                          consectetur. Nec eget bibendum ipsum non sed. Turpis sed orci nibh
                      </span>
              </div>
              <div className='flex flex-col  w-full px-16 py-2' >
                      <img src={fourthPage} className='mb-4' alt="" />
                      <span className='w-full text-center text-2xl text-black font-semibold' >
                        Feature
                      </span>
                     
                      <span className='text-black text-lg text-center' >
                       Lorem ipsum dolor sit amet
                        </span>
                        <span className='text-black text-lg' >
                          consectetur. Nec eget bibendum ipsum non sed. Turpis sed orci nibh
                      </span>
              </div>
        </div>
    );
};

export default  LandingPageSecond;