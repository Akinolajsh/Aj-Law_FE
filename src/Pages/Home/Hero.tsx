import img from "../../assets/law_library_clinics-removebg-preview.png"

const Hero = () => {
    return (
      <div className="w-[100%] h-[550px] small:h-[400px] flex items-center justify-center border-[black] border-b-[1px] bg-[rgb(96,38,17)] medium:h-[400px]">
          {/* main */}
          <div className="w-[90%] h-[100%] flex items-centerbg-[rgb(255,192,23)] relative">
              {/* left */}
              <div className="flex justify-center flex-col text-[white]">
                  <nav className="text-[80px] 
                  font-[gt-super, Georgia, Cambria,Times New Roman, Times, serif] 
                  font-[600] small:leading-[1]
                   small:text-[70px] medium:text-[50px]">Stay curious.</nav>
                  <nav className="text-[24px] leading-[1] font-[500] w-[65%] small:w-[90%] small:text-[20px] small:font-[400] my-[30px] medium:text-[20px] medium:w-[100%]"> Discover stories, thinking, and expertise from writers on any
                topic.</nav>
  
                <button className="py-[9px] w-[200px] bg-black text-white rounded-[20px]">Start Reading</button>
              </div>
              {/* right */}
              <div className="flex items-center justify-center small:hidden ">
                <img src={img}/>
              </div>
          </div>
          {/* main */}
      </div>
    )
  }
  
  export default Hero