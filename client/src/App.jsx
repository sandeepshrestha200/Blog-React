import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
