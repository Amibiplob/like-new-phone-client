import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";

const DashboardLayout = () => {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-60 lg:w-80">
          <ul className="flex md:flex-col flex-row items-center justify-center gap-1 mt-3">
            <li className="bg-red-400 p-2 rounded-md btn btn-ghost w-full">
              <Link to='/dashboard'>Item 1</Link>
            </li>
          
            <li className="bg-yellow-500 p-2 rounded-md btn btn-ghost w-full">
              <Link to='/dashboard/login'>Item 1</Link>
            </li>
      
          </ul>
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
