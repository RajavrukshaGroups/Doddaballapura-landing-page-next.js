"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import { Card, Container } from "react-bootstrap";
import siteapproval from "../images/site_approval_new.png";
import timesexpo from "../images/times_expo.png";
import newsPaper2 from "../images/newsPaper2.webp";
import newsPaper3 from "../images/newsPaper3.webp";
import newsPaper4 from "../images/newsPaper4.webp";
import HR4 from "../images/HR-4.webp";
import "./styles/latestnews.css";

const LatestNews = () => {
  const router = useRouter();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const goToPlots = () => {
    router.push("/gallery#plots");
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Container fluid className="marasandra-page">
        {/* Banner */}
        <div
          className="banner-latest"
          style={{
            backgroundImage: `url(${HR4?.src || HR4})`,
          }}
        >
          <div className="banner-content3">
            <h1>Latest News</h1>
          </div>
        </div>

        {/* Marquee */}
        <Marquee className="marquee" direction="left" speed={50}>
          <span className="text-capitalize">
            &quot;DHS-Marasandra: Change of land use process is completed.&quot;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &quot;DHS-Tapasihalli: DC conversion received.&quot;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &quot;Bookings are now open for phase-2.&quot;
          </span>
        </Marquee>

        {/* Newspaper Images */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "24px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            padding: "0 15px",
          }}
        >
          {[
            timesexpo?.src || timesexpo,
            newsPaper2?.src || newsPaper2,
            newsPaper3?.src || newsPaper3,
            newsPaper4?.src || newsPaper4,
          ].map((img, index) => (
            <div
              key={index}
              className="press-thumbnail"
              style={{
                cursor: "pointer",
                flex: "1 1 250px",
                maxWidth: "320px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => openLightbox(img)}
            >
              <img
                src={img}
                alt="Newspaper"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "240px", objectFit: "cover" }}
              />
              <p className="press-thumbnail-note small">
                Click the image to view larger
              </p>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {lightboxOpen && (
          <div
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <img
              src={selectedImage}
              alt="Full View"
              style={{
                maxWidth: "95%",
                maxHeight: "95vh",
                objectFit: "contain",
                borderRadius: "6px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
              }}
            />
          </div>
        )}

        {/* Card Section */}
        <Container className="px-3">
          <Card className="property-card-latest border-0">
            <Card.Body className="p-0">
              <div className="latest-news-layout">
                <div className="latest-news-left">
                  <h2 className="ct">Latest News</h2>
                  <div className="title-divider"></div>

                  <div className="news-bullets-grid">
                    <div>
                      <h5 className="custom-bullet latest-news-line">
                        Defence Habitat Marasandra - Rs.1,699/- sqft (Booking
                        Closed)
                      </h5>

                      <h5 className="custom-bullet latest-news-line">
                        Defence Habitat Tapasihalli - Rs.1,399/- sqft (Booking
                        Closed)
                      </h5>

                      <h5 className="custom-bullet latest-news-line">
                        Good News..!!! Applications for new membership are open
                        now, Hurry up! Contact us for more information.
                        <span className="latest-badge">New</span>
                      </h5>

                      <h5 className="custom-bullet latest-news-line">
                        Defence Habitat Marasandra Phase-2 has launched -
                        Rs.1,999/- sqft (Booking Opened)
                        <span className="latest-badge">New</span>
                      </h5>

                      <h5 className="custom-bullet latest-news-line">
                        Defence Habitat Tapasihalli Phase-2 has launched -
                        Rs.1,699/- sqft (Booking Opened)
                        <span className="latest-badge">New</span>
                      </h5>
                    </div>

                    <div>
                      <h5 className="custom-bullet latest-news-line">
                        DHS-Tapasihalli: DPA/BMRDA approval received{" "}
                        <a
                          href={siteapproval?.src || siteapproval}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pdf-link"
                        >
                          (View Site Approval)
                        </a>
                      </h5>

                      <h5 className="custom-bullet latest-news-line">
                        With the launch of Phase 2, we are adding even more to our
                        project.
                      </h5>

                      <h5 className="custom-bullet latest-news-line">
                        DHS-Tapasihalli Phase 1 , Block 1{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={goToPlots}
                          className="pdf-link"
                        >
                          (View Plot Allotment)
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default LatestNews;
