"use client";
import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#0f3460] text-slate-400 py-16 border-t border-navy-800 relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* CENTER EVERYTHING */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-center">

            {/* Logo */}
            <div className="bg-white rounded-full p-1.5 shadow-lg inline-block mb-4">
              <img
                src={logo.src}
                alt="Defence Habitat"
                className="h-16 w-16 object-contain rounded-full"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150/0f3460/ffffff?text=DHS";
                }}
              />
            </div>

            {/* Title */}
            <span className="font-serif text-xs font-thin tracking-wide leading-none text-white">
              DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD.
            </span>
            <span className="text-[0.65rem] tracking-[0.2em] text-gold-400 uppercase font-bold">
              ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.
            </span>

          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed border-l-2 border-gold-400 pl-4 max-w-xl mx-auto">
            A premium residential project committed to providing high-quality living spaces in North Bangalore.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            {[FiFacebook, FiInstagram, FiTwitter, FiLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-400 hover:text-navy-900 transition-all transform hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 pt-8 flex flex-col items-center text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Defence Habitat. All Rights Reserved.</p>
          <p className="mt-2 opacity-70">Reg. No: HSG-3/64/HHS/53744</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;