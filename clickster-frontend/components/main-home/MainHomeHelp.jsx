import React from "react";
import { Headline2, Lead2 } from "../Typography";
import Image from "next/image";

const MainHomeHelp = () => {
  return (
    <section className="main-home-help">
      <div>
        <Headline2
          style={{
            fontWeight: 600,
            marginBottom: "2rem",
          }}
        >
          What can Clickster <br /> help you with?
        </Headline2>
        <Lead2>
          We know that at the end of the day, what a brand needs to thrive is
        </Lead2>
      </div>
      <div
        style={{
          position: "relative",
          height: "30rem",
        }}
      >
        <Image
          layout="fill"
          src={"/assets/images/connection.png"}
          alt=""
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default MainHomeHelp;
