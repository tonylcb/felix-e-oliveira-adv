import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MenuList } from "./menu-list";
import { HamburgerMenu } from "./hamburger-menu";

export function Header() {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  const hamburgerMenu = HamburgerMenu(openMobileMenu);

  function handleOpenMobileMenu() {
    setOpenMobileMenu(!openMobileMenu);
  }

  return (
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
            className={`${openMobileMenu && styles.menuMobileOpened} ${
              styles.menuMobile
            }`}
          >
            <button
              className={styles.menuMobile__buttonMenu}
              onClick={handleOpenMobileMenu}
            >
              <span className={styles.menuMobile__buttonMenu__text}>Menu</span>
              {hamburgerMenu}
            </button>
            <div
              className={`${openMobileMenu && styles.menuMobile__listOpened} ${
                styles.menuMobile__container
              }`}
            >
              <ul className={styles.menuMobile__list}>
                <MenuList />
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
