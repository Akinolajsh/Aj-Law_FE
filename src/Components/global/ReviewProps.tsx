import React from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";


interface iReviews {
    avata?: any;
    name?: string;
    title?: string;
    text?: string;
    time?: string;
    boxImg?: any;
    txt?: string;
  }

const ReviewProps:React.FC<iReviews> = ({avata,name,title,text,time,boxImg,txt}) => {
  return (
    <div className="w-[700px] h-[150px] my-[30px] mt-11 medium:flex medium:items-center medium:justify-center medium:border-[#d5d4d4ae] medium:border-b-[1px] m-4 small:w-[280px] ">
        {/* main */}
        <div className="flex w-[100%] justify-between medium:w-[100%] h-full">
            {/* left */}
            <div className="w-[70%] h-full medium:w-[100%]  flex flex-col justify-between p-2">
                {/* hold */}
                <div className="flex items-center gap-[10px]  ">
                    <img src={avata} className="w-[30px] h-[25px] object-cover rounded-[50%]"/>
                    <div className="text-[14px] font-[500] ">{name}</div>
                </div>
                <div className="text-[18px] medium:text-[14px] leading-4 font-bold small:text-[11px] 
                small:w-[100%]
                small:leading-3 w-[90%] ">{title}</div>
                <div className="w-[90%] font-[400] text-[#7c7c7c]  my-[10px] leading-4 text-[15px]  small:hidden small:text text-clip">{text}</div>
                {/* hold */}
                <div className="text-[12px] flex items-center justify-between w-[95%] mb-4">
                    <div className="flex-1 flex small:text-[10px] ">{time}  <nav className="ml-[10px] py-[5px] px-[15px] rounded-sm small:text-[12px] ">{txt}</nav>
                    </div>
                    
                </div>
            </div>
            {/* right */}
       
           <div className=" w-[150px] h-[95%] object-cover">
           <img src={boxImg} className=" object-cover h-full"/>
           </div>
           {/* <img src={boxImg} className="medium:hidden hidden small:object-cover w-[10%]"/> */}
       
        </div>
        {/* main */}
    </div>
  )
}

export default ReviewProps