import Image from "next/image";
import React from "react";

const HomeAboutCard = ({ title, lead, img }) => {
  return (
    <div className="home-about-card">
      <div className="img">
        <Image layout="fill" src={img} alt="" objectFit="contain" />
      </div>
      <h3
        className="headline3"
        style={{
          marginBottom: "1rem",
        }}
      >
        {title}
      </h3>
      <p className="lead3">{lead}</p>
    </div>
  );
};

export default HomeAboutCard;
