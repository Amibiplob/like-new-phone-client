import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';

const ProductDetails = () => {
const SingleProduct = useLoaderData([]);

  const { user } = useContext(AuthContext);
  const { displayName, email:userEmail } = user;




const confirmBooking=()=>{
      toast.success("Your Booking Is Confirm", { autoClose: 5000 });
}



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
                  <span className="font-bold">User Name : </span>
                  {displayName}
                </p>
                <p>
                  <span className="font-bold">User Email : </span>
                  {userEmail}
                </p>
                <p>
                  <span className="font-bold">Owner Name : </span>
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
                  <label htmlFor="Booking-modal" className="btn bg-green-900">
                    Book Now
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="Booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="Booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-3xl font-bold">Booking Product</h3>
            <div className="divider m-2"></div>
            {SingleProduct.map((data) => (
              <div className="flex flex-col gap-2">
                <h2 className="text-lg flex">
                  <span className="font-bold">Product Name   :   </span>
                   {data.productName} 
                </h2>

                <p>
                  <span className="font-bold">Your Name : </span>
                  <input
                    readOnly
                    defaultValue={displayName}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>
                <p>
                  <span className="font-bold">Your Email : </span>
                  <input
                    readOnly
                    defaultValue={userEmail}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>
                <p>
                  <span className="font-bold">Owner Name : </span>
                  <input
                    readOnly
                    defaultValue={data.name}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>
                <p>
                  <span className="font-bold">Owner Email : </span>

                  <input
                    readOnly
                    defaultValue={data.email}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>
                <p>
                  <span className="font-bold">Product Category : </span>
                  <input
                    readOnly
                    defaultValue={data.productCategory}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs  max-w-xs"
                  />
                </p>

                <p>
                  <span className="font-bold">Location : </span>

                  <input
                    readOnly
                    defaultValue={data.location}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>
                <p>
                  <span className="font-bold">Mobile Number : </span>

                  <input
                    readOnly
                    defaultValue={data.number}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>
                <p>
                  <span className="font-bold">Product Price : </span>

                  <input
                    readOnly
                    defaultValue={`${data.productPrice} BDT`}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>

                <p>
                  <span className="font-bold">Submit Date : </span>

                  <input
                    readOnly
                    defaultValue={data.SubmitDate.slice(0, 10)}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>

                <p>
                  <span className="font-bold">productType : </span>

                  <input
                    readOnly
                    defaultValue={data.productType}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>
                <p>
                  <span className="font-bold">purchaseDate : </span>

                  <input
                    readOnly
                    defaultValue={data.purchaseDate}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>
                <p>
                  <span className="font-bold">Use Year : </span>

                  <input
                    readOnly
                    defaultValue={data.useYear}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>

                <p>
                  <span className="font-bold">Description : </span>

                  <input
                    readOnly
                    defaultValue={data.description}
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>



                
                <p>
                  <span className="font-bold">Your Number : </span>

                  <input
                    
                    
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>



                <p>
                  <span className="font-bold">Metting Location : </span>

                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost text-lg  input-xs max-w-xs"
                  />
                </p>




              </div>
            ))}

            <div className="flex justify-end mt-5">
              <label
                onClick={confirmBooking}
                htmlFor="Booking-modal"
                className="btn btn-sm bg-green-900"
              >
                Confirm Booking
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;