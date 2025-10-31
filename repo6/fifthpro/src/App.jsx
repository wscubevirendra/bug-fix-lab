import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shows from "./components/Shows";
import About from "./components/About";

// Define routes as an array of objects
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/shows",
    element: (
      <>
        <Navbar />
        <Shows />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
]);

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
