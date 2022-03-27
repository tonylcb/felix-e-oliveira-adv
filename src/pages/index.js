import styles from "../styles/home.module.scss";
import React from "react";
import SEO from "../components/SEO";
import FullBannerSliderhome from "./home/fullbanner-slider-home";
import { createClient } from "../../prismicio";

export default function Home({ page }) {
  return (
    <>
      <SEO title="Félix & Oliveira Advogados" excludeTitleSuffix />
      <main className={styles.container}>
        <FullBannerSliderhome data={page.data.slices1} />
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
