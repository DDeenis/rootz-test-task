import type { NextPage } from "next";
import Head from "next/head";
import { AppHeader } from "../src/layout/AppHeader";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rootz</title>
      </Head>
      <AppHeader />
    </div>
  );
};

export default Home;
