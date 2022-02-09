import styles from "./error-msg.module.scss";

export default function ErrorMsg({ children }) {
  return <p className={styles.errorMsg}>{children}</p>;
}
