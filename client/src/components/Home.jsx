import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import SideBar from "./SideBar";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const backend_base = import.meta.env.VITE_BACKEND_BASE;


  const fetchBlogs = async () => {
    const response = await fetch(`${backend_base}/api/blogs/fetcharticles`, {
      method: "GET",
    });
    const parseData = await response.json();
    setBlogs(parseData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 py-6 px-2 lg:grid-cols-3 lg:w-2/3 gap-6 mx-auto">
        <div className={`mx-auto w-full lg:col-span-2`}>
          <div className="mx-auto space-y-8">
            {blogs.map((blog) => {
              return (
                <>
                  <BlogCard key={blog._id} id={blog._id} title={blog.title} image={blog.imageUrl} content={blog.content} author={blog.author_name} date={blog.dateTime} />
                </>
              );
            })}
          </div>
        </div>
        <div>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Home;
