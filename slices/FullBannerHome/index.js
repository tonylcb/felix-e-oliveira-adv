/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import styles from "./fullbannerhome.module.scss";

function FullBannerHome({ slice }) {
  const isMobile = useMediaQuery("(max-width: 575px)");

  return (
    <>
      {slice?.items?.map((item, i) => (
        <a className={styles.fullBannerSliderItem} key={i} field={item.link}>
          {!isMobile ? (
            <img
              src={item["fullbanner-desktop"].url}
              alt={item["fullbanner-desktop"].alt}
              width="1920"
              height="800"
            />
          ) : (
            <img
              src={item["fullbanner-mobile"].url}
              alt={item["fullbanner-mobile"].alt}
              width="575"
              height="500"
            />
          )}

          <PrismicRichText field={item.title} />
          <PrismicRichText field={item.description} />
        </a>
      ))}
    </>
  );
}

export default FullBannerHome;
