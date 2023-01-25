import styles from "./artigo.module.scss";
import { createClient } from "../../../../prismicio";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";

export default function ArticlePage({ articles, page }) {
    let articlesSliderGroup = []
    articles.forEach((article) => {
        if (articlesSliderGroup.length < 6) {
            if (article.uid !== page.uid) {
                articlesSliderGroup.push(article)
            }
        } else {
            return articlesSliderGroup
        }
    })

    const articlesSliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        className: `${styles.articlesSliderContainer}`,
        nextArrow: <MdArrowForwardIos className={styles.nextArrow} />,
        prevArrow: <MdArrowBackIosNew className={styles.orevArrow} />,
    };

    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.mainTitle}>{page.data.maintitle[0].text}</h1>
                {page.data.slices.map((content, i) => (
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
                <section className={styles.articlesSliderSection}>
                    <h1 className='title'>Artigos recentes</h1>
                    <Slider {...articlesSliderSettings}>
                        {articles &&
                            articlesSliderGroup.map((content, i) => (
                                <Link href={`/artigos/${content.uid}`} className={styles.articleContainer}>
                                    <Image
                                        src={content.data.slices[0].primary.articleImage.url}
                                        alt={content.data.slices[0].primary.articleImage.alt}
                                        width={500}
                                        height={208}
                                        quality={100}
                                    />
                                    <div className={styles.articleDescriptionContainer}>
                                        <h3 className={styles.articleTitle}>{content.data.maintitle[0].text}</h3>
                                        <p>{content.data.slices[0].primary.articleDescription[0].text}</p>
                                    </div>
                                </Link>
                            ))}
                    </Slider>
                </section>
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