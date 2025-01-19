import React from 'react';
import DashBoardTop from './DashBoardTop';
import DashBoardSecond from './DashboardSecond';
import DashboardThree from './DashboardThree';
const  DashBoardCollection = () => {
    return (
         <div className='px-4 py-2 w-full h-screen' >
         <DashBoardTop/>
         <div className='' style={{height:"17%"}} >
         <DashBoardSecond currentShow={1} />
         <DashboardThree />
         </div>
         </div>
    );
};

export default  DashBoardCollection;