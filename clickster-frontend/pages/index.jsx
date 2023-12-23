import Head from "next/head";
import React from "react";
import Header from "../components/layout/Header";
import Header3 from "../components/layout/Header3";
import { Headline2, Headline3, Lead2, Title } from "../components/Typography";
import Headline1 from "../components/Typography/Headline1";
import Image from "next/image";
import MainHomeHero from "../components/main-home/MainHomeHero";
import MainHomeDetails from "../components/main-home/MainHomeDetails";
import MainHomeServices from "../components/main-home/MainHomeServices";
import MainHomeBuissenessCard from "../components/main-home/MainHomeBuissenessCard";
import MainHomeMarquee from "../components/main-home/MainHomeMarquee";
import MainHomeForm from "../components/main-home/MainHomeForm";
import HomeProcess from "../components/home/HomeProcess";
import MainHomeProcess from "../components/main-home/MainHomeProcess";
import MainHomeHelp from "../components/main-home/MainHomeHelp";
import MainHomeFooter from "../components/main-home/MainHomeFooter";

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
      <MainHomeServices />
      <MainHomeBuissenessCard />
      <MainHomeMarquee />
      <MainHomeForm />
      <MainHomeProcess />
      <MainHomeHelp />
      <MainHomeFooter />
    </div>
  );
};

export default Home;
