import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import img from "./../Img/error.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
      <div className="">
        <Navbar></Navbar>
        <div className="flex flex-col items-center justify-center  min-h-screen">
          <Lottie animationData={img} loop={true} />
          <h1 className="text-3xl">
            OOPS! ErrorPage Return to
            <Link to="/" className="bg-red-300 px-3 rounded hover:bg-red-400">
              Home
            </Link>
          </h1>
        </div>
      </div>
    );
};

export default ErrorPage;