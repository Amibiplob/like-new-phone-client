import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
const SingleProduct = useLoaderData([]);
console.log(SingleProduct)
    return (
      <div>
        <div className="grid justify-items-center m-5">
          {SingleProduct.map((data) => (
            <div className="card bg-base-300 shadow-xl max-w-2xl">
              <figure>
                <img
                  className="rounded-xl"
                  src={data.ProductImg}
                  alt={data.name}
                />
              </figure>
              <div className="card-body p-3 md:p-8">
                <h2 className="card-title">
                  <span className="font-bold">Product Name : </span>
                  {data.productName}
                </h2>
                <p>
                  <span className="font-bold">Owner : </span>
                  {data.name}
                </p>
                <p>
                  <span className="font-bold">Owner Email : </span>
                  {data.email}
                </p>
                <p>
                  <span className="font-bold">Product Category : </span>
                  {data.productCategory}
                </p>

                <p>
                  <span className="font-bold">Location : </span>
                  {data.location}
                </p>
                <p>
                  <span className="font-bold">Mobile Number : </span>
                  {data.number}
                </p>
                <p>
                  <span className="font-bold">Product Price : $</span>
                  {data.productPrice}
                </p>

                <p>
                  <span className="font-bold">Submit Date : </span>
                  {data.SubmitDate.slice(0, 10)}
                </p>

                <p>
                  <span className="font-bold">productType : </span>
                  {data.productType}
                </p>
                <p>
                  <span className="font-bold">purchaseDate : </span>
                  {data.purchaseDate}
                </p>
                <p>
                  <span className="font-bold">Use Year : </span>
                  {data.useYear}
                </p>
                <p>
                  <span className="font-bold">Submit Date : </span>
                  {data.SubmitDate.slice(0, 10)}
                </p>
                <p>
                  <span className="font-bold">Description : </span>
                  {data.description}
                </p>

                <div className="card-actions justify-end">
                  <button  className="btn bg-green-900">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    );
};

export default ProductDetails;