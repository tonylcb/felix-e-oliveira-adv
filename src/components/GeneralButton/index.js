import styles from "./general-button.module.scss";
import React from "react";
import Link from "next/link";

function GeneralButton({ children, individualClass, tag, href }) {
  return tag === "button" ? (
    <button className={`${styles.container} ${individualClass}`}>
      {children}
    </button>
  ) : (
    <Link href={href} passHref>
      <button className={`${styles.container} ${individualClass}`}>
        {children}
      </button>
    </Link>
  );
}

export default GeneralButton;
