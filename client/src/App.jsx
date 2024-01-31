import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SingleBlog from "./components/SingleBlog";
import CreateBlog from "./components/CreateBlog";
import GoToTop from "./components/GoToTop";
import { useLogin } from "./context/LoginContext.jsx";

import Alert from "./components/Alert.jsx";

const App = () => {
  const [alert, setAlert] = useState(null);
  const [User, setUser] = useState([]);
  const { loggedin } = useLogin();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const accessToken = localStorage.getItem("accessToken");

  const fetchUser = async () => {
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "access-token": accessToken,
      },
    });
    const userData = await response.json();
    setUser(userData);
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      loggedin();
    }
    if (accessToken) {
      fetchUser();
      // Call the login function from the context to set the user as logged in
      loggedin();
    }
  }, [loggedin, accessToken]);

  return (
    <>
      <BrowserRouter>
        <Navbar showAlert={showAlert} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/blog/:id" element={<SingleBlog />} />
          <Route exact path="/blog/create" element={<CreateBlog username={User.username} userId={User._id} showAlert={showAlert} />} />
        </Routes>

        <GoToTop />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
