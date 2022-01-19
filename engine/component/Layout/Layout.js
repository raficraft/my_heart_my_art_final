import React, { useContext, useRef } from "react";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>

      {children}
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
