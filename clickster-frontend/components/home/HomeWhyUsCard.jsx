import Image from "next/image";
import React from "react";
import { Lead3, Title } from "../Typography";

const HomeWhyUsCard = ({ title, img, lead }) => {
  return (
    <div className="home-why-us-card">
      <div className="home-why-us-card-img">
        <Image
          layout="fill"
          src={"/assets/images/" + img}
          alt=""
          objectFit="contain"
        />
      </div>
      <div
        style={{
          maxWidth: "25rem",
        }}
      >
        <Title
          style={{
            marginBottom: "1rem",
          }}
        >
          {title}
        </Title>
        <Lead3>{lead}</Lead3>
      </div>
    </div>
  );
};

export default HomeWhyUsCard;
