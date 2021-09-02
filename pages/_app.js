import { server } from "../config";
import Layout from "../components/Layout";
import "../styles/main.css";

// Add that code to _app.tsx / _app.jsx

import Router from "next/router";

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

function MyApp({ Component, pageProps, router }) {
  const url = server + `${router.route}`;
  return (
    <Layout>
      <Component {...pageProps} canonical={url} key={url} />
    </Layout>
  );
}

export default MyApp;
