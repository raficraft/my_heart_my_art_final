import React, { useContext, useState, useRef } from "react";
import { accountForm } from "../../../../data/accountForm/accountForm";
import G from "./../../../../Sass/abstract/global.module.scss";
import S from "./EditWithAuth.module.scss";
import { ModalContext } from "../../../../context/modal/ModalProvider";
import { AuthContext } from "../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../context/language/LanguageContext";
import { Exclamation } from "../../../../assets/icons/Icon_svg";

/**
 * This component is used to reconnect the currentUser for edit her profil
 *  this process is a security of firebase SDK (v9) *
 *
 * The component is use for edit [email,displayName and password]
 */

export default function EditWithAuth(props) {
  console.log("????", S);
  const { editProfil, newVal } = { ...props };

  const { closeModal } = useContext(ModalContext);
  const { currentUser, signin } = useContext(AuthContext);
  const { lang } = useContext(LanguageContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef();

  async function handleEdit(e) {
    e.preventDefault();

    const pwd = inputRef.current.value;

    if (pwd === "") {
      setError("Veuillez saisir votre mot de passe");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    const res = await signin(currentUser.email, pwd, false);

    if (res) {
      editProfil(e, newVal);
      await signin(currentUser.email, pwd, false);
    }
  }

  return (
    <div className={S.content}>
      <header className={S.header}>
        <h1>{accountForm.signin.title[lang]}</h1>

        {/* Close BTN */}
        <div
          tabIndex="0"
          role="button"
          className={S.close_modal}
          onClick={(e) => closeModal(e)}
          onKeyDown={(e) => closeModal(e)}
        >
          <span className={S.cross}></span>
        </div>
      </header>
      <form
        className={S.account_user}
        onSubmit={(e) => {
          handleEdit(e);
        }}
      >
        <p className={G.errorText}>
          Veuillez saisir votre mot de passe pour valider ce changement.
        </p>
        <div className={G.bloc_input}>
          <label htmlFor="pwd">{accountForm.signin.pwd[lang]}</label>

          <input type="password" name="pwd" id="pwd" ref={inputRef} />
          {/*Manage error or info message */}
          {error && (
            <div className={`${G.errorText} ${G.input_infoBubble}`}>
              <span className={G.icon}>
                <Exclamation></Exclamation>
              </span>
              <p>{error}</p>
            </div>
          )}
        </div>

        {/* Sub button */}
        <button className={`${G.btn_big} ${G.btn_alert}`}>
          {loading ? "loading" : "Apliquer la modification"}
        </button>
      </form>
    </div>
  );
}
