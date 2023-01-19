import styles from "./about.module.scss";
import React from "react";
import Image from "next/image";
import GeneralButton from "../../GeneralButton";

export default function About({ data }) {
  const content = data.slices2[0].primary;
  const titleContent = data.aboutMainTitleHome[0].text;

  return (
    <section className={styles.container}>
      <h1 className="title">{titleContent}</h1>
      <div className={`${styles.containerSection} section`}>
        <div className={`${styles.textsContainer} textContainer`}>
          {content.title[0].text && <h1 className="title">{content.title[0].text}</h1>}
          {content.description.map((item, i) => (
            <p key={i}>{item.text}</p>
          ))}
          <div className={styles.buttonContainer}>
            <GeneralButton href="/quem-somos" className={styles.button}>
              Nos conheça mais!
            </GeneralButton>
          </div>
        </div>
        <div className={styles.image}>
          <Image className={styles.image} width={900} height={900} quality={100} src={content.image.url} alt={content.image.alt} />
        </div>
      </div>
    </section>
  );
}
