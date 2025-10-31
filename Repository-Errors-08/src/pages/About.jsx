import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-3">About ShopNest</h2>
      <p className="text-gray-700">
        ShopNest is a demo eCommerce clone built to showcase React, Tailwind CSS, routing, state management, and API integration using DummyJSON.
      </p>
      <ul className="mt-4 list-disc list-inside text-gray-600">
        <li>Products fetched from DummyJSON API</li>
        <li>Search & filters</li>
        <li>Cart with persistence (localStorage)</li>
        <li>Responsive Tailwind UI</li>
      </ul>
    </div>
  );
};

export default About;
