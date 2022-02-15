import styles from "./menu-list.module.scss";
import Link from "next/link";
import { useLoginModal } from "../../context/context_login-modal";

export function MenuList() {
  // @ts-expect-error
  const { setloginModal } = useLoginModal();

  function handleOpenLoginModal() {
    setloginModal(true);
  }

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
      <li className={styles.menuItem} onClick={handleOpenLoginModal}>
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
