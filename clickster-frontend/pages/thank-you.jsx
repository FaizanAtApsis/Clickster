import React, { useState } from "react";
import Header from "../components/layout/Header";
import Header2 from "../components/layout/Header2";
import Link from "next/link";
import AuditForm from "../components/Form/AuditForm";

const ThankYou = () => {
  return (
    <div>
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
          <h1
            className="headline1"
            style={{
              textAlign: "center",
            }}
          >
            Thank you!
          </h1>
          <p
            className="lead1"
            style={{
              textAlign: "center",
            }}
          >
            {"We’ll "}get back to you shortly.
          </p>
          <Link href="/">
            <div
              className="btn btn2"
              style={{
                margin: "auto",
              }}
            >
              Go Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
