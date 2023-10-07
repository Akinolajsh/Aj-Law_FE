

import {AiOutlinePlus,AiOutlineSearch} from "react-icons/ai"
import {TfiWrite} from "react-icons/tfi"
import img1 from "../../assets/avatar1.png";
import { Link } from "react-router-dom";
import { useLawyerlaw } from "../../Components/custom/Hooks";
import { useRecoilValue} from "recoil"
import { user } from "../../Components/custom/Jotai";

const Lawpage = () => {

const value:any= useRecoilValue(user)

console.log(value)

    // const [show,setshow] = useState<boolean>(false)
    // const toggle = () => {
    //     setshow(!show)
    // }

    // const {value}= useParams()

    const {getAllLawyerLaw}= useLawyerlaw(value!)

  return (
    <div className="w-full h-[100%] flex items-center flex-col">
        {/* main */}
        <div className="flex w-[100%]"> 
            {/* hold */}
            <div className="w-[100%] h-[70px] flex items-center justify-center">
                <div className="w-[90%] h-[70px] flex items-center justify-between">
               <div className="flex gap-[10px] items-center">
                {/* logo */}
               {/* <img src={logo} className="small:w-[50%] w-[15%]"/> */}
               <nav className="text-[20px] font-bold">Home</nav>
               <div className="flex items-center h-[35px] rounded-[20px] border-[1px] border-b-[silver] px-3 small:hidden">
                <div className="text-[18px] text-[silver]">
                <AiOutlineSearch/> 
                </div>
                <input placeholder="search" className="placeholder:text-[14px] outline-none h-[80%] mx-[5px] text-[14px]"/>
               </div>
               </div>
               {/* hold */}
               <div className="flex items-center gap-[10px]">
                    <Link to="/create-law">
                <div className="flex gap-[10px] items-center text-[15px] small:text-[14px]">
                    <div className="text-[20px] cursor-pointer"><TfiWrite/></div>
                    Write</div>
                    </Link>
            <div  className="h-[30px] w-[30px] rounded-[50%] bg-[black] big:h-[40px] big:w-[40px]"/>
            </div>
            </div>
            </div>
            </div>

            <div className="w-[90%] py-4 border-b-[1px] border-[#d5d4d4ae] flex gap-[10px] items-center text-[14px] big:text-[18px]">
                <nav className="cursor-pointer"><AiOutlinePlus/></nav>
                <nav>For you</nav>
            </div>
            <div className="w-[100%] h-[80vh] flex justify-center">
               <div className="w-[90%] h-[100% flex">
               <div className="w-[70%] h-[100%] medium:w-[100%]">
               <div className="w-[100%] my-[30px] border-[#d5d4d4ae] border-b-[1px] py-[10px]">
        {/* main */}
       {
   getAllLawyerLaw?.map((el:any)=>{
    <div className="flex" key={el.id}>
    {/* left */}
    <div className="w-[100%]">
        {/* hold */}
        <div className="flex items-center gap-[10px] ">
            <img src={img1} className="w-[25px] h-[25px] object-cover rounded-[50%]"/>
            <div className="text-[14px] font-[500] ">{el?.name}</div>
        </div>
        <div className="text-[20px]  font-[600] w-[90%] my-[3px]
         medium:text-[14px] medium:leading-4 leading-6 small:text-[11px] 
        small:w-[100%]
        small:leading-3 
        ">{el?.title}</div>
        <div className="
        w-[90%] font-[400] text-[#7c7c7c]  my-[10px] leading-4 text-[15px]  small:hidden small:text
        ">{getAllLawyerLaw?.description}</div>
        {/* hold */}
        <div className="text-14px justify-between w-[95%] flex-1 flex small:text-[10px] medium:text-[14px]">
            <div>Jul 17 . 4 min read</div>
        </div>
    </div>
    {/* right */}
    <div className=" w-[40%] h-[full] object-cover">
    <img src={getAllLawyerLaw?.image} />
    </div>
</div>
   })
       }
        {/* main */}
    </div>
               </div>
               <br/>
            <br/>
            <br/>
            <br/>
            <div className="w-[30%] h-[100%] bg-[red]  medium:hidden small:hidden"></div>
               </div>
            </div>
    </div>
  )
}

export default Lawpage