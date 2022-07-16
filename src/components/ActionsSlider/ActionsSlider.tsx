import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import styles from "./ActionsSlider.module.scss";
import { ActionsSliderElement } from "./ActionsSliderElement";
import img1 from "../../../public/sliderAction1.png";
import img2 from "../../../public/sliderAction2.png";
import img3 from "../../../public/sliderAction3.png";
import img4 from "../../../public/sliderAction4.png";
import imgMain from "../../../public/sliderActionMain.png";

export const ActionsSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    afterChange(currentSlide) {
      setCurrentIndex(currentSlide);
    },
  };

  return (
    <div className={styles.container}>
      <Slider ref={sliderRef} {...settings}>
        <ActionsSliderElement
          title="Save watter"
          text="Taking on the issue of ensuring access to safe water requires worldwide effort."
          image={imgMain}
          alt="Sea"
          variant="secondary"
        />
        <ActionsSliderElement
          title="Plant trees"
          image={{ src: img3.src, width: 280, height: 245 }}
          alt="Forest"
        />
        <ActionsSliderElement
          title="Save energy"
          image={{ src: img4.src, width: 230, height: 200 }}
          alt="Windmills"
        />
        <ActionsSliderElement
          title="Avoid plastic"
          image={{ src: img1.src, width: 210, height: 210 }}
          alt="Plastic in sea"
        />
        <ActionsSliderElement
          title="Choose organic"
          image={{ src: img2.src, width: 280, height: 280 }}
          alt="Water with plants"
        />
      </Slider>
    </div>
  );
};
