import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllProduct = () => {

const allProduct=useLoaderData([])

    return (
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-5 m-5">
        {allProduct.map((data) => (
          <div className="card w-96 bg-base-300 shadow-xl">
            <figure>
              <img
                className="rounded-xl"
            src={data.ProductImg} alt={data.name}
              />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title"><span className='font-bold'>Product Name : </span>{data.productName}</h2>
              <p><span className='font-bold'>Product Category : </span>{data.productCategory}</p>
              
             
              <p><span className='font-bold'>Location : </span>{data.location}</p>
              <p><span className='font-bold'>Mobile Number : </span>{data.number}</p>
              <p><span className='font-bold'>Product Price : $</span>{data.productPrice}</p>
     
              <p><span className='font-bold'>Submit Date : </span>{data.SubmitDate.slice(0, 10)}</p>
              <p><span className='font-bold'>Description : </span>{data.description}</p>

              <div className="card-actions justify-end">
                <Link to={`./${data._id}`} className="btn btn-sm bg-green-900">Product Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default AllProduct;