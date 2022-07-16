import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./ActionsSliderElement.module.scss";
import sliderActionsBg from "../../../public/sliderActionBg.svg";
import clsx from "clsx";

type Props = {
  image: StaticImageData;
  alt: string;
  title: string;
  text?: string;
  variant?: "primary" | "secondary";
};

export const ActionsSliderElement = ({
  image,
  alt,
  title,
  text,
  variant = "primary",
}: Props) => {
  const isPrimary = variant === "primary";

  return (
    <div className={styles.container}>
      <figure className={clsx(!isPrimary && styles.imageSecondary)}>
        <Image {...image} alt={alt} />
      </figure>
      <div className={styles.contentContainer}>
        {isPrimary ? (
          <p className={styles.titlePrimary}>{title}</p>
        ) : (
          <div className={styles.textContainer}>
            <span className={styles.titleSecondary}>{title}</span>
            <p className={styles.text}>{text}</p>
          </div>
        )}
      </div>
      {!isPrimary && (
        <div className={styles.imageBgContainer}>
          <Image
            {...sliderActionsBg}
            alt={"White shape"}
            className={styles.imageBg}
          />
        </div>
      )}
    </div>
  );
};
