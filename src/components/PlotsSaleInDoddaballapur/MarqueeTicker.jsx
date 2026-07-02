import React from "react";
import FastMarquee from "react-fast-marquee";

const Marquee = FastMarquee.default || FastMarquee;

const MarqueeTicker = () => {
  const items = [
    "Premium Residential Plots for Sale in Doddaballapur – North Bangalore",
    "A Khata Plots · Gated Community · Legally Approved Layouts",
    "KHIR/KWIN City Projects – 2000 Acres Nearby",
    "ITIR/SEZ (FOXCONN) – 10000 Acres in the Zone",
    "KIADB Industrial Area – 800 Acres Proximity",
    "Bookings Open Now – Invest in North Bangalore's Fastest-Growing Corridor!",
  ];

  return (
    <div className="bg-[#1a3a6c] text-white py-2.5 text-sm font-semibold tracking-wide">
      <Marquee speed={55} gradient={false}>
        {items.map((item, i) => (
          <span key={i} className="mx-10 flex items-center gap-2">
            <span className="text-yellow-400">★</span>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTicker;
