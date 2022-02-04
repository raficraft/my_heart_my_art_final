import "./../Sass/engine.scss";
import AuthProvider from "../context/auth/AuthProvider";
import LanguageProvider from "../context/language/LanguageContext";
import ModalProvider from "../context/modal/ModalProvider";
import Layout from "../engine/component/Layout/Layout";
import DashboardProvider from "../context/Admin/DashboardContext";
import Db_Provider from "./api/db";

function MyApp({ Component, pageProps }) {
  console.log("pageprops ", pageProps);

  return (
    <AuthProvider>
      <LanguageProvider>
        <ModalProvider>
          <DashboardProvider>
            <Db_Provider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Db_Provider>
          </DashboardProvider>
        </ModalProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default MyApp;
