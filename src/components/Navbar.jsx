"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./header.css";
import sitLogo from "../images/logo.png";

function CustomNavbar() {
  const [isDownloadDropdownOpen, setDownloadDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isPast20 = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== isPast20 ? isPast20 : prev));

          const navbar = document.getElementById("navbar");
          if (navbar) {
            const isPast50 = window.scrollY > 50;
            if (isPast50 && !navbar.classList.contains("navbar-small")) {
              navbar.classList.add("navbar-small");
            } else if (!isPast50 && navbar.classList.contains("navbar-small")) {
              navbar.classList.remove("navbar-small");
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setExpanded(false);
    setDownloadDropdownOpen(false);
  };

  return (
    <Navbar
      id="navbar"
      className="navbar-custom custom-sticky"
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container className="navbar-container">
        <Navbar.Brand as={Link} href="/" className="navbar-brand-custom" onClick={handleLinkClick}>
          <img
            src={sitLogo?.src || sitLogo}
            alt="DHS Logo"
            className={`navbar-logo-img ${isScrolled ? "scrolled" : ""}`}
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/150/0f3460/ffffff?text=DHS";
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
          <Nav className="nav-custom">
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} href="/" className="nav-link-custom" onClick={handleLinkClick}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} href="/about-us" className="nav-link-custom" onClick={handleLinkClick}>
                About Us
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              title="Download"
              id="nav-dropdown-download"
              className="nav-item-custom nav-dropdown-custom"
              onMouseEnter={() => setDownloadDropdownOpen(true)}
              onMouseLeave={() => setDownloadDropdownOpen(false)}
              show={isDownloadDropdownOpen}
            >
              <NavDropdown.Item
                as={Link}
                href="/download/brochure"
                className="dropdown-item-custom"
                onClick={handleLinkClick}
              >
                Brochure Download
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                href="/download/application"
                className="dropdown-item-custom"
                onClick={handleLinkClick}
              >
                Application Download
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} href="/latest-news" className="nav-link-custom" onClick={handleLinkClick}>
                Latest News
                <span className="notification-badge">New</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} href="/blogs" className="nav-link-custom" onClick={handleLinkClick}>
                Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} href="/contact-us" className="nav-link-custom" onClick={handleLinkClick}>
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} href="/gallery" className="nav-link-custom" onClick={handleLinkClick}>
                Gallery
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
