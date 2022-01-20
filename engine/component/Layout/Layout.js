import React, { useContext } from "react";
import Header from "../header/Header";
import Signup from "../modal/account/Signup";
import Signin from "../modal/account/Signin";
import { ModalContext } from "../../../context/modal/ModalProvider";

export default function Layout({ children }) {
  const { modal } = useContext(ModalContext);

  return (
    <>
      <Header></Header>

      {children}
      {modal.signup && <Signup />}
      {modal.signin && <Signin />}

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
