import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-gray-600 mb-6">Page not found</p>
      <Link to="/" className="bg-pink-500 text-white px-4 py-2 rounded">Go Home</Link>
    </div>
  );
};

export default NotFound;
