import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  updateEmail,
  reauthenticateWithCredential,
  promptForCredentials,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [validAuth, setValidAuth] = useState({
    isAuth: false,
    role: 0,
  });
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  //Inscription
  function signup(email, password) {
    setValidAuth((s) => ({ ...s, isAuth: true }));
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //Login
  function signin(email, password, isRemember) {
    const persistence = isRemember
      ? browserLocalPersistence
      : browserSessionPersistence;

    console.log("persistence", persistence);

    setPersistence(auth, persistence);
    setValidAuth((s) => ({ ...s, isAuth: true }));
    return signInWithEmailAndPassword(auth, email, password);
  }

  //Logout
  function logout() {
    setValidAuth((s) => ({ ...s, isAuth: false }));
    return signOut(auth);
  }

  /**
   *
   * @param {Object} data
   */

  function updateUser(data) {
    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  }

  /**
   *
   * @param {String} newPwd
   */

  function updatePwd(newPwd) {
    updatePassword(user, newPassword);
  }

  /**
   *
   * @param {String} newmail
   */
  async function updateUserEmail(newMail) {
    let res = {};
    return updateEmail(auth.currentUser, newMail)
      .then(() => {
        // Email updated!
        // ...

        res.succes = true;
        res.error = false;
        return res;
      })
      .catch((error) => {
        // An error occurred
        // ...

        res.sucess = false;
        res.error = error;

        return res;
      });
  }

  function reAuth() {
    const credential = promptForCredentials();

    reauthenticateWithCredential(user, credential);
  }

  useEffect(() => {
    console.log("ON laod check user", currentUser);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      console.log("check", user);
      if (user) {
        const pseudo = user?.email.split("@");
        setCurrentUser((s) => ({ ...s, pseudo: pseudo[0] }));
        setValidAuth((s) => ({ ...s, isAuth: true, role: 0 }));
      }

      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        validAuth,
        signup,
        signin,
        logout,
        currentUser,
        updateUser,
        updateUserEmail,
        updatePwd,
        reAuth,
      }}
    >
      {!loadingData && children}
    </AuthContext.Provider>
  );
}
