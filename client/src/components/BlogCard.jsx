import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import imgi from "./assets/img/img.jpg";

const BlogCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mx-auto space-y-8">
      {/* card div */}
      <div className={`p-4 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
        <h3 className="font-bold text-2xl hover:text-blue-600 cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ea.</h3>
        <p className="py-3">
          by <span className="text-[#366bea] font-medium">Author</span> : timestamp
        </p>
        <div className="sm:flex ">
          <img src={imgi} alt="" className="w-[344px] h-[200px] sm:w-[145px] sm:h-[100px] rounded-md" />
          <div className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio ab sapiente dolore, fugiat natus facere sequi praesentium minima vero.</div>
        </div>
      </div>

      <div className={`p-4 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
        <h3 className="font-bold text-2xl hover:text-blue-600 cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ea.</h3>
        <p className="py-3">
          by <span className="text-[#366bea] font-medium">Author</span> : timestamp
        </p>
        <div className="sm:flex ">
          <img src={imgi} alt="" className="w-[344px] h-[200px] sm:w-[145px] sm:h-[100px] rounded-md" />
          <div className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio ab sapiente dolore, fugiat natus facere sequi praesentium minima vero.</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
