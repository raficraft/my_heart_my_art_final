import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { Exclamation } from "../../../../../assets/icons/Icon_svg";
import { AuthContext } from "../../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../../context/language/LanguageContext";
import { editProfil } from "../../../../../data/pages/admin/editProfil/editProfil";

import G from "./../../../../../Sass/abstract/global.module.scss";
import S from "./../EditProfil.module.scss";

export default function EditEmail() {
  const { currentUser, updateUserEmail } = useContext(AuthContext);
  const { lang } = useContext(LanguageContext);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  /**Call FireBase API */
  async function handleEditEmail(e) {
    e.preventDefault();

    const email = inputRef.current.value;

    /* handle Email change */

    if (inputRef.current.value === "") {
      setError("Veuillez remplir le champ email");
      //   setTimeout(() => {
      //     setError("");
      //     setLoading(false);
      //   }, 1500);
      return;
    }

    if (email === currentUser.email) {
      setError("Email identique , veuillez en choisr un nouveau");
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 1500);
      return;
    }

    /** Check control is OK call API */

    if (
      inputRef.current.value &&
      inputRef.current.value !== currentUser.email
    ) {
      setLoading(!loading);
      const res = await updateUserEmail(email);

      if (res.error.code === "auth/invalid-email") {
        setError("Veuillez saisir un Email valide");
        setTimeout(() => {
          setError("");
          setLoading(false);
        }, 1500);
      }

      if (res.error.code === "auth/email-already-in-use") {
        setError("email déjà utiliser");
        setTimeout(() => {
          setError("");
          setLoading(false);
        }, 1500);
        return;
      }

      if (res.error.code === "auth/requires-recent-login") {
        setInfo("Veuilez vous déconnecter , et vous reconnecter");
        setTimeout(() => {
          setError("");
          setLoading(false);
        }, 1500);
        return;
      }

      if (res.succes) {
        setLoading(false);
        setInfo("Email modifier avec succès");

        setTimeout(() => {
          setInfo("");
        }, 1500);

        return;
      }
    }
  }

  return (
    <form
      onSubmit={(e) => {
        handleEditEmail(e);
      }}
    >
      <div className={S.form_content}>
        <div className={`${G.bloc_input} ${S.bloc_input}`}>
          <label htmlFor="email">{editProfil.email.email[lang]}</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder={
              currentUser ? currentUser.email : "Veuiller saisir un email"
            }
            defaultValue={currentUser ? currentUser.email : ""}
            ref={inputRef}
          />

          {/*Manage error or info message */}
          {error && (
            <div className={`${G.errorText} ${G.input_infoBubble}`}>
              <span className={G.icon}>
                <Exclamation></Exclamation>
              </span>
              <p>{error}</p>
            </div>
          )}
          {info && (
            <div className={`${G.infoText} ${G.input_infoBubble}`}>
              <span className={G.icon}>
                <Exclamation></Exclamation>
              </span>
              <p>{info}</p>
            </div>
          )}
        </div>

        <button className={`${G.btn_sub} ${G.btn_primary}`} type="submit">
          {loading ? "...loading" : editProfil.email.btn[lang]}
        </button>
      </div>
    </form>
  );
}
