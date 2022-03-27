import styles from "./hamburger-menu.module.scss";

export function HamburgerMenu(isMenuOpened) {
  return (
    <>
      <div
        className={`${isMenuOpened && styles.hamburgerMenu__hamburgerOpened} ${
          styles.hamburgerMenu
        }`}
      ></div>
    </>
  );
}
