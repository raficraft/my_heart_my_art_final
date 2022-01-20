import S from "./Signin.module.scss";
import G from "./../../../../Sass/abstract/global.module.scss";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ModalContext } from "../../../../context/modal/ModalProvider";
import { AuthContext } from "../../../../context/auth/AuthProvider";

function Signin() {
  const { closeModal } = useContext(ModalContext);
  const { validAuth } = useContext(AuthContext);

  function close_modals(e) {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  const router = useRouter();

  return (
    <section className={S.wrapper} onClick={(e) => close_modals(e)}>
      <div className={S.content}>
        <header className={S.header}>
          <h1>Connexion</h1>
          <div className={S.close_modal} onClick={(e) => close_modals(e)}>
            X
          </div>
        </header>

        {/*Form Signin*/}

        <form className={S.account_user}>
          <div className={G.bloc_input}>
            <label>E-mail</label>
            <input type="text" />
          </div>
          <div className={G.bloc_input}>
            <label>Password</label>
            <input type="text" />
          </div>
          <button>Connexion</button>
          <p>Vous avez déjà un compte ?</p>
        </form>
      </div>
    </section>
  );
}

export default Signin;
