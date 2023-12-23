import Image from "next/image";
import React from "react";
import { GradientText, Headline2 } from "../Typography";
import HomeProcessCard from "../home/HomeProcessCard";

const MainHomeProcess = () => {
  return (
    <div
      className="home-process-wrapper-div main-home-process-wrapper-div "
      id="process"
    >
      <section className="home-process-wrapper">
        <Headline2
          style={{
            textAlign: "center",
          }}
        >
          From complexity to clarity,
          <br />
          {"we've"} define the process in 3 simple steps.
        </Headline2>
        <div className="home-process-card-wrapper">
          <span
            style={{
              borderColor: "#55BD15",
            }}
          ></span>
          <HomeProcessCard title="Consultation & Audit" img={"com-2.png"} />
          <HomeProcessCard
            title="Strategy & Implementation"
            img={"puzzle-2.png"}
          />
          <HomeProcessCard title="Results & Growth" img={"rocket-2.png"} />
        </div>
      </section>
    </div>
  );
};

export default MainHomeProcess;
