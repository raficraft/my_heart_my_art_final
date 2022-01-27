import React, { useContext } from "react";
import {
  AccountCircle,
  Edit_icon,
  History_icon,
} from "../../../assets/icons/Icon_svg";
import { DashboardContext } from "../../../context/Admin/DashboardContext";
import { ModalContext } from "../../../context/modal/ModalProvider";
import Upload_image from "../../../engine/component/form/Upload_image/Upload_image";
import Modal_body from "../../../engine/component/modal/Modal_body";
import EditProfil from "../content/edit/EditProfil";
import UserProfil from "../content/profil/UserProfil";

import G from "./../../../Sass/abstract/global.module.scss";
import S from "./Admin_header.module.scss";

function Admin_header() {
  const { handleTabs, tabs } = useContext(DashboardContext);
  const { modal, openModal } = useContext(ModalContext);

  console.log(tabs);

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
        <div className={S.nav_wrapper}>
          <nav className={` ${G.primary_content} ${S.nav_admin}`}>
            <Tabs className={S.test}>
              <button
                onClick={() => {
                  handleTabs("profil");
                }}
                className={`${S.btn} ${tabs === "profil" ? S.active : null}`}
              >
                <AccountCircle></AccountCircle>
                Profil
              </button>
              <button
                onClick={() => {
                  handleTabs("edit");
                }}
                className={`${S.btn} ${tabs === "edit" ? S.active : null}`}
              >
                <Edit_icon></Edit_icon>
                Editer
              </button>
            </Tabs>
          </nav>
        </div>
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
  return <>{children}</>;
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