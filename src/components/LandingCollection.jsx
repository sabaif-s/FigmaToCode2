import React from 'react';
import LandingPageFirst from './LandingPageFirst';
import LandingPageSecond from './LandingPageSecond';
import LandingPageThree from './LandingPageThree';
const  LandingCollection = () => {
    return (
         <div className='md:w-full md:flex md:flex-col bg-white md:mt-4 md:items-center' >
         <LandingPageFirst/>
         <LandingPageSecond/>
         <LandingPageThree/>
         </div>
    );
};

export default  LandingCollection;