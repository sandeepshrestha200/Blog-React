import { useContext } from "react";
import imgi from "./assets/img/img.jpg";
import ThemeContext from "../context/ThemeContext";

const BlogCard = () => {
  // const { theme } = useContext(ThemeContext);

  return (
    <div className="md:w-[650px] bg-white mb-[20px] p-4 rounded-md overflow-hidden">
      <h2 className="font-bold text-[#344955] text-[1.75rem] mb-2">12 title Lorem ipsum, dolor sit amet. dolor sit amet.</h2>
      <p className="text-gray-400">
        by <span className="text-[#4285F4]">Sandeep Shrestha</span> | Jan 12, 2024
      </p>
      <div className="mt-4 sm:flex">
        <img src={imgi} alt="" className="w-[344px] h-[200px] sm:w-[145px] sm:h-[100px] rounded-md mb-4 sm:mr-4" />
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos cupiditate quasi possimus deleniti, totam, assumenda sed esse quis eaque quisquam
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
