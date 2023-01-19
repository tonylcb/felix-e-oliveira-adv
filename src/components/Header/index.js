import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MenuList } from "./menu-list";
import { HamburgerMenu } from "./hamburger-menu";
import { useRouter } from "next/router";
import { useMenuMobile } from "../../context/context_menu-mobile";

export function Header() {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const { menuMobile, setMenuMobile } = useMenuMobile();
  const containerMenu = React.useRef();
  const buttonMenu = React.useRef();
  const hamburgerMenu = HamburgerMenu(menuMobile);
  const router = useRouter();
  function handlemenuMobile() {
    setMenuMobile(!menuMobile);
  }

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setMenuMobile(false);
    });
  }, [router]);

  React.useEffect(() => {
    if (isTablet) {
      window.addEventListener('click', (event) => {

        if (!buttonMenu.current.contains(event.target) &&
          !containerMenu.current.contains(event.target) &&
          event.target !== containerMenu.current &&
          event.target !== buttonMenu.current) {
          setMenuMobile(false);
        }
      })
    }
  }, [isTablet])

  return (
    <>
      <header className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo__content}>
            <Link href="/" passHref>
              <Image
                src="/logo3.png"
                className={styles.logo__img}
                alt="logo"
                width="256"
                height="62"
              />
            </Link>
          </div>

          {!isTablet ? (
            <div className={styles.menuDesktop}>
              <nav className={styles.menuDesktop__nav}>
                <ul className={styles.menuDesktop__list}>
                  <MenuList />
                </ul>
              </nav>
            </div>
          ) : (
            <div
              className={`${menuMobile && styles.menuMobileOpened} ${styles.menuMobile
                }`}
            >
              <button
                className={styles.menuMobile__buttonMenu}
                onClick={handlemenuMobile}
                ref={buttonMenu}
              >
                <span className={styles.menuMobile__buttonMenu__text}>
                  Menu
                </span>
                {hamburgerMenu}
              </button>
            </div>
          )}
        </div>
      </header>
      {isTablet ? (
        <div
          className={`${menuMobile && styles.menuMobile__listOpened} ${styles.menuMobile__container
            }`}
          ref={containerMenu}
        >
          <ul className={styles.menuMobile__list}>
            <MenuList />
          </ul>
        </div>
      ) : null}
    </>
  );
}
