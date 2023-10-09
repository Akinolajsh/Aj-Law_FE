import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { interpreteLaw } from "../../Apis/lawApi";
import { user, userState } from "../../Components/custom/Jotai";
import { useRecoilState, useRecoilValue } from "recoil";

const CreateLaw = () => {
  const navigate = useNavigate();
  const [state, setState] = useRecoilState(user);
  const value:string = useRecoilValue(user);
  const stateToken:string = useRecoilValue(userState);

  console.log("reading users value: ",  value)

  const userID: any = state;

  console.log(setState);
  const [image, setimage] = useState<string>("");
  const [avatar, setavatar] = useState<string>();

  const onHandleImage = (e: any) => {
    const localImage = e.target.files[0];
    const saveImage = URL.createObjectURL(localImage);
    setimage(localImage);
    setavatar(saveImage);
  };

  const model = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    content: yup.string().required(),
    category: yup.string().required(),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { title, description, content, category } = data;
    console.log("first", data);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", image);
    console.log("first", formData);

    console.log("reading users: ", value)

    interpreteLaw(value, formData).then((res: any) => {
      console.log(res)
      // if (res) {
        Swal.fire({
          title: "You have been registered succesfully😊",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        navigate("/");
      // } else {
      //   navigate("/create-law");
      //   Swal.fire({
      //     title: "Error occured while registering 😢😢",
      //     showClass: {
      //       popup: "animate_animated animate_fadeInDown",
      //     },
      //     icon: "error",
      //     hideClass: {
      //       popup: "animate_animated animate_fadeOutUp",
      //     },
      //   });
      // }

    });
  });

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      {/* main */}
      <div className="w-[70%] h-[100vh] flex items-center justify-between relative medium:w-[80%] small:w-[90%] small:mt-[80px]">
        <form
          className="flex  w-[100%] justify-between   small:flex-col"
          onSubmit={onSubmit}
        >
          {/* left */}
          <div className="w-[45%] small:w-[80%]">
            <nav>Preview</nav>
            <img
              className="w-[100%] h-[200px] bg-[#f4f4f4] border-[#f4f4f4]"
              src={avatar}
            />
            <label
              className="w-[30px] h-[30px] flex items-center justify-center border-[1px] rounded-[50%] border-[#5c5c5c] left-[435px] top-[345px] absolute cursor-pointer text-black text-[18px] medium:left-[260px] medium:top-[310px]
                small:left-[215px] small:top-[170px]
                "
              htmlFor="image"
            >
              <AiOutlineCamera />
            </label>
            <input
              placeholder="image"
              className="hidden"
              id="image"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={onHandleImage}
            />
            {/* <nav>Title:</nav> */}
            <div className="border-b-[1px] border-[#acacac]h-[35px] w-[100%] flex items-center mt-4">
              <div className="flex w-[100%]">
                <input
                  className="h-[100%] outline-none placeholder: text-[17px] font-bold flex-1 bg-transparent placeholder:text-[#0000009f] my-1"
                  placeholder="Write a preview title"
                  {...register("title")}
                
                />
                  {errors?.title?.message && (
                    <div className="text-[13px] text-red-400">Please input this field</div>
                  )}
              </div>
            </div>
            <div className="border-b-[1px] border-[#acacac] h-[35px] w-[100%] flex items-center mt-4">
              <div className="flex w-[100%]">
                <textarea
                  className="h-[100%] outline-none placeholder: text-[13px] flex-1 bg-transparent placeholder:text-[#0000009f] font-medium resize-none"
                  placeholder="Write a description..."
                  {...register("description")}
                />
                 {errors?.description?.message && (
                    <div className="text-[13px] text-red-400">Please input this field</div>
                  )}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[45%] small:w-[100%]">
            <div className="flex small:mt-5">
              <nav className="text-[#5e5d5d] mr-3 small:mr-2 ">
                Published by:
              </nav>
              Richard01
            </div>
            <br />

            <div className="border-[1px] px-2 py-6   border-[#acacac]h-[35px] w-[100%] flex items-center mt-4">
              <div className="flex w-[100%]">
                <textarea
                  className="h-[100%] outline-none placeholder: text-[14px] font-medium flex-1 bg-transparent placeholder:text-[#0000009f] my-1 resize-none"
                  placeholder="Write a preview content "
                  {...register("content")}
                />
                 {errors?.content?.message && (
                    <div className="text-[13px] text-red-400">Please input this field</div>
                  )}
              </div>
            </div>
            <div className="border-[1px] px-2 py-2 border-[#acacac]h-[35px] w-[150px] flex items-center mt-4">
              <div className="flex w-[100%] h-[50px]">
                <input
                  className="h-[100%] outline-none placeholder: text-[14px] font-medium flex-1 bg-transparent placeholder:text-[#0000009f] my-1"
                  placeholder="Category"
                  {...register("category")}
                />
                 {errors?.category?.message && (
                    <div className="text-[13px] text-red-400">Please input this field</div>
                  )}
              </div>
            </div>
            <br />
            <div className="text-[13px]">
              Learn more about what happens to your post when you publish.
            </div>
            <br />
            <button
              className="h= h-[40px] w-[120px] bg-black text-[white] font-medium"
              type="submit"
              onClick={()=>{
                
              }}
            >
              Publish now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLaw;
