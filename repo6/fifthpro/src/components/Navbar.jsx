import React from "react";
import  Link  from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-2xl">🎬 TVMaze Explorer</h1>
      <div className="space-x-5">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/shows" className="hover:text-yellow-300">Shows</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;

