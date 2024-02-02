import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const { id, title, author, content, image, date } = props;
  const history = useNavigate();

  const imgUrl = import.meta.env.VITE_BACKEND_IMG;

  const viewBlog = (id) => {
    history(`/blog/${id}`);
  };

  return (
    <div className="mx-auto">
      {/* card div */}
      <div
        className={`p-4 w-full cursor-pointer ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}
        onClick={() => {
          viewBlog(id);
        }}
      >
        <h3 className="font-bold text-2xl hover:text-blue-600 cursor-pointer">{title}</h3>
        <p className="py-3">
          by <span className="text-[#366bea] font-medium">{author}</span> | {date}
        </p>
        <div className="sm:flex ">
          <img src={`${imgUrl}${image}`} alt={title} className="w-[344px] h-[200px] sm:w-[145px] sm:h-[100px] rounded-md" />
          <div className="px-2">{content}</div>
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
};
