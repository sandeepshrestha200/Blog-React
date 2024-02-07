import { useContext, useState, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import { useLogin } from "../context/LoginContext";
import { RiAddCircleFill } from "@remixicon/react";
import { useNavigate, Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const MyProfile = () => {
  const backend_base = import.meta.env.VITE_BACKEND_BASE;
  const accessToken = localStorage.getItem("accessToken");

  // const history = useNavigate();
  // const { isLoggedIn } = useLogin();
  const { theme } = useContext(ThemeContext);
  const [userData, setUserData] = useState([]);
  const [userBlogs, setUserBlogs] = useState([]);
  const maxWords = 50; //maximum number of words to display in the cards

  // Function to limit the number of words in the content
  const limitWords = (text, maxWords) => {
    const words = text.split(/\s+/);
    return words.slice(0, maxWords).join(" ");
  };

  const getUserData = async () => {
    const response = await fetch(`${backend_base}/api/auth/getuser`, {
      method: "POST",
      headers: { "access-token": accessToken },
    });
    const parseData = await response.json();
    setUserData(parseData);
  };

  const getUserBlogs = async () => {
    const response = await fetch(`${backend_base}/api/blogs/fetchuserblogs`, {
      method: "POST",
      headers: { "access-token": accessToken },
    });
    const parsedBlogs = await response.json();

    // Update the content with a limited number of words for each blog
    const updatedBlogs = parsedBlogs.map((blog) => ({
      ...blog,
      content: limitWords(blog.content, maxWords),
    }));

    setUserBlogs(updatedBlogs);
  };

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     history("/login");
  //   }
  //   getUserData();
  //   getUserBlogs();
  //   //eslint-disable-next-line
  // }, [token, maxWords]);

  useEffect(() => {
    
    getUserData();
    getUserBlogs();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 py-6 px-2 lg:grid-cols-3 lg:w-2/3 gap-6 mx-auto">
        <div className={`mx-auto w-full lg:col-span-2`}>
          <div className="space-y-8">
            {/* card div */}
            <div className={`py-4 px-6 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
              <div className="grid grid-cols-2">
                <div>
                  <h1 className="text-2xl capitalize font-bold">{userData.username}</h1>
                  <h1 className="text-xl lowercase">{userData.email}</h1>
                </div>
                <div>
                  <Link to="/blog/create">
                    <RiAddCircleFill
                      size="46"
                      className="hover:text-[#4285F4] cursor-pointer flex items-center h-full text-center" // add custom class name
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className={`py-2 px-6 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
              <h1 className="text-lg">Hello</h1>
            </div> */}
            {userBlogs.map((blog) => {
              return (
                <>
                  <BlogCard key={blog._id} id={blog._id} title={blog.title} image={blog.imageUrl} content={blog.content} author={blog.author_name} date={blog.dateTime} />
                </>
              );
            })}
          </div>
        </div>
        <div className={`py-2 px-6 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
          <h1 className="text-lg">Hello</h1>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
