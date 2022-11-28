import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProductCategory = () => {
  const imgbbKey = process.env.REACT_APP_imgbb_key;




  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      productcategory: "",
    },
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
        const ProductCategory = {
          ProductCategory: data.productcategory,
          CategoryImg: result.data.url,
        };

        fetch("http://localhost:5000/productcategory", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ProductCategory),
        })
          .then((res) => res.json())
          .then((data) => {
            resetField("productcategory");

            toast.success("Product Category Added", { autoClose: 2000 });
          });
      });



      

      




  };
  console.log(errors);

  return (
    <div className="flex justify-center bg-slate-100 py-20">
      <div className="w-3/4 md:w-2/4">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-2xl font-bold text-center">
            Add Product Category
          </h1>
          <hr />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Category</span>
            </label>

            <input
              className="input input-bordered"
              type="text"
              placeholder="Product Category"
              {...register("productcategory", {
                required: "Product Category is required",
              })}
              aria-invalid={errors.productcategory ? "true" : "false"}
            />
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

          {errors.productcategory && (
            <p className="text-red-400 mt-1">
              {errors.productcategory?.message}
            </p>
          )}
          <div className="form-control mt-6">
            <input type="submit" className="btn" value="Add Category" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCategory;
