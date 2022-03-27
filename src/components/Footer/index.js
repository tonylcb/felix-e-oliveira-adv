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
  const { loginModal, setLoginModal } = useLoginModal();

  function handleLoginModal() {
    setLoginModal(!loginModal);
  }

  return (
    <footer>
      <section className={styles.container}>
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
            <h3
              className={`${styles.footer__contactTitle} ${styles.footer__titles}`}
            >
              Fale conosco
            </h3>
            <ul className={styles.footer__contactItems}>
              <li className={styles.footer__contactItem}>
                <a
                  href="https://web.whatsapp.com/send?phone=558135233058"
                  target="_blank"
                  rel="noreferrer"
                >
                  (81) 3333-3333
                </a>
              </li>
              <li className={styles.footer__contactItem}>
                <a
                  href="http://maps.google.com/?q=R. Dr. Demócrito Cavalcante, 355 - Livramento, Vitória de Santo Antão - PE, 55602-420"
                  target="_blank"
                  rel="noreferrer"
                >
                  R. Dr. Demócrito Cavalcante, 355 - Livramento, Vitória de
                  Santo Antão - PE, CEP 55602-420
                </a>
              </li>
              <li className={styles.footer__contactItem}>
                <a
                  href="mailto:contato@felixoliveiraadvogados.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  contato@felixoliveiraadvogados.com
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footer__network}>
            <Link href="/fale-conosco" passHref>
              <h3
                className={`${styles.footer__networkTitle} ${styles.footer__titles}`}
              >
                Nossas redes
              </h3>
            </Link>
            <ul className={styles.footer__networkLinks}>
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
              {/* <li>
              <a href="mailto:contato@felixoliveiraadvogados.com">
                <EmailSvg />
              </a>
            </li> */}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.copyright}>
        Todos os direitos reservados.
      </section>
    </footer>
  );
}
