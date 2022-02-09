import React from "react";
import styles from "./login.module.scss";
// import useFetch from '../../components/Hooks/useFetch'
import useForm from "../../components/Hooks/useForm";
import ErrorMsg from "../../components/ErrorMsg";

export default function Login() {
  // const { loading, error, getRequest } = useFetch();
  // const email = useForm("email");
  // const password = useForm("");

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   const {response} = await getRequest(email.value, password.value)
  //   console.log(response)
  // }

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h3 className={styles.mainTitle}>
          {" "}
          Acesse sua conta para acompanhar o seu processo
        </h3>
        <form action="https://login-ext.sajadv.com.br" method="get">
          <input type="hidden" name="dominio" value="felixeoliveiraadvogados" />
          <div className={styles.emailField}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="login"
              placeholder="exemplo@exemplo.com"
              // {...email}
              required
            />
          </div>
          {/* {email.err ? (
            <ErrorMsg>{email.err}</ErrorMsg>
          ) : (
            <ErrorMsg>{""}</ErrorMsg>
          )} */}

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
      </section>
    </main>
  );
}
