import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../context/language/LanguageContext";
import { editProfil } from "../../../../data/pages/admin/editProfil/editProfil";

import G from "./../../../../Sass/abstract/global.module.scss";
import S from "./EditProfil.module.scss";
import EditEmail from "./form/EditEmail";
import EditUsername from "./form/EditUsername";

// nexstep
// add ref
// check before sub
// if empty if !current
// if format valid

export default function EditProfil() {
  const {
    currentUser,
    updateProfil,
    updateUserEmail,
    updatePwd,
    logout,
    reAuth,
  } = useContext(AuthContext);
  const { lang } = useContext(LanguageContext);

  const [errorEmail, setErrorError] = useState("");
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  async function handle_edit_pwd(e) {
    e.preventDefault();
    console.log("edit pwd");
  }

  return (
    <>
      <div className={S.editProfil}>
        {/* Edit Email */}

        <EditEmail></EditEmail>

        {/* Edit USerName */}
        <EditUsername></EditUsername>

        {/* Edit passowrd */}
        <form>
          <div className={S.form_content}>
            <div className={`${G.bloc_input_row} ${S.bloc_input}`}>
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

            <button className={`${G.btn_sub} ${G.btn_primary}`} type="submit">
              {editProfil.pwd.btn[lang]}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
