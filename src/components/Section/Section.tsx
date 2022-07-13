import clsx from "clsx";
import React from "react";
import styles from "./Section.module.scss";

type Props = React.PropsWithChildren<{
  bg?: string;
  doublePadding?: boolean;
}>;

export const Section = ({ children, bg, doublePadding }: Props) => {
  return (
    <section
      className={clsx(styles.section, doublePadding && styles.doublePadding)}
      style={{
        backgroundColor: bg ? bg : "#fff",
      }}
    >
      {children}
    </section>
  );
};
