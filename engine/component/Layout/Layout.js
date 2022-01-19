import React, { useContext, useRef } from "react";
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
      {modal.signup && <Signup></Signup>}
      {modal.signin && <Signin></Signin>}

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
