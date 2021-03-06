import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../engine/context/auth/AuthProvider";
import { LanguageContext } from "../engine/context/language/LanguageContext";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const { validAuth, currentUser } = useContext(AuthContext);

  /*** */

  return (
    <>
      <Head>
        <title>My heart in my Art</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <section className="content primary_content">
          <h1>NEXT.JS Laboratory hosting with vercel app</h1>

          <h1>{lang && lang}</h1>
          {validAuth && currentUser && (
            <Link href="/admin">
              <a className="oldLink">
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
