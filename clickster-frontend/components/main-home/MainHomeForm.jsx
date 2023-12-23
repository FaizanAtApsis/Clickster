import React from "react";
import { ButtonPrimary, Headline2 } from "../Typography";
import Image from "next/image";

const MainHomeForm = () => {
  return (
    <section>
      <div className="main-home-form">
        <div className="main-home-form-wrapper">
          <Headline2
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              color: "white",
            }}
          >
            In a crowded digital landscape, where every click matters - <br />{" "}
            Clickster stands as your strategic guide.
          </Headline2>
          <Headline2
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              color: "white",
              fontWeight: "400",
              fontFamily: "Satoshi-Regular",
            }}
          >
            Partner with us to harness the power of precision, elevate your
            brand above the noise, and embark on a journey where your message
            resonates with clarity, captivates your audience, and commands
            attention.
          </Headline2>
          <Headline2
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              color: "white",
            }}
          >
            Let's navigate success together!
          </Headline2>
          <ButtonPrimary style={{ textAlign: "center", margin: "auto" }}>
            Get in touch
          </ButtonPrimary>
        </div>
        <div
          style={{
            position: "relative",
            height: "30rem",
          }}
        >
          <Image
            layout="fill"
            src={"/assets/images/ch.png"}
            alt=""
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MainHomeForm;
