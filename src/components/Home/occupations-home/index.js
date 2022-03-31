import styles from "./occupations-home.module.scss";
import React from "react";
import GeneralButton from "../../GeneralButton";

function OccupationsAreaHome() {
  return (
    <section className={styles.container}>
      <h1 className="title">Áreas de atuação</h1>
      <GeneralButton href={"/quem-somos/areas-de-atuacao"}></GeneralButton>
    </section>
  );
}

export default OccupationsAreaHome;
