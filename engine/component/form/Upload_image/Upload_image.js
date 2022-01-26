import React, { useContext, useState } from "react";
import { ModalContext } from "../../../../context/modal/ModalProvider";

import S from "./Upload_avatar.module.scss";
import F from "./../../form/Form.module.scss";
import {
  Adjustments_icon,
  Crop_icon,
  Filter_icon,
} from "../../../../assets/icons/Icon_svg";

export default function Upload_image() {
  const { closeModal } = useContext(ModalContext);

  const [controlTrigger, setControlTrigger] = useState({
    crop: false,
    filter: true,
    adjust: true,
  });

  function handleControlTrigger(target) {
    console.log("?????");
    for (const key in controlTrigger) {
      if (Object.hasOwnProperty.call(controlTrigger, key)) {
        console.log("key in loop", key);
        if (key !== target) {
          setControlTrigger((s) => ({ ...s, [key]: true }));
        }
      }
    }

    setControlTrigger((s) => ({ ...s, [target]: false }));
  }

  return (
    <div className={S.wrapper}>
      <header>
        <h1>Photo de profil</h1>
        <div className={`${S.close_modal}`} onClick={(e) => closeModal(e)}>
          <span className={S.cross}></span>
        </div>
      </header>

      <div className={S.preview}>
        <div className={S.preview_avatar}>
          <label htmlFor="load_file">
            <canvas
              className={S.preview_avatar__trigger}
              width="270px"
              height="270px"
            ></canvas>
          </label>
          <input type="file" id="load_file" className={S.hidden} />
        </div>

        <div className={S.preview_control}>
          {/* {control trigger CROP} */}
          <div
            className={`${S.preview_control_trigger}            
            ${!controlTrigger.crop ? S.flex : S.hidden}`}
          >
            <div className={S.bloc_input}>
              <span>
                <label>Zoom</label>
                <label>1</label>
              </span>
              <input type="range" step="0.1" min="1" max="3" defaultValue="1" />
            </div>

            <div className={S.bloc_input}>
              <span>
                <label>Redresser</label>
                <label>0</label>
              </span>
              <input
                type="range"
                step="1"
                min="-180"
                max="180"
                defaultValue="0"
              />
            </div>
          </div>

          {/* {control trigger FILTER} */}
          <div
            className={`${S.preview_control_trigger}            
            ${!controlTrigger.filter ? S.flex : S.hidden}`}
          >
            filter input
          </div>

          {/* {control trigger AJDUST} */}
          <div
            className={`${S.preview_control_trigger}            
            ${!controlTrigger.adjust ? S.flex : S.hidden}`}
          >
            adjust input
          </div>
        </div>

        <div className={S.preview_control_icon}>
          <div
            className={S.icon}
            onClick={(e) => {
              handleControlTrigger("crop");
            }}
          >
            <Crop_icon></Crop_icon>
            <p> Rogner</p>
          </div>
          <div
            className={S.icon}
            onClick={(e) => {
              handleControlTrigger("filter");
            }}
          >
            <Filter_icon></Filter_icon>
            <p>Filtre</p>
          </div>
          <div
            className={S.icon}
            onClick={(e) => {
              handleControlTrigger("adjust");
            }}
          >
            <Adjustments_icon></Adjustments_icon>
            <p>Ajuster</p>
          </div>
        </div>
      </div>
    </div>
  );
}
