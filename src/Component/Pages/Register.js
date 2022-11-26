import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import img from "./../Img/registration.json";
import Lottie from "lottie-react";
import { toast } from "react-toastify";
import app from "../Firebase/Firebase.init";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
const auth = getAuth(app);
const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const imgbbKey = process.env.REACT_APP_imgbb_key;
    const {
      register,
      resetField,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onChange",
      defaultValues: {
        firstName: "",
      },
    });
  const onSubmit = (data) => {
    const name = data.name;
    const password = data.password;
    const email = data.email;

    const image = new FormData();
    image.append("image", data.img[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "PUT",
      body: image,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        toast.error(error);
      });

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Profile updated", { autoClose: 1000 });
        console.log(user);
           resetField("name");
           resetField("email");
           resetField("password");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://i.ibb.co/RygCB0T/avatar.png",
        })
          .then(() => {
            // Profile updated!
            toast.success("Hi , " + user.displayName, { autoClose: 5000 });
          })
          .catch((error) => {
            // An error occurred
            toast.success(error, { autoClose: 1000 });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        toast.error(errorMessage);
      });
  };

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
            <hr />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered"
                type="Text"
                placeholder="name"
                {...register("name", { required: "Name is required" })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-red-400 mt-1">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                className="input input-bordered"
                type="Email"
                placeholder="Name"
                {...register("email", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-400 mt-1">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered"
                type="Password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="text-red-400 mt-1">{errors.password?.message}</p>
              )}
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
            {error && <p className="text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            <h1 className="text-center">
              Already have an account?
              <Link to="/login" className="link">
                Log in
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
