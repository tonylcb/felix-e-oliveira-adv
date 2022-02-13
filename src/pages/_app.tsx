import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Div100vh from "react-div-100vh";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Div100vh>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Div100vh>
    </>
  );
}

export default MyApp;
