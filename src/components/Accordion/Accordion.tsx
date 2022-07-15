import clsx from "clsx";
import React, { useState } from "react";
import styles from "./Accordion.module.scss";

type ElementBasicProps = {
  title: string;
  text: string;
};

type Props = {
  elements: ElementBasicProps[];
};

type ElementProps = ElementBasicProps & {
  isExpanded: boolean;
  onToggle: (val?: string) => void;
};

export const Accordion = ({ elements }: Props) => {
  const [currentElement, setCurrentElement] = useState<string>();

  return (
    <div className={styles.container}>
      {elements.map((e) => {
        return (
          <AccordionElement
            {...e}
            isExpanded={currentElement === e.title}
            onToggle={setCurrentElement}
            key={e.title}
          />
        );
      })}
    </div>
  );
};

export const AccordionElement = ({
  title,
  text,
  isExpanded,
  onToggle,
}: ElementProps) => {
  const onExpand = () => onToggle(title);
  const onClose = () => onToggle(undefined);

  return (
    <div className={styles.elementContainer}>
      <div className={styles.elementControls}>
        <span className={styles.elementTitle}>{title}</span>
        <button
          className={clsx(styles.elementBtn, {
            [styles.elementBtnPlus]: !isExpanded,
          })}
          onClick={isExpanded ? onClose : onExpand}
        ></button>
      </div>
      {isExpanded && <div className={styles.elementText}>{text}</div>}
    </div>
  );
};
