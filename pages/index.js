import S from "./../Sass/Layout.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthProvider";
import { LanguageContext } from "../context/language/LanguageContext";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const { validAuth } = useContext(AuthContext);

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
          <Link href="/admin">
            <a>Admin</a>
          </Link>
          {validAuth && (
            <h1>
              {!validAuth.isAuth && validAuth.role === 0 && lang === "FR"
                ? "Bonjour visiteurs, vous n'êtes pas connecter"
                : null}

              {!validAuth.isAuth && validAuth.role === 0 && lang === "EN"
                ? "Hello Guest , you are not connected"
                : null}
            </h1>
          )}
        </section>
      </main>
    </>
  );
}
