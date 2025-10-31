import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Outlet /> {/* Page content renders here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
