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
import useMediaQuery from "../../hooks/useMediaQueries";
import Account_user from "./account_user/Account_user";

import S from "./Header.module.scss";
import Lang_select from "./lang_select/Lang_select";

function Header() {
  const { lang } = useContext(LanguageContext);

  const isMobil = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1100px)");
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
        {isTablet && (
          <nav className={S.nav_top}>
            {isTablet && (
              <>
                <Link href="/blog">
                  <a>
                    <Article_icon />
                    Blog
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
                    <ImageGallery />
                    my Art
                  </a>
                </Link>
              </>
            )}
            {isDesktop && (
              <>
                <Link href="/blog">
                  <a>
                    <Heart_icon />
                    my Heart
                  </a>
                </Link>

                <Link href="/blog">
                  <a>
                    <Email_icon />
                    Contact
                  </a>
                </Link>
              </>
            )}
          </nav>
        )}

        <div className={S.nav_right}>
          {/* Change language */}
          <Lang_select />

          {/* Account user */}
          {isTablet && <Account_user />}
          {isMobil && <p>Hamburger</p>}
        </div>
      </div>
      {/* Header Content END*/}
    </header>
  );
}

export default Header;
