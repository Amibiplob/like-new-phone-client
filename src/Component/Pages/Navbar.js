import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-slate-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
         Like New Phone
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex">
          <li className="tooltip tooltip-bottom" data-tip="Home">
            <NavLink to="/home">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-blue-100 text-blue-600 hover:text-blue-800 round px-2 py-1 rounded-lg"
                      : "px-2 py-1 hover:bg-blue-100"
                  }
                >
                  Home
                </span>
              )}
            </NavLink>
          </li>
          <li className="tooltip tooltip-bottom" data-tip="Blog">
            <NavLink to="/blog">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-blue-100 text-blue-600 hover:text-blue-800 round px-2 py-1 rounded-lg"
                      : "px-2 py-1 hover:bg-blue-100"
                  }
                >
                  Blog
                </span>
              )}
            </NavLink>
          </li>
          <li className="tooltip tooltip-bottom" data-tip="login">
            <NavLink to="/login">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-blue-100 text-blue-600 hover:text-blue-800 round px-2 py-1 rounded-lg"
                      : "px-2 py-1 hover:bg-blue-100"
                  }
                >
                  Login
                </span>
              )}
            </NavLink>
          </li>
          <li className="tooltip tooltip-bottom" data-tip="Register">
            <NavLink to="/register">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-blue-100 text-blue-600 hover:text-blue-800 round px-2 py-1 rounded-lg"
                      : "px-2 py-1 hover:bg-blue-100"
                  }
                >
                  Register
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div tabIndex={0} className="dropdown dropdown-hover dropdown-end">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="shadow menu menu-compact dropdown-content bg-base-100 rounded-xl w-52"
        >
          <li className="bg-slate-200 hover:bg-slate-300 py-1 pl-4 text-center">
            biplob
          </li>
          <li>
            <Link to="/" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
