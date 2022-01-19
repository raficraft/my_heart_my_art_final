import AuthProvider from "../context/auth/AuthProvider";
import LanguageProvider from "../context/language/LanguageContext";
import ModalProvider from "../context/modal/ModalProvider";
import Layout from "../engine/component/Layout/Layout";
import "./../Sass/engine.scss";

function MyApp({ Component, pageProps }) {
  console.log("pageprops ", pageProps);

  return (
    <AuthProvider>
      <LanguageProvider>
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        </ModalProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default MyApp;
