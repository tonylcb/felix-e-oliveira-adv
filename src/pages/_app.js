import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Div100vh from "react-div-100vh";
import { LoginModalProvider } from "../context/context_login-modal";
import LoginModal from "../components/LoginModal/index";
import "../styles/globals.scss";
import { MenuMobileProvider } from "../context/context_menu-mobile";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../../prismicio";

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <Div100vh>
        <LoginModalProvider>
          <MenuMobileProvider>
            <Header />
            <PrismicPreview repositoryName={repositoryName}>
              <Component {...pageProps} />
            </PrismicPreview>
            <LoginModal />
          </MenuMobileProvider>
          <Footer />
        </LoginModalProvider>
      </Div100vh>
    </PrismicProvider>
  );
}

export default MyApp;
