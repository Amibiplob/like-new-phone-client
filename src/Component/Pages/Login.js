import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "./../Img/login-and-sign-up.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const [error, setError] = useState("");
  const [socialError, setSocialError] = useState("");
  const { loginUser, user, googleSignin, githubSignin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
console.log(user)


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
    const password = data.password;
    const email = data.email;
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
           resetField("email");
           resetField("password");
        const user = userCredential.user;
        toast.success("Hi , " + user.displayName, { autoClose: 5000 });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        toast.error(errorMessage);
      });
  };
  const SigninWithGoogle = () => {
    googleSignin(googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Hi , " + user.displayName, { autoClose: 5000 });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setSocialError(errorCode);
        toast.error(errorMessage);
 
      });
  };
const SigninWithGithub =()=>{
  githubSignin(githubProvider)
    .then((result) => {
  
      // The signed-in user info.
      const user = result.user;
       toast.success("Hi , " + user.displayName, { autoClose: 5000 });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
     setSocialError(errorCode);
     toast.error(errorMessage);
    });
}
  return (
    <div className="hero bg-slate-100 py-14">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <Lottie className="" animationData={img} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
            <h1 className="text-2xl font-bold text-center">Login Here</h1>
            <hr />
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
                {...register("password", {
                  required: "Password is required",
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="text-red-400 mt-1">{errors.password?.message}</p>
              )}
              <label className="label">
                <Link
                  to="/resetpassword"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
          <div className="card-body pt-2">
            <div className="divider mb-2">Login with social accounts</div>
            {socialError && (
              <p className="text-red-600 text-center">{socialError}</p>
            )}
            <div className="flex justify-evenly my-3">
              <button
                onClick={SigninWithGoogle}
                className="btn btn-ghost normal-case bg-slate-300 flex gap-2 px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <span>Google</span>
              </button>
              <button
                onClick={SigninWithGithub}
                className="btn btn-ghost normal-case bg-slate-300 flex gap-2 px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
                <span>Github</span>
              </button>
            </div>

            <h1 className="text-center">
              Don't have an account?
              <Link to="/register" className="link">
                Register
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
