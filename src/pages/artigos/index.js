import styles from "./artigos.module.scss";
import { createClient } from "../../../prismicio";
import Link from "next/link";
import Image from "next/image";

export default function Articles({ page }) {

  return (
    <main className={styles.container}>
      <div className={styles.content}>

        <h1 className="title">Artigos</h1>
        <section className={styles.articlesContainer}>
          {page.map((article, i) => (
            <>
              <Link key={i} className={styles.articleContainer} href={`/artigos/${article.uid}`}>
                <Image
                  src={article.data.slices[0].primary.articleImage.url}
                  alt={article.data.slices[0].primary.articleImage.alt}
                  width={500}
                  height={208}
                  quality={100}
                />
                <div className={styles.articleDescriptionContainer}>
                  <h3 className={styles.articleTitle}>{article.data.maintitle[0].text}</h3>
                  <p>{article.data.slices[0].primary.articleDescription[0].text}</p>
                </div>
              </Link>
            </>
          ))}
        </section>
      </div>
    </main>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getAllByType("articles",
    {
      orderings: {
        field: 'my.articles.first_publication_date',
        direction: 'desc',
      }
    }
  );

  return {
    props: { page }
  };
}