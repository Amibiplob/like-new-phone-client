import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCategory = () => {
  const [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/productcategory")
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  }, []);
  console.log(allCategory);
  const data = useLoaderData([]);
  console.log(data)
  return (
    <div>
      <h1 className="text-2xl text-center my-5"> All Category</h1>
      <div className="flex flex-wrap justify-center gap-5 my-5">
        {allCategory.map((data) => (
          <Link
            to={`../allproduct/${data.ProductCategory}`}
            key={data.id}
            className="card card-compact w-60 bg-base-100 shadow-2xl"
          >
            <figure className="px-5 pt-5">
              <img
                className=" rounded-xl"
                src={data.CategoryImg}
                alt={data.ProductCategory}
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.ProductCategory}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
