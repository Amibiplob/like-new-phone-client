import React from "react";
import { useForm } from "react-hook-form";
import img from './../Img/registration.json'
import Lottie from "lottie-react";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.img[0]);
  };
  console.log(errors);

  return (
    <div className="hero bg-slate-100 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:text-left">
          <h1 className="text-5xl font-bold text-center">Register now!</h1>
          <Lottie className="w-96" animationData={img} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-2xl font-bold text-center">Register Here</h1>
            <hr/>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered"
                type="Text"
                placeholder="name"
                {...register("name", { required: true })}
              />
            </div>
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
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose a profile picture</span>
              </label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="w-full file-input-md file-input bg-slate-200"
                {...register("img")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Account Type</span>
              </label>

              <div className="flex justify-around border">
                <label className="label cursor-pointer justify-start gap-2 hover:bg-slate-100 rounded">
                  <span className="label-text">Normal</span>
                  <input
                    {...register("type", { required: true })}
                    type="radio"
                    value="Normal"
                    checked
                  />
                </label>

                <label className="label cursor-pointer justify-end gap-2 hover:bg-slate-100 rounded">
                  <span className="label-text">Seller</span>
                  <input
                    {...register("type", { required: true })}
                    type="radio"
                    value="Seller"
                  />
                </label>
              </div>
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

export default Register;
