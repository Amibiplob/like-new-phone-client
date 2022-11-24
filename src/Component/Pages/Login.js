import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "./../Img/login-and-sign-up.json";
import Lottie from "lottie-react";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="hero bg-slate-100 py-14">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <Lottie className="" animationData={img} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-2xl font-bold text-center">Login Here</h1>
            <hr />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                className="input input-bordered"
                type="Email"
                placeholder="Name"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered"
                type="Password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <label className="label">
                <Link
                  to="/resetpassword"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
