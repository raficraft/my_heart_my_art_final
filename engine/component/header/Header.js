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

import useMediaQuery from "../../hooks/useMediaQueries";
import Nav_top from "../nav_top/nav_top";
import Account_user from "./account_user/Account_user";
import Hamburger_menu from "./hamburger_menu/Hamburger_menu";

import S from "./Header.module.scss";
import Lang_select from "./lang_select/Lang_select";

function Header() {
  const isMobil = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
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

        <Nav_top key="1" />

        <div className={S.nav_right}>
          {/* Change language */}
          <Lang_select />

          {/* Account user */}
          {isTablet && <Account_user />}
          {isMobil && <Hamburger_menu />}
        </div>
      </div>
      {/* Header Content END*/}
    </header>
  );
}

export default Header;
