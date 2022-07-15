import React from "react";
import { Accordion } from "../Accordion/Accordion";
import { Button } from "../Button/Button";
import styles from "./FAQ.module.scss";

export const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <span className={styles.contentTitle}>Ready to Get started?</span>
        <p className={styles.contentText}>
          When pattern is mentioned in interior design, it is easy to asso-
          ciate it with a geometric patterned wallpaper or colourful prints on
          interior fabrics.
        </p>
        <Button maxW={165}>Contact us</Button>
      </div>
      <div className={styles.accordionContainer}>
        <Accordion
          elements={[
            {
              title: "What can I do to protect our planet?",
              text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
            },
            {
              title: "How to save nature ecology?",
              text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
            },
            {
              title: "What is nature conservation?",
              text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
            },
          ]}
        />
      </div>
    </div>
  );
};
