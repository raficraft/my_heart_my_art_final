import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  /**
   * Modal Initial Context
   */
  const [modal, setModal] = useState({
    signin: false,
    signup: false,
  });

  function openModal(modal) {
    setModal((s) => ({ ...s, [modal]: true }));
  }

  function closeModal() {
    setModal((s) => ({ ...s, signin: false, signup: false }));
  }

  return (
    <ModalContext.Provider value={{ modal, setModal, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}
