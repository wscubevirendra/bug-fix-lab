import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">MyReactSite</h3>
        <p className="text-sm mb-3">Building modern React applications with ❤️ and Tailwind CSS.</p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="#" className="hover:text-indigo-400">Privacy</a>
          <a href="#" className="hover:text-indigo-400">Terms</a>
          <a href="#" className="hover:text-indigo-400">Contact</a>
        </div>
        <p className="mt-4 text-xs">&copy; { Date().getFullYear()} MyReactSite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
