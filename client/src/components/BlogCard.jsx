import { useContext } from "react";
import DOMPurify from "dompurify";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { RiEditBoxLine, RiDeleteBin5Line } from "@remixicon/react";

const BlogCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const { id, title, author, content, image, date, showAlert, getUserBlogs } = props;
  const history = useNavigate();

  const backend_base = import.meta.env.VITE_BACKEND_BASE;
  const imgUrl = import.meta.env.VITE_BACKEND_IMG;
  const accessToken = localStorage.getItem("accessToken");

  const purify = (content) => {
    return DOMPurify.sanitize(content);
  };

  const deleteBlog = async (id) => {
    try {
      const res = await fetch(`${backend_base}/api/blogs/deleteblog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "access-token": accessToken,
        },
      });

      if (res.success) {
        showAlert("Blog deleted successfully", "error");
        getUserBlogs();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const viewBlog = (id) => {
    history(`/blog/${id}`);
  };

  return (
    <div className="mx-auto">
      {/* card div */}
      <div className={`p-4 w-full cursor-pointer ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
        <div className="flex justify-between">
          <h3
            className="font-bold text-2xl hover:text-blue-600 cursor-pointer"
            onClick={() => {
              viewBlog(id);
            }}
          >
            {title}
          </h3>
          <div className="flex space-x-4">
            <RiEditBoxLine size={28} className="hover:text-blue-400 text-blue-500" />
            <RiDeleteBin5Line
              onClick={() => {
                deleteBlog(id);
              }}
              size={28}
              className="hover:text-red-400 text-red-500"
            />
          </div>
        </div>
        <div
          onClick={() => {
            viewBlog(id);
          }}
        >
          <p className="py-3">
            by <span className="text-[#366bea] font-medium">{author}</span> | {date}
          </p>
          <div className="sm:flex ">
            <img src={`${imgUrl}${image}`} alt={title} className="w-[344px] h-[200px] sm:w-[145px] sm:h-[100px] rounded-md" />
            <div className="px-2" dangerouslySetInnerHTML={{ __html: purify(content) }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  showAlert: PropTypes.func,
  getUserBlogs: PropTypes.func,
};
