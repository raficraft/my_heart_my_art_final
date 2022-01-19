import Head from "next/head";
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthProvider";
import { LanguageContext } from "../context/language/LanguageContext";
import S from "./../Sass/Layout.module.scss";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>My heart in my Art</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={S.wrapper}>
        <section className={S.content}>
          <h1>NEXT.JS Laboratoire [MAIN] and update to vercel Hosting</h1>

          <h1>Language {lang && lang}</h1>
          {auth && (
            <h1>
              {!auth.isAuth && auth.role === 0 && lang === "FR"
                ? " Vous n'êtes pas connecter , mais bonjour quand même visiteurs"
                : null}

              {!auth.isAuth && auth.role === 0 && lang === "EN"
                ? "You are not logged in, but hello guests anyway"
                : null}
            </h1>
          )}
        </section>
      </main>
    </>
  );
}
