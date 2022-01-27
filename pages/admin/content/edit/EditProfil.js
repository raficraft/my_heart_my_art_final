import React, { useContext } from "react";
import { AuthContext } from "../../../../context/auth/AuthProvider";

import G from "./../../../../Sass/abstract/global.module.scss";
import S from "./EditProfil.module.scss";

export default function EditProfil() {
  const { currentUser } = useContext(AuthContext);

  const handle_edit_profil = () => {};
  const handle_edit_pwd = () => {};

  console.log(currentUser);
  return (
    <>
      <h1>Edit profil</h1>
      {/*Edit prodil */}

      <form className={S.editProfil}>
        <h1>Mes informations</h1>
        <fieldset>
          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              value={currentUser ? currentUser.email : null}
            />
          </div>

          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={currentUser ? currentUser.email : null}
            />
          </div>
        </fieldset>
        <footer>
          <button
            className={`${G.btn_sub} ${G.btn_primary}`}
            type="button"
            onClick={handle_edit_profil}
          >
            Modifier mon profil
          </button>
        </footer>
      </form>

      {/*Edit PWD */}

      <form className={S.editProfil}>
        <h1>Mot de passe</h1>
        <fieldset>
          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <input
              type="password"
              id="email"
              name="email"
              placeholder="Nouveau mot de passe"
            />
          </div>

          <div className={`${G.bloc_input} ${S.bloc_input}`}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Confirmer le mot de passe"
            />
          </div>
        </fieldset>
        <footer>
          <button
            className={`${G.btn_sub} ${G.btn_primary}`}
            type="button"
            onClick={handle_edit_pwd}
          >
            Modifier mon mot de passe
          </button>
        </footer>
      </form>
    </>
  );
}
