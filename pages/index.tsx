import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "../src/components/Section/Section";
import { AppHeader } from "../src/layout/AppHeader";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rootz</title>
      </Head>
      <Section bg={"#F7F3F4"}>
        <AppHeader />
      </Section>
    </div>
  );
};

export default Home;
