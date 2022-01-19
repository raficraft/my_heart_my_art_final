import LanguageProvider from "../context/language/LanguageContext";
import ModalProvider from "../context/modal/ModalProvider";
import Layout from "../engine/component/Layout/Layout";
import "./../Sass/engine.scss";

function MyApp({ Component, pageProps }) {
  console.log("pageprops ", pageProps);

  return (
    <LanguageProvider>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ModalProvider>
    </LanguageProvider>
  );
}

export default MyApp;
