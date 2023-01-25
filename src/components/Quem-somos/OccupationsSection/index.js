import React from "react";
import Image from "next/image";
import styles from "./occupations.module.scss";


export default function OccupationsSection({ data }) {
  return (
    <>
      {data.slices2.map((content, i) => (
        <>
          <section key={i} className={styles.container}>
            <h1 className={`${styles.containerSectionTitle} title`}>{content.primary.occupationTitle[0].text}</h1>
            <div className={`${i % 2 !== 0 && styles.containerSectionTextRight} ${styles.containerSection}`}>
              <div
                className={`${i % 2 === 0 ? styles.containerSectionTextLeft : styles.containerSectionTextRight} ${styles.containerSectionText} textContainer`}
              >
                {content.items.map((item, i) => (
                  <div key={i} className={styles.occupationSubText}>
                    <h3 className={styles.occupationSubTitle}>{item.occupationSubTitle[0].text}</h3>
                    {item.occupationText.map((textItem, i) => (
                      <p key={i}>{textItem.text}</p>
                    ))}
                  </div>
                ))}
              </div>
              <div className={styles.containerSectionImage}>
                <Image
                  src={content.primary.occupationImage.url}
                  alt={content.primary.occupationImage.alt}
                  width={900}
                  height={900}
                  // layout="responsive"
                  quality={100}
                />
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
}
