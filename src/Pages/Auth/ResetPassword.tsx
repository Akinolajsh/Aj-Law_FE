import { Link, useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import logo from "../../assets/Untitled__4_-removebg-preview.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { ResetPasswordAPI } from "../../Apis/authApi";



const ResetPassword = () => {

const navigate= useNavigate()

  const schema = yup.object({
    email: yup.string().required(),
  });
  
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = handleSubmit(async (data) => {
    const { email } = data;
  
    ResetPasswordAPI({ email }).then((res) => {
      if (res) {
        Swal.fire({
          title: "Reset password succesfull😊",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        navigate("/change-password");
      } else {
        navigate("/reset-password")
        Swal.fire({
          title: "Error occured while resetting password 😢😢",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          icon: "error",
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
      }
    });
  });
  

  return (
    <div className="w-full h-full flex flex-col justify-center mt-11 items-center">
      <form className="w-[400px] flex flex-col items-center bg-white justify-center p-3 border rounded small:w-[300px]" onSubmit={onSubmit}>
        <div className="">
          <img src={logo} className="h-[120px] " />
        </div>
        {/* email */}
        <div className="border-b-2 h-[40px] w-full mt-6">
          <div className="flex">
            <input
              className=" w-full outline-none placeholder: text-[13px]"
              placeholder="Email Address"
              {...register("email")}
            />
            <FiMail className="text-rose-600 cursor-pointer" />
          </div>
         {
          errors?.email?.message && (
            <div className="text-[10px] text-rose-600 text-end italic">
            Please enter a email!
          </div>
          )
         }
        </div>
        {/* Button */}
        <button
          className="w-full bg-[rgb(255,192,23)] h-[40px] rounded-md text-slate-700 text-[14px] font-bold cursor-pointer mt-4 "
          type="submit"
        >
          Reset Password
        </button>
      </form>
      <div className="w-[400px] h-[80px] flex flex-col items-center bg-white justify-center p-5 border mt-1 rounded-b-md small:w-[300px]">
        {/* to Signin */}

        <div className="flex justify-center items-center  mt-1">
          <div className=" text-rose-700 text-[13px]">Remember Password</div>
          <Link to="/register">
            <div className="text-[13px] ml-2 text-slate-800 font-bold hover:text-rose-700 hover:cursor-pointer hover:underline">
              Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
