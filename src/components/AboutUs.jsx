"use client";
import React, { useState } from "react";
import Link from "next/link";
import HR4 from "../images/HR-4.jpg";
import HR2 from "../images/HR-2.jpg";
import HR9 from "../images/HR-9.jpeg";
import HR10 from "../images/HR-10.jpeg";
import HR11 from "../images/HR-11.jpeg";
import HR12 from "../images/HR-12.jpeg";
import HR10Webp from "../images/HR-10.webp";
import house from "../images/house (4).png";
import houseinhand from "../images/hand (1).png";
import { HeartHandshake } from "lucide-react";
import "./styles/AboutUs.css";

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const slides = [
    { image: HR4?.src || HR4, title: "ABOUT US" },
    {
      image:
        "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779874002/HR-2_gtni0a_bxmneo.webp",
      title: "ABOUT US",
    },
    { image: HR9?.src || HR9, title: "ABOUT US" },
    { image: HR10Webp?.src || HR10Webp, title: "ABOUT US" },
    { image: HR11?.src || HR11, title: "ABOUT US" },
    { image: HR12?.src || HR12, title: "ABOUT US" },
  ];

  const houseSrc = house?.src || house;
  const houseinhandSrc = houseinhand?.src || houseinhand;
  const heroImageSrc = HR10Webp?.src || HR10Webp;

  return (
    <>
      {/* Banner Section */}
      <div
        className="banner-about"
        style={{ backgroundImage: `url(${heroImageSrc})` }}
      >
        <div className="banner-content-about">
          <h1 style={{ color: "white", fontWeight: "900" }}>ABOUT US</h1>
        </div>
      </div>

      {/* Main About Section */}
      <section
        className="about-section about-page res-about"
        style={{ marginTop: "2rem" }}
      >
        <div className="auto-container">
          <div className="inner-container">
            <div className="row align-items-center clearfix">
              <div
                className="col-lg-7 col-md-12 col-sm-12 content-column"
                style={{ paddingTop: "0px" }}
              >
                <div className="content_block_2">
                  <div className="content-box">
                    <div className="sec-title">
                      <h2 className="defenceha">
                        Defence Habitat Housing Co-Operative Society Ltd.
                      </h2>
                    </div>
                    <div className="texts">
                      <p>
                        At Defence Habitat, we are committed to helping people turn
                        their aspirations of owning a property into reality. Defence
                        Habitat Housing Co-Operative Society Ltd. is a registered
                        housing society operating under the Karnataka Co-Operative
                        Society Act, 1959 & 1960.
                      </p>
                      <p>
                        With extensive experience in the real estate sector, we
                        focus on understanding the requirements of our members and
                        providing them with suitable property solutions. Our approach
                        is built around professionalism, transparency, trust, and
                        long-term relationships.
                      </p>
                      <p>
                        We offer opportunities across residential, and investment
                        properties, giving our members a range of options based on
                        their individual goals and budgets. From the initial
                        discussion and property selection through the subsequent
                        stages of the process, our team strives to provide clear
                        guidance and dependable support.
                      </p>
                      <p className="quote-text">
                        "We believe that choosing a property is an important
                        decision, and our objective is to make that journey simpler,
                        more transparent, and more comfortable for our members."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Video Column */}
              <div className="col-lg-5 col-md-10 col-sm-12 mb-4 image-column">
                <div
                  className="video-wrapper"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/060g2WazuXo?si=Huu6pEskdKxO9TH8"
                    title="Defence Habitat Society Video Presentation"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are, Vision, Mission & Commitment */}
      <section
        className="feature-style-three centred"
        style={{ paddingTop: "60px", paddingBottom: "70px" }}
      >
        <div className="auto-container">
          <div className="sec-titles">
            <h5>Get to Know</h5>
            <h2>Who We Are & What We Do</h2>
          </div>

          <p className="who-we-are-desc">
            Defence Habitat is focused on creating thoughtfully planned property
            opportunities, particularly for defence personnel seeking a suitable
            place to build their future. Our work combines real estate development
            with a commitment to creating an environment that reflects the values,
            discipline, and standards associated with military life.
          </p>

          <div className="container">
            <div className="row">
              {/* Card 1: Vision */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="inner-box1 vission">
                  <div className="icon-box">
                    <img src={houseSrc} alt="Vision House Icon" />
                  </div>
                  <h3 style={{ color: "#24457b" }}>
                    <b>OUR VISION</b>
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Our vision is to establish an exclusive and well-planned
                    residential community for defence personnel, offering a
                    living environment that reflects the dignity, values, and
                    lifestyle associated with the armed forces.
                  </p>
                </div>
              </div>

              {/* Card 2: Mission */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="inner-box1 vission">
                  <div className="icon-box">
                    <img src={houseinhandSrc} alt="Mission Hand Icon" />
                  </div>
                  <h3 style={{ color: "#24457b" }}>
                    <b>OUR MISSION</b>
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Our mission is to provide defence personnel with a dependable
                    opportunity to own a residential plot through a
                    state-government-approved society. We aim to help our members
                    build their dream homes within a practical budget while
                    providing a well-designed and aesthetically appealing community
                    environment.
                  </p>
                </div>
              </div>

              {/* Card 3: Commitment */}
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="inner-box1 vission">
                  <div className="icon-box">
                    <HeartHandshake
                      size={40}
                      strokeWidth={1.8}
                      className="text-[#24457b]"
                    />
                  </div>
                  <h3 style={{ color: "#24457b" }}>
                    <b>OUR COMMITMENT</b>
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    We believe that a successful property experience goes beyond
                    simply purchasing land. It involves trust, proper guidance,
                    transparency, and a clear understanding of the member's
                    requirements. At Defence Habitat, we therefore aim to support
                    our members throughout their property journey and create
                    opportunities that contribute to a secure and fulfilling future.
                    Defence Habitat — creating opportunities for defence personnel
                    to build the home they have always envisioned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
