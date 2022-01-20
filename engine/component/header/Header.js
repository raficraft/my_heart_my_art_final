import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../context/language/LanguageContext";
import { ModalContext } from "../../../context/modal/ModalProvider";

import S from "./Header.module.scss";

function Header() {
  const { openModal } = useContext(ModalContext);
  const { lang, change_lang } = useContext(LanguageContext);
  const { validAuth, logout } = useContext(AuthContext);

  //Manage Modal
  function handle_modal(modal) {
    openModal(modal);
  }

  //Manage Lang
  function handle_lang(e) {
    change_lang(e.target.value);
  }
  //firebase logout
  function handleLogout(e) {}

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

          {/* Signin and Signup btn */}

          <div className={S.user_account}>
            <button
              className={`${S.btn} ${S.signin}`}
              onClick={() => handle_modal("signin")}
            >
              Connexion
            </button>
            {/* Close all modals btn */}
            <button
              className={`${S.btn} ${S.signup}`}
              onClick={() => handle_modal("signup")}
            >
              inscription
            </button>

            <button
              className={`${S.btn} ${S.logout}`}
              onClick={(e) => handleLogout(e)}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
