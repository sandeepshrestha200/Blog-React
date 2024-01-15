import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="grid grid-cols-1 py-10 lg:grid-cols-2 w-5/6 gap-[10px] mx-auto">
          <div className="">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
          <div className="">
            <SideBar />
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
