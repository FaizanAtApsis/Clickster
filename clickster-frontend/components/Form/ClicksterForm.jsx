import React, { useState } from "react";
import Input from "./Input";
import { useRouter } from "next/router";
import axios from "axios";

const ClicksterForm = () => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    companyName: "",
    companySize: "",
    isLeadGeneration: false,
    isECommerceMakreting: false,
    isSEO: false,
    isCollaborating: false,
  });
  const {
    firstName,
    lastName,
    email,
    contact,
    companyName,
    companySize,
    isLeadGeneration,
    isECommerceMakreting,
    isSEO,
    isCollaborating,
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
      .post("http://localhost:5000/email-enquiry", formData)
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
    <section className="clickster-form-wrapper" id="form" style={{}}>
      <h2
        className="headline2"
        style={{
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        Ready to achieve more with every click?
        <br />
        <span
          className="gradient-text"
          style={{
            fontWeight: "700",
          }}
        >
          Get in touch with Clickster now
        </span>
      </h2>
      <form onSubmit={onSubmit} className="clickster-form">
        <div className="clickster-form-inputs">
          <Input
            required
            placeholder="First name"
            name="firstName"
            value={firstName}
            onChange={formDataHandler}
          />
          <Input
            required
            placeholder="Last name"
            name="lastName"
            value={lastName}
            onChange={formDataHandler}
          />
          <Input
            required
            placeholder="Email ID"
            name="email"
            value={email}
            onChange={formDataHandler}
          />
          <Input
            required
            placeholder="Contact No."
            name="contact"
            value={contact}
            onChange={formDataHandler}
          />
          <Input
            required
            placeholder="Company Name"
            name="companyName"
            value={companyName}
            onChange={formDataHandler}
          />
          <Input
            required
            placeholder="Company Size"
            name="companySize"
            value={companySize}
            onChange={formDataHandler}
          />
        </div>
        <div className="form-group">
          <label
            style={{
              marginTop: "2rem",
            }}
          >
            What services are you looking for?
          </label>
          <div className="checkbox-wrapper">
            <label>
              <input
                type="checkbox"
                name="isLeadGeneration"
                value={isLeadGeneration}
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
        <div className="form-group">
          <label
            style={{
              marginTop: "2rem",
            }}
          >
            Are you currently collaborating with any agency for any of these
            services?
          </label>
          <div
            className="checkbox-wrapper"
            style={{
              marginBottom: "2rem",
            }}
          >
            <label>
              <input
                type="checkbox"
                name="isCollaborating"
                checked={isCollaborating}
                onChange={(e) =>
                  setFormData({ ...formData, isCollaborating: true })
                }
              />
              <span
                style={{
                  marginLeft: "3rem",
                  position: "relative",
                  top: "-0.2rem",
                }}
              >
                Yes
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                name="isCollaborating"
                checked={!isCollaborating}
                onChange={(e) =>
                  setFormData({ ...formData, isCollaborating: false })
                }
              />
              <span
                style={{
                  marginLeft: "3rem",
                  position: "relative",
                  top: "-0.2rem",
                }}
              >
                No
              </span>
            </label>
          </div>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="btn btn1"
          style={{
            margin: "auto",
          }}
        >
          {loading ? "Submiting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default ClicksterForm;
