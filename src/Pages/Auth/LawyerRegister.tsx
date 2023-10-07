import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import logo from "../../assets/Untitled__4_-removebg-preview.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LawyerRegisterAPI } from "../../Apis/authApi";

const LawyerRegister = () => {
  const navigate = useNavigate();

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email().trim().lowercase(),
    secret: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { name, email,secret, password, confirm, } = data;
    LawyerRegisterAPI({ name, email, password, confirm,secret }).then((res: any) => {
      if (res) {
        Swal.fire({
          title: "You have been registered succesfully😊",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        navigate("/lawyer-sign-in");
      } else {
        navigate("/lawyer-register");
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
        console.log("first", res);
      }
    });
  });

  return (
    <div className="w-full h-full flex flex-col justify-center mt-11 items-center">
      <form
        className="w-[400px] flex flex-col items-center bg-white justify-center p-3 border rounded small:w-[300px] "
        onSubmit={onSubmit}
      >
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
        {/* full name */}
        <div className="border-b-2 h-[40px] w-full">
          <input
            className=" outline-none w-full placeholder: text-[13px]"
            placeholder="Name"
            {...register("name")}
          />
          {errors?.name?.message && (
            <div className="text-[10px] text-rose-600 text-end italic">
              Please enter a name!!
            </div>
          )}
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
        {/* secret */}
        <div className="border-b-2 h-[43px] w-full mt-6">
          {/* actual inputs */}
          <div className="flex">
            <input
              className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
              placeholder="secret"
              {...register("secret")}
            />
            <FiKey className="text-rose-600 cursor-pointer" />
          </div>
          {/* error */}{" "}
          {errors?.password?.message && (
            <div className="text-[10px] text-rose-600 text-end mb-3 italic">
              Please enter a secret!
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
        {/* confirm password */}
        <div className="border-b-2 h-[43px] w-full mt-6">
          {/* actual inputs */}
          <div className="flex">
            <input
              className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
              placeholder="confirm password"
              {...register("confirm")}
            />
            <FiKey className="text-rose-600 cursor-pointer" />
          </div>
          {/* error */}
          {errors?.confirm?.message && (
            <div className="text-[10px] text-rose-600 text-end mb-3 italic">
              Please enter a confirm password!
            </div>
          )}
        </div>

        {/* Button */}
        <button
          className="w-full bg-[rgb(255,192,23)] h-[40px] rounded-md text-slate-700 text-[14px] font-bold cursor-pointer mt-4 "
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="w-[400px] h-[80px] flex flex-col items-center bg-white justify-center p-5 border mt-1 rounded-b-md small:w-[300px] ">
        {/* to Signin */}
        <div className="flex justify-center items-center  mt-4">
          <div className=" text-rose-700 text-[13px]">
            Already have an account?
          </div>
          <Link to="/sign-in">
            <div className="text-[13px] ml-2 text-slate-800 font-bold hover:text-rose-700 hover:cursor-pointer hover:underline">
              Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawyerRegister;
