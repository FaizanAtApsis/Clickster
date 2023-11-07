import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const scrollTo = (name) => {
    const element = document.getElementById(name);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    setShow(false);
  };
  return (
    <>
      {show && (
        <div
          className="overlay"
          onClick={() => setShow(!show)}
          style={{
            left: "-2.5rem",
            top: "-2.5rem",
          }}
        ></div>
      )}
      <header>
        <div className="header-item brand">
          <a
            className="brand-wrapper"
            style={{
              display: "block",
              cursor: "pointer",
            }}
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          >
            <Image layout="fill" src="/assets/images/brand.png" alt="" />
          </a>
        </div>
        <div className="header-item">
          <p
            className="nav-btn"
            style={{
              display: "none",
              filter: "invert(1)",
            }}
            onClick={() => setShow(!show)}
          >
            <Image
              width={30}
              height={30}
              src="/assets/images/menu.png"
              alt=""
              objectFit="contain"
            />
          </p>

          <nav
            className="nav-wrapper"
            style={{
              right: show ? "-2.5rem" : "-80vw",
            }}
          >
            <ul className="navlist" type="none">
              <a
                className="brand-wrapper nav-btn"
                style={{
                  display: "none",
                  cursor: "pointer",
                  paddingTop: "10rem",
                }}
              >
                <Image layout="fill" src="/assets/images/brand.png" alt="" />
              </a>
              <li className="navlist-item">
                <a className="text" onClick={() => scrollTo("about")}>
                  Services
                </a>
              </li>
              <li className="navlist-item">
                <a onClick={() => scrollTo("process")} className="text">
                  Process
                </a>
              </li>
              <li className="navlist-item">
                <a className="text" onClick={() => scrollTo("whyus")}>
                  Why Us
                </a>
              </li>
              <li className="navlist-item">
                <a
                  // href="#form"
                  onClick={() => scrollTo("form")}
                  className="text gradient-text"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Schedule Call
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
