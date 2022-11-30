import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import img from "./../Img/registration.json";
import Lottie from "lottie-react";
import { toast } from "react-toastify";
import app from "../Firebase/Firebase.init";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../Context/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
const auth = getAuth(app);
const Register = () => {
  const [error, setError] = useState("");
  const { createUser, loader, setLoader } = useContext(AuthContext);
  const imgbbKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = (data) => {
    const name = data.name;
    const password = data.password;
    const email = data.email;
    const userRole = data.type;

    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        const imgUrl = result.data.url;

 createUser(email, password)
   .then((userCredential) => {
     // Signed in
     const user = userCredential.user;
     toast.success("Profile updated", { autoClose: 1000 });
     resetField("name");
     resetField("email");
     resetField("password");
     updateProfile(auth.currentUser, {
       displayName: name,
       photoURL: imgUrl,
     })
       .then(() => {
         // Profile updated!
         navigate(from, { replace: true });
         const userDetails = {
           Name: name,
           Email: email,
           ProfilePic: imgUrl,
           ProviderId: user.providerId,
           userRole: userRole,
           UID: user.uid,
         };

         fetch("http://localhost:5000/user", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(userDetails),
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.acknowledged) {
               toast.success("Hi , " + user.displayName, {
                 autoClose: 5000,
               });
             }
           });
       })
       .catch((error) => {
         // An error occurred
         toast.error(error, { autoClose: 1000 });
       });
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     setError(errorCode);
     toast.error(errorMessage);
     setLoader(false);
   });


      })
      .catch((error) => {
        toast.error(error);
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
                placeholder="Email"
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
                {...register("img",{ required: true })}
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
              <input
                type="submit"
                className="btn btn-primary"
                value={loader ? "loading...." : "register"}
              />
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
