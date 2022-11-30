import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
const Profile = () => {
  const { user, emailVerify } = useContext(AuthContext);
  const { displayName, email, emailVerified, photoURL, uid } = user;


  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/dbuser?email=${email}`)
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, [email]);

  const verify = () => {
    emailVerify().then(() => {
      // Email verification sent!
      toast.success("Email verification sent!", { autoClose: 2000 });
    });
  };
  return (
    <div className="py-5">
      <div className="flex flex-col md:flex-row md:justify-evenly items-center">
        <div className="avatar">
          <div className="w-24 md:w-60 rounded-full md:rounded-xl">
            <img src={photoURL} alt="displayName" />
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <h1 className="text-3xl">Name : {displayName}</h1>
            {emailVerified && (
              <div className="tooltip" data-tip="verify">
                <CheckBadgeIcon className="h-5 w-5 text-blue-500" />
              </div>
            )}

            <div className="tooltip" data-tip="Verify">
              <CheckBadgeIcon className="h-5 w-5 text-green-800" />
            </div>
          </div>
          {email ? <h1>Email : {email}</h1> : <h1>Email : Not Found</h1>}
          <h1>UID : {uid}</h1>
          {emailVerified ? (
            <h1>
              Email verification : <span className="text-green-700">True</span>
            </h1>
          ) : (
            <h1>
              Email verification : <span className="text-red-700">False</span>
              {email && (
                <span className="ml-3 link" onClick={verify}>
                  verify
                </span>
              )}
            </h1>
          )}

          {dbUser.map((data) => (
            <h1 key={data.userRole}>Your Account: {data.userRole}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
