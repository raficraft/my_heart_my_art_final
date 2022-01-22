import Link from "next/link";
import React, { useContext } from "react";
import {
  Article_icon,
  Email_icon,
  Heart_icon,
  ImageGallery,
  Youtube_icon,
} from "../../../assets/icons/Icon_svg";
import { ModalContext } from "../../../context/modal/ModalProvider";
import Account_user from "../header/account_user/Account_user";
import Lang_select from "../header/lang_select/Lang_select";

import S from "./Nav_alt.module.scss";

export default function Nav_alt({ children }) {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className={S.wrapper}>
      <div className={S.content}>
        <header>
          <Account_user />
          <div
            className={S.cross_container}
            onClick={() => {
              closeModal();
            }}
          >
            <span className={S.cross}></span>
          </div>
        </header>
        <section className={S.nav_alt}>
          <Link href="/blog">
            <a
              style={{ "--i": "1" }}
              onClick={() => {
                closeModal();
              }}
            >
              <Article_icon />
              Blog
            </a>
          </Link>
          <Link href="/videos">
            <a
              style={{ "--i": "2" }}
              onClick={() => {
                closeModal();
              }}
            >
              <Youtube_icon />
              Videos
            </a>
          </Link>
          <Link href="/art">
            <a
              style={{ "--i": "3" }}
              onClick={() => {
                closeModal();
              }}
            >
              <ImageGallery />
              My art
            </a>
          </Link>

          <Link href="/heart">
            <a
              style={{ "--i": "4" }}
              onClick={() => {
                closeModal();
              }}
            >
              <Heart_icon />
              My heart
            </a>
          </Link>

          <Link href="/contact">
            <a
              style={{ "--i": "5" }}
              onClick={() => {
                closeModal();
              }}
            >
              <Email_icon />
              Contact
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
}
