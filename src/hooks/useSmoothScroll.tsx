import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useSmoothScroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]") as HTMLElement | null;

    if (!scrollContainer) return; // Prevent errors if the element is not found

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
};

export default useSmoothScroll;
