import { updateEmail } from "firebase/auth";
import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../context/language/LanguageContext";
import { editProfil } from "../../../../data/pages/admin/editProfil/editProfil";

import G from "./../../../../Sass/abstract/global.module.scss";
import S from "./EditProfil.module.scss";

// nexstep
// add ref
// check before sub
// if empty if !current
// if format valid

export default function EditProfil() {
  const {
    currentUser,
    updateUser,
    updateUserEmail,
    updatePwd,
    logout,
    reAuth,
  } = useContext(AuthContext);
  const { lang } = useContext(LanguageContext);

  const [errorMail, setErrorMail] = useState("");
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formProfil = useRef();
  const formPwd = useRef();

  /**Call FireBase API */
  async function handleEditProfil(e) {
    e.preventDefault();

    const email = inputs.current[0].value;

    const res = await updateUserEmail(email);

    if (email === "") {
      setErrorMail("Veuillez remplir le champ email");
      setTimeout(() => {
        setErrorMail("");
      }, 1500);
      return;
    }

    if (email === currentUser.email) {
      setErrorMail("Email identique , veuillez en choisr un nouveau");
      setTimeout(() => {
        setErrorMail("");
      }, 1500);
      return;
    }

    if (res.error.code === "auth/email-already-in-use") {
      setErrorMail("email déjà utiliser");
      setTimeout(() => {
        setErrorMail("");
      }, 1500);
      return;
    }

    if (res.error.code === "auth/requires-recent-login") {
      setErrorMail("Veuilez vous déconnecter , et vous reconnecter");
      setTimeout(() => {
        setErrorMail("");
      }, 1500);
      return;
    }

    if (res.succes) {
      setErrorMail("email modifier avec succès");

      setTimeout(() => {
        setErrorMail("");
      }, 1500);

      return;
    }
  }

  async function handle_edit_pwd(e) {
    e.preventDefault();
    console.log("edit pwd");
  }

  useEffect(() => {}, [currentUser]);

  return (
    <>
      {/*Edit prodil */}

      <form
        className={S.editProfil}
        onSubmit={(e) => {
          handleEditProfil(e);
        }}
        ref={formProfil}
      >
        <h1>{editProfil.email.title[lang]}</h1>
        <fieldset>
          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <label htmlFor="email">{editProfil.email.email[lang]}</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder={currentUser ? currentUser.email : null}
              ref={addInputs}
            />
          </div>

          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <label htmlFor="username">{editProfil.email.username[lang]}</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder={currentUser ? currentUser.pseudo : null}
              ref={addInputs}
            />
          </div>
          {errorMail && <p>{errorMail}</p>}
        </fieldset>
        <footer>
          <button className={`${G.btn_sub} ${G.btn_primary}`} type="submit">
            {editProfil.email.btn[lang]}
          </button>
        </footer>
      </form>

      {/*Edit PWD */}

      <form className={S.editProfil} onSubmit={handle_edit_pwd} ref={formPwd}>
        <h1>{editProfil.pwd.title[lang]}</h1>
        <fieldset>
          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={editProfil.pwd.pwd[lang]}
              ref={addInputs}
            />
          </div>

          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <input
              type="text"
              id="confirmPwd"
              name="confirmPwd"
              placeholder={editProfil.pwd.confirm[lang]}
              ref={addInputs}
            />
          </div>
        </fieldset>
        <footer>
          <button className={`${G.btn_sub} ${G.btn_primary}`} type="submit">
            {editProfil.pwd.btn[lang]}
          </button>
        </footer>
      </form>
    </>
  );
}
