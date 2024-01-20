import BlogCard from "./BlogCard";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 py-6 px-2 lg:grid-cols-3 lg:w-2/3 gap-6 mx-auto">
        <div className={`mx-auto w-full lg:col-span-2`}>
          <div className="mx-auto">
            <BlogCard />
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
