import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // navigate to products with query param
    if (q.trim()) navigate(`/products?q=${encodeURIComponent(q.trim())}`);
    else navigate("/products");
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-extrabold tracking-tight">
              <span className="bg-white/20 px-3 py-1 rounded-md">ShopNest</span>
            </Link>
            <Link
              to="/products"
              className="hidden md:inline-block bg-white/10 px-3 py-1 rounded-md hover:bg-white/20"
            >
              Collections
            </Link>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-2xl mx-4 hidden sm:flex items-center"
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products, brands..."
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button className="bg-white text-pink-600 px-4 py-2 rounded-r-lg font-semibold">
              Search
            </button>
          </form>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Link to="/about" className="hidden sm:inline-block">
              About
            </Link>
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-md hover:bg-white/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M16 11V9a4 4 0 10-8 0v2H4a1 1 0 000 2h1a3 3 0 006 0h2a3 3 0 006 0h1a1 1 0 100-2h-3z" />
              </svg>
              <span className="font-semibold">{totalItems}</span>
            </Link>
          </div>
        </div>

        {/* mobile search */}
        <div className="sm:hidden py-2">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-3 py-2 rounded-l-lg text-gray-800"
            />
            <button className="bg-white text-pink-600 px-3 py-2 rounded-r-lg font-semibold">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
