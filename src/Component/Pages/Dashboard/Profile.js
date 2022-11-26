import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { displayName, email, emailVerified, photoURL, uid } = user;
  return (
    <div className="py-5">
      <div className="flex flex-col md:flex-row md:justify-evenly items-center">
        <div className="avatar">
          <div className="w-24 md:w-60 rounded-full md:rounded-xl">
            <img src={photoURL} alt="displayName" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Name : {displayName}</h1>
          {email ? <h1>Email : {email}</h1> : <h1>Email : Not Found</h1>}
          <h1>UID : {uid}</h1>
          {emailVerified ? (
            <h1>
              email Verified : <span className="text-green-400">True</span>
            </h1>
          ) : (
            <h1>
              email Verified : <span className="text-red-400">False</span>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
