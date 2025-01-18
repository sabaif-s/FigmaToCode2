
import React,{useEffect,useState} from 'react';
import backImage from '../assets/images/backImage.png'
import logo from "../assets/images/4nokoLogo.png";
import drop from "../assets/images/Drop.png";
import bar from "../assets/images/bar.png";
const  LandingPageFirst = () => {
    const [height,setHeight]=useState("");
    const [renderComponent,setRenderComponent]=useState(false);
    useEffect(()=>{
    const heightNew=window.innerHeight;
    setHeight(heightNew);
    setRenderComponent(true);
    },[]);
    return (
        <>
       {
        renderComponent && (
            <div className='w-full h-screen bg-red-200 relative flex flex-col justify-between items-center'>
                 <div className='w-full py-4 justify-center flex bg-white absolute z-50 bottom-0 left-0' >
                  <button className='text-white w-1/2 bg-red-500 px-4 py-2 rounded-full' >
                    GET STARTED
                  </button>
                  </div>
            <img src={backImage} className='w-full h-full absolute z-0' alt="" />
            <div
      className="w-full bg-white relative z-20 flex justify-around gap-x-2 items-center"
      style={{
        height: "10%",
        borderTopLeftRadius: "40px", 
        borderTopRightRadius: "40px",
        borderBottomLeftRadius: "10px", 
        borderBottomRightRadius: "10px",
      }}
    >
            <img src={logo} alt="Logo" className="h-2/3" />
            <a href="#home" className="text-black text-xl text-semibold ">About</a>
            <a href="#about" className="text-black text-xl text-semibold ">Feature</a>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full">Login</button>
            </div>
            <div className='absolute top-0 w-full flex justify-center items-end' style={{height:"50%"}} >
            <div className='z-50 relative flex justify-center rounded-full p-2' style={{height:"18%", width:"90%", backgroundColor:"#0C6374"}} >
                   <div className='w-1/2 flex justify-center items-center gap-x-2' >
                 <span className={` ${height < 700 ? "text-sm":"text-lg"} text-white`} >
                   I am Subscriber
                 </span>
                 <img src={drop} className='h-4'  alt="" />
                   </div>
                   <div className='w-1/2 flex justify-center items-center rounded-full text-white h-full' style={{backgroundColor: "#FF014F"}}>
                    <span className='text-2xl' >
                       Subscriber  
                    </span>
                   </div>
            </div>
            </div>
            
            <div className={` ${height < 700 ? "gap-y-2":"gap-y-4"} relative flex flex-col py-4`} style={{height:"50%",width:"90%"}} >
                  <span className='text-white font-semibold text-6xl w-full text-center' >
                                    Get Paid TO
                  </span>
                  <span className='text-white font-semibold text-4xl w-full text-center' >
                                    Subscribe <span style={{color:"#0C6374"}} > 4NOKO! </span> 
                  </span>
                  <span className='text-gray-300 text-xl mt-4 w-full text-center' >
                  Lorem ipsum dolor sit amet consectetur. Nulla bibendum eget urna fauceque.
                  </span>
                  <div className='w-full flex justify-center gap-x-4 items-center ' >
                     <img src={bar} className='' alt="" />
                     <div className='w-4 h-4 rounded-full bg-white ' >
                     </div>
                     <div className='w-4 h-4 rounded-full bg-white ' >
                     </div>
                  </div>
            </div>
            
            </div>
        )
       }
        
        </>
    );
};

export default  LandingPageFirst;