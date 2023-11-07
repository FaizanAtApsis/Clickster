// import Head from "next/head";
// import Image from "next/image";
import Head from "next/head";
import ClicksterForm from "../components/Form/ClicksterForm";
import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import HomeProcess from "../components/home/HomeProcess";
import HomeWhyUs from "../components/home/HomeWhyUs";
import Header from "../components/layout/Header";

export const metadata = {
  title: "My title",
  description: "My description",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Clickster</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Brief description of the page content"
        />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://example.com/canonical-version-of-page"
        />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Title of the Content" />
        <meta property="og:description" content="Description of the Content" />
        <meta property="og:image" content="URL of the Image" />
        <meta property="og:url" content="URL of the Page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Title of the Content" />
        <meta name="twitter:description" content="Description of the Content" />
        <meta name="twitter:image" content="URL of the Image" />
      </Head>
      <Header />
      <Hero />
      <HomeAbout />
      <HomeProcess />
      <HomeWhyUs />
      <ClicksterForm />
      <p
        style={{
          fontSize: "1.125rem",
          textAlign: "center",
          maxWidth: "80rem",
          margin: "auto",
          marginBottom: "5rem",
        }}
      >
        This landing page is designed for informational purposes and does not
        constitute a binding contract. Actual services and results may vary
        based on individual client needs and goals. Contact Clickster for
        personalized guidance and solutions tailored to your business.
      </p>
    </>
  );
}
