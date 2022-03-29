import styles from "./about.module.scss";
import React from "react";
import Image from "next/image";
import useAnimateOnScroll from "../../../hooks/useAnimateOnScroll";
export default function About({ data }) {
  const content = data[0].primary;

  const textContainerRef = React.createRef();
  const textContainerInViewPort = useAnimateOnScroll(textContainerRef);

  const imageContainerRef = React.createRef();
  const imageContainerInViewPort = useAnimateOnScroll(imageContainerRef);

  return (
    <section className={styles.container} ref={textContainerRef}>
      <div
        className={`${styles.textsContainer} ${
          !textContainerInViewPort ? "hide" : "appear"
        }`}
      >
        <h1>{content.title[0].text}</h1>
        {content.description.map((item, i) => (
          <p key={i}>{item.text}</p>
        ))}
      </div>
      <div
        ref={imageContainerRef}
        className={`${styles.image} ${
          !imageContainerInViewPort ? "hide" : "appear"
        } `}
      >
        <Image
          width={700}
          height={700}
          quality={100}
          src={content.image.url}
          alt={content.image.alt}
        />
      </div>
    </section>
  );
}
