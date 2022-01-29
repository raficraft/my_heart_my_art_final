import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { Exclamation } from "../../../../../assets/icons/Icon_svg";
import { AuthContext } from "../../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../../context/language/LanguageContext";
import { editProfil } from "../../../../../data/pages/admin/editProfil/editProfil";
import Modal_body from "../../../../../engine/component/modal/Modal_body";

import G from "./../../../../../Sass/abstract/global.module.scss";
import S from "./../EditProfil.module.scss";

export default function EditUsername() {
  const { currentUser, updateProfil } = useContext(AuthContext);

  const { lang } = useContext(LanguageContext);
  const [error, setError] = useState("");
  const [reAuth, seReAuth] = useState(false);

  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("");
  const inputRef = useRef();

  async function handleEditUsername(e) {
    e.preventDefault();

    const username = inputRef.current.value;

    console.log(username);

    if (username === "") {
      setError("Veuillez remplir le champ username");
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 1500);
    }

    if (username === currentUser.pseudo) {
      setError("Username identique , veuillez en choisr un nouveau");
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 1500);
      return;
    }

    if (
      inputRef.current.value &&
      inputRef.current.value !== currentUser.username
    ) {
      //setLoading(!loading);

      const res = await updateProfil({ displayName: username });

      console.log(res);

      if (res.error.code) {
        console.log(res.error);
      }

      if (res.succes) {
        setLoading(false);
        setInfo("Username modifier avec succès");

        setTimeout(() => {
          setError("");
        }, 1500);

        return;
      }
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          handleEditUsername(e);
        }}
      >
        <div className={S.form_content}>
          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <label htmlFor="email">{editProfil.email.username[lang]}</label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              placeholder={
                currentUser ? currentUser.displayName : "Votre pseudo"
              }
              defaultValue={currentUser ? currentUser.displayName : ""}
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

          <button className={`${G.btn_sub} ${G.btn_primary}`}>
            {loading ? "...loading" : editProfil.email.btn[lang]}
          </button>
        </div>
      </form>

      {reAuth && (
        <Modal_body>
          <h1>ReAuth TOI !!! </h1>
        </Modal_body>
      )}
    </>
  );
}
