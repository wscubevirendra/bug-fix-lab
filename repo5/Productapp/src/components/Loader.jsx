import React from "react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mb-4"></div>
      <div className="text-gray-500">{text}</div>
    </div>
  );
};

export default Loader;
