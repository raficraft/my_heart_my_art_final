import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [validAuth, setValidAuth] = useState({
    isAuth: false,
    role: 0,
  });

  const [currentUser, setCurrentUser] = useState();

  //Inscription
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //Login
  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //Logout
  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ validAuth, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
