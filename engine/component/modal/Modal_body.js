import S from "./Modal.module.scss";
import { useContext } from "react";
import { ModalContext } from "../../../context/modal/ModalProvider";

function Modal_body({ children }) {
  const { closeModal } = useContext(ModalContext);

  //Manage modal
  function close_modals(e) {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  return (
    <section className={S.wrapper} onClick={(e) => close_modals(e)}>
      {children}
    </section>
  );
}

export default Modal_body;
