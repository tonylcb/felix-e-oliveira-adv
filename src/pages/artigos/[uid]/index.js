import styles from "./artigo.module.scss";
import { createClient } from "../../../../prismicio";
import Image from "next/image";
import React from "react";
import ArticlesSliderSection from "../../../components/Artigos/SliderSection";

export default function ArticlePage({ page, articles }) {
    React.useEffect(() => {
        console.log('window.location.pathname :>> ', window.location.pathname);
    }, [])
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.mainTitle}>{page?.data?.maintitle[0].text}</h1>
                {page?.data?.slices.map((content, i) => (
                    <section key={i} className={styles.containerSection}>
                        {content.primary.articleTitle[0].text !== "" &&
                            <h2 className={content.primary.articleImage.url ? "title" : styles.subTitle}>{content.primary.articleTitle[0].text}</h2>}
                        {content.primary.articleImage.url &&
                            <div className={styles.containerSectionImage}>
                                <Image
                                    src={content.primary.articleImage.url}
                                    alt={content.primary.articleImage.alt}
                                    width={1920}
                                    height={800}
                                    quality={100}
                                />
                            </div>
                        }
                        <div className={`${styles.containerSectionText} textContainer`}>
                            {content.primary.articleDescription.map((item, i) => (
                                <p key={i}>{item.text}</p>
                            ))}
                        </div>
                    </section>
                ))}
                <ArticlesSliderSection page={page} articles={articles} isArticlePage={true} />
            </div>
        </main>
    );
}

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData })

    const page = await client.getByUID('articles', params.uid)
    const articles = await client.getAllByType("articles",
        {
            orderings: {
                field: 'my.articles.first_publication_date',
                direction: 'desc',
            }
        }
    );
    return {
        props: {
            page,
            articles,
        },
    }
}

export async function getStaticPaths() {
    const client = createClient()

    const pages = await client.getAllByType('articles')
    return {
        paths: pages.map((page) => {
            return {
                params: {
                    uid: page.uid
                }
            }
        }),
        fallback: true,
    }
}