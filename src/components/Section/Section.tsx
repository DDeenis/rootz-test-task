import clsx from "clsx";
import React from "react";
import styles from "./Section.module.scss";

type Props = React.PropsWithChildren<{
  bg?: string;
  size?: "md" | "lg";
  noPadding?: boolean;
}>;

export const Section = ({ children, bg, size = "md", noPadding }: Props) => {
  return (
    <section
      className={clsx(styles.section, noPadding && styles.noPadding)}
      style={{
        backgroundColor: bg ? bg : "#fff",
      }}
    >
      <div className={clsx(styles.content, size === "lg" && styles.contentLg)}>
        {children}
      </div>
    </section>
  );
};
