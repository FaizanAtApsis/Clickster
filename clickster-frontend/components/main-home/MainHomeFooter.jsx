import React from "react";
import { Headline2 } from "../Typography";
import Image from "next/image";

const MainHomeFooter = () => {
  return (
    <section className="main-home-footer">
      <Headline2
        style={{
          color: "#292929",
        }}
      >
        We look forward to taking your <br /> brand to achieve new heights.
      </Headline2>
      <div className="main-home-footer-icon-links">
        <Image width={40} height={40} src={"/assets/images/phone.png"} alt="" />
        <Image width={40} height={40} src={"/assets/images/inbox.png"} alt="" />
        <Image
          width={40}
          height={40}
          src={"/assets/images/whatsapp.png"}
          alt=""
        />
      </div>
    </section>
  );
};

export default MainHomeFooter;
