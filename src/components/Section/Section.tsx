import React from "react";
import styles from "./Section.module.scss";

type Props = React.PropsWithChildren<{
  bg?: string;
}>;

export const Section = ({ children, bg }: Props) => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: bg ? bg : "#fff",
      }}
    >
      {children}
    </section>
  );
};
