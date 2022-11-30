import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://like-new-phone.vercel.app/myorders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  console.log(myOrders);

  const pay = (data) => {
    console.log(data);
    fetch(`https://like-new-phone.vercel.app/myorders?id=${data}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        fetch(`https://like-new-phone.vercel.app/AdvertisedItem?id=${data}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        toast.success("Payment Confirm", { autoClose: 2000 });

        fetch(`https://like-new-phone.vercel.app/myorders?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => setMyOrders(data));
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((data, i) => (
              <tr key={data._id}>
                <th>{i + 1}</th>
                <td>{data.productName}</td>
                <td>{data.productPrice} BDT</td>
                {data.paymentStatus === "false" && (
                  <td>
                    <button
                      onClick={() => pay(data._id)}
                      className="btn btn-sm btn-outline"
                    >
                      Pay
                    </button>
                  </td>
                )}
                {data.paymentStatus === "true" && <td>Payment Compleate</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
