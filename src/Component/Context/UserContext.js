import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Firebase/Firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState("");

const createUser = (email ,password)=>{
  return createUserWithEmailAndPassword(auth, email, password);
};
const loginUser = (email ,password)=>{
  return signInWithEmailAndPassword(auth, email, password);
};
const resetPassword = (email)=>{
  return sendPasswordResetEmail(auth, email);
};
const googleSignin = (googleProvider)=>{
  return signInWithPopup(auth, googleProvider);
};






  const authInfo = {
    user,
    createUser,
    loginUser,
    resetPassword,
    googleSignin,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
