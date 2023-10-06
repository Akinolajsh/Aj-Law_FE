
import { FiKey } from "react-icons/fi";
import logo from "../../assets/Untitled__4_-removebg-preview.png";

const ChangePassword = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center mt-11 items-center">
      <form className="w-[400px] flex flex-col items-center bg-white justify-center p-3 border rounded small:w-[300px] ">

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
            />
            <FiKey className="text-rose-600 cursor-pointer" />
          </div>
          {/* error */}{" "}
          <div className="text-[10px] text-rose-600 text-end mb-3 italic">
            Please enter a password!
          </div>
        </div>  {/* confirm password */}
              <div className="border-b-2 h-[43px] w-full mt-6">
                {/* actual inputs */}
                <div className="flex">
                  <input
                    className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
                    placeholder="confirm password"
                  />
                  <FiKey className="text-rose-600 cursor-pointer" />
                </div>
                {/* error */}
               <div className="text-[10px] text-rose-600 text-end mb-3 italic">
                Please enter a confirm password!
              </div>
              
              </div>
        {/* Button */}
        <button
          className="w-full bg-[rgb(255,192,23)] h-[40px] rounded-md text-slate-700 text-[14px] font-bold cursor-pointer mt-4 "
          type="submit"
        >
          Change Password
        </button>
      </form>
    </div>
  )
}

export default ChangePassword