import Layout from "../engine/component/Layout/Layout";
import "./../Sass/engine.scss";

function MyApp({ Component, pageProps }) {
  console.log("pageprops ", pageProps);

  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
