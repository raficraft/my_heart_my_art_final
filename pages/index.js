import Head from "next/head";
import { useContext } from "react";
import { LanguageContext } from "../context/language/LanguageContext";
import S from "./../Sass/Layout.module.scss";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>My heart in my Art</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={S.wrapper}>
        <section className={S.content}>
          <h1>NEXT.JS Laboratoire [MAIN]</h1>

          <h1>Language {lang && lang}</h1>
        </section>
      </main>
    </>
  );
}
