import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FlapperSpinner } from 'react-spinners-kit';
import { AuthContext } from '../Context/UserContext';
import useAdmin from '../useAdmin';

const BuyerRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
const [isAdmin, isAdminLoading] = useAdmin(user?.email);

const location = useLocation();
if (user && isAdmin === "Normal") {
  return children;
}
if (loader || isAdminLoading) {
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

export default BuyerRoute;