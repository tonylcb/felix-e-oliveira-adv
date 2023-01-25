import { useRouter } from "next/router";
import NavBarAboutSection from "../components/Quem-somos/NavbarAboutSection";
import { createClient } from "../../prismicio";
import styles from "../styles/quem-somos.module.scss";
import TeamSection from "../components/Quem-somos/TeamSection";
import OccupationsSection from "../components/Quem-somos/OccupationsSection";
import AboutSection from "../components/Quem-somos";

export default function QuemSomos({ page }) {
  const routes = useRouter();
  return (
    <main className={styles.container}>
      <NavBarAboutSection
        aboutMainTitle={page.data.mainTitle[0].text}
        occupationMainTitle={page.data.occupationMaintitle[0].text}
        teamMainTitle={page.data.teamMaintitle[0].text}
      />

      {routes.asPath === "/quem-somos" && <AboutSection data={page.data} />}
      {routes.asPath === "/quem-somos/equipe" && <TeamSection data={page.data} />}
      {routes.asPath === "/quem-somos/areas-de-atuacao" && <OccupationsSection data={page.data} />}
    </main>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("about");

  return {
    props: { page },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/quem-somos", "/quem-somos/areas-de-atuacao", "/quem-somos/equipe"],
    fallback: true,
  };
}
