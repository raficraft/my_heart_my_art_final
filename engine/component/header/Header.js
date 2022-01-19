import { useContext } from "react";
import { LanguageContext } from "../../../context/language/LanguageContext";
import { ModalContext } from "../../../context/modal/ModalProvider";
import S from "./Header.module.scss";

function Header() {
  console.log(S);

  const { openModal } = useContext(ModalContext);
  const { lang, change_lang } = useContext(LanguageContext);

  function handle_modal(modal) {
    console.log("lol");
    openModal(modal);
  }

  function handle_lang(e) {
    console.log(e);
    console.log(e.target.value);
    change_lang(e.target.value);
  }

  return (
    <header className={S.wrapper}>
      <div className={S.content}>
        <h1 className={S.title}>My heart in my art</h1>

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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
