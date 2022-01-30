import React, { useContext, useState, useRef } from "react";
import { Exclamation } from "../../../../../assets/icons/Icon_svg";
import { AuthContext } from "../../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../../context/language/LanguageContext";
//import { editProfil } from "../../../../../data/pages/admin/editProfil/editProfil";
import Modal_body from "../../../../../engine/component/modal/Modal_body";

import G from "./../../../../../Sass/abstract/global.module.scss";
import S from "./../EditProfil.module.scss";
import { ModalContext } from "../../../../../context/modal/ModalProvider";
import EditWithAuth from "../EditWithAuth";
import { regexAlphNum } from "../../../../../data/regex";
import { editProfil } from "../lang/lang";

export default function EditUsername() {
  const { currentUser, updateProfil } = useContext(AuthContext);
  const { modal, openModal, closeModal } = useContext(ModalContext);
  const { lang } = useContext(LanguageContext);

  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [editUser, setEditUser] = useState(false);

  const inputRef = useRef();

  async function handleEditUsername(e, username) {
    e.preventDefault();

    if (
      inputRef.current.value &&
      inputRef.current.value !== currentUser.username
    ) {
      const res = await updateProfil({ displayName: username });

      console.log(res);

      if (res.error.code) {
        console.log(res.error);
      }

      if (res.succes) {
        setInfo("Username modifier avec succès");
        setEditUser(false);
        closeModal();
        setTimeout(() => {
          setInfo("");
        }, 1500);

        return;
      }
    }
  }

  function reAuth(e) {
    e.preventDefault();

    const username = inputRef.current.value;

    console.log(username);

    if (username === "" || username.lenght < 3) {
      setError("Trois caractère minimum.");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    if (!username.match(regexAlphNum)) {
      setError("Caractères Alphanumériques seulement");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    if (username === currentUser.displayName) {
      setError("Username identique , veuillez en choisir un nouveau.");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }
    setEditUser(true);
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
            <label htmlFor="email">{editProfil.displayName.label[lang]}</label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              placeholder={
                currentUser
                  ? currentUser.displayName
                  : `${editProfil.displayName.placeHolder[lang]}`
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
            {editProfil.email.btn[lang]}
          </button>
        </div>
      </form>

      {/** We pass to the content of the modal box, the new value and the script
        control of the component that will launch the api call transmitted by
        the provider.*/}

      {modal.edit && editUser && (
        <Modal_body>
          <EditWithAuth
            editProfil={handleEditUsername}
            newVal={inputRef.current.value}
          />
        </Modal_body>
      )}
    </>
  );
}
