import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-60 lg:w-80">
      <ul className="flex md:flex-col flex-row items-center justify-center gap-3 md:gap-1 my-3">
        <Link to="/dashboard/profile" className="p-2 rounded-md btn btn-ghost normal-case text-xl md:w-full bg-slate-200">
      Profile
        </Link>
        <Link to="/dashboard/addproduct" className="p-2 rounded-md btn btn-ghost normal-case text-xl md:w-full bg-slate-200">
   Add Product
        </Link>

      </ul>
    </div>
  );
};

export default Sidebar;
