import S from "./../Form.module.scss";
import G from "./../../../../Sass/abstract/global.module.scss";
import { useRouter } from "next/router";
import { useContext, useState, useRef } from "react";
import { ModalContext } from "../../../../context/modal/ModalProvider";
import { AuthContext } from "../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../context/language/LanguageContext";
import { errorForm } from "../../../../data/errorForm/errorForm";

function Signup() {
  const { closeModal } = useContext(ModalContext);
  const { signup } = useContext(AuthContext);
  const { lang } = useContext(LanguageContext);
  const router = useRouter();

  const [error, setError] = useState("");

  const formRef = useRef();
  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  //Manage modal
  function close_modals(e) {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  //firebase signin
  async function handleSubmit(e) {
    e.preventDefault();
    if (inputs.current[1].value !== inputs.current[2].value) {
      setError("Les mots de passe doivent êtres identiques");
      return;
    }

    try {
      await signup(inputs.current[0].value, inputs.current[1].value);
      formRef.current.reset();
      setError("");
      closeModal();
    } catch (err) {
      console.dir(err);
      if (err.code === "auth/invalid-email") {
        setError(errorForm.firebase.invalidMail[lang]);
      }
      if (err.code === "auth/email-already-in-use") {
        setError(errorForm.firebase.alreadyUse[lang]);
      }
      if (err.code === "auth/weak-password") {
        setError(errorForm.firebase.weakPassword[lang]);
      }
    }
  }

  return (
    <div className={S.content}>
      <header className={S.header}>
        <h1>Inscription</h1>
        <div className={S.close_modal} onClick={(e) => close_modals(e)}>
          X
        </div>
      </header>
      <form
        className={S.account_user}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        ref={formRef}
      >
        <div className={G.bloc_input}>
          <label htmlFor="email">E-mail</label>
          <input type="text" ref={addInputs} name="email" id="email" />
        </div>
        <div className={G.bloc_input}>
          <label htmlFor="pwd">Password</label>
          <input type="password" ref={addInputs} name="pwd" id="pwd" />
        </div>

        <div className={G.bloc_input}>
          <label htmlFor="confirmPsw">Confirm Password</label>
          <input
            type="password"
            ref={addInputs}
            name="confirmPsw"
            id="confirmPsw"
          />
        </div>
        <div className={S.errorMessage}>
          <p className={G.textWarning}>{error}</p>
        </div>
        <button>Connexion</button>
        <p>Vous avez déjà un compte ?</p>
      </form>
    </div>
  );
}

export default Signup;
