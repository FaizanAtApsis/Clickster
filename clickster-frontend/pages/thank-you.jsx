import React, { useState } from "react";
import Header from "../components/layout/Header";
import Header2 from "../components/layout/Header2";
import Link from "next/link";
import AuditForm from "../components/Form/AuditForm";
import Headline1 from "../components/Typography/Headline1";
import { ButtonSecondary, Lead1 } from "../components/Typography";

const ThankYou = () => {
  return (
    <div className="theme-1">
      <Header2 />
      <div
        style={{
          display: "grid",
          placeContent: "center",
          minHeight: "100vh",
          paddingTop: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
          <Headline1
            style={{
              textAlign: "center",
            }}
          >
            Thank you!
          </Headline1>
          <Lead1
            style={{
              textAlign: "center",
            }}
          >
            {"We’ll "}get back to you shortly.
          </Lead1>
          <Link href="/">
            <ButtonSecondary
              style={{
                margin: "auto",
              }}
            >
              Go Back
            </ButtonSecondary>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
