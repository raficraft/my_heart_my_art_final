import React, { useContext } from "react";
import { AccountCircle } from "../../../assets/icons/Icon_svg";
import { DashboardContext } from "../../../context/Admin/DashboardContext";
import { ModalContext } from "../../../context/modal/ModalProvider";
import Upload_image from "../../../engine/component/form/Upload_image/Upload_image";
import Modal_body from "../../../engine/component/modal/Modal_body";
import EditProfil from "../content/edit/EditProfil";
import UserProfil from "../content/profil/UserProfil";

import G from "./../../../Sass/abstract/global.module.scss";
import S from "./Admin_header.module.scss";

function Admin_header() {
  const { handleTabs, handleUpload } = useContext(DashboardContext);

  const { modal, openModal } = useContext(ModalContext);

  return (
    <>
      <section className={S.wrapper}>
        <header className={` ${G.primary_content} ${S.profil_header}`}>
          <form className={`${S.profil_header__form}`}>
            <div className={`${S.profil_header__upload}`}>
              <AccountCircle
                onClick={() => {
                  openModal("upload_image");
                }}
              ></AccountCircle>
            </div>
          </form>
          <div className={`${S.profil_header__body}`}>
            <h1>Mon compte</h1>
          </div>
        </header>
        <nav className={` ${G.primary_content}`}>
          <Tabs className={S.test}>
            <button
              onClick={() => {
                handleTabs("profil");
              }}
            >
              Profil
            </button>
            <button
              onClick={() => {
                handleTabs("edit");
              }}
            >
              Editer
            </button>
            <button
              onClick={() => {
                handleTabs("history");
              }}
            >
              Historique
            </button>
          </Tabs>
        </nav>
      </section>
      {modal.upload_image && (
        <Modal_body>
          <Upload_image></Upload_image>
        </Modal_body>
      )}
    </>
  );
}

export default Admin_header;

export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabContent() {
  const { tabs } = useContext(DashboardContext);
  {
    switch (tabs) {
      case "profil":
        return <UserProfil></UserProfil>;
      case "history":
        return <h1>historique du profil</h1>;
      case "edit":
        return <EditProfil></EditProfil>;
      default:
        return <UserProfil></UserProfil>;
    }
  }
}
