import styles from "./general-button.module.scss";
import React from "react";
import Link from "next/link";

function GeneralButton({ children, className, tag, href }) {
  return tag === "button" ? (
    <button className={`${styles.container}`}>{children}</button>
  ) : (
    <Link href={href} passHref>
      <button className={`${styles.container} ${className}`}>{children}</button>
    </Link>
  );
}

export default GeneralButton;
