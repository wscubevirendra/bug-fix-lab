import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-white font-bold text-lg">ShopNest</h3>
          <p className="text-sm mt-2">A demo eCommerce clone built with React + Tailwind.</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          <p>© {new Date().getFulYear()} ShopNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
