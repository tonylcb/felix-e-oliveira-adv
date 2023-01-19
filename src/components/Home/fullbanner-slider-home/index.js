/* eslint-disable @next/next/no-img-element */
import styles from "./fullbanner-slider-home.module.scss";
import React from "react";
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Image from "next/image";

export default function FullBannerSliderhome({ data }) {
  const fullBannerSliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
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
    <section className={`${styles.fullBannerSlider} section`}>
      <Slider {...fullBannerSliderSettings}>
        {data &&
          data.map((content, i) => (
            <a
              key={i}
              className={styles.fullBannerSliderItem}
              href={content.primary.link.url ? content.primary.link.url : "#"}
            >
              {!isMobile ? (
                <Image
                  className={styles.fullBannerSliderImgDesktop}
                  src={content.primary.fullbannerDesktop.url}
                  alt={content.primary.fullbannerDesktop.alt}
                  width={1920}
                  height={800}
                  layout="responsive"
                  quality={100}
                />
              ) : (
                <Image
                  className={styles.fullBannerSliderImgMobile}
                  src={content.primary.fullbannerMobile.url}
                  alt={content.primary.fullbannerMobile.alt}
                  width={575}
                  height={500}
                  layout="responsive"
                  quality={100}
                />
              )}
              <div className={styles.fullBannerSliderTextContainer}>
                <h1>{content.primary.title[0].text}</h1>
                <p>{content.primary.description[0].text}</p>
              </div>
            </a>
          ))}
      </Slider>
    </section>
  );
}
