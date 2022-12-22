import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllSeller = () => {


  const [allSeller, setAllSeller] = useState([]);
  useEffect(() => {
    fetch("https://like-new-phone.vercel.app/allseller")
      .then((res) => res.json())
      .then((data) => setAllSeller(data));
  }, []);

  const adminVerify = (id) => {
    fetch(`https://like-new-phone.vercel.app/alluser/?id=${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("User Verified", { autoClose: 5000 });

        fetch("https://like-new-phone.vercel.app/allseller")
          .then((res) => res.json())
          .then((data) => setAllSeller(data));
      });
  };

  const removeUser = (id) => {
    fetch(`https://like-new-phone.vercel.app/alluser?id=${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          fetch("https://like-new-phone.vercel.app/allseller")
            .then((res) => res.json())
            .then((data) => setAllSeller(data));
          toast.success("The user was successfully removed.", {
            autoClose: 5000,
          });
        } else {
          toast.error("No user found. Deleted 0 user", {
            autoClose: 5000,
          });
        }
      });
  };

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
                <th>User Verify</th>
                <th>Remove User</th>
              </tr>
            </thead>
            <tbody>
              {allSeller.map((data, i) => (
                <tr key={i}>
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
                  {data.adminVerify ? (
                    <td>
                      <span className="text-green-900 py-1 px-3 rounded-md">
                        verified
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span
                        onClick={() => adminVerify(data._id)}
                        className="bg-slate-500 py-1 px-3 rounded-md btn btn-sm"
                      >
                        verify
                      </span>
                    </td>
                  )}
                  <td>
                    <span
                      onClick={() => removeUser(data._id)}
                      className="py-1 px-3 rounded-md btn btn-sm btn-error btn-outline"
                    >
                      remove user
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllSeller;