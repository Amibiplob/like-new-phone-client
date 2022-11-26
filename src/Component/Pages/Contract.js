import React from "react";
import { useForm } from "react-hook-form";
import img from "./../Img/message-sent-successfully-plane.json";
import Lottie from "lottie-react";
import { toast } from "react-toastify";
const Contract = () => {
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
    const email = data.email;
    const message = data.message;

    const Contract = {
      Name: name,
      Email: email,
      Message: message,
    };

    fetch("http://localhost:5000/contract", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Contract),
    })
      .then((res) => res.json())
      .then((data) => {
        resetField("name");
        resetField("email");
        resetField("message");
       toast.success(
         "Thank you for contracting us. We will contract very soon.",
         { autoClose: 2000 }
       );
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-slate-100">
      <div className=" md:w-1/3 hidden md:block">
        <Lottie className="w-96" animationData={img} loop={true} />
      </div>
      <div className="flex justify-center md:w-1/2">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-2xl font-bold text-center">Contract Us</h1>
            <div className="divider m-0"></div>
            <div className="flex gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>

                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-400 mt-1">{errors.name?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                className="textarea textarea-info"
                placeholder="Your Message"
                {...register("message", {
                  required: "Message is required",
                })}
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              {errors.message && (
                <p className="text-red-400 mt-1">{errors.message?.message}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Contract Us"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contract;
