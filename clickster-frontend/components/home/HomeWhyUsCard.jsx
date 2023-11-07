import Image from "next/image";
import React from "react";

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
        <p
          className="title"
          style={{
            marginBottom: "1rem",
          }}
        >
          {title}
        </p>
        <p className="lead3">{lead}</p>
      </div>
    </div>
  );
};

export default HomeWhyUsCard;
