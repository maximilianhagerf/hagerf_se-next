import { server } from "../config";
import Layout from "../components/Layout";
import "../styles/main.css";

function MyApp({ Component, pageProps, router }) {
  const url = server + `${router.route}`;
  return (
    <Layout>
      <Component {...pageProps} canonical={url} key={url} />
    </Layout>
  );
}

export default MyApp;
