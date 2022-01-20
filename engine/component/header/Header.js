import Link from "next/link";
import { useContext } from "react";
import {
  Article_icon,
  CarbonBlog,
  Email_icon,
  Home_icon,
  ImageGallery,
  Youtube_icon,
} from "../../../assets/icons/Icon_svg";
import { LanguageContext } from "../../../context/language/LanguageContext";
import Account_user from "./account_user/Account_user";

import S from "./Header.module.scss";

function Header() {
  console.log(S);
  const { lang, change_lang } = useContext(LanguageContext);

  //Manage Lang
  function handle_lang(e) {
    change_lang(e.target.value);
  }

  //Conponenet
  console.log("render header");
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
              Gallery
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Youtube_icon />
              Video
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

          <div className={S.select_lang}>
            <select onChange={(e) => handle_lang(e)} value={lang}>
              <option value="FR" key="FR">
                FR
              </option>
              <option value="EN" key="EN">
                EN
              </option>
            </select>
          </div>
          <Account_user />
        </div>
      </div>
      {/* Header Content END*/}
    </header>
  );
}

export default Header;
