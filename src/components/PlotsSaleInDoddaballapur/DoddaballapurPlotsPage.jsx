"use client";
import React from "react";

import { Container } from "react-bootstrap";
import MarqueeTicker from "./MarqueeTicker";
import LocationAdvantages from "./LocationAdvantages";
import WhyNorthBangalore from "./WhyNorthBangalore";
import GatedCommunity from "./GatedCommunity";
import WhyChoose from "./WhyChoose";
import HeroSection from "./Hero";
import "./DoddaballapurPlotsPage.css";
import logo from "../../assets/logo.png";
import { LuArrowRight as ArrowRight } from "react-icons/lu";
import { FiCheckCircle as CheckCircle2 } from "react-icons/fi";
import Link from "next/link";

const DoddaballapurPlotsPage = () => {
  return (
    <Container fluid className="doddaballapur-page">


      {/* ===== 1. Hero Banner ===== */}
      <HeroSection />

      {/* ===== 2. Marquee Ticker ===== */}
      <MarqueeTicker />

      {/* ===== 3. Intro Section ===== */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#24457b] mb-6">
            Invest in Your Future with Defence Housing Society – Premium
            Residential Plots in North Bangalore
          </h2>
          <div className="w-20 h-1 bg-red-800 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-justify md:text-center">
            Bangalore's real estate market continues to attract investors and
            homebuyers from across India, and North Bangalore has emerged as one
            of the most promising destinations for long-term growth. With rapid
            infrastructure development, excellent connectivity, and proximity to
            Kempegowda International Airport, the region has become a preferred
            choice for residential investments. If you are searching for{" "}
            <Link
              href="/"
              className="font-bold text-[#24457b] hover:text-red-800 transition-colors"
            >
              Residential Plots for Sale in Doddaballapur
            </Link>{" "}
            or{" "}
            <Link
              href="/"
              className="font-bold text-[#24457b] hover:text-red-800 transition-colors"
            >
              Gated Community Plots for Sale in North Bangalore
            </Link>
            , Defence Housing Society offers the ideal opportunity to own
            premium land in one of Bangalore's fastest-growing corridors.
          </p>
          <p className="text-gray-600 mt-4 max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-justify md:text-center">
            Whether you are planning to build your dream home or secure a
            high-appreciation investment, North Bangalore offers unmatched
            potential. The region combines urban convenience with peaceful
            surroundings, making it suitable for families, professionals, NRIs,
            and investors alike.
          </p>
        </div>
      </section>

      {/* ===== 4. Why North Bangalore (Component + supporting text) ===== */}
      {/* Main Display Heading */}
      <div className="text-center mb-10">
        {/* Gold Badge Header */}
        <div className="inline-flex items-center justify-center gap-3 text-amber-600 tracking-wider text-xs md:text-sm font-bold font-display uppercase mb-3">
          <div className="w-10 h-[1.5px] bg-[#d97706]/40" />
          <span>• WHY NORTH BANGALORE •</span>
          <div className="w-10 h-[1.5px] bg-[#d97706]/40" />
        </div>

        {/* Main Display Heading */}
        <h1 className="font-display font-extrabold text-xl md:text-3xl text-[#24457b] max-w-5xl mx-auto leading-[1.12] tracking-tight">
          Why North Bangalore is the
          <br className="hidden sm:inline" /> Preferred Real Estate Destination
        </h1>

        {/* Description Paragraph */}
        <p className="max-w-4xl mx-auto text-slate-600 text-[14px] md:text-base leading-relaxed mt-5 font-normal px-4">
          North Bangalore has transformed into a thriving residential and
          commercial hub. Major infrastructure projects, IT parks, Industrial
          (KIADB) developments, and improved road networks have significantly
          increased demand for plotted developments in the region.
        </p>

        {/* Elegant Custom Split Subline Segment under Description */}
        <div className="flex justify-center mt-6">
          <div className="flex w-16 h-[4px] rounded-full overflow-hidden shadow-sm">
            <div className="w-1/2 bg-[#0b1b4f]" />
            <div className="w-1/2 bg-amber-50" />
          </div>
        </div>
      </div>

      <WhyNorthBangalore />

      {/* SECTION HEADER BLOCK - EXACTLY LIKE IMAGE DESIGN */}

      {/* <section className="py-10 px-4 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 font-semibold mb-4 text-lg">Some of the major advantages of investing in North Bangalore include:</p>
          <ul className="text-gray-600 text-sm md:text-base leading-relaxed text-left mx-auto max-w-2xl mb-6 list-disc pl-5 space-y-2">
            <li>Excellent connectivity to Kempegowda International Airport</li>
            <li>Fast-growing IT and industrial corridors</li>
            <li>Presence of reputed educational institutions and hospitals</li>
            <li>Upcoming metro and infrastructure projects</li>
            <li>High appreciation potential for residential land</li>
            <li>Peaceful and pollution-free environment</li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify md:text-center">
            With growing demand for plotted developments, buyers are increasingly choosing gated communities that provide security, amenities, and long-term value appreciation.
          </p>
        </div>
      </section> */}

      {/* ===== 5. Residential Plots for Sale in Doddaballapur (Component + detailed text) ===== */}
      <LocationAdvantages />

      {/* ===== 6. Gated Community Plots (Component + detailed text) ===== */}
      <GatedCommunity />

      {/* ===== 7. Plots Near Doddaballapur Bangalore ===== */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-[#24457b]/10 text-[#24457b] text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
                North Bangalore's Prime Real Estate
              </span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
              Plots Near{" "}
              <span className="text-[#24457b] text-xl md:text-2xl lg:text-4xl ">
                Doddaballapur
              </span>
            </h2>
            <p className="text-[#24457b] text-lg md:text-xl font-semibold mb-4">
              A Smart Investment Choice
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#24457b] to-[#3a66b0] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-6xl mx-auto">
              The region surrounding Doddaballapur has become one of Bangalore's
              hottest real estate zones, with significant infrastructure growth,
              commercial activity, and property appreciation driving investor
              interest.
            </p>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              {
                value: "45 mins",
                label: "to Airport",
                icon: "✈️",
                color: "blue",
              },
              {
                value: "30%+",
                label: "Annual Appreciation",
                icon: "📈",
                color: "green",
              },
              {
                value: "2000+",
                label: "Acres Industrial Zone",
                icon: "🏭",
                color: "purple",
              },
              {
                value: "24/7",
                label: "Connectivity",
                icon: "🚗",
                color: "orange",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-gray-100"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-lg md:text-xl font-bold text-[#24457b]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Connectivity Highlights Banner */}
          <div className="bg-gradient-to-r from-[#062b67ff] to-[#0e295dff] rounded-2xl p-6 mb-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Seamless Connectivity</p>
                  <p className="text-white font-bold text-lg">
                    SH-09 | STRR | Upcoming Metro
                  </p>
                </div>
              </div>
              <div className="h-8 w-px bg-white/20 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Travel Time Reduced</p>
                  <p className="text-white font-bold text-lg">
                    45 mins to Major IT Hubs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Card 1 - Excellent Connectivity */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-blue-900 to-blue-950"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Excellent Connectivity
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Well connected through:
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    "SH-09 (State Highway)",
                    "Satellite Township Ring Road (STRR)",
                    "Upcoming suburban/metro connectivity",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-blue-700 text-sm">
                    🚗 Seamless connectivity reduces travel time and enhances
                    accessibility to major business centers
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Strong Commercial Growth */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-green-900 to-green-950"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Strong Commercial Growth
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Several business parks, aerospace hubs, logistics centers, and
                  IT companies are setting up operations, creating increased
                  demand for residential developments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "🏢 Business Parks",
                    "✈️ Aerospace Hubs",
                    "📦 Logistics Centers",
                    "💻 IT Companies",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 - Ideal for Professionals */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-purple-900 to-purple-950"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Ideal for Professionals
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Highly preferred by:
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    "IT professionals & Business owners",
                    "NRIs & Frequent travelers",
                    "Aviation sector employees",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-purple-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-purple-700 text-sm">
                    📍 Convenient access to Major IT and industrial zones adds
                    tremendous value
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - High Appreciation Potential */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-orange-900 to-orange-950"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    High Appreciation Potential
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Real estate near major infrastructure projects tends to
                  appreciate faster. As North Bangalore continues to develop,
                  plots near Doddaballapur are expected to witness significant
                  value growth.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-3 text-center">
                  <p className="text-orange-700 text-sm font-semibold">
                    📈 Expected 25-30% CAGR in next 5 years
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Highlights */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100">
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Why Invest in Doddaballapur?
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                {
                  icon: "🚄",
                  title: "Metro Connectivity",
                  desc: "Upcoming metro line",
                },
                {
                  icon: "🏗️",
                  title: "Infrastructure Boost",
                  desc: "STRR, Airports, Highways",
                },
                {
                  icon: "🏭",
                  title: "Industrial Growth",
                  desc: "KIADB, ITIR, FOXCONN",
                },
                {
                  icon: "📈",
                  title: "High ROI",
                  desc: "30%+ annual appreciation",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-5 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-[#24457b] to-[#1a3363] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -mr-36 -mt-36"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full -ml-28 -mb-28"></div>

            <div className="relative p-8 md:p-10 text-center">
              <div className="inline-block mb-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Limited Plots Available
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Defence Housing Society
              </h3>
              <p className="text-blue-100 text-base max-w-2xl mx-auto mb-6">
                Premium plotted developments strategically located near IT
                Zones, making them ideal for investment and future residential
                development.
              </p>
              {/* <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-[#24457b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg">
            View Plots →
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
            Get Investment Guide
          </button>
        </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. Plots for Sale in Doddaballapur ===== */}
      <section className="py-10 px-4 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#24457b] text-center mb-6">
            Plots for Sale in Doddaballapur
          </h2>
          <div className="w-20 h-1 bg-red-800 mx-auto mb-8 rounded-full" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify md:text-center mb-4">
            Doddaballapur is one of the most established and desirable
            residential areas in North Bangalore. Known for its excellent
            infrastructure, educational institutions, and peaceful environment,
            the locality has become a top choice for homebuyers.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify md:text-center mb-8">
            The demand for plots for sale in Doddaballapur continues to grow
            because of several reasons.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-[#24457b] mb-3">
                Prime Residential Location
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Doddaballapur offers:
              </p>
              <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1 mb-3">
                <li>Excellent road connectivity & Proximity to the airport</li>
                <li>Access to reputed schools and colleges</li>
                <li>Nearby hospitals and shopping centers</li>
                <li>Easy connectivity to Hebbal and central Bangalore</li>
              </ul>
              <p className="text-gray-600 text-sm">
                This makes it one of the most convenient residential
                destinations in the city.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-[#24457b] mb-3">
                Strong Social Infrastructure
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                The locality has well-developed infrastructure including:
              </p>
              <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1 mb-3">
                <li>International schools & Healthcare facilities</li>
                <li>Retail outlets, Restaurants and entertainment zones</li>
                <li>Parks and recreational areas</li>
              </ul>
              <p className="text-gray-600 text-sm">
                Families prefer Doddaballapur because it provides a balanced
                lifestyle with urban conveniences and green surroundings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-800">
              <h3 className="text-lg font-bold text-[#24457b] mb-3">
                Investment Security
              </h3>
              <p className="text-gray-600 text-sm">
                Plots in established areas like Doddaballapur offer stable
                appreciation and strong resale value. Investors looking for safe
                and profitable real estate options often prefer this locality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-[#24457b] mb-3">
                Ideal for Independent Homes
              </h3>
              <p className="text-gray-600 text-sm">
                Many buyers choose plots in Doddaballapur to build spacious
                independent homes with customized designs and private outdoor
                spaces.
              </p>
            </div>
          </div>

          <p className="text-center font-semibold text-[#24457b] mt-8 max-w-3xl mx-auto">
            With growing demand for premium plotted developments, Doddaballapur
            remains one of the most promising residential investment
            destinations in Bangalore.
          </p>
        </div>
      </section>

      {/* ===== 9. Why Choose Defence Housing Society ===== */}
      <WhyChoose />

      {/* ===== 11. Conclusion ===== */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#f8fafc] via-white to-[#fef7f4] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-red-50 text-red-950 rounded-full text-sm font-semibold border border-red-100 mb-4">
                Smart Investment Choice
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-[#24457b] mb-4">
                Your Investment
                <span className="block text-green-900">Opportunity Awaits</span>
              </h2>

              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-800 to-blue-950 mx-auto rounded-full" />
            </div>

            {/* Content */}
            <div className="space-y-6 text-center">
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                North Bangalore continues to emerge as one of the most promising
                real estate destinations, offering excellent connectivity, rapid
                infrastructure development, and strong long-term appreciation
                potential.
              </p>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-4 my-10">
                {[
                  "Residential Plots in Doddaballapur",
                  "Gated Community Developments",
                  "A Khata Approved Plots",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-5 flex items-center gap-3 shadow-sm"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-red-700 flex-shrink-0"
                    />
                    <span className="text-gray-700 font-medium text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                <Link
                  href="/"
                  className="font-bold text-[#24457b] hover:text-red-800 transition-colors"
                >
                  Defence Housing Society
                </Link>{" "}
                offers thoughtfully planned plotted developments designed for
                modern living, long-term value, and future growth.
              </p>

              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-[#24457b] to-[#2d5aa0] rounded-2xl p-8 text-white mt-10">
                <h3 className="text-2xl font-bold mb-4">
                  Invest Today. Benefit Tomorrow.
                </h3>

                <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
                  With rising demand, expanding infrastructure, and increasing
                  property appreciation, North Bangalore remains one of the most
                  rewarding destinations for both homebuyers and investors.
                </p>
              </div>

              {/* CTA */}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DoddaballapurPlotsPage;
