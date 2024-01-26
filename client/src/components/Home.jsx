import BlogCard from "./BlogCard";
import SideBar from "./SideBar";

const Home = () => {
  const blogs = [{ _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }];
  return (
    <>
      <div className="grid grid-cols-1 py-6 px-2 lg:grid-cols-3 lg:w-2/3 gap-6 mx-auto">
        <div className={`mx-auto w-full lg:col-span-2`}>
          <div className="mx-auto space-y-8">
            {blogs.map((e) => {
              return <BlogCard key={e._id} id={e._id} />;
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
