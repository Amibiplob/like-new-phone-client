import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
          <Bars3Icon className="h-6 w-6" />
        </label>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex gap-3">
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
            <Link to="/">Settings</Link>
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
