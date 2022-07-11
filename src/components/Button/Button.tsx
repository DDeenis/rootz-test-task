import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

type Props = React.PropsWithChildren<{
  variant?: "primary" | "secondary";
  maxW?: number;
}>;

export const Button = ({ children, variant = "primary", maxW }: Props) => {
  return (
    <button
      className={clsx(styles.btn, {
        [styles.btn_primary]: variant === "primary",
        [styles.btn_secondary]: variant === "secondary",
      })}
      style={{
        maxWidth: maxW ? `${maxW}px` : "100%",
      }}
    >
      <span className={styles.btnText}>{children}</span>
    </button>
  );
};
