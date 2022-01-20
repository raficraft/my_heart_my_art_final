import S from "./Signin.module.scss";
import G from "./../../../../Sass/abstract/global.module.scss";
import { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";
import { ModalContext } from "../../../../context/modal/ModalProvider";
import { AuthContext } from "../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../context/language/LanguageContext";
import { errorForm } from "../../../../data/errorForm/errorForm";

function Signin() {
  const { closeModal } = useContext(ModalContext);
  const { validAuth, signin } = useContext(AuthContext);
  const { lang } = useContext(LanguageContext);
  const router = useRouter();

  const [error, setError] = useState("");

  const formRef = useRef();
  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      const name = el.getAttribute("name");
      inputs.current.push(el);
    }
  };

  function close_modals(e) {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signin(inputs.current[0].value, inputs.current[1].value);
      formRef.current.reset();
      setError("");
      closeModal();
    } catch (err) {
      console.dir(err);
      if (err.code === "auth/wrong-password") {
        setError(errorForm.firebase.wrongPassword[lang]);
      }

      if (err.code === "auth/user-not-found") {
        setError(errorForm.firebase.userNotFound[lang]);
      }
    }
  }

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

        <form
          className={S.account_user}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          ref={formRef}
        >
          <div className={G.bloc_input}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" ref={addInputs} />
          </div>
          <div className={G.bloc_input}>
            <label htmlFor="pwd">Password</label>
            <input type="password" name="pwd" id="pwd" ref={addInputs} />
          </div>
          <div className={S.errorMessage}>
            <p className={G.textWarning}>{error}</p>
          </div>
          <button>Connexion</button>
          <p>Vous avez déjà un compte ?</p>
        </form>
      </div>
    </section>
  );
}

export default Signin;
