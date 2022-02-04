import React, { useRef, useContext } from "react";
import { AuthContext } from "../../context/auth/AuthProvider";
import useFirestore from "../../engine/hooks/firestore/useFirestore";

import G from "./../../Sass/abstract/global.module.scss";
import L from "./../../Sass/Layout.module.scss";

export default function Index() {
  const addInputs = (el) => {
    if (el && !fields.current.includes(el)) {
      fields.current.push(el);
    }
  };

  const { currentUser } = useContext(AuthContext);
  const [currentMessage, setDocument, createDocument, delete_doc] =
    useFirestore("message", {});
  const fields = useRef([]);
  const addRef = useRef(null);

  console.log("on load", currentUser);

  function handleInput(e, doc) {
    e.preventDefault();
    const key = e.target.dataset.id;
    const el = fields.current[key];
    const payload = { id: doc.id, message: el.textContent };
    setDocument("message", payload);
  }

  function handleDelete(e, id) {
    e.preventDefault();
    delete_doc("message", id);
  }

  function postMessage(e) {
    e.preventDefault();
    console.log(e);
    console.log("on sub : ", currentUser);
    console.log(addRef.current.value);

    const payload = {
      createAt: Date.now(),
      userUid: currentUser.uid,
      userName: currentUser.displayName,
      message: addRef.current.value,
    };

    createDocument("message", payload);
  }

  function listMessage(payload) {
    return payload.map((doc, key) => (
      <div className={`${G.contentEditable_wrapper}`} key={`cont_${doc.id}`}>
        <span className={`${G.dotMenu}`}>
          <span className={`${G.dotMenu_item} ${G.dot_left}`}></span>
          <span className={`${G.dotMenu_item} ${G.dot_right}`}></span>
        </span>
        <p
          className={`${G.edit_item}`}
          contentEditable="true"
          suppressContentEditableWarning={true}
          ref={addInputs}
          onInput={(e) => {
            handleInput(e, doc);
          }}
          data-id={key}
          dangerouslySetInnerHTML={{ __html: doc.message }}
          key={`${doc.id}`}
        ></p>
        <button
          onClick={(e) => {
            handleDelete(e, doc.id);
          }}
        >
          delete
        </button>
      </div>
    ));
  }

  return (
    <main className={L.wrapper}>
      <section className={G.primary_content}>
        <h1>Blog Page</h1>
        <h2>Les derniers message envoyé en BDD</h2>
        <section className={L.wrapper_edit}>
          <form
            onSubmit={(e) => {
              postMessage(e);
            }}
          >
            <div className={G.bloc_input}>
              <label>Add message</label>
              <textarea cols="96" ref={addRef}></textarea>
              <button className={`${G.btn_big} ${G.btn_sub}`} type="submit">
                Add Article
              </button>
            </div>
          </form>

          {listMessage(currentMessage)}
        </section>
      </section>
    </main>
  );
}
