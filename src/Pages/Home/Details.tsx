import { PiHandsClappingLight } from 'react-icons/pi';
import { BsChatFill } from 'react-icons/bs';
import { CiSaveDown2, CiShare1 } from 'react-icons/ci';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import pic from "../../assets/bedroom.jpg";
import pic2 from "../../assets/bedroom.jpg";
import {  useViewOneLaw } from '../../Components/custom/Hooks';
import { useParams } from 'react-router-dom';


const DetailPage = () => {

 const {id} = useParams()
 const {getOne}= useViewOneLaw(id!)

  return (
    <div className="flex justify-center">
   
            <div className="h-[100%] w-[100%] flex items-center flex-col bg-white text-black">
            <h1 className="font-bold text-[40px]">
             {getOne.title}
            </h1>
            <div className="h-[100px] w-[650px] flex mt-4">
              <div className="rounded-full overflow-hidden h-[50px] w-[50px] relative bg-white">
                <img src={pic2} alt="Image 2" className="h-full w-full object-cover" />
              </div>
          
              <div className="flex flex-col">
                <div className="ml-10 mt-3">Microsoft Design·Follow</div>
                <div className="ml-10">Published in Microsoft Design·6 min read·3 days ago</div>
              </div>
            </div>
            <div className="h-[50px] w-[700px] border-2 border-silver">
              <div className="h-[50px] w-[700px] flex justify-between items-center">
                <div className="flex w-[150px] justify-between">
                  <div className="text-[30px] flex">
                    <PiHandsClappingLight className="icon hover:text-red-500" />
                  </div>
                  <h1 className="text-20px">1.3k</h1>
                  <div className="text-[30px]">
                    <BsChatFill className="icon hover:text-blue-500" />
                  </div>
                  <h1 className="text-20px">1.3k</h1>
                </div>
                <div className="flex justify-between w-[110px]">
                  <div className="text-[30px]">
                    <CiSaveDown2 className="icon hover:text-green-500" />
                  </div>
                  <div className="text-[30px]">
                    <MdOutlineSlowMotionVideo className="icon hover:text-purple-500" />
                  </div>
                  <div className="text-[30px]">
                    <CiShare1 className="icon hover:text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">How a design director’s experience with synesthesia influenced her learning in <br /> design
            <br />
            <br />
            <br />
            By Annice Jumani
            </div>
            <div className="mt-5">
              <img src={pic} className='h-[600px] w-[600px]' alt="Illustration" />
              <h1 className='ml-6'>All illustrations by Horacio Gutierrez</h1>
            </div>
            <div className=" w-[700px]">I’m seven-years old, sitting on the playground at elementary school, surrounded by my pint-sized peers from class. With the school’s spelling bee rapidly approaching, we’ve taken it upon ourselves to do some prep work. One of the boys, in a flurry of false bravado,
            
            claims he can spell anything. Naturally, we opt to test his conceit. “Spell minute,” someone shouts out. With a cocky grin he replies, “M-I-N-I-T.”
    
    
    I look at him like, what? Can you believe this guy? I take it upon myself to be the one to correct him. And then it happens. In just a  few words, I forever change my life.“That’s not right,” I blurt out. “You need yellow in there and blue at the end.”
    
    Everyone grows really quiet. They look at me like I’m from a different planet. Why? What did I do? A girl cracks, “Yellow? Blue? What does that mean?” I nervously say, “Well, ‘U’ is yellow and ‘E’ is blue
     so you actually spell it M-I-N-U-T-E.”
    
    More silence. It’s a deafening sound and the first time I really understand that the way I process things is very different from my classmates.</div>
          </div>
       
    </div>
  );
};

export default DetailPage;