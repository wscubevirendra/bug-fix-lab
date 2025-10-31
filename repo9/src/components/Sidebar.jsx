import React from "react";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <IoMdClose
          size={28}
          className="cursor-pointer text-gray-600"
          onClick={() => setOpen(false)}
        />
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-6 text-center text-lg font-medium">
        <a href="/" className="hover:text-indigo-600" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="/about" className="hover:text-indigo-600" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="/contact" className="hover:text-indigo-600" onClick={() => setOpen(false)}>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
