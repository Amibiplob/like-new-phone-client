import React, { useEffect, useState } from "react";

const AllBuyer = () => {
  const [allBuyer, setAllBuyer] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allbuyer")
      .then((res) => res.json())
      .then((data) => setAllBuyer(data));
  }, []);

  console.log(allBuyer);
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
            {allBuyer.map((data, i) => (
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

export default AllBuyer;
