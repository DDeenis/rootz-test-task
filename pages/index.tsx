import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "../src/components/Section/Section";
import { AppHeader } from "../src/layout/AppHeader";
import { SectionHome } from "../src/layout/SectionHome";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rootz</title>
      </Head>
      <Section bg={"#F7F3F4"}>
        <AppHeader />
        <SectionHome />
      </Section>
    </div>
  );
};

export default Home;
