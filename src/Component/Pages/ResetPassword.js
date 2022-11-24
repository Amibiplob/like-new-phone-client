import React from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {


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
      <div className="flex justify-center bg-slate-100 py-20">
        <div className='w-3/4 md:w-2/4 lg:w-1/4'>
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

            <div className="form-control mt-6">
              <input type="submit" className="btn" value="Reset Password" />
            </div>
          </form>
        </div>
      </div>
    );
};

export default ResetPassword;