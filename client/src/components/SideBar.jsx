import { useContext } from "react";
import imgi from "./assets/img/img.jpg";
import ThemeContext from "../context/ThemeContext";

const SideBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className={`w-full mx-auto lg:mx-2 lg:w-[300px] h-[150px] ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md px-4 py-8 grid grid-cols-4 gap-3 text-white`}>
          <div className="w-full h-[35px] bg-[#3b5999] hover:bg-[#4f6aa3] rounded flex items-center justify-center text-xl cursor-pointer">
            <i className="ri-facebook-fill"></i>
          </div>

          <div className="w-full h-[35px] bg-[#00acee] hover:bg-[#1ab4f0] rounded flex items-center justify-center text-xl cursor-pointer">
            <i className="ri-twitter-fill"></i>
          </div>

          <div className="w-full h-[35px] bg-[#f50000] hover:bg-[#f61a1a] rounded flex items-center justify-center text-xl cursor-pointer">
            <i className="ri-youtube-fill"></i>
          </div>

          <div className="w-full h-[35px] bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded flex items-center justify-center text-xl cursor-pointer">
            <i className="ri-instagram-line"></i>
          </div>

          <div className="w-full h-[35px] bg-[#ff5722] hover:bg-[#ff6838] rounded flex items-center justify-center text-xl cursor-pointer">
            <i className="ri-blogger-fill"></i>
          </div>

          <div className="w-full h-[35px] bg-[#4a76a8] hover:bg-[#5c84b1] rounded flex items-center justify-center text-xl cursor-pointer">
            <i className="ri-vk-line"></i>
          </div>

          <div className="w-full h-[35px] bg-[#ea4c89] hover:bg-[#ec5e95] rounded flex items-center justify-center text-xl cursor-pointer">
            <i className="ri-dribbble-fill"></i>
          </div>

          <div className="w-full h-[35px] bg-[#6441a5] hover:bg-[#7454ae] rounded flex items-center justify-center text-xl cursor-pointer">
            <i className="ri-twitch-fill"></i>
          </div>
        </div>

        {/* <div className={`w-full mx-auto lg:mx-2 md:w-[300px] ${theme === "dark" ? "bg-[#344955] text-white" : "bg-white text-[#344955]"} rounded-md p-4`}>
          <h3 className="font-extrabold text-xl md:text-lg">Popular Posts</h3>

          <div className="flex flex-col gap-4 m-2">
            <div className="flex gap-1 h-[62px]">
              <img src={imgi} alt="alt-img" className="w-[90px] h-[62px]" />
              <p className="text-base md:text-sm font-semibold hover:text-[#4298f8] cursor-pointer">12 Best CRM Software for Business in 2021</p>
            </div>

            <div className="flex gap-1 h-[62px]">
              <img src={imgi} alt="alt-img" className="w-[90px] h-[62px]" />
              <p className="text-base md:text-sm font-semibold hover:text-[#4298f8] cursor-pointer">12 Best CRM Software for Business in 2021</p>
            </div>

            <div className="flex gap-1 h-[62px]">
              <img src={imgi} alt="alt-img" className="w-[90px] h-[62px]" />
              <p className="text-base md:text-sm font-semibold hover:text-[#4298f8] cursor-pointer">12 Best CRM Software for Business in 2021</p>
            </div>
          </div>
        </div> */}

        <div className={`w-full mx-auto lg:mx-2 lg:w-[300px] ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md p-4`}>
          <h3 className=" font-extrabold text-xl md:text-lg">Recent Posts</h3>

          <div className="flex flex-col gap-4 m-2">
            <div className="flex gap-1 h-[62px]">
              <img src={imgi} alt="alt-img" className="w-[90px] h-[62px]" />
              <p className="text-base md:text-sm font-semibold hover:text-[#4298f8] cursor-pointer">12 Best CRM Software for Business in 2021</p>
            </div>

            <div className="flex gap-1 h-[62px]">
              <img src={imgi} alt="alt-img" className="w-[90px] h-[62px]" />
              <p className="text-base md:text-sm font-semiboldhover:text-[#4298f8] cursor-pointer">12 Best CRM Software for Business in 2021</p>
            </div>

            <div className="flex gap-1 h-[62px]">
              <img src={imgi} alt="alt-img" className="w-[90px] h-[62px]" />
              <p className="text-base md:text-sm font-semibold hover:text-[#4298f8] cursor-pointer">12 Best CRM Software for Business in 2021</p>
            </div>
          </div>
        </div>

        {/* <div className={`w-full mx-auto lg:mx-2 md:w-[300px] ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md p-4`}>
          <h3 className=" font-extrabold text-xl md:text-lg">Main Tags</h3>

          <div className="flex flex-wrap gap-3 my-2 text-base md:text-sm">
            <p className="text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-2 py-1 rounded cursor-pointer">Team</p>

            <p className="text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-2 py-1 rounded cursor-pointer">People</p>

            <p className="text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-2 py-1 rounded cursor-pointer">Search</p>

            <p className="text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-2 py-1 rounded cursor-pointer">Analytics</p>

            <p className="text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-2 py-1 rounded cursor-pointer">Marketing</p>

            <p className="text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-2 py-1 rounded cursor-pointer">SEO Tools</p>

            <p className="text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-2 py-1 rounded cursor-pointer">Team</p>

            <p className="text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-2 py-1 rounded cursor-pointer">Tips</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SideBar;
