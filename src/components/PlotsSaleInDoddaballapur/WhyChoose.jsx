import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import "./DoddaballapurPlotsPage.css";
import {
  LandPlot,
  PencilRuler,
  TrendingUp,
  Wallet,
  ShieldCheck,
  Trees,
} from "lucide-react";
const benefits = [
  {
    icon: LandPlot,
    title: "Land Ownership",
    desc: "Complete ownership with long-term asset value.",
  },
  {
    icon: PencilRuler,
    title: "Custom Design",
    desc: "Build your dream home exactly the way you want.",
  },
  {
    icon: TrendingUp,
    title: "High Appreciation",
    desc: "Better capital growth compared to many alternatives.",
  },
  {
    icon: Wallet,
    title: "Low Maintenance",
    desc: "Reduced recurring costs and maintenance expenses.",
  },
  {
    icon: ShieldCheck,
    title: "Greater Privacy",
    desc: "Enjoy independent living with enhanced privacy.",
  },
  {
    icon: Trees,
    title: "Future Ready",
    desc: "Ideal for future construction and family expansion.",
  },
];

const WhyChoose = () => (
  <>
  <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-10 max-w-5xl mx-auto my-12 shadow-sm">
    <h2 className="text-xl md:text-3xl font-bold text-[#24457b] text-center mb-4">
      Why Choose Defence Housing Society
    </h2>
    <div className="flex flex-col gap-[2px] mb-8">
      <div className="h-[2px] bg-gray-800 w-full" />
      <div className="h-[2px] bg-gray-800 w-full" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <FaCheckCircle className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-800 text-[15px]">Strategically located projects in North Bangalore.</span>
        </div>
        <div className="flex items-start gap-3">
          <FaCheckCircle className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-800 text-[15px]">Legally approved A Khata residential plots.</span>
        </div>
        <div className="flex items-start gap-3">
          <FaCheckCircle className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-800 text-[15px]">Well-planned gated community layouts.</span>
        </div>
        <div className="flex items-start gap-3">
          <FaCheckCircle className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-800 text-[15px]">Modern infrastructure and premium amenities.</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <FaCheckCircle className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-800 text-[15px]">Excellent connectivity to key locations and airports.</span>
        </div>
        <div className="flex items-start gap-3">
          <FaCheckCircle className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-800 text-[15px]">High appreciation potential for long-term investors.</span>
        </div>
        <div className="flex items-start gap-3">
          <FaCheckCircle className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-800 text-[15px]">Transparent documentation process with no hidden charges.</span>
        </div>
        <div className="flex items-start gap-3">
          <FaCheckCircle className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-800 text-[15px]">Trusted by homebuyers, NRIs, and investors across India.</span>
        </div>
      </div>
    </div>
    
    <div className="text-center">
      <p className="text-red-400 text-lg md:text-xl font-bold mb-1 blink">
        Bookings Are Open Now – Secure Your Plot Today!
      </p>
      <p className="text-gray-800 text-sm md:text-base">
        Allotment of plots will be confirmed on <b>'First come first serve basis'</b>
      </p>
    </div>
  </div>

{/* ===== 10. The Growing Demand for Plotted Developments ===== */}
      
     <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-[#f8f9fa] to-white overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30" />
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />

  <div className="relative max-w-7xl mx-auto px-4 md:px-6">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      
      {/* Left Content */}
      <div>
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 font-semibold rounded-full text-sm mb-5 border border-red-100">
          Why Invest in Plots?
        </span>

        <h2 className="text-xl md:text-4xl font-extrabold text-[#24457b] leading-tight mb-6">
          The Growing<br/> Demand for
          <span className="block  text-red-700">
            Plotted Developments
          </span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Plotted developments have emerged as one of the most preferred
          investment choices in Bangalore. They offer complete ownership,
          unmatched flexibility, and strong long-term appreciation,
          making them ideal for both investors and future homeowners.
        </p>

        <p className="text-gray-600 leading-relaxed">
          As urban land becomes increasingly scarce, strategically located
          plotted communities in North Bangalore continue to witness
          rising demand and exceptional growth potential.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <div className="bg-white px-5 py-3 rounded-xl shadow-md border">
            <p className="text-2xl font-bold text-[#24457b]">100%</p>
            <span className="text-sm text-gray-500">
              Land Ownership
            </span>
          </div>

          <div className="bg-white px-5 py-3 rounded-xl shadow-md border">
            <p className="text-2xl font-bold text-[#24457b]">High</p>
            <span className="text-sm text-gray-500">
              Appreciation Potential
            </span>
          </div>
        </div>
      </div>

      {/* Right Side Benefits */}
      <div className="grid sm:grid-cols-2 gap-5">
        {benefits.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <Icon
                  size={28}
                  className="text-red-700"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-lg font-bold text-[#24457b] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
</>
);

export default WhyChoose;
