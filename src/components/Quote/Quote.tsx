import React from "react";
import styles from "./Quote.module.scss";
import quoteBackgroundDesktop from "../../../public/quote-background-desktop.svg";
import quoteBackgroundMobile from "../../../public/quote-background-mobile.svg";
import Image from "next/image";
import { useMediaQuery } from "../../hooks/media";
import { BenefitElement } from "./BenefitElement";
import { IconUser } from "../Icons/IconUser";
import { IconGraph } from "../Icons/IconGraph";
import { IconRevenue } from "../Icons/IconRevenue";

export const Quote = () => {
  const isPhone = useMediaQuery(30, "em");

  return (
    <div className={styles.container}>
      <div className={styles.quoteContainer}>
        {!isPhone ? (
          <Image
            {...quoteBackgroundDesktop}
            alt={"Styled leafs"}
            className={styles.quoteBackground}
          />
        ) : (
          <Image
            {...quoteBackgroundMobile}
            alt={"Styled leafs"}
            className={styles.quoteBackground}
          />
        )}
        <blockquote className={styles.quote}>
          The scale of the challenges facing our planet can seem daunting, but
          we can all do something.
        </blockquote>
      </div>
      <div className={styles.benefitsContainer}>
        <BenefitElement icon={<IconUser />} text={"Assets value composer"} />
        <BenefitElement icon={<IconGraph />} text={"GRAPH BUDGET ANALYZER"} />
        <BenefitElement icon={<IconRevenue />} text={"MONTHLY AVG. REVENUE"} />
      </div>
    </div>
  );
};
