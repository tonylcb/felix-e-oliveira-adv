import React from "react";
import Image from "next/image";
// import styles from "./team.module.scss";

import styles from "../about-section.module.scss";

export default function TeamSection({ data }) {
  const dataContent = data.slices1;
  console.log("data :>> ", data);
  return (
    <>
      {dataContent.map((content, i) => (
        <section key={i} className={`${i % 2 !== 0 && styles.containerSectionTextRight} ${styles.containerSection}`}>
          <div
            className={`${i % 2 === 0 ? styles.containerSectionTextLeft : styles.containerSectionTextRight} ${styles.containerSectionText}`}
          >
            <h2 className={"title"}>{content.primary.memberTitle[0].text}</h2>
            {content.primary.memberDescription.map((item, i) => (
              <p key={i}>{item.text}</p>
            ))}
          </div>
          <div className={styles.containerSectionImage}>
            <Image
              src={content.primary.memberImage.url}
              alt={content.primary.memberImage.alt}
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
