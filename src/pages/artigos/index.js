import styles from "./artigos.module.scss";
import { createClient } from "../../../prismicio";

export default function Artigos({ page }) {
  console.log('page :>> ', page);
  return (
    <main className={styles.container}>
      <h1 className="title">Artigos</h1>
      <section className={styles.articlesContainer}>
        {page.map((article, i) => (
          <>
            <a key={i} className={styles.articleContainer} href={`/artigos/${article.slugs[0]}`}>
              <img src={article.data.slices[0].primary.articleImage.url} alt={article.data.slices[0].primary.articleImage.alt} />
              <div className={styles.articleDescriptionContainer}>
                <h3 className={styles.articleTitle}>{article.data.maintitle[0].text}</h3>
                <p>{article.data.slices[0].primary.articleDescription[0].text}</p>
              </div>
            </a>
          </>
        ))}
      </section>
    </main>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getAllByType("articles");

  return {
    props: { page },
  };
}