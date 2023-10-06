import { Link } from "react-router-dom"
import logo from "../../assets/Group_2-removebg-preview.png"
import logo1 from "../../assets/Group_1-removebg-preview.png"
import GlobalButtonProps from "../global/GlobalButtonProps"
import { useState } from "react"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {

const [show, setShow]= useState<boolean>(false)

const onShow= ()=>{
    if (window.scrollY >= 100 ) {
        setShow(true)
    } else {
        setShow(false)
    }
}

window.addEventListener("scroll", onShow)

const [shown,setshown] = useState<boolean>(false)
const toggle = () => {
    setshown(!shown)
}

  return (
   <div>
    {
        show ? (
            <div className="w-full h-[80px] medium:h-[70px] small:h-[60px] flex justify-center items-center bg-white border-[black] border-b-[1px] z-[10] fixed duration-1000 transition-all">
            {/* main */}
            <div className="w-[90%] h-[100%] flex justify-between items-center">
                {/* logo */}
                <img src={logo} className="small:w-[50%] w-[15%]"/>
                {/* Holder */}
                <div className="flex items-center gap-[20px] text-[14px] ">
                    <div className="flex items-center  gap-[20px]  small:hidden">
                    <nav>Our story</nav>
                    <nav>Membership</nav>
                    <nav>Write</nav>
                    <nav>Sign In</nav>
                    </div>
                    
                    <Link to="/register">
                 <GlobalButtonProps h="h-[40px]" w="w-[120px]" text="Get started" bg="bg-black" col="text-[white]" font="medium"/>
                    </Link>
                    <div className="ml-[5px] text-[24px] text-[black] medium:hidden big:hidden small:block" onClick={toggle}>
              {
                shown ? <div> 
                <AiOutlineClose/></div> : <AiOutlineMenu />
              }
                </div>
                <div className="w-[30px] h-[30px] bg-[gold] rounded-[50%] medium:hidden big:hidden" />
                {/* box */}
             {
                shown ?   <div className="py-[6px] w-[100px] flex flex-col items-center absolute top-[60px] right-1  gap-[10px] bg-[white] shadow-md rounded-md">
              <Link to="/register" className="z-10">
                <nav className="hover:bg-[#ebebebc5] hover:cursor-pointer transition-all duration-400 w-[100%] flex justify-center
                 py-[4px]">Sign Up</nav>
                    </Link>
              <Link to="/sign-in" className="z-10">
                <nav className="hover:bg-[#ebebebc5] hover:cursor-pointer transition-all duration-400 w-[100%] flex justify-center
                 py-[4px]">Sign In</nav>
                    </Link>
                
            </div> : null
             }
                </div>
            </div>
            {/* main */}
        </div>
        ):
        (
            <div className="w-full h-[80px] medium:h-[70px] small:h-[60px] flex justify-center items-center bg-[rgb(96,38,17)] border-[black] border-b-[1px] z-[10]">
            {/* main */}
            <div className="w-[90%] h-[100%] flex justify-between items-center">
                {/* logo */}
                <img src={logo1} className="small:w-[50%] w-[15%] medium:w-[23%]"/>
                {/* Holder */}
                <div className="flex items-center gap-[20px] text-[14px] ">
                    <div className="flex items-center  gap-[20px]  small:hidden text-[white]">
                    <nav>Our story</nav>
                    <nav>Membership</nav>
                    <nav>Write</nav>
                    <nav>Sign In</nav>
                    </div>
                    
                    <Link to="/register">
                 <GlobalButtonProps h="h-[40px]" w="w-[120px]" text="Get started" bg="bg-black" col="text-[white]" font="medium" />
                    </Link>
                    <div className="ml-[5px] text-[24px]  medium:hidden big:hidden text-white small:block" onClick={toggle}>
              {
                shown ? <div> 
                <AiOutlineClose/></div> : <AiOutlineMenu />
              }
                </div>
                <div className="w-[30px] h-[30px] bg-[gold] rounded-[50%] medium:hidden big:hidden" />
                {/* box */}
             {
                shown ?   <div className="py-[6px] w-[100px] flex flex-col items-center absolute top-[60px] right-1  gap-[10px] bg-[white] shadow-md rounded-md">
                  <Link to="/register" className="z-10">
                <nav className="hover:bg-[#ebebebc5] hover:cursor-pointer transition-all duration-400 w-[100%] flex justify-center
                 py-[4px] z-10 ">Sign Up</nav>
                    </Link>
                  <Link to="/sign-in" className="z-10">
                <nav className="hover:bg-[#ebebebc5] hover:cursor-pointer transition-all duration-400 w-[100%] flex justify-center
                 py-[4px] z-1">Sign In</nav>
                    </Link>
                
            </div> : null
             }
                {/* box */}
               </div>
                </div>
            
            {/* main */}
        </div>
        )
    }
   </div>
  )
}

export default Header