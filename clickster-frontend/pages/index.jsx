import Head from "next/head";
import React from "react";
import Header from "../components/layout/Header";
import Header3 from "../components/layout/Header3";
import { Headline2, Lead2 } from "../components/Typography";
import Headline1 from "../components/Typography/Headline1";
import Image from "next/image";
import MainHomeHero from "../components/main-home/MainHomeHero";
import MainHomeDetails from "../components/main-home/MainHomeDetails";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Clickster</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Brief description of the page content"
        />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header3 />
      <MainHomeHero />
      <MainHomeDetails />
    </div>
  );
};

export default Home;
