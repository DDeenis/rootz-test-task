import clsx from "clsx";
import { CarouselSlideRenderControlProps } from "nuka-carousel";
import React from "react";
import styles from "./CardsSliderControls.module.scss";

interface CarouselIconProps extends CarouselSlideRenderControlProps {
  icon: JSX.Element;
  direction: "prev" | "next";
}

export const CarouselIcon = ({
  icon,
  direction,
  nextSlide,
  previousSlide,
}: CarouselIconProps) => {
  const isNext = direction === "next";

  return (
    <button
      className={clsx(styles.customArrowBtn, {
        [styles.iconNext]: isNext,
        [styles.iconPrev]: !isNext,
      })}
      onClick={isNext ? nextSlide : previousSlide}
    >
      {icon}
    </button>
  );
};

export const CarouselDots = ({
  slideCount,
  currentSlide,
  goToSlide,
}: CarouselSlideRenderControlProps) => {
  const dotsArr = Array(slideCount).fill(0);

  const createOnClick = (index: number) => () => goToSlide(index);

  return (
    <div className={styles.dotsContainer}>
      {dotsArr.map((_, i) => (
        <button
          className={clsx(styles.dot, i === currentSlide && styles.dotActive)}
          key={i}
          onClick={createOnClick(i)}
        />
      ))}
    </div>
  );
};
