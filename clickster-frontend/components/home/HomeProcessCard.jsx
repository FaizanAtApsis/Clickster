import Image from "next/image";
import React from "react";

const HomeProcessCard = ({ title, img }) => {
  return (
    <div className="home-process-card">
      <div className="home-process-card-img">
        <Image
          layout="fill"
          src={"/assets/images/" + img}
          alt=""
          objectFit="contain"
        />
      </div>
      <p
        className="lead2"
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default HomeProcessCard;
