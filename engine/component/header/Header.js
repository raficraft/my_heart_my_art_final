import Link from "next/link";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../../context/language/LanguageContext";
import Account_user from "./account_user/Account_user";

import S from "./Header.module.scss";

function Header() {
  const { lang, change_lang } = useContext(LanguageContext);

  //Manage Lang
  function handle_lang(e) {
    change_lang(e.target.value);
  }

  //Conponenet
  console.log("render header");
  return (
    <header className={S.wrapper}>
      <div className={S.content}>
        <Link href="/">
          <a>
            <h1 className={S.title}>My heart in my art</h1>
          </a>
        </Link>

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
    </header>
  );
}

export default Header;
