import React from "react";
import Image from "next/image";
// import styles from "./team.module.scss";

import styles from "./team.module.scss";

export default function TeamSection({ data }) {
  const dataContent = data.slices1;
  return (
    <>
      {dataContent.map((content, i) => (
        <section key={i} className={styles.containerSection}>
            {content.primary.memberTitle[0].text !== "" &&
            <h2 className={"title"}>{content.primary.memberTitle[0].text}</h2>}
          <div className={styles.containerSectionImage}>
            <Image
              src={content.primary.memberImage.url}
              alt={content.primary.memberImage.alt}
              width={1920}
              height={800}
              // layout="responsive"
              quality={100}
            />
          </div>
          <div className={`${styles.containerSectionText} textContainer`}>
            {content.primary.memberDescription.map((item, i) => (
              <p key={i}>{item.text}</p>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
