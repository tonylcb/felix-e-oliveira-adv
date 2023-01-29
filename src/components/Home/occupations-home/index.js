import styles from "./occupations-home.module.scss";
import React from "react";
import GeneralButton from "../../GeneralButton";

function OccupationsAreaHome({ data }) {
  const content = data.slices3;
  const titleContent = data.occupationMainTitleHome[0].text;
  return (
    <section className={`${styles.container} section`}>
      <h1 className="title">{titleContent}</h1>
      <ul className={styles.areasListContainer}>
        {content.map((item, index) => (
          <>
            <li key={index} className={`${styles.areasListItem} textContainer`}>
              <h2 className={styles.areasListItemTitle}>{item.primary.titleArea[0].text}</h2>
              {item.primary.areaDescription.map((description, i) => (
                <p key={i}>{description.text}</p>
              ))}
            </li>
            {index !== content.length - 1 && <div className={styles.areasListItemDivisor}></div>}
          </>
        ))}
      </ul>

      <div className={styles.buttonContainer}>
        <GeneralButton href={"/quem-somos/areas-de-atuacao"} className={styles.buttonCTA}>
          Saiba mais
        </GeneralButton>
      </div>
    </section>
  );
}

export default OccupationsAreaHome;
