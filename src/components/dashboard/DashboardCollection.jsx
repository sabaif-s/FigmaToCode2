import React,{useEffect,useState} from 'react';
import DashBoardTop from './DashBoardTop';
import DashBoardSecond from './DashboardSecond';
import DashboardThree from './DashboardThree';
import DashBoardFooter from './DashboardFooter';
const  DashBoardCollection = () => {
    const [currentShow,setCurrentShow]=useState(1);

    const handleClick=(id)=>{
              setCurrentShow(id);
    }
    return (
        <div className='md:bg-red-300 md:h-screen md:w-full md:flex md:justify-center md:items-center ' >
           <DashBoardFooter/>
         <div className='px-4 py-2 w-full relative bg-white h-full md:rounded-[24px] md:w-[390px] md:h-[844px] overflow-y-scroll scrollbar-hide' >
            
         <DashBoardTop key={"TOP"} />
         <div className='' style={{height:"17%"}} >
         <DashBoardSecond key={"SECONDS"} currentShow={currentShow} />
         </div>
         <DashboardThree key={"THIRD"} handleClick={handleClick}  />
        
         </div>
         </div>
    );
};

export default  DashBoardCollection;