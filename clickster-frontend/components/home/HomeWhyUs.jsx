import Image from "next/image";
import React from "react";
import HomeWhyUsCard from "./HomeWhyUsCard";

const HomeWhyUs = () => {
  return (
    <section
      className="home-why-us-wrapper"
      id="whyus"
      style={{
        marginBottom: "10rem",
      }}
    >
      <HomeWhyUsCard
        title="360° Solutions"
        img={"360.png"}
        lead="We offer an all-in-one approach, integrating performance marketing, e-commerce, and SEO seamlessly."
      />
      <HomeWhyUsCard
        title="Measurable Results"
        img={"measure.png"}
        lead="Our strategies are data-centric, ensuring you see a clear return on investment."
      />
      <HomeWhyUsCard
        title="Experienced Team"
        img={"expr.png"}
        lead="Our seasoned professionals bring years of expertise to the table, staying ahead of industry trends."
      />
      <HomeWhyUsCard
        title="Client-Centric"
        img={"hand.png"}
        lead="Your success is our top priority.
        We tailor our services to meet your unique goals and challenges."
      />
    </section>
  );
};

export default HomeWhyUs;
