import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FlapperSpinner } from "react-spinners-kit";
import { AuthContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loader) {
    return (
      <div className="flex items-center justify-center h-96">
        <FlapperSpinner size={100} color="#686769" />
      </div>
    );
  }
  return (
    <Navigate to="../../login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
