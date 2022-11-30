import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../useAdmin";

const Sidebar = () => {
 const { user } = useContext(AuthContext);
const [isAdmin]=useAdmin(user?.email)
console.log(isAdmin)
  return (
    <div className="md:w-60 lg:w-80">
      <ul className="flex md:flex-col  flex-wrap flex-row items-center justify-center gap-3 md:gap-1 my-3">
        <Link
          to="/dashboard/profile"
          className="p-2 rounded-md btn btn-ghost normal-case text-xl md:w-full bg-slate-200"
        >
          Profile
        </Link>
        <Link
          to="/dashboard/myorders"
          className="p-2 rounded-md btn btn-ghost normal-case text-xl md:w-full bg-slate-200"
        >
          My orders
        </Link>

        {isAdmin === "Seller" && (
          <>
            <Link
              to="/dashboard/addproduct"
              className="p-2 rounded-md btn btn-ghost normal-case text-xl md:w-full bg-slate-200"
            >
              Add Product
            </Link>
            <Link
              to="/dashboard/myproduct"
              className="p-2 rounded-md btn btn-ghost normal-case text-xl md:w-full bg-slate-200"
            >
              My Product
            </Link>
          </>
        )}

        {isAdmin === "admin" && (
          <>
            <Link
              to="/dashboard/productcategory"
              className="p-2 rounded-md btn btn-ghost normal-case text-xl md:w-full bg-slate-200"
            >
              Product Category
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
