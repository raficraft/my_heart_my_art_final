import "./../Sass/engine.scss";
import AuthProvider from "../engine/context/auth/AuthProvider";
import LanguageProvider from "../engine/context/language/LanguageContext";
import ModalProvider from "../engine/context/modal/ModalProvider";
import Layout from "../engine/component/Layout/Layout";
import DashboardProvider from "../engine/context/Admin/DashboardContext";

function MyApp({ Component, pageProps }) {
  console.log("pageprops ", pageProps);

  return (
    <AuthProvider>
      <LanguageProvider>
        <ModalProvider>
          <DashboardProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </DashboardProvider>
        </ModalProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default MyApp;
