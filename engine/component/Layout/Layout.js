import React, { useContext } from "react";
import Header from "../header/Header";
import Signup from "../form/Signup/Signup";
import Signin from "../form/Signin/Signin";
import { ModalContext } from "../../../context/modal/ModalProvider";
import Modal_body from "../modal/Modal_body";
import Nav_alt from "../nav_alt/Nav_alt";
import Nav_top from "../nav_top/nav_top";

export default function Layout({ children }) {
  const { modal } = useContext(ModalContext);

  return (
    <>
      <Header></Header>

      {children}
      {modal.signup && (
        <Modal_body>
          <Signup />
        </Modal_body>
      )}
      {modal.signin && (
        <Modal_body>
          <Signin />
        </Modal_body>
      )}

      {modal.nav_alt && (
        <Modal_body>
          <Nav_alt></Nav_alt>
        </Modal_body>
      )}

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
