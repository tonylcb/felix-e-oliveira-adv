import React from "react";
import useMediaQuery from "./useMediaQuery";

const useAnimateOnScroll = (element, divisor) => {
  const [isInViewPort, setIsInViewPort] = React.useState(false);
  const isTablet = useMediaQuery("(max-width: 1024px");

  React.useEffect(() => {
    isTablet &&
      element.current.getBoundingClientRect().top <= window.innerHeight &&
      setIsInViewPort(true);

    const listener = () => {
      const elementHeight = () => {
        if (!isTablet) {
          return element.current.offsetHeight / divisor;
        } else {
          return element.current.offsetHeight / divisor;
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
  }, [element, divisor, isInViewPort, isTablet]);
  return isInViewPort;
};

export default useAnimateOnScroll;
