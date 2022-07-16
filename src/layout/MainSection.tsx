import React from "react";
import { ActionsSlider } from "../components/ActionsSlider/ActionsSlider";
import { CallToLogin } from "../components/CallToLogin/CallToLogin";
import { CardsSlider } from "../components/CardsSlider/CardsSlider";
import { FAQ } from "../components/FAQ/FAQ";
import { News } from "../components/News/News";
import { Quote } from "../components/Quote/Quote";
import { Section } from "../components/Section/Section";
import { Team } from "../components/Team/Team";
import styles from "./styles/MainSection.module.scss";

export const MainSection = () => {
  return (
    <main className={styles.main}>
      <Section>
        <News />
      </Section>
      <Section noPadding>
        <CardsSlider />
      </Section>
      <Section>
        <Team />
      </Section>
      <Section>
        <Quote />
      </Section>
      <Section noPadding>
        <CallToLogin />
      </Section>
      <Section>
        <FAQ />
      </Section>
      <ActionsSlider />
    </main>
  );
};
