import Image from "next/image";
import React from "react";
import HomeProcessCard from "./HomeProcessCard";
import { GradientText, Headline2 } from "../Typography";

const HomeProcess = () => {
  return (
    <div className="home-process-wrapper-div" id="process">
      <section className="home-process-wrapper">
        <Headline2
          style={{
            textAlign: "center",
          }}
        >
          <GradientText
            style={{
              fontWeight: "700",
            }}
          >
            From complexity to clarity,
            <br />
          </GradientText>
          {"we've"} define the process in 3 simple steps.
        </Headline2>
        <div className="home-process-card-wrapper">
          <span></span>
          <HomeProcessCard title="Consultation & Audit" img={"com.png"} />
          <HomeProcessCard
            title="Strategy & Implementation"
            img={"rocket.png"}
          />
          <HomeProcessCard title="Results & Growth" img={"puzzle.png"} />
        </div>
      </section>
    </div>
  );
};

export default HomeProcess;
