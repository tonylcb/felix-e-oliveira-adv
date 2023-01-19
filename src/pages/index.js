import styles from "../styles/home.module.scss";
import React from "react";
import SEO from "../components/SEO";
import FullBannerSliderhome from "../components/Home/fullbanner-slider-home";
import About from "../components/Home/about-home";
import Occupations from "../components/Home/occupations-home";
import { createClient } from "../../prismicio";
export default function Home({ page }) {
  return (
    <>
      <SEO title="Félix & Oliveira Advogados" excludeTitleSuffix />
      <main className={styles.container}>
        <FullBannerSliderhome data={page.data.slices1} />
        <About data={page.data} />
        <Occupations data={page.data} />
      </main>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("home");
  return {
    props: { page },
  };
}
