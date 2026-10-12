"use client";
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.png'

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/defencehabitat",
      hoverClass: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      url: "https://x.com/DefenceSociety",
      hoverClass: "hover:bg-black hover:text-white",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/defence_habitat/",
      hoverClass: "hover:bg-[#E4405F] hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://api.whatsapp.com/send/?phone=918884413931&text&app_absent=0",
      hoverClass: "hover:bg-[#25D366] hover:text-white",
    },
  ];

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

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center text-xs md:text-sm font-medium text-slate-300">
            
            <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms-and-conditions" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</Link>
            <span className="text-slate-600">•</span>
            <Link href="/copyright-policy" className="hover:text-amber-400 transition-colors">Copyright Policy</Link>
            {/* <span className="text-slate-600">•</span>
            <Link href="/blogs" className="hover:text-amber-400 transition-colors">Blogs</Link>
            */}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center items-center">
            {socialLinks.map(({ name, icon: Icon, url, hoverClass }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className={`w-10 h-10 rounded-full bg-[#162d4a] text-slate-300 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md ${hoverClass}`}
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