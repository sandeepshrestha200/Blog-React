import { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="px-6 py-2 md:py-4 md:px-10 lg:px-16 flex items-center justify-between border-b-2 border-purple h-[56px] bg-[#344955] text-white">
      <div className="text-2xl font-bold xl:w-1/5 lg:px-6 py-3 logo-title">
        <Link to="/">Blogger</Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden text-xl md:flex justify-between font-semibold">
        <li className="hover:text-[#4285F4] inline px-6 py-3 cursor-pointer">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-[#4285F4] inline px-6 py-3 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-[#4285F4] inline px-6 py-3 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hidden text-xl md:flex justify-between items-center font-semibold">
        <Toggle />
        <li className="hover:text-[#4285F4] inline px-6 py-3 cursor-pointer">
          <Link to="/login">Log in</Link>
        </li>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex gap-2 items-center">
        <Toggle />

        <div
          onClick={toggleMobileMenu}
          className="bg-[#2c3e48] rounded-lg text-white font-bold cursor-pointer inline py-2 px-3 border-2 border-[#4285F4] hover:bg-white hover:text-[#2c3e48] text-xl"
        >
          {isMobileMenuOpen ? <i className="ri-close-fill"></i> : <i className="ri-menu-fill"></i>}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul
          className="fixed top-0 left-0 bottom-0 w-1/2 text-2xl py-32 md:hidden font-semibold bg-[#4285F4]/50 px-6 text-white duration-700 animate__animated animate__fadeInLeftBig"
          // onClick={toggleMobileMenu}
        >
          <li className="hover:text-[#4285F4] px-6 py-3 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#4285F4] px-6 py-3 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#4285F4] px-6 py-3 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-[#4285F4] px-6 py-3 cursor-pointer">
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
