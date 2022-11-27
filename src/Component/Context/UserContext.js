import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const resetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };
  const googleSignin = (googleProvider) => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignin = (githubProvider) => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };









  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    resetPassword,
    googleSignin,
    githubSignin,
    logOut,
    loader,
    emailVerify,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
