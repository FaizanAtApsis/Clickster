import React from "react";
import { Headline2, Lead2 } from "../Typography";
import Headline1 from "../Typography/Headline1";

const MainHomeHero = () => {
  return (
    <div className="main-hero-bg-wrapper">
      <section className="main-hero-wrapper">
        <Lead2
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            color: "rgba(107, 230, 32, 1)",
            textTransform: "uppercase",
            letterSpacing: "1rem",
            marginBottom: "1rem",
          }}
        >
          In the World Of Marketing
        </Lead2>
        <Headline1
          style={{
            textAlign: "center",
            fontFamily: "Satoshi-Black",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          We Craft Results, Profits <br /> & Success Stories.
        </Headline1>
        <Headline2
          style={{
            textAlign: "center",
            fontWeight: 400,
            fontFamily: "Satoshi-Regular",
            marginBottom: "4rem",
          }}
        >
          Not Just Campaigns!
        </Headline2>
        <div
          className="btn btn1"
          style={{
            margin: "auto",
          }}
          // onClick={() => setShow(!show)}
        >
          Start Today
        </div>
      </section>
    </div>
  );
};

export default MainHomeHero;
