import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
const Profile = () => {
  const { user, emailVerify } = useContext(AuthContext);
  const { displayName, email, emailVerified, photoURL, uid } = user;


  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    fetch(`https://like-new-phone.vercel.app/dbuser?email=${email}`)
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
              <div className="tooltip" data-tip="Firebase Verify">
                <CheckBadgeIcon className="h-5 w-5 text-blue-500" />
              </div>
            )}
            {dbUser[0] && (
              <>
                {dbUser.map((data) => (
                  <div key={data._id}>
                    {data.adminVerify === "true" && (
                      <div className="tooltip" data-tip="Admin Verify">
                        <CheckBadgeIcon className="h-5 w-5 text-green-800" />
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
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

          {dbUser[0] ? (
            <>
              {dbUser.map((data) => (
                <h1 key={data.userRole}>Your Account: {data.userRole}</h1>
              ))}
            </>
          ) : (
            <h1>Your Account: Normal</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
