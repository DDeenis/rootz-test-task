import React from "react";
import styles from "./ActionsSlider.module.scss";
import { ActionsSliderElement } from "./ActionsSliderElement";
import img1 from "../../../public/sliderAction1.png";
import img2 from "../../../public/sliderAction2.png";
import img3 from "../../../public/sliderAction3.png";
import img4 from "../../../public/sliderAction4.png";
import imgMain from "../../../public/sliderActionMain.png";
import { useMediaQuery } from "../../hooks/media";
import Carousel from "nuka-carousel";
import { IconLeft } from "../Icons/IconLeft";
import { IconRight } from "../Icons/IconRight";

export const ActionsSlider = () => {
  const isTablet = useMediaQuery(48, "em");

  return (
    <div className={styles.container}>
      <Carousel
        renderTopCenterControls={null}
        renderBottomCenterControls={({
          previousSlide,
          nextSlide,
          currentSlide,
          slideCount,
        }) => (
          <div className={styles.carouselControls}>
            <button
              className={styles.carouselControlsBtn}
              onClick={previousSlide}
            >
              <IconLeft />
            </button>
            <span className={styles.carouselControlsText}>
              {currentSlide + 1}/{slideCount}
            </span>
            <button className={styles.carouselControlsBtn} onClick={nextSlide}>
              <IconRight />
            </button>
          </div>
        )}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        cellAlign="center"
        animation="zoom"
        wrapAround
        slidesToShow={isTablet ? 1 : 4.3}
        dragThreshold={isTablet ? 0.1 : 0.5}
      >
        <ActionsSliderElement
          title="Save watter"
          text="Taking on the issue of ensuring access to safe water requires worldwide effort."
          image={imgMain}
          alt="Sea"
          variant="secondary"
        />
        <ActionsSliderElement title="Plant trees" image={img3} alt="Forest" />
        <ActionsSliderElement
          title="Save energy"
          image={{ src: img4.src, width: 210, height: 210 }}
          alt="Windmills"
        />
        <ActionsSliderElement
          title="Avoid plastic"
          image={{ src: img1.src, width: 210, height: 210 }}
          alt="Plastic in sea"
        />
        <ActionsSliderElement
          title="Choose organic"
          image={img2}
          alt="Water with plants"
        />
      </Carousel>
    </div>
  );
};
