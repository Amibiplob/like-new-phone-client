import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItem = () => {
 const [advertisedItem, setAdvertisedItem] = useState([]);
 useEffect(() => {
   fetch("http://localhost:5000/AdvertisedItem")
     .then((res) => res.json())
     .then((data) => setAdvertisedItem(data));
 }, []);

 return (
    <div>
{
    advertisedItem.length !== 0 &&

   <div className="bg-slate-200 p-5">
     <h1 className="mb-3 text-3xl text-center">Advertised Item</h1>
     <div className="divider"></div>
     <div className="flex flex-wrap gap-5">
       {advertisedItem.slice(0, 6).map((data) => (
           <div
           key={data._id}
           className="card card-compact rounded-md bg-base-100 shadow-xl"
           >
           <figure>
             <img
               className="w-80"
               src={data.ProductImg}
               alt={data.ProductCategory}
               />
           </figure>

           <div className="p-2">
             <h2 className="card-title">{data.productName}</h2>
             <p>Location : {data.location}</p>
             <p>product Price : {data.productPrice} BDT</p>
           </div>
           <Link
             to={`../../productdetails/${data._id}`}
             className="btn btn-sm m-2"
             >
             Book Now
           </Link>
         </div>
       ))}
     </div>
   </div>
    }
       </div>
 );
};

export default AdvertisedItem;