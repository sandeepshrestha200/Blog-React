import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const CreateBlog = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="mx-auto space-y-8">
        {/* card div */}
        <div className={`p-4 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
          <h3 className={`font-bold text-2xl inline-block ${theme === "dark" ? "text-white" : "text-[#344955]"}`}>Create a Blog</h3>
          <form></form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
