import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";
import { CiSaveDown2, CiShare1 } from "react-icons/ci";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import pic2 from "../../assets/bedroom.jpg";
import { useViewOneLaw } from "../../Components/custom/Hooks";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useState } from "react";

const DetailPage = () => {
  const { id } = useParams();
  const { getOne } = useViewOneLaw(id!);

  const [like, setLike] = useState<boolean>(false);

  const onLike = () => {
    setLike(true);
  };

  return (
    <div className="flex justify-center h-[100%] w-[100%]">
      <div className="w-[700px] h-[100%] flex items-center flex-col  text-black ">
        <h1 className="font-bold text-[40px] w-full">{getOne?.title}</h1>
        <div className="h-[100px] w-full flex mt-4">
          <div className="rounded-full overflow-hidden h-[50px] w-[50px] relative bg-white">
            <img
              src={pic2}
              alt="Image 2"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="ml-10 mt-3">Microsoft Design·Follow</div>
            <div className="ml-10">
              {moment(getOne.createdAt).fromNow()}
            </div>
          </div>
        </div>
        <div className="h-[50px] w-full flex justify-between items-center  px-2 border-2 border-silver rounded">
          <div className="flex w-[150px] justify-between ">
          <div className="flex items-end  justify-between">
             {like ? (
               <div className="text-[30px] ">
                 <MdFavorite
                   onClick={onLike}
                   className="text-red-500 hover:cursor-pointer"
                 />
               </div>
             ) : (
               <div className="text-[30px] ">
                 <MdOutlineFavoriteBorder
                   onClick={onLike}
                   className=" hover:cursor-pointer"
                 />
               </div>
             )}
           </div>
            <div className="flex gap-2 items-end">
              <BsChatFill className="icon hover:text-blue-500 text-[30px]" />
              <nav className="text-13px">1.3k</nav>
            </div>
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

        <div className="mt-4 w-full ">{getOne?.description}</div>
        <div className="mt-5">
          <img
            src={getOne?.image}
            className="h-[400px] w-[600px] object-fill"
            alt="Illustration"
          />
        </div>
        <div className=" w-full mt-3">{getOne?.content}</div>
      </div>
    </div>
  );
};

export default DetailPage;
