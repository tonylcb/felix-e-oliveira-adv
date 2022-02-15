import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Div100vh from "react-div-100vh";
import { LoginModalProvider } from "../context/context_login-modal";
import LoginModal from "../components/LoginModal/index";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Div100vh>
        <LoginModalProvider>
          <Header />
          <Component {...pageProps} />
          <LoginModal />
          <Footer />
        </LoginModalProvider>
      </Div100vh>
    </>
  );
}

export default MyApp;
