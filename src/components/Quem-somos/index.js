import Image from "next/image";
import React from "react";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import styles from "./about-section.module.scss";

export default function AboutSection({ data }) {
  const dataContent = data.slices;
  return (
    <>
      {dataContent.map((content, i) => (
        <section key={i} className={`${i % 2 !== 0 && styles.containerSectionTextRight} ${styles.containerSection}`}>
          <div
            className={`${i % 2 === 0 ? styles.containerSectionTextLeft : styles.containerSectionTextRight} ${styles.containerSectionText}`}
          >
            <h2 className={"title"}>{content.primary.title[0].text}</h2>
            {content.primary.text.map((item, i) => (
              <p key={i}>{item.text}</p>
            ))}
          </div>
          <div className={styles.containerSectionImage}>
            <Image
              src={content.primary.image.url}
              alt={content.primary.image.alt}
              width={900}
              height={900}
              // layout="responsive"
              quality={100}
            />
          </div>
        </section>
      ))}
    </>
  );
}
