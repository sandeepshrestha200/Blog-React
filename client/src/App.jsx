import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import SingleBlog from "./components/SingleBlog";
import CreateBlog from "./components/CreateBlog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="grid grid-cols-1 py-6 px-2 lg:grid-cols-3 lg:w-2/3 gap-6 mx-auto">
          <div className="mx-auto w-full lg:col-span-2">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/blog/:id" element={<SingleBlog />} />
              <Route exact path="/blog/create" element={<CreateBlog />} />
            </Routes>
          </div>
          <div className="">
            <SideBar />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
