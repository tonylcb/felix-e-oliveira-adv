import styles from "./about.module.scss";
import React from "react";
import Image from "next/image";
import useAnimateOnScroll from "../../../hooks/useAnimateOnScroll";
import GeneralButton from "../../GeneralButton";

export default function About({ data }) {
  const content = data[0].primary;

  const textContainerRef = React.createRef();
  const textContainerInViewPort = useAnimateOnScroll(textContainerRef, 3);

  const imageContainerRef = React.createRef();
  const imageContainerInViewPort = useAnimateOnScroll(imageContainerRef, 3);

  return (
    <section className={`${styles.container} section`}>
      <div
        ref={textContainerRef}
        className={`${styles.textsContainer} ${
          !textContainerInViewPort ? "hide" : "appear"
        }`}
      >
        <h1 className="title">{content.title[0].text}</h1>
        {content.description.map((item, i) => (
          <p key={i}>{item.text}</p>
        ))}
        <div className={styles.buttonContainer}>
          <GeneralButton href="/quem-somos" individualClass={styles.button}>
            Nos conheça mais!
          </GeneralButton>
        </div>
      </div>
      <div
        ref={imageContainerRef}
        className={`${styles.image} ${
          !imageContainerInViewPort ? "hide" : "appear"
        } `}
      >
        <Image
          className={styles.image}
          width={900}
          height={900}
          quality={100}
          src={content.image.url}
          alt={content.image.alt}
        />
      </div>
    </section>
  );
}
