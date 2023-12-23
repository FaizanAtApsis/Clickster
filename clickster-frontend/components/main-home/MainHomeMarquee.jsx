import React from "react";
import { Title } from "../Typography";
import Marquee from "react-fast-marquee";
const MainHomeMarquee = () => {
  const data1 = [
    "Lifestyle & Personal Care",
    "Travel and Tourism",
    "Health & Life Sciences",
    "Sports & Fitness",
  ];
  const data2 = [
    "Tech Startups",
    "Real Estate",
    "Education & Edtech",
    "Fintech",
  ];
  const data3 = [
    "Non-Profit & Social Causes",
    "E-commerce",
    "Health & Life Sciences",
    "Travel and Tourism",
  ];
  const data4 = [
    "HoReCa",
    "Entertainment & Media",
    "Sports & Fitness",
    "Crypto & NFTs",
  ];
  return (
    <section>
      <Title style={{ textAlign: "center" }}>
        We're the navigators of diverse domains. <br /> We specialize in
        crafting customized marketing solutions for businesses in
      </Title>
      <Marquee speed={30}>
        {data1.map((d) => (
          <MarqueeItem>{d}</MarqueeItem>
        ))}
      </Marquee>
      <Marquee direction="right" speed={30}>
        {data2.map((d) => (
          <MarqueeItem>{d}</MarqueeItem>
        ))}
      </Marquee>
      <Marquee speed={30}>
        {data3.map((d) => (
          <MarqueeItem>{d}</MarqueeItem>
        ))}
      </Marquee>
      <Marquee direction="right" speed={30}>
        {data4.map((d) => (
          <MarqueeItem>{d}</MarqueeItem>
        ))}
      </Marquee>
    </section>
  );
};

export default MainHomeMarquee;

const MarqueeItem = ({ children }) => (
  <p
    style={{
      paddingBlock: "1.5rem",
      minWidth: "40rem",
      textAlign: "center",
      border: "1px #55BD15 solid",
      borderRadius: "3rem",
      fontSize: "2rem",
      marginInline: "1rem",
      marginTop: "2rem",
    }}
  >
    {children}
  </p>
);
