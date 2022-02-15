import styles from "../styles/home.module.scss";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 2500);
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.inDevelopment__container}>
        <h1 className={styles.inDevelopment__title}>Em construção...</h1>
        <div className={styles.inDevelopment__image}>
          <Image
            src="/site-em-construção.png"
            alt="Site em construção"
            width={504}
            height={470}
          />
        </div>
      </section>
    </main>
  );
}
