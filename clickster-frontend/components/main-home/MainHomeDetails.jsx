import React from "react";
import { Lead2 } from "../Typography";
import Image from "next/image";

const MainHomeDetails = () => {
  return (
    <div
      className="main-details-section-wrapper"
      style={{
        color: "#F9F9F9",
      }}
    >
      <section className="main-details-section">
        <MainHomeDetailsCard
          title={"Proven Success with Clients Like You"}
          icon={"/assets/images/vec-3.png"}
        />{" "}
        <MainHomeDetailsCard
          title={"Expertise in Your Industry"}
          icon={"/assets/images/vec-2.png"}
        />{" "}
        <MainHomeDetailsCard
          title={"Global Reach, Local Expertise"}
          icon={"/assets/images/vec-1.png"}
        />{" "}
        <MainHomeDetailsCard
          title={"Innovative Marketing Solutions"}
          icon={"/assets/images/vec-4.png"}
        />{" "}
        <MainHomeDetailsCard
          title={"Dedicated Support, Always"}
          icon={"/assets/images/vec-5.png"}
        />{" "}
      </section>
    </div>
  );
};

export default MainHomeDetails;

const MainHomeDetailsCard = ({ title, icon }) => (
  <article className="main-details-section-card">
    <div className="img">
      <Image width={30} height={30} src={icon} alt="" objectFit="contain" />
    </div>
    <Lead2 style={{ color: "black", fontSize: "1.4rem" }}>{title}</Lead2>
  </article>
);
