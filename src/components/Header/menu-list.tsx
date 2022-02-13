import styles from "./menu-list.module.scss";
import Link from "next/link";

export function MenuList() {
  return (
    <>
      <li className={styles.menuItem}>
        <Link href="/quem-somos" passHref>
          Quem somos
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/artigos" passHref>
          Artigos
        </Link>
      </li>
      <li className={styles.menuItem}>
        <a>Área do cliente</a>
      </li>
      <li className={styles.menuItem}>
        <Link href="/midia" passHref>
          Mídia
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/fale-conosco" passHref>
          Fale conosco
        </Link>
      </li>
    </>
  );
}
