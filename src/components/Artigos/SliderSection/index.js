import styles from "./articles-slider-section.module.scss";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import GeneralButton from "../../GeneralButton";


export default function ArticlesSliderSection({ className, page, articles, isArticlePage = false }) {

    let articlesSliderGroup = []
    articles.forEach((article) => {
        if (articlesSliderGroup.length < 6) {
            if (isArticlePage) {
                if (article.uid !== page.uid) {
                    articlesSliderGroup.push(article)
                }
            } else {
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
        prevArrow: <MdArrowBackIosNew className={styles.prevArrow} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };

    return (
        <section className={`${className} ${styles.articlesSliderSection}`}>
            <h1 className='title'>Artigos recentes</h1>
            <Slider {...articlesSliderSettings}>
                {articles &&
                    articlesSliderGroup.map((content, i) => (
                        <Link key={i} href={`/artigos/${content.uid}`} className={styles.articleContainer}>
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
            <div className={styles.articlesCtaContainer}>
                <GeneralButton href="/artigos" className={styles.articlesBttnSeeMore}>
                    Veja mais
                </GeneralButton>
            </div>
        </section>
    )
    return
}