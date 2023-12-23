import Image from "next/image";
import React from "react";
import { Headline3, Lead3 } from "../Typography";

const HomeAboutCard = ({ title, lead, img }) => {
  return (
    <div className="home-about-card">
      <div className="img">
        <Image layout="fill" src={img} alt="" objectFit="contain" />
      </div>
      <Headline3
        style={{
          marginBottom: "1rem",
        }}
      >
        {title}
      </Headline3>
      <Lead3>{lead}</Lead3>
    </div>
  );
};

export default HomeAboutCard;
