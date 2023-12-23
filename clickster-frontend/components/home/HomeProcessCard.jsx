import Image from "next/image";
import React from "react";
import { Lead2 } from "../Typography";

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
      <Lead2
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </Lead2>
    </div>
  );
};

export default HomeProcessCard;
