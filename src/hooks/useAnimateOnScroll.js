import React from "react";
import useMediaQuery from "./useMediaQuery";

const useAnimateOnScroll = (element) => {
  const [isInViewPort, setIsInViewPort] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 575px");

  React.useEffect(() => {
    isMobile &&
      element.current.getBoundingClientRect().top <= window.innerHeight &&
      setIsInViewPort(true);

    const listener = () => {
      const elementHeight = () => {
        if (!isMobile) {
          return element.current.offsetHeight / 2;
        } else {
          return element.current.offsetHeight / 3;
        }
      };
      if (
        !isInViewPort &&
        element.current &&
        element.current.getBoundingClientRect().top + elementHeight() <=
          window.innerHeight
      ) {
        setIsInViewPort(true);
      }
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [element, isInViewPort, isMobile]);
  return isInViewPort;
};

export default useAnimateOnScroll;
