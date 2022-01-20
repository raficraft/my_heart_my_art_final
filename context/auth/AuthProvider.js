import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [validAuth, setValidAuth] = useState({
    isAuth: false,
    role: 0,
  });

  console.log("???", auth);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  //Inscription
  function signup(email, password) {
    setValidAuth((s) => ({ ...s, isAuth: true }));
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //Login
  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //Logout
  function logout() {
    return auth.signOut(auth);
  }

  useEffect(() => {
    setValidAuth((s) => ({ ...s, isAuth: false, role: 0 }));
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ validAuth, signup, signin, logout, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
