import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

type Props = React.PropsWithChildren<{
  variant?: "primary" | "secondary";
  maxW?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}>;

export const Button = ({
  children,
  variant = "primary",
  maxW,
  className,
  onClick,
}: Props) => {
  return (
    <button
      className={clsx(styles.btn, className, {
        [styles.btn_primary]: variant === "primary",
        [styles.btn_secondary]: variant === "secondary",
      })}
      style={{
        maxWidth: maxW ? `${maxW}px` : "100%",
      }}
      onClick={onClick}
    >
      <span className={styles.btnText}>{children}</span>
    </button>
  );
};
