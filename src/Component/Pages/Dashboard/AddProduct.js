import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const date = new Date();
  const imgbbKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        const Product = {
          name: data.name,
          email: data.email,
          description: data.description,
          location: data.location,
          number: data.number,
          productCategory: data.productCategory,
          productName: data.productName,
          productPrice: data.productPrice,
          productType: data.productType,
          purchaseDate: data.purchaseDate,
          useYear: data.useYear,
          SubmitDate: date,
          ProductImg: result.data.url,
        };

        fetch("http://localhost:5000/product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(Product),
        })
          .then((res) => res.json())
          .then((data) => {
            resetField("name");
            resetField("email");
            resetField("description");
            resetField("location");
            resetField("number");
            resetField("productCategory");
            resetField("productName");
            resetField("productPrice");
            resetField("productType");
            resetField("purchaseDate");
            resetField("useYear");
            toast.success("Thank you for Submit Product", { autoClose: 2000 });
            navigate("/");
          });
      });
  };
  return (
    <div>
      <div className="mx-5">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-2xl font-bold text-center">Add Product</h1>
          <div className="divider m-0"></div>
          <div className="flex gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>

              {user ? (
                <input
                  value={user?.displayName}
                  className="input input-bordered"
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
              ) : (
                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
              )}
              {errors.name && (
                <p className="text-red-400 mt-1">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>

              {user ? (
                <input
                  value={user?.email}
                  className="input input-bordered"
                  type="Email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
              ) : (
                <input
                  className="input input-bordered"
                  type="Email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
              )}
              {errors.email && (
                <p className="text-red-400 mt-1">{errors.email?.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Product Name"
                {...register("productName", {
                  required: "Product Name is required",
                })}
                aria-invalid={errors.productName ? "true" : "false"}
              />

              {errors.productName && (
                <p className="text-red-400 mt-1">
                  {errors.productName?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                className="input input-bordered"
                type="number"
                placeholder="Product Name"
                {...register("productPrice", {
                  required: "Product Price is required",
                })}
                aria-invalid={errors.productPrice ? "true" : "false"}
              />

              {errors.productPrice && (
                <p className="text-red-400 mt-1">
                  {errors.productPrice?.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Location</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Location"
                {...register("location", {
                  required: "Location is required",
                })}
                aria-invalid={errors.location ? "true" : "false"}
              />

              {errors.location && (
                <p className="text-red-400 mt-1">{errors.location?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Number</span>
              </label>
              <input
                minLength={10}
                maxLength={12}
                className="input input-bordered"
                type="tel"
                placeholder="Your Number"
                {...register("number", {
                  required: "Your number is required and must be 10 digits",
                })}
                aria-invalid={errors.number ? "true" : "false"}
              />

              {errors.number && (
                <p className="text-red-400 mt-1">{errors.number?.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>

              <select
                className="input input-bordered"
                {...register("productType", { required: true })}
              >
                <option value="Good">Good</option>
                <option value="Better">Better</option>
                <option value="Best">Best</option>
              </select>

              {errors.productType && (
                <p className="text-red-400 mt-1">
                  {errors.productType?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>

              <select
                className="input input-bordered"
                {...register("productCategory", { required: true })}
              >
                <option value="Good">Good</option>
                <option value="Better">Better</option>
                <option value="Best">Best</option>
              </select>

              {errors.productCategory && (
                <p className="text-red-400 mt-1">
                  {errors.productCategory?.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Purchase Date</span>
              </label>
              <input
                className="input input-bordered"
                type="date"
                placeholder="Purchase Date"
                {...register("purchaseDate", {
                  required: " Purchase Date is required",
                })}
                aria-invalid={errors.purchaseDate ? "true" : "false"}
              />

              {errors.purchaseDate && (
                <p className="text-red-400 mt-1">
                  {errors.purchaseDate?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Year of use</span>
              </label>

              <input
                className="input input-bordered"
                type="number"
                placeholder="Year of use"
                {...register("useYear", {
                  required: "Year of use is required",
                })}
                aria-invalid={errors.useYear ? "true" : "false"}
              />
              {errors.useYear && (
                <p className="text-red-400 mt-1">{errors.useYear?.message}</p>
              )}
            </div>
          </div>
       
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose a picture</span>
              </label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="w-full file-input-md file-input bg-slate-200"
                {...register("img", { required: true })}
              />
            </div>
         
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message/Description</span>
            </label>
            <textarea
              className="textarea textarea-info"
              placeholder="Your Description"
              {...register("description", {
                required: "Description is required",
              })}
              aria-invalid={errors.description ? "true" : "false"}
            ></textarea>
            {errors.description && (
              <p className="text-red-400 mt-1">{errors.description?.message}</p>
            )}
          </div>

          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
