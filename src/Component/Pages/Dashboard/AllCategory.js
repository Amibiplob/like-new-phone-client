import React, { useEffect, useState } from "react";

const AllCategory = () => {
  const [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/productcategory")
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  }, []);
  console.log(allCategory);

  return (
    <div>
      <h1 className="text-2xl text-center my-5"> All Category</h1>
      <div className="grid justify-items-center gap-5 my-5 grid-cols-1 md:grid-cols-3 ">
        {allCategory.map((data) => (
          <div
            key={data.id}
            className="card card-compact w-96 bg-base-100 shadow-2xl"
          >
            <figure className="px-5 pt-5">
              <img
                className="h-52 w-80 rounded-xl"
                src={data.CategoryImg}
                alt={data.ProductCategory}
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.ProductCategory}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
