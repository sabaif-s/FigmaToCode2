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
         <div className='px-4 py-2 w-full h-screen overflow-y-auto' >
             <DashBoardFooter key={"Footer"}/>
         <DashBoardTop key={"TOP"} />
         <div className='' style={{height:"17%"}} >
         <DashBoardSecond key={"SECONDS"} currentShow={currentShow} />
         </div>
         <DashboardThree key={"THIRD"} handleClick={handleClick}  />
        
         </div>
    );
};

export default  DashBoardCollection;