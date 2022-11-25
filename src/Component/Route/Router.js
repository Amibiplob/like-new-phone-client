import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ResetPassword from "../Pages/ResetPassword";
import DashboardLayout from "./DashboardLayout";
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
    ],
  },
  {
    path: "/dashboard",
    element:<DashboardLayout></DashboardLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

export default router;