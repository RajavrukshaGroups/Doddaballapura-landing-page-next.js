"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=918884413931&text&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-3 rounded-full shadow-2xl hover:bg-[#20ba59] hover:scale-105 transition-all duration-300 group"
      style={{ textDecoration: "none", zIndex: 9999 }}
    >
      <FaWhatsapp size={24} />
      <span className="hidden sm:inline font-semibold text-xs md:text-sm tracking-wide text-white">
        WhatsApp Us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
