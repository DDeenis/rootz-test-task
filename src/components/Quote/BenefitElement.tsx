import React from "react";
import styles from "./BenefitElement.module.scss";

type Props = {
  icon: JSX.Element;
  text: string;
};

export const BenefitElement = ({ icon, text }: Props) => {
  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.text}>{text}</p>
    </div>
  );
};
