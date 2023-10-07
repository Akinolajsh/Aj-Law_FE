import { useState } from "react"
import {AiOutlineCamera} from "react-icons/ai"
import GlobalButtonProps from "../../Components/global/GlobalButtonProps"

const CreateLaw = () => {
    const [image, setimage] = useState<string>("")
    const [avatar, setavatar] = useState<string>()

    const onHandleImage = (e: any) => {
      const localImage = e.target.files[0]
      const saveImage = URL.createObjectURL(localImage)
      setimage(localImage)
      setavatar(saveImage)
    }
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
        {/* main */}
        <div className="w-[70%] h-[100vh] flex items-center justify-between relative medium:w-[80%] small:w-[90%] small:mt-[80px]">
            <div className="flex  w-[100%] justify-between   small:flex-col">
            {/* left */}
            <div className="w-[45%] small:w-[80%]">
                <nav>Preview</nav>
            <img className="w-[100%] h-[200px] bg-[#f4f4f4] border-[#f4f4f4]" src={avatar}/>
                <label className="w-[30px] h-[30px] flex items-center justify-center border-[1px] rounded-[50%] border-[#5c5c5c] left-[435px] top-[345px] absolute cursor-pointer text-black text-[18px] medium:left-[260px] medium:top-[310px]
                small:left-[215px] small:top-[170px]
                " htmlFor="image">
                    <AiOutlineCamera/></label>
                    <input placeholder="image"
                        className="hidden"
                        id='image'
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={onHandleImage}
                    />
                {/* <nav>Title:</nav> */}
                <div className="border-b-[1px] border-[#acacac]h-[35px] w-[100%] flex items-center mt-4">
          <div className="flex w-[100%]">
            <input
              className="h-[100%] outline-none placeholder: text-[17px] font-bold flex-1 bg-transparent placeholder:text-[#0000009f] my-1"
              placeholder="Write a preview title"/>
            </div>
            </div>
                <div className="border-b-[1px] border-[#acacac] h-[35px] w-[100%] flex items-center mt-4">
          <div className="flex w-[100%]">
            <input
              className="h-[100%] outline-none placeholder: text-[13px] flex-1 bg-transparent placeholder:text-[#0000009f] font-medium"
              placeholder="Write a preview subtitle..."/>
            </div>
            </div>
            </div>
            {/* right */}
            <div className="w-[45%] small:w-[100%]">
                <div className="flex small:mt-5"><nav className="text-[#5e5d5d] mr-3 small:mr-2 ">Publishing to:</nav>Richard01</div>
                <br/>
                <div className="text-[14px] w-[100%] medium:text-[13px] small:text-[13px]">Add or change topics (up to 5) so readers know what your story is about</div>
                
                <div className="border-[1px] px-2 py-2 border-[#acacac]h-[35px] w-[100%] flex items-center mt-4">
          <div className="flex w-[100%]">
            <input
              className="h-[100%] outline-none placeholder: text-[14px] font-medium flex-1 bg-transparent placeholder:text-[#0000009f] my-1"
              placeholder="Write a preview content"/>
            </div>
            </div>
                <div className="border-[1px] px-2 py-2 border-[#acacac]h-[35px] w-[30%] flex items-center mt-4">
          <div className="flex w-[100%]">
            <input
              className="h-[100%] outline-none placeholder: text-[14px] font-medium flex-1 bg-transparent placeholder:text-[#0000009f] my-1"
              placeholder="Category"/>
            </div>
            </div>
            <br/>
                <div className="text-[13px]">Learn more about what happens to your post when you publish.</div>
                <br/>
                <GlobalButtonProps h="h-[40px]" w="w-[120px]" text="Get started" bg="bg-black" col="text-[white]" font="medium"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CreateLaw