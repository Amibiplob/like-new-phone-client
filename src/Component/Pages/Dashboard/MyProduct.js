import React, { useEffect, useState } from "react";

const MyProduct = () => {
  const [myProduct, setMyProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myproduct")
      .then((res) => res.json())
      .then((data) => setMyProduct(data));
  }, []);

  return (
    <div className="md:max-w-md lg:max-w-3xl xl:max-w-5xl p-3 mx-auto">
      <div className="overflow-scroll">
        <table className="table table-compact">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Mobile Number</th>
              <th>Product Category</th>
              <th>Product Name </th>
              <th>Product Price</th>
              <th>Product Type</th>
              <th>Purchase Date</th>
              <th>Year Of Use</th>
              <th>Submit Date</th>
              <th>Description</th>
              <th>Product Img</th>
            </tr>
          </thead>
          <tbody>
            {myProduct.map((data, i) => (
              <tr key={data._id}>
                <th>{i + 1}</th>
                <th>{data.name}</th>
                <th>{data.email}</th>
                <th>{data.location}</th>
                <th>{data.number}</th>
                <th>{data.productCategory}</th>
                <th>{data.productName}</th>
                <th>{data.productPrice}</th>
                <th>{data.productType}</th>
                <th>{data.purchaseDate}</th>
                <th>{data.useYear}</th>
                <th>{data.SubmitDate.slice(0,10)}</th>
                <th>{data.description}</th>

                <th className="avatar">
                  <div className="mask mask-squircle w-9 h-9">
                    <img src={data.ProductImg} alt={data.name}></img>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Mobile Number</th>
              <th>Product Category</th>
              <th>Product Name </th>
              <th>Product Price</th>
              <th>Product Type</th>
              <th>Purchase Date</th>
              <th>Year Of Use</th>
              <th>Submit Date</th>
              <th>Description</th>
              <th>Product Img</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
