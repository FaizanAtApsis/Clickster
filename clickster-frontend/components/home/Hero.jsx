import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Headline1 from "../Typography/Headline1";
import { ButtonPrimary, GradientText, Lead1, Lead2 } from "../Typography";

const Hero = () => {
  const route = useRouter();

  return (
    <section className="hero-wrapper" id="home" style={{}}>
      <Headline1
        className="headline1"
        style={{
          textAlign: "center",
        }}
      >
        From Click <br /> to{" "}
        <GradientText
          className="gradient-text"
          style={{
            fontWeight: 700,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "1em",
              height: "1em",
              left: "-4%",
              top: "40%",
            }}
          >
            <Image
              layout="fill"
              src="/assets/images/cash.png"
              alt=""
              objectFit="contain"
            />
          </div>
          &nbsp;&nbsp;Conversion
          <div
            style={{
              position: "absolute",
              width: "1em",
              height: "1em",
              right: "1%",
              top: "-40%",
            }}
          >
            <Image
              layout="fill"
              src="/assets/images/cursor.png"
              alt=""
              objectFit="contain"
            />
          </div>
        </GradientText>
      </Headline1>
      <Lead1
        style={{
          textAlign: "center",
          marginBottom: "3.5rem",
        }}
      >
        Supercharge Your Online Success with{" "}
        <span
          style={{
            fontWeight: 700,
          }}
        >
          Click
        </span>
        ster
      </Lead1>
      <ButtonPrimary
        className="btn btn1"
        style={{
          margin: "auto",
          marginBottom: "10rem",
        }}
        onClick={() => {
          route.push("#form");
        }}
      >
        Schedule Call
      </ButtonPrimary>
      <p
        className="lead2"
        style={{
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        We take pride in transforming clicks into tangible, measurable results,
        ensuring that every investment brings you closer to your goals.
      </p>
      <Lead2
        style={{
          textAlign: "center",
        }}
      >
        When you choose Clickster, {"you're"} choosing a partner {"that's"}{" "}
        passionate about your success and committed to making your business
        shine in the digital landscape.{" "}
      </Lead2>
    </section>
  );
};

export default Hero;
