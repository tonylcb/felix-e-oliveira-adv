import styles from "./about.module.scss";
import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Image from "next/image";
export default function About({ data }) {
  const isMobile = useMediaQuery("(max-width: 575px)");
  const content = data[0].primary;
  console.log("content.description", content.description[0].text);

  return (
    <section className={styles.container}>
      <div className={styles.textsContainer}>
        <h1>{content.title[0].text}</h1>
        {content.description.map((item, i) => (
          <p key={i}>{item.text}</p>
        ))}
      </div>
      <div className={styles.image}>
        <Image
          width={700}
          height={700}
          src={content.image.url}
          alt={content.image.alt}
        />
      </div>
    </section>
  );
}
