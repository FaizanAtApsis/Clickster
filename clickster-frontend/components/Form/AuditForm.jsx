import React, { useState } from "react";
import Input from "./Input";
import { useRouter } from "next/router";
import axios from "axios";

const AuditForm = ({ onClick }) => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    bType: "",
    websiteUrl: "",
    isLeadGeneration: false,
    isECommerceMakreting: false,
    isSEO: false,
    currentEfforst: "",
    goals: "",
  });
  const {
    name,
    companyName,
    bType,
    websiteUrl,
    isLeadGeneration,
    isECommerceMakreting,
    isSEO,
    currentEfforst,
    goals,
  } = formData;
  const formDataHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked || e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:5000/email-audit", formData)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        route.push("thank-you");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err?.response?.data);
      });
    console.log({ formData });
  };

  return (
    <section
      className="clickster-form-wrapper modal"
      id="form"
      style={{
        background: "black",
      }}
    >
      <p
        className="text"
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "2rem",
          right: "1rem",
        }}
        onClick={onClick}
      >
        Close
      </p>
      <div>
        <h2
          className="headline2"
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          Maximize your ROI and get the ultimate edge with our services and{" "}
          <span
            className="gradient-text"
            style={{
              fontWeight: "700",
            }}
          >
            Free Audit!
          </span>
        </h2>
        <form onSubmit={onSubmit} className="clickster-form">
          <div className="clickster-form-inputs">
            <Input
              required
              placeholder="Name"
              name="name"
              value={name}
              onChange={formDataHandler}
            />
            <Input
              required
              placeholder="Company name"
              name="companyName"
              value={companyName}
              onChange={formDataHandler}
            />
            <Input
              required
              placeholder="Website URL"
              name="websiteUrl"
              value={websiteUrl}
              onChange={formDataHandler}
            />
            <Input
              required
              placeholder="Business Type or Industry"
              name="bType"
              value={bType}
              onChange={formDataHandler}
            />
            {/* <Input
            required placeholder="Company Name" />
          <Input
          required placeholder="Company Size" /> */}
          </div>
          <div className="form-group">
            <label
              style={{
                marginTop: "2rem",
              }}
            >
              Services you need audit for:
            </label>
            <div className="checkbox-wrapper">
              <label>
                <input
                  type="checkbox"
                  name="isLeadGeneration"
                  checked={isLeadGeneration}
                  onChange={formDataHandler}
                />
                <span
                  style={{
                    marginLeft: "3rem",
                    position: "relative",
                    top: "-0.2rem",
                  }}
                >
                  Lead Generation
                </span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="isECommerceMakreting"
                  checked={isECommerceMakreting}
                  onChange={formDataHandler}
                />
                <span
                  style={{
                    marginLeft: "3rem",
                    position: "relative",
                    top: "-0.2rem",
                  }}
                >
                  E-commerce Marketing
                </span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="isSEO"
                  checked={isSEO}
                  onChange={formDataHandler}
                />
                <span
                  style={{
                    marginLeft: "3rem",
                    position: "relative",
                    top: "-0.2rem",
                  }}
                >
                  SEO
                </span>
              </label>
            </div>
          </div>
          <div
            className="clickster-form-inputs"
            style={{
              marginBottom: "2rem",
              marginTop: "4rem",
            }}
          >
            <Input
              required
              placeholder="Current Digital Marketing Efforts (If any)"
              type="textarea"
              style={{
                flexBasis: "100%",
              }}
              name="currentEfforst"
              value={currentEfforst}
              onChange={formDataHandler}
            />
            <Input
              required
              name="goals"
              value={goals}
              onChange={formDataHandler}
              placeholder="Specific Goals or Challenges"
              type="textarea"
              style={{
                flexBasis: "100%",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn1"
            style={{
              margin: "auto",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuditForm;
