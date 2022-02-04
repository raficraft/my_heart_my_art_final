import Head from "next/head";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/auth/AuthProvider";
import { LanguageContext } from "../context/language/LanguageContext";

import S from "./../Sass/Layout.module.scss";
import G from "./../Sass/abstract/global.module.scss";
import F from "./../pages/admin/content/edit/editProfil.module.scss";
import { DbContext } from "./api/db";
import { useEffect } from "react/cjs/react.development";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const { validAuth, currentUser } = useContext(AuthContext);

  /*** */
  console.log("firebase user", currentUser);
  console.log("Auth", validAuth);
  console.log("lang", lang);
  console.log("????, form", F);

  return (
    <>
      <Head>
        <title>My heart in my Art</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={S.wrapper}>
        <section className={`${S.content} ${G.primary_content}`}>
          <h1>NEXT.JS Laboratory hosting with vercel app</h1>

          <h1>{lang && lang}</h1>
          {validAuth && currentUser && (
            <Link href="/admin">
              <a className={S.oldLink}>
                <h1>Go to dashBoard</h1>
              </a>
            </Link>
          )}

          {validAuth && (
            <h1>
              {!validAuth.isAuth && validAuth.role === 0 && lang === "FR"
                ? "Bonjour visiteurs, vous n'êtes pas connecter"
                : validAuth.isAuth && validAuth.role === 0 && lang === "FR"
                ? `Bonjour ${currentUser?.email}`
                : null}

              {!validAuth.isAuth && validAuth.role === 0 && lang === "EN"
                ? "Hello Guest , you are not connected"
                : validAuth.isAuth && validAuth.role === 0 && lang === "EN"
                ? `Hello ${currentUser?.email}`
                : null}
            </h1>
          )}
        </section>
      </main>
    </>
  );
}
