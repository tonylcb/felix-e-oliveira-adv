import styles from "../styles/home.module.scss";
import React from "react";
import Image from "next/image";
import SEO from "../components/SEO";
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
// import { useRouter } from "next/router";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
  const fullBannerSliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    className: `${styles.fullBannerSliderContainer}`,
    dotsClass: `${styles.fullBannerSliderDots}`,
    appendDots: (dots) => (
      <div>
        <ul
          className={styles.fullBannerSliderDotsContainer}
          style={{ margin: "0px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    nextArrow: <MdArrowForwardIos className={styles.nextArrow} />,
    prevArrow: <MdArrowBackIosNew className={styles.orevArrow} />,
  };

  const isMobile = useMediaQuery("(max-width: 575px)");

  return (
    <>
      <SEO title="Félix & Oliveira Advogados" excludeTitleSuffix />
      <main className={styles.container}>
        <section className={styles.fullBannerSlider}>
          <Slider {...fullBannerSliderSettings}>
            <div className={styles.fullBannerSliderItem}>
              {!isMobile ? (
                <Image
                  src="/fullbanner-slider/fullbanner1.jpg"
                  alt="Imagem FullBanner 1"
                  width="1920"
                  height="800"
                />
              ) : (
                <Image
                  src="/fullbanner-slider/fullbanner1-mobile.jpg"
                  alt="Imagem FullBanner 1"
                  width="575"
                  height="500"
                />
              )}
              <div className={styles.fullBannerSliderTextContainer}>
                <h1 className={styles.fullBannerSliderTextTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className={styles.fullBannerSliderTextDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore harum earum exercitationem fugit nisi nostrum,
                  reprehenderit nesciunt consequatur architecto vero mollitia
                  ducimus.
                </p>
              </div>
            </div>
            <div className={styles.fullBannerSliderItem}>
              {!isMobile ? (
                <Image
                  src="/fullbanner-slider/fullbanner2.jpg"
                  alt="Imagem FullBanner 1"
                  width="1920"
                  height="800"
                />
              ) : (
                <Image
                  src="/fullbanner-slider/fullbanner2-mobile.jpg"
                  alt="Imagem FullBanner 1"
                  width="575"
                  height="500"
                />
              )}
              <div className={styles.fullBannerSliderTextContainer}>
                <h1 className={styles.fullBannerSliderTextTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className={styles.fullBannerSliderTextDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore harum earum exercitationem fugit nisi nostrum,
                  reprehenderit nesciunt consequatur architecto vero mollitia
                  ducimus.
                </p>
              </div>
            </div>
            <div className={styles.fullBannerSliderItem}>
              {!isMobile ? (
                <Image
                  src="/fullbanner-slider/fullbanner3.jpg"
                  alt="Imagem FullBanner 1"
                  width="1920"
                  height="800"
                />
              ) : (
                <Image
                  src="/fullbanner-slider/fullbanner3-mobile.jpg"
                  alt="Imagem FullBanner 1"
                  width="575"
                  height="500"
                />
              )}
              <div className={styles.fullBannerSliderTextContainer}>
                <h1 className={styles.fullBannerSliderTextTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className={styles.fullBannerSliderTextDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore harum earum exercitationem fugit nisi nostrum,
                  reprehenderit nesciunt consequatur architecto vero mollitia
                  ducimus.
                </p>
              </div>
            </div>
            <div className={styles.fullBannerSliderItem}>
              {!isMobile ? (
                <Image
                  src="/fullbanner-slider/fullbanner4.jpg"
                  alt="Imagem FullBanner 1"
                  width="1920"
                  height="800"
                />
              ) : (
                <Image
                  src="/fullbanner-slider/fullbanner4-mobile.jpg"
                  alt="Imagem FullBanner 1"
                  width="575"
                  height="500"
                />
              )}
              <div className={styles.fullBannerSliderTextContainer}>
                <h1 className={styles.fullBannerSliderTextTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className={styles.fullBannerSliderTextDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore harum earum exercitationem fugit nisi nostrum,
                  reprehenderit nesciunt consequatur architecto vero mollitia
                  ducimus.
                </p>
              </div>
            </div>
          </Slider>
        </section>
      </main>
    </>
  );
}
