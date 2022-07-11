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
};

export const Input = ({ rightElement, leftElement, ...props }: Props) => {
  return (
    <div className={styles.container}>
      {rightElement}
      <input {...props} className={styles.input} />
      {leftElement}
    </div>
  );
};
