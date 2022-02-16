import React from "react";
import styles from "./footer.module.scss";
import InstagramSvg from "../../../public/instagram1.svg";
import FacebookSvg from "../../../public/facebook1.svg";
import WhatsappSvg from "../../../public/whatsapp1.svg";
import EmailSvg from "../../../public/email2.svg";
import Image from "next/image";
import Link from "next/link";
import { useLoginModal } from "../../context/context_login-modal";

export function Footer() {
  // @ts-expect-error
  const { loginModal, setLoginModal } = useLoginModal();

  function handleLoginModal() {
    setLoginModal(!loginModal);
  }

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.footer__logo}>
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

        <div className={styles.footer__institutional}>
          <h3
            className={`${styles.footer__institutionalTitle} ${styles.footer__titles}`}
          >
            Institucional
          </h3>
          <ul className={styles.footer__institutionalLinkList}>
            <li className={styles.footer__institutionalList}>
              <Link href="/quem-somos" passHref>
                Quem somos
              </Link>
            </li>
            <li className={styles.footer__institutionalList}>
              <Link href="/artigos" passHref>
                Artigos
              </Link>
            </li>
            <li
              className={styles.footer__institutionalList}
              onClick={handleLoginModal}
            >
              Área do cliente
            </li>
            <li className={styles.footer__institutionalList}>
              <Link href="/midia" passHref>
                Mídia
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer__contact}>
          <Link href="/fale-conosco" passHref>
            <h3
              className={`${styles.footer__contactTitle} ${styles.footer__titles}`}
            >
              Fale conosco
            </h3>
          </Link>
          <ul className={styles.footer__contactLinks}>
            <li>
              <a
                href="https://www.instagram.com/felixoliveiraadvogados/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramSvg />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/felixoliveiraadvogados"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookSvg />
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/send?phone=558135233058"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsappSvg />
              </a>
            </li>
            <li>
              <a href="mailto:contato@felixoliveiraadvogados.com">
                <EmailSvg />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>Todos os direitos reservados.</div>
    </footer>
  );
}
