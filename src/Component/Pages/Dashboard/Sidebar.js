import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-60 lg:w-80">
      <ul className="flex md:flex-col flex-row items-center justify-center gap-3 md:gap-1 my-3">
        <Link to="/dashboard" className="p-2 rounded-md btn btn-ghost normal-case text-xl md:w-full bg-slate-200">
          Item 1
        </Link>

        {/* <li className=" p-2 rounded-md btn btn-ghost">
          <Link to="/dashboard/login">Item 1</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
