import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
const scrollTo = (name) => {
  const element = document.getElementById(name);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};
const Header2 = () => {
  const [show, setShow] = useState(false);

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
          <Link
            href="/"
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
          </Link>
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
                <Link href="/#about" className="text">
                  Services
                </Link>
              </li>
              <li className="navlist-item">
                <Link href="/#process" className="text">
                  Process
                </Link>
              </li>
              <li className="navlist-item">
                <Link href="/#whyus" className="text">
                  Why Us
                </Link>
              </li>
              <li className="navlist-item">
                <Link
                  href="/#form"
                  className="text gradient-text"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Schedule Call
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header2;
