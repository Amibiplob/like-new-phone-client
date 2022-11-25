import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';

const ResetPassword = () => {
  const [error, setError] = useState("");
  const { resetPassword} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;


resetPassword( email)
  .then(() => {
    // Password reset email sent!
    toast.info("Password reset email sent!", { autoClose: 2000 });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode);
    toast.error(errorMessage);
  });


  };
  console.log(errors);






    return (
      <div className="flex justify-center bg-slate-100 py-20">
        <div className="w-3/4 md:w-2/4 lg:w-1/4">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-2xl font-bold text-center">
              Reset Password Here
            </h1>
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
            {error && <p className="text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <input type="submit" className="btn" value="Reset Password" />
            </div>
          </form>
        </div>
      </div>
    );
};

export default ResetPassword;