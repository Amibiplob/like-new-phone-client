import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import Lottie from "lottie-react";
import img from "./../../Img/loading.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [myProduct, setMyProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myproduct?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyProduct(data));
  }, [user.email]);
  const navigate = useNavigate();
  const advertisedItem = (advertisedproduct) => {
    fetch("http://localhost:5000/AdvertisedItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertisedproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Item Advertised", { autoClose: 2000 });
        navigate("/");
      });
  };
  return (
    <div className="md:max-w-md lg:max-w-3xl xl:max-w-5xl p-3 mx-auto">
      {myProduct.length ? (
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
                <th>Advertised Item</th>
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
                  <th>{data.SubmitDate.slice(0, 10)}</th>
                  <th>{data.description}</th>

                  <th>
                    <img
                      className=" w-10 h-10 rounded-lg"
                      src={data.ProductImg}
                      alt={data.name}
                    ></img>
                  </th>
                  <th
                    onClick={() => advertisedItem(data)}
                    className="btn btn-info btn-sm btn-outline"
                  >
                    Advertised Item?
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
      ) : (
        <div className="flex flex-col items-center">
          <Lottie className="w-96" animationData={img} loop={true} />
          <h1 className="text-3xl  text-center">No Data Found</h1>
        </div>
      )}
    </div>
  );
};

export default MyProduct;
