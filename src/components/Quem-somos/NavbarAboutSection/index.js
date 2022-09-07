import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./navbar-about.module.scss";

export default function NavBarAboutSection({ ...props }) {
  const router = useRouter();

  const [mainTitle, setMainTitle] = React.useState("");
  const [firstTab, setFirstTab] = React.useState("");
  const [firstHref, setFirstHref] = React.useState("");
  const [secondTab, setSecondTab] = React.useState("");
  const [secondHref, setSecondHref] = React.useState("");

  React.useEffect(() => {
    function switchMainTitle() {
      switch (router.asPath) {
        case "/quem-somos/equipe":
          setMainTitle(props.teamMainTitle);
          setFirstTab(props.aboutMainTitle);
          setFirstHref("/quem-somos");
          setSecondTab(props.occupationMainTitle);
          setSecondHref("/quem-somos/areas-de-atuacao");
          break;
        case "/quem-somos/areas-de-atuacao":
          setMainTitle(props.occupationMainTitle);
          setFirstTab(props.aboutMainTitle);
          setFirstHref("/quem-somos");
          setSecondTab(props.teamMainTitle);
          setSecondHref("/quem-somos/equipe");
          break;
        default:
          setMainTitle(props.aboutMainTitle);
          setFirstTab(props.teamMainTitle);
          setFirstHref("/quem-somos/equipe");
          setSecondTab(props.occupationMainTitle);
          setSecondHref("/quem-somos/areas-de-atuacao");
      }
    }
    switchMainTitle();
  }, [router, props]);

  return (
    <section className={styles.container}>
      <h1 className="mainTitle">{mainTitle}</h1>
      <nav className={styles.navBar}>
        <Link href={firstHref} passHref>
          <h3 className={styles.navBarTab}>{firstTab}</h3>
        </Link>
        <Link href={secondHref} passHref>
          <h3 className={styles.navBarTab}>{secondTab}</h3>
        </Link>
      </nav>
    </section>
  );
}
