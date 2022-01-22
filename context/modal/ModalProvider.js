import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  /**
   * Modal Initial Context
   */
  const [modal, setModal] = useState({
    signin: false,
    signup: false,
    nav_alt: false,
  });

  function openModal(target) {
    for (const key in modal) {
      if (Object.hasOwnProperty.call(modal, key)) {
        console.log("key in loop", key);
        if (key !== target) {
          setModal((s) => ({ ...s, [target]: false }));
        }
      }
    }

    setModal((s) => ({ ...s, [target]: true }));
  }

  function closeModal() {
    setModal(() => {
      for (const key in modal) {
        if (Object.hasOwnProperty.call(modal, key)) {
          setModal((s) => ({ ...s, [key]: false }));
        }
      }
    });
  }

  return (
    <ModalContext.Provider value={{ modal, setModal, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}
