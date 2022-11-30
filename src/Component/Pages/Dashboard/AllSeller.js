import React, { useEffect, useState } from 'react';

const AllSeller = () => {


  const [allSeller, setAllSeller] = useState([]);
  useEffect(() => {
    fetch("https://like-new-phone.vercel.app/allseller")
      .then((res) => res.json())
      .then((data) => setAllSeller(data));
  }, []);



console.log(allSeller)
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Account Type</th>
                <th>Profile Picture</th>
              </tr>
            </thead>
            <tbody>
              {allSeller.map((data, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.userRole}</td>
                  <th>
                    <img
                      className=" w-10 h-10 rounded-lg"
                      src={data.ProfilePic}
                      alt={data.Name}
                    ></img>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllSeller;