import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brand")
    .then((res)=>res.json())
    .then((data)=>setCategory(data))
  }, []);
  console.log(category)
  return (
    <div className="bg-slate-300 p-5">
      <h1 className="mb-3 text-3xl">Category</h1>
      <div className="flex gap-5">
      {category.map((data) => (
          <Link to='/dashboard/profile' className="card card-compact rounded-md bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-40"
              src="https://placeimg.com/400/225/arch"
              alt=""
              />
          </figure>
          <div className="p-2">
            <h2 className="card-title">Apple</h2>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Category;
