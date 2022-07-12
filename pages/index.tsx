import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "../src/components/Section/Section";
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
    </div>
  );
};

export default Home;
