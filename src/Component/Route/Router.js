import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllCategory from "../Pages/Dashboard/AllCategory";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProduct from "../Pages/Dashboard/MyProduct";
import ProductCategory from "../Pages/Dashboard/ProductCategory";
import Profile from "../Pages/Dashboard/Profile";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ResetPassword from "../Pages/ResetPassword";
import DashboardLayout from "./DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/resetpassword",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "/allcategory",
        element: <AllCategory></AllCategory>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <PrivateRoute>
            <MyProduct></MyProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/productcategory",
        element: (
          <PrivateRoute>
            <ProductCategory></ProductCategory>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
