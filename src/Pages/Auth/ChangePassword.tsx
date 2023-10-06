import { FiKey } from "react-icons/fi";
import logo from "../../assets/Untitled__4_-removebg-preview.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { ChangePasswordAPI } from "../../Apis/authApi";
import { useNavigate, useParams } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
const {token}= useParams()
  const model = yup.object({
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data) => {
    // const {password, confirm } = data;
    // console.log("first", data);
    ChangePasswordAPI(token, data).then((res: any) => {
      if (res) {
        Swal.fire({
          title: "Password succesfully changed😊",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        navigate("/sign-in");
      } else {
        // navigate("/:token/change-password");
        Swal.fire({
          title: "Error occured while changing password 😢😢",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          icon: "error",
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        // console.log("first", res);
      }
      console.log("first", res)
    });
  });

  return (
    <div className="w-full h-full flex flex-col justify-center mt-11 items-center">
      <form className="w-[400px] flex flex-col items-center bg-white justify-center p-3 border rounded small:w-[300px] " onSubmit={onSubmit}>
        <div className="">
          <img src={logo} className="h-[120px] " />
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
        {
          errors?.password?.message && (
            <div className="text-[10px] text-rose-600 text-end mb-3 italic">
            Please enter a password!
          </div>
          )
        }
        </div>{" "}
        {/* Button */}
        <button
          className="w-full bg-[rgb(255,192,23)] h-[40px] rounded-md text-slate-700 text-[14px] font-bold cursor-pointer mt-4 "
          type="submit"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
