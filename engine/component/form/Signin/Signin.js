import S from "./../Form.module.scss";
import G from "./../../../../Sass/abstract/global.module.scss";
import { useContext, useState, useRef } from "react";
import { ModalContext } from "../../../../context/modal/ModalProvider";
import { AuthContext } from "../../../../context/auth/AuthProvider";
import { LanguageContext } from "../../../../context/language/LanguageContext";
import { errorForm } from "../../../../data/errorForm/errorForm";
import { accountForm } from "../../../../data/accountForm/accountForm";

function Signin() {
  const { closeModal, openModal } = useContext(ModalContext);
  const { lang } = useContext(LanguageContext);
  const { signin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const remember = useRef(false);

  const formRef = useRef();
  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  function close_modals(e) {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function switch_modal(e) {
    e.stopPropagation();
    closeModal();
    openModal("signup");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const isRemember = remember.current.checked;

    try {
      await signin(
        inputs.current[0].value,
        inputs.current[1].value,
        isRemember
      );
      formRef.current.reset();
      setError("");
      closeModal();
    } catch (err) {
      console.dir(err);
      console.log(err);
      if (err.code === "auth/wrong-password") {
        setError(errorForm.firebase.wrongPassword[lang]);
      }

      if (err.code === "auth/user-not-found") {
        setError(errorForm.firebase.userNotFound[lang]);
      }
    }
  }

  return (
    <div className={S.content}>
      <header className={S.header}>
        <h1>{accountForm.signin.title[lang]}</h1>

        {/* Close BTN */}
        <div
          tabIndex="0"
          role="button"
          className={S.close_modal}
          onClick={(e) => close_modals(e)}
          onKeyDown={(e) => close_modals(e)}
        >
          <span className={S.cross}></span>
        </div>
      </header>
      <form
        className={S.account_user}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        ref={formRef}
      >
        {/* Field Email */}

        <div className={G.bloc_input}>
          <label htmlFor="email">{accountForm.signin.email[lang]}</label>
          <input type="text" name="email" id="email" ref={addInputs} />
        </div>

        {/* Field PWD */}

        <div className={G.bloc_input}>
          <label htmlFor="pwd">{accountForm.signin.pwd[lang]}</label>
          <input type="password" name="pwd" id="pwd" ref={addInputs} />
        </div>

        {/* Remember checkbox */}

        <div className={G.bloc_checked}>
          <input type="checkbox" id="remmber" name="remember" ref={remember} />
          <label htmlFor="remember">{accountForm.signin.checked[lang]}</label>
        </div>

        {/* Error Message */}
        <div className={S.errorMessage}>
          <p className={G.textWarning}>{error}</p>
        </div>

        {/* Sub button */}
        <button className={`${G.btn_big} ${G.btn_sub}`}>
          {accountForm.signin.button[lang]}
        </button>
        <p
          onClick={(e) => {
            switch_modal(e);
          }}
          className={G.text_switch}
        >
          {accountForm.signin.switchForm[lang]}
        </p>
      </form>
    </div>
  );
}

export default Signin;
