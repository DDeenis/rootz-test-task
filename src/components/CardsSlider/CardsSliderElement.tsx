import React from "react";
import styles from "./CardsSliderElement.module.scss";

type Props = {
  title: string;
  descr: string;
  bg: string;
};

export const CardsSliderElement = ({ title, descr, bg }: Props) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bg }}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p>{descr}</p>
      </div>
      <div className={styles.graphics}>
        <div className={styles.rect}></div>
        <div className={styles.rectSecondary}></div>
      </div>
    </div>
  );
};
