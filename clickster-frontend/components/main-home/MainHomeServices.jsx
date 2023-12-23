import React from "react";
import { Headline2, Lead2, Title } from "../Typography";
import Image from "next/image";

const MainHomeServices = () => {
  const data = [
    {
      t: "360° Marketing Solutions To Dominate The Market With Your Service",
      l: "We're not just planning campaigns; we're orchestrating a symphony of epicness! Your brand won't just shine; it'll own the spotlight with our end-to-end marketing solutions.",
    },
    {
      t: "CRM Support: Create A Relationship With Your Customer",
      l: "CRM with a twist! We're here to turn your customers into ride-or-die fans. Loyalty, trust, and unforgettable experiences – that's how we roll.",
    },
    {
      t: "Design and Development For A Killer Online Presence",
      l: "Meet our creative and tech wizards who'll craft a digital world for your brand. User experience? We're not just good; we're mind-blowingly awesome.",
    },
    {
      t: "Data-Driven Marketing Strategies with the best Precision",
      l: "Data is our jam! Let us hit you with strategies so on point, your competitors will be asking for an encore. Elevate results, boost ROI, and keep the engagement party going.",
    },
    {
      t: "Content Management: Storytelling that Slays",
      l: "Who needs ordinary content when you can have Clickster magic? Brace yourself for narratives that not only resonate but turn your brand into the talk of the town.",
    },
    {
      t: "SEO : Rising to Stardom in the Digital Realm",
      l: "Our approach is strategic, optimizing your online presence to ensure your brand not only stands out but shines brightly among the digital stars.",
    },
    {
      t: "Social Media Marketing: Enchanting Feeds, One Post at a Time",
      l: "We're not just posting; we're crafting experiences. Social media isn't a strategy; it's a canvas for us to paint brand stories that captivate and inspire.",
    },
    {
      t: "Pay-Per-Click (PPC) : Navigating You Through Targeted Awesomeness",
      l: "Clickster takes PPC to a whole new level. Lead the way in traffic, convert like a pro, and watch your brand soar to advertising greatness.",
    },
    {
      t: "Email Marketing: Inbox Jams & Unforgettable Hooks      ",
      l: "Get rid of boring emails. Our campaigns are like a mixtape for your audience – engaging, exciting, and impossible to resist.",
    },
  ];
  return (
    <section className="main-home-services">
      <Title
        style={{
          textAlign: "center",
        }}
      >
        Look no further, if you are looking for a One-Stop Digital Agency.{" "}
        <br />
        Clickster is the way to go.
      </Title>
      <div className="main-home-services-card-wrapper">
        {data.map((d, index) => (
          <article key={index} className="main-home-services-card">
            <Headline2 style={{}}>{d.t}</Headline2>
            <Lead2>{d.l}</Lead2>
            <div className="img">
              <Image
                width={15}
                height={15}
                src={"/assets/images/arrow.png"}
                alt=""
                objectFit="contain"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MainHomeServices;
