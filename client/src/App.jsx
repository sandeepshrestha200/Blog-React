import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SingleBlog from "./components/SingleBlog";
import CreateBlog from "./components/CreateBlog";
import GoToTop from "./components/GoToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/blog/:id" element={<SingleBlog />} />
          <Route exact path="/blog/create" element={<CreateBlog />} />
        </Routes>

        <GoToTop />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
