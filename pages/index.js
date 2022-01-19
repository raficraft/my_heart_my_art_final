import Head from "next/head";
import Signup from "../engine/component/modal/account/Signup";
import Signin from "../engine/component/modal/account/Signin";
import S from "./../Sass/Layout.module.scss";

export default function Home() {
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
        </section>
      </main>
      <Signin></Signin>
      <Signup></Signup>
    </>
  );
}
