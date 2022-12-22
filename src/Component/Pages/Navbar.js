import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/UserContext";
import { SunIcon,MoonIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const { logOut, user, setDarkMode } = useContext(AuthContext);
  const logout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful", { autoClose: 2000 });
      })
      .catch((error) => {
        // An error happened.
        toast.error(error, { autoClose: 2000 });
      });
  };
  return (
    <div className="navbar bg-slate-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Like New Phone
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex">
          <li className="tooltip tooltip-bottom z-10" data-tip="Home">
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
          <li className="tooltip tooltip-bottom z-10" data-tip="Blog">
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
          <li className="tooltip tooltip-bottom z-10" data-tip="All Category">
            <NavLink to="/allcategory">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-blue-100 text-blue-600 hover:text-blue-800 round px-2 py-1 rounded-lg"
                      : "px-2 py-1 hover:bg-blue-100"
                  }
                >
                  All Category
                </span>
              )}
            </NavLink>
          </li>
          {!user?.uid && (
            <>
              <li className="tooltip tooltip-bottom z-10" data-tip="login">
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
              <li className="tooltip tooltip-bottom z-10" data-tip="Register">
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
            </>
          )}
          <li>
            <label className="swap">
              <input type="checkbox" />

              <MoonIcon
                onClick={() => setDarkMode(false)}
                className="swap-off fill-current w-6 h-6 mx-2 my-1"
              />
              <SunIcon
                onClick={() => setDarkMode(true)}
                className="swap-on fill-current w-6 h-6 mx-2 my-1"
              />
            </label>
          </li>
        </ul>
      </div>
      {user?.uid && (
        <>
          <div tabIndex={0} className="dropdown dropdown-hover dropdown-end">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user ? user.photoURL : "https://i.ibb.co/RygCB0T/avatar.png"
                  }
                  alt=""
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="shadow menu menu-compact dropdown-content bg-base-100 rounded-xl w-52"
            >
              <li className="bg-slate-200 hover:bg-slate-300 py-1 pl-4 text-center">
                Hi , {user?.displayName}
              </li>
              <li>
                <Link to="/dashboard/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li onClick={logout}>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
