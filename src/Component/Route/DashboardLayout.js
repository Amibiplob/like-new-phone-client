import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";

const DashboardLayout = () => {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>

      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
