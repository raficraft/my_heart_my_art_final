import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../context/language/LanguageContext";
import { ModalContext } from "../../../../context/modal/ModalProvider";
import { errorForm } from "../../../../data/errorForm/errorForm";

import S from "./Account_user.module.scss";

export default function Account_user() {
  const { openModal } = useContext(ModalContext);
  const { lang, change_lang } = useContext(LanguageContext);
  const { validAuth, logout } = useContext(AuthContext);

  const router = useRouter();

  //Manage Modal
  function handle_modal(modal) {
    openModal(modal);
  }

  //firebase logout
  async function handleLogout(e) {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      alert(errorForm.firebase.logoutFailed[lang]);
    }
  }

  useEffect(() => {}, validAuth.isAuth);

  return (
    <div className={S.user_account}>
      {/* Signin and Signup btn */}

      {!validAuth.isAuth ? (
        <>
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
        </>
      ) : (
        <>
          {/*Create User button to goes dashboard Pages*/}
          <button
            className={`${S.btn} ${S.logout}`}
            onClick={(e) => handleLogout(e)}
          >
            logout
          </button>
        </>
      )}
    </div>
  );
}
