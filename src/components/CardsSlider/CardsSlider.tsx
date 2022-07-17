import React from "react";
import ReactSlick, { CustomArrowProps, Settings } from "react-slick";
import { IconLeft } from "../Icons/IconLeft";
import { IconRight } from "../Icons/IconRight";
import { CardsSliderElement } from "./CardsSliderElement";
import styles from "./CardsSlider.module.scss";
import clsx from "clsx";

export const CardsSlider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CarouselIcon icon={<IconLeft />} />,
    nextArrow: <CarouselIcon icon={<IconRight />} />,
  };

  return (
    <div className={styles.container}>
      <ReactSlick {...settings}>
        <CardsSliderElement
          title="Travel In Japan: The True Experience"
          descr="When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics."
          bg="#ffbd9e"
        />
        <CardsSliderElement
          title="Helping Wild Turtles To Travel In Japan"
          descr="The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something."
          bg="#FFADAD"
        />
        <CardsSliderElement
          title="Threats of Modern Indusrial World"
          descr="The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper."
          bg="#CBCBFF"
        />
      </ReactSlick>
    </div>
  );
};

interface CarouselIconProps extends CustomArrowProps {
  icon: JSX.Element;
}

const CarouselIcon = ({
  icon,
  slideCount,
  currentSlide,
  className,
  ...props
}: CarouselIconProps) => {
  return (
    <button {...props} className={clsx(styles.customArrowBtn, className)}>
      {icon}
    </button>
  );
};
