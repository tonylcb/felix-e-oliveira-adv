import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LoginModalProvider } from "../context/context_login-modal";
import LoginModal from "../components/LoginModal/index";
import "../styles/globals.scss";
import { MenuMobileProvider } from "../context/context_menu-mobile";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../../prismicio";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
})
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
})
Router.events.on("routeChangeError", () => {
  NProgress.done();
})

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
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
    </PrismicProvider>
  );
}

export default MyApp;
