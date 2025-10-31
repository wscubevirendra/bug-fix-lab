import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Layout component to wrap Navbar, Footer, and Outlet
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Define routes
const routers = createBrowserRouter([
  
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}
