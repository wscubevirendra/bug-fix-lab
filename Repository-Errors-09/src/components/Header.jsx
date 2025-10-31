import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white shadow-md p-4 relative">
      {/* Logo Section */}
      <h1 className="text-2xl font-bold text-indigo-600">MyReactSite</h1>

      {/* Bar Icon */}
      <FaBars
        size={24}
        className="cursor-pointer text-gray-700 md:hidden"
        onClick={() => setOpen(!open)}
      />

      {/* Sidebar Navigation */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-indigo-500">
          Home
        </a>
        <a href="/about" className="hover:text-indigo-500">
          About
        </a>
        <a href="/contact" className="hover:text-indigo-500">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
