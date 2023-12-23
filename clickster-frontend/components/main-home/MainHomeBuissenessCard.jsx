import React from "react";
import { Lead2, Title } from "../Typography";
import Image from "next/image";

const MainHomeBuissenessCard = () => {
  return (
    <section>
      <article className="main-b-card">
        <div
          style={{
            position: "relative",
          }}
        >
          <Image layout="fill" src={"/assets/images/b-card.png"} alt="" />
        </div>
        <div className="main-b-card-info">
          <Title
            style={{
              marginBottom: "3rem",
            }}
          >
            Discover business potential with us. Dive into strategic insights to
            discover your brand's unprecedented growth.
          </Title>
          <Lead2>
            Along with partnering with our clients to scale and grow, we also
            believe in illuminating opportunities that helps you create a
            roadmap. Our commitment is to empower your journey, ensuring every
            decision is informed and strategic.
          </Lead2>
          <div className="img">
            <Image
              width={15}
              height={15}
              src={"/assets/images/arrow.png"}
              alt=""
              objectFit="contain"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default MainHomeBuissenessCard;
