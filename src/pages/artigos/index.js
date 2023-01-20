import styles from "./artigos.module.scss";
import { createClient } from "../../../prismicio";

export default function Artigos({ page }) {

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Artigos</h1>
        <section className={styles.articlesContainer}>
          {page.map((article, i) => (
            <>
              <div key={i} className={styles.articleContainer}>
                <h3 className={styles.articleTitle}>{article.data.maintitle[0].text}</h3>
              </div>
            </>
          ))}
        </section>
      </div>
    </main>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  console.log('client :>> ', client);
  const page = await client.getAllByType("articles");

  return {
    props: { page },
  };
}