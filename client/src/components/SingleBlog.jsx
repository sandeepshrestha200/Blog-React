import { useContext, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import SideBar from "./SideBar";
import ThemeContext from "../context/ThemeContext";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { theme } = useContext(ThemeContext);
  const backend_base = import.meta.env.VITE_BACKEND_BASE;
  const [blog, setBlog] = useState([]);
  const { id } = useParams();

  const purify = (content) => {
    return DOMPurify.sanitize(content);
  };

  const fetchBlog = async () => {
    const response = await fetch(`${backend_base}/api/blogs/${id}`, {
      method: "GET",
    });
    const parseData = await response.json();
    setBlog(parseData);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 py-6 px-2 lg:grid-cols-3 lg:w-2/3 gap-6 mx-auto">
        <div className={`mx-auto w-full lg:col-span-2`}>
          <div className="space-y-8">
            {/* card div */}
            <div className={`py-2 px-6 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
              <h3 className={`font-bold text-3xl hover:text-[#366bea] cursor-pointer my-3 ${theme === "dark" ? "text-white" : "text-[#344955]"}`}>{blog.title}</h3>
              <p className="my-4 text-[#919ca2]">
                by <span className="text-[#366bea] font-bold cursor-pointer">{blog.author_name}</span> | {blog.dateTime}
              </p>
              <hr className="my-5" />
              <img src={`${backend_base}/images/${blog.imageUrl}`} alt="title" className="my-5 mx-auto rounded-md w-full" />
              <hr className="my-5" />
              <p className="text-justify text-[#919ca2] text-lg" dangerouslySetInnerHTML={{ __html: purify(blog.content) }}></p>
            </div>
          </div>
        </div>
        <div>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
