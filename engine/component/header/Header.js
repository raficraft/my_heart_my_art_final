import Link from "next/link";
import { useContext } from "react";
import {
  Article_icon,
  Email_icon,
  Heart_icon,
  Home_icon,
  ImageGallery,
  Youtube_icon,
} from "../../../assets/icons/Icon_svg";
import { LanguageContext } from "../../../context/language/LanguageContext";
import { nav_lang } from "../../../data/accountForm/accountForm";
import Account_user from "./account_user/Account_user";

import S from "./Header.module.scss";
import Lang_select from "./lang_select/Lang_select";

function Header() {
  const { lang } = useContext(LanguageContext);
  //Conponenet
  return (
    <header className={S.wrapper}>
      {/* Header Content */}
      <div className={S.content}>
        {/* Home Button */}
        <Link href="/" className={S.home_button}>
          <a className={S.home_button}>
            <Home_icon />
          </a>
        </Link>

        {/* Header NAV*/}
        <nav className={S.nav_top}>
          <Link href="/blog">
            <a>
              <Article_icon />
              Blog
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <ImageGallery />
              my Art
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Heart_icon />
              my Heart
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Youtube_icon />
              Videos
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Email_icon />
              Contact
            </a>
          </Link>
        </nav>

        <div className={S.nav_right}>
          {/* Change language */}
          <Lang_select />

          {/* Account user */}
          <Account_user />
        </div>
      </div>
      {/* Header Content END*/}
    </header>
  );
}

export default Header;
