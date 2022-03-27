import React from "react";
import styles from "./login-modal.module.scss";
import { useLoginModal } from "../../context/context_login-modal";
import CloseButton from "../CloseButton";

export default function Login() {
  const { loginModal, setLoginModal } = useLoginModal();
  const outsideModal = React.createRef();

  function handleCloseOutsideModal({ target }) {
    if (outsideModal.current && loginModal && target === outsideModal.current) {
      setLoginModal(false);
    }
  }

  return (
    <>
      {loginModal ? (
        <div
          className={styles.container}
          ref={outsideModal}
          onClick={handleCloseOutsideModal}
        >
          <div className={styles.content}>
            <div
              onClick={() => {
                setLoginModal(false);
              }}
            >
              <CloseButton />
            </div>
            <h3 className={styles.mainTitle}>
              {" "}
              Acesse sua conta para acompanhar o seu processo
            </h3>
            <form action="https://login-ext.sajadv.com.br" method="get">
              <input
                type="hidden"
                name="dominio"
                value="felixeoliveiraadvogados"
              />
              <div className={styles.emailField}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="login"
                  placeholder="exemplo@exemplo.com"
                  required
                />
              </div>

              <div className={styles.passwordField}>
                <label htmlFor="password">Senha:</label>
                <input type="password" name="senha" required />
              </div>
              <div className={styles.btnSubmit}>
                <button type="submit" name="Autenticar">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
