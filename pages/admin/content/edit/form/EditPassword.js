import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { Exclamation } from "../../../../../assets/icons/Icon_svg";
import { AuthContext } from "../../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../../context/language/LanguageContext";
import { ModalContext } from "../../../../../context/modal/ModalProvider";
import { editProfil } from "../../../../../data/pages/admin/editProfil/editProfil";
import { regexAlphNum, regexEmail, regexPwd } from "../../../../../data/regex";
import Modal_body from "../../../../../engine/component/modal/Modal_body";
import EditWithAuth from "../EditWithAuth";

import G from "./../../../../../Sass/abstract/global.module.scss";
import S from "./../EditProfil.module.scss";

export default function EditPassword() {
  const { currentUser, updatePwd } = useContext(AuthContext);
  const { modal, openModal, closeModal } = useContext(ModalContext);
  const { lang } = useContext(LanguageContext);

  const [error, setError] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [info, setInfo] = useState("");
  const [editPwd, setEditPwd] = useState(false);

  const inputPwd = useRef();
  const inputCompare = useRef();

  async function handleEditPwd(e, pwd) {
    e.preventDefault();
    if (inputPwd && inputCompare && inputPwd !== inputCompare) {
      console.log("yolo");
      const res = await updatePwd(pwd);

      console.log(res);
    }
  }

  function reAuth(e) {
    e.preventDefault();

    const pwd = inputPwd.current.value;
    const confirm = inputCompare.current.value;

    console.log(pwd);

    /*Error with pwd fields*/

    if (pwd === "") {
      setError("Veuillez saisir un nouveau mot de passe");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    /*Error with confirm fields*/

    if (confirm === "") {
      setErrorConfirm("Veuillez re-saisir votre nouveau mot de passe");
      setTimeout(() => {
        setErrorConfirm("");
      }, 1500);
      return;
    }

    /** Check both */
    if (confirm !== pwd) {
      setErrorConfirm("Les mots de passe ne sont pas identiques");
      setTimeout(() => {
        setErrorConfirm("");
      }, 1500);
      return;
    }

    /** Check format */
    // if (!pwd.match(regexPwd)) {
    //   setError("Le mot de passe n'est pas au bon format");
    //   setTimeout(() => {
    //     setError("");
    //   }, 1500);
    //   return;
    // }

    // if (!confirm.match(regexPwd)) {
    //   setError("Le mot de passe de confirmation n'est pas au bon format");
    //   setTimeout(() => {
    //     setError("");
    //   }, 1500);
    //   return;
    // }

    setEditPwd(true);
    openModal("edit");
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          reAuth(e);
        }}
      >
        <div className={S.form_content}>
          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={editProfil.pwd.pwd[lang]}
              ref={inputPwd}
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

          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <input
              type="password"
              id="confirmPwd"
              name="confirmPwd"
              placeholder={editProfil.pwd.confirm[lang]}
              ref={inputCompare}
            />
            {errorConfirm && (
              <div className={`${G.errorText} ${G.input_infoBubble}`}>
                <span className={G.icon}>
                  <Exclamation></Exclamation>
                </span>
                <p>{errorConfirm}</p>
              </div>
            )}
          </div>
          <button className={`${G.btn_sub} ${G.btn_primary}`} type="submit">
            {editProfil.pwd.btn[lang]}
          </button>
        </div>
        <p className={S.errorText}>
          To check a password between 8 to 20 characters which contain at least
          one lowercase letter, one uppercase letter, one numeric digit, and one
          special character
        </p>
      </form>

      {/** We pass to the content of the modal box, the new value and the script
        control of the component that will launch the api call transmitted by
        the provider.*/}

      {modal.edit && editPwd && (
        <Modal_body>
          <EditWithAuth
            editProfil={handleEditPwd}
            newVal={inputPwd.current.value}
          />
        </Modal_body>
      )}
    </>
  );
}
