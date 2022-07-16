import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "../src/components/Section/Section";
import { AppFooter } from "../src/layout/AppFooter";
import { AppHeader } from "../src/layout/AppHeader";
import { HomeSection } from "../src/layout/HomeSection";
import { MainSection } from "../src/layout/MainSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rootz</title>
      </Head>
      <Section bg={"#F7F3F4"} size="lg">
        <AppHeader />
        <HomeSection />
      </Section>
      <MainSection />
      <Section bg={"#F7F3F4"}>
        <AppFooter />
      </Section>
    </div>
  );
};

export default Home;
