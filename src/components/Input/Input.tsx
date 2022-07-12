import clsx from "clsx";
import React from "react";
import styles from "./Input.module.scss";

type ElementProps<T> = React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T>;

type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  placeholder?: string;
  type?: ElementProps<HTMLInputElement>["type"];
  inputMode?: ElementProps<HTMLInputElement>["inputMode"];
  rightElement?: JSX.Element;
  leftElement?: JSX.Element;
  size?: "md" | "lg";
};

export const Input = ({
  rightElement,
  leftElement,
  size = "md",
  ...props
}: Props) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.sizeMd]: size === "md",
        [styles.sizeLg]: size === "lg",
      })}
    >
      {rightElement}
      <input {...props} className={styles.input} />
      {leftElement}
    </div>
  );
};
