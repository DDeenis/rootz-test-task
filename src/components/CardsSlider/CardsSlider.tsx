import React from "react";
import { CardsSliderElement } from "./CardsSliderElement";
import styles from "./CardsSlider.module.scss";
import Carousel from "nuka-carousel";
import { IconLeft } from "../Icons/IconLeft";
import { IconRight } from "../Icons/IconRight";
import { CarouselDots, CarouselIcon } from "./CardsSliderControls";

export const CardsSlider = () => {
  return (
    <div className={styles.container}>
      <Carousel
        renderCenterLeftControls={(props) => (
          <CarouselIcon icon={<IconLeft />} direction="prev" {...props} />
        )}
        renderCenterRightControls={(props) => (
          <CarouselIcon icon={<IconRight />} direction="next" {...props} />
        )}
        renderBottomCenterControls={(props) => <CarouselDots {...props} />}
        dragThreshold={0.3}
        wrapAround
      >
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
      </Carousel>
    </div>
  );
};
