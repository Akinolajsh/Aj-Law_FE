import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import logo from "../../assets/Untitled__4_-removebg-preview.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { SignInAPI } from "../../Apis/authApi";

const SignIn = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;

    SignInAPI({ email, password }).then((res) => {
      if (res) {
        Swal.fire({
          title: "you have been registered succesfully😊",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        navigate("/sign-in");
      } else {
        navigate("/");
        Swal.fire({
          title: "Error occured while registering 😢😢",
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
      <form className="w-[400px] flex flex-col items-center bg-white justify-center p-3 border rounded small:w-[300px] " onSubmit={onSubmit}>
        {/* title */}
        <div className="">
          <img src={logo} className="h-[120px] " />
        </div>
        <div className=" flex items-center justify-center px-4 w-[100%] h-[35px]  text-[15px] rounded-lg mb-2 cursor-pointer text-black border border-blue-300">
          <div className="mr-2">
            <BsGoogle />
          </div>
          Login with G <span className="text-[red]">oo</span> <span>g</span>{" "}
          <span className="text-[blue]">l</span> <span>e</span>
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
          {errors?.email?.message && (
            <div className="text-[10px] text-rose-600 text-end italic">
              Please enter a email!
            </div>
          )}
        </div>
        {/* password */}
        <div className="border-b-2 h-[43px] w-full mt-6">
          {/* actual inputs */}
          <div className="flex">
            <input
              className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
              placeholder="password"
              {...register("password")}
            />
            <FiKey className="text-rose-600 cursor-pointer" />
          </div>
          {/* error */}{" "}
          {errors?.password?.message && (
            <div className="text-[10px] text-rose-600 text-end mb-3 italic">
              Please enter a password!
            </div>
          )}
        </div>
        {/* Button */}
        <button
          className="w-full bg-[rgb(255,192,23)] h-[40px] rounded-md text-slate-700 text-[14px] font-bold cursor-pointer mt-4 "
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div className="w-[400px] h-[80px] flex flex-col items-center bg-white justify-center p-5 border mt-1 rounded-b-md small:w-[300px]">
        {/* to Signin */}

        <div className="flex justify-center items-center  ">
          <Link to="/reset-password">
            <div className="text-[13px] ml-2 text-slate-800 font-bold hover:text-rose-700 hover:cursor-pointer hover:underline ">
              Forget Password
            </div>
          </Link>
        </div>

        <div className="flex justify-center items-center  mt-1">
          <div className=" text-rose-700 text-[13px]">
            Don't have an Account?
          </div>
          <Link to="/register">
            <div className="text-[13px] ml-2 text-slate-800 font-bold hover:text-rose-700 hover:cursor-pointer hover:underline">
              Register
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
