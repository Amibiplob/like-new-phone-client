import { createBrowserRouter } from "react-router-dom";
import AllProduct from "../Pages/AllProduct";
import Blog from "../Pages/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import AllCategory from "../Pages/Dashboard/AllCategory";
import AllSeller from "../Pages/Dashboard/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProduct";
import ProductCategory from "../Pages/Dashboard/ProductCategory";
import Profile from "../Pages/Dashboard/Profile";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductDetails from "../Pages/ProductDetails";
import Register from "../Pages/Register";
import ResetPassword from "../Pages/ResetPassword";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import DashboardLayout from "./DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";
import SellerRoute from "./SellerRoute";

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
      {
        path: "/allproduct/:product",
        loader: ({ params }) =>
          fetch(
            `https://like-new-phone.vercel.app/allproduct/${params.product}`
          ),
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/productdetails/:product",
        loader: ({ params }) =>
          fetch(
            `https://like-new-phone.vercel.app/productdetails/${params.product}`
          ),
        element: <ProductDetails></ProductDetails>,
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
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/productcategory",
        element: (
          <AdminRoute>
            <ProductCategory></ProductCategory>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/Myorders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
