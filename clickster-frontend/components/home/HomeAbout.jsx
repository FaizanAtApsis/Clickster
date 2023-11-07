import React, { useState } from "react";
import HomeAboutCard from "./HomeAboutCard";
import AuditForm from "../Form/AuditForm";

const HomeAbout = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="home-about-wrapper" id="about">
      {show && (
        <>
          <div className="overlay" onClick={() => setShow(!show)}></div>
          <AuditForm onClick={() => setShow(!show)} />
        </>
      )}
      <h2
        className="headline2"
        style={{
          textAlign: "center",
        }}
      >
        Discover the art of driving growth through{" "}
        <span
          className="gradient-text"
          style={{
            fontWeight: "700",
          }}
        >
          the power of clicks!
        </span>
      </h2>
      <div className="home-about-card-wrapper">
        <HomeAboutCard
          title="Lead Generation"
          lead=" Enjoy the benefits of higher conversions and increased revenue from
        results driven through our insights, strategy refinement, and campaign
        optimization expertise."
          img={"/assets/images/lead.png"}
        />
        <HomeAboutCard
          title="E-commerce Marketing"
          lead="Turn visitors into loyal customers through engaging online shopping experiences, attracting the right audience, and optimizing your entire
          e-commerce strategy."
          img={"/assets/images/cart.png"}
        />
        <HomeAboutCard
          title="Search Engine
          Optimization"
          lead="Boost your online visibility and authority, drive higher organic traffic and significant growth in your digital footprint by optimizing your website for search engines."
          img={"/assets/images/seo.png"}
        />
      </div>
      <p
        className="lead2"
        style={{
          textAlign: "center",
        }}
      >
        Ready to supercharge your online success? Choose Clickster for higher
        conversions, increased revenue, and unmatched online visibility.
      </p>
      <p
        className="lead2"
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "5rem",
        }}
      >
        {"Let's"} optimize your digital journey today.
      </p>
      <div
        className="btn btn2"
        style={{
          margin: "auto",
        }}
        onClick={() => setShow(!show)}
      >
        Get Free Audit
      </div>
    </section>
  );
};

export default HomeAbout;
