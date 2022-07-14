import React from "react";
import { CardsSlider } from "../components/CardsSlider/CardsSlider";
import { News } from "../components/News/News";
import { Quote } from "../components/Quote/Quote";
import { Section } from "../components/Section/Section";
import { Team } from "../components/Team/Team";
import styles from "./styles/MainSection.module.scss";

export const MainSection = () => {
  return (
    <main className={styles.main}>
      <Section doublePadding>
        <News />
      </Section>
      <CardsSlider />
      <Section doublePadding>
        <Team />
      </Section>
      <Section>
        <Quote />
      </Section>
    </main>
  );
};
