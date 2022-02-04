import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "./../../../firebase/firebase.config";
import { collection, addDoc, setDoc, onSnapshot } from "firebase/firestore";

export const DbContext = createContext();

export default function DbProvider({ children }) {
  const [currentCollection, setCurentCollection] = useState([]);

  function createCollection() {}
  function readCollection() {}
  function setCollection() {}
  function deleteCollection() {}

  /*
      document
      
      */

  async function createDocument(table, data) {
    const collectionRef = collection(db, table);
    const docRef = await addDoc(collectionRef, data);
    return docRef;
  }
  function readDocument() {}
  function setDocument() {}
  function deleteDocument() {}

  useEffect(() => {
    const call_firestore = () => {};

    return call_firestore();
  }, []);

  return (
    <DbContext.Provider
      value={{
        currentCollection,
        createCollection,
        readCollection,
        setCollection,
        deleteCollection,
        readDocument,
        createDocument,
        setDocument,
        deleteDocument,
      }}
    >
      {children}
    </DbContext.Provider>
  );
}
