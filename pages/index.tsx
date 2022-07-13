import type { NextPage } from "next";
import Head from "next/head";
import { News } from "../src/components/News/News";
import { Section } from "../src/components/Section/Section";
import { CardsSlider } from "../src/components/CardsSlider/CardsSlider";
import { AppHeader } from "../src/layout/AppHeader";
import { HomeSection } from "../src/layout/HomeSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rootz</title>
      </Head>
      <Section bg={"#F7F3F4"}>
        <AppHeader />
        <HomeSection />
      </Section>
      <main>
        <Section doublePadding>
          <News />
        </Section>
        <CardsSlider />
      </main>
    </div>
  );
};

export default Home;
