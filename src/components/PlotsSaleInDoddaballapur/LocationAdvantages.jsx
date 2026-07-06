import React from "react";
import {
  FaRoad,
  FaPlane,
  FaIndustry,
  FaBuilding,
  FaMapMarkerAlt,
  FaGlobe,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";
import BannerImg from "../../assets/Doddaballapur-page-banner-img.jpeg";
import logo from "../../assets/logo.png";

const leftPoints = [
  {
    icon: <FaRoad className="text-blue-500 text-lg mt-0.5 shrink-0" />,
    text: "Close to 4-lane State Highway (SH-09).",
  },
  {
    icon: <FaPlane className="text-blue-500 text-lg mt-0.5 shrink-0" />,
    text: "Kempegowda International Airport – 45-minute drive.",
  },
  {
    icon: <FaIndustry className="text-blue-500 text-lg mt-0.5 shrink-0" />,
    text: "KHIR / KWIN City Projects – 2000 Acres nearby.",
  },
  {
    icon: <FaGlobe className="text-blue-500 text-lg mt-0.5 shrink-0" />,
    text: "ITIR / SEZ (FOXCONN) – 10000 Acres investment zone.",
  },
];

const rightPoints = [
  {
    icon: <FaBuilding className="text-blue-500 text-lg mt-0.5 shrink-0" />,
    text: "KIADB Industrial Area – 800 Acres proximity.",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-500 text-lg mt-0.5 shrink-0" />,
    text: "Satellite Township Ring Road (STRR) connectivity.",
  },
  {
    icon: <FaUserTie className="text-blue-500 text-lg mt-0.5 shrink-0" />,
    text: "Easy access to North Bangalore's growing business hubs.",
  },
  {
    icon: <FaChartLine className="text-blue-500 text-lg mt-0.5 shrink-0" />,
    text: "Upcoming suburban / metro rail connectivity.",
  },
];

const LocationAdvantages = () => {
  return (
    <>
      <section className="py-14 px-4 bg-[#f4f7fc]">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#24457b] mb-12">
              Residential Plots For Sale In Doddaballapur
            </h2>
            <div className="w-20 h-1 bg-yellow-900 mx-auto mt-3 rounded-full" />
          </div>

          {/* Two-column intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#24457b]">
              <h3 className="text-lg font-bold text-[#24457b] mb-3">
                Strategic Location
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Doddaballapur is strategically located in North Bangalore with
                excellent connectivity to Kempegowda International Airport,
                major IT and industrial zones including KHIR/KWIN City Projects
                (2000 Acres), ITIR/SEZ – FOXCONN (10000 Acres), and KIADB (800
                Acres). This positioning ensures effortless travel and strong
                property value growth.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-900">
              <h3 className="text-lg font-bold text-[#24457b] mb-3">
                High Investment Potential
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Property values in Doddaballapur have shown steady appreciation
                due to rapid urbanisation and infrastructure growth. As North
                Bangalore continues to develop, plots near Doddaballapur are
                expected to witness significant value growth, making it a smart
                long-term investment choice.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400">
              <h3 className="text-lg font-bold text-[#24457b] mb-3">
                Peaceful Lifestyle
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Unlike crowded city centers, Doddaballapur offers a serene and
                green environment. Buyers can enjoy a healthier lifestyle away
                from traffic congestion and pollution while remaining
                well-connected to the city and all its conveniences.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-400">
              <h3 className="text-lg font-bold text-[#24457b] mb-3">
                Ideal for Future Home Construction
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Residential plots provide the flexibility to build homes
                according to personal preferences and budgets. Many families are
                now opting for plots instead of apartments because of greater
                privacy, customisation opportunities, and complete ownership of
                land.
              </p>
            </div>
          </div>

          {/* Connectivity icon list */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <img
              src={BannerImg.src}
              alt="Plots for sale in Doddaballapur"
              className="w-full h-[70vh] border border-gray-300 object-cover mb-6"
            />
            <h3 className="text-center text-lg font-bold text-[#24457b] mb-6">
              Defence Housing Society – Doddaballapur is designed for
              unparalleled connectivity
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...leftPoints, ...rightPoints].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {item.icon}
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 italic text-sm mt-6">
              The part of Bangalore where land value, investor sentiment,
              business opportunities, and career prospects – all are heading
              north!
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <span className="text-[#24457b] text-sm font-semibold tracking-wide uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4 inline-block">
                Why Choose Doddaballapur?
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Smart Investment. Peaceful Living.
            </h2>
            <div className="w-24 h-1 bg-[#24457b] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center">
              Doddaballapur has rapidly become one of the most sought-after
              investment destinations in North Bangalore. Located close to major
              IT and industrial zones and well connected to the city through
              highways and upcoming infrastructure projects, this region is
              ideal for both residential living and investment purposes.
            </p>
          </div>

          {/* Industrial Zones Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "KHIR/KWIN CITY (2000 ACRES)",
              "ITIR/SEZ - FOXCONN (10000 ACRES)",
              "KIADB (800 ACRES)",
            ].map((zone, idx) => (
              <span
                key={idx}
                className="bg-[#24457b]/10 text-[#24457b] text-sm font-medium px-4 py-2 rounded-full"
              >
                {zone}
              </span>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Card 1 - Strategic Location */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-[#24457b] to-[#3a66b0]"></div>
              <div className="p-6 md:p-8">
                <div className="w-12 h-12 bg-[#24457b]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#24457b]/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#24457b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Strategic Location
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Excellent connectivity to:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 text-[#24457b] mt-0.5 flex-shrink-0"
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
                    Major IT and industrial zones
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 text-[#24457b] mt-0.5 flex-shrink-0"
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
                    KHIR/KWIN CITY PROJECTS
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 text-[#24457b] mt-0.5 flex-shrink-0"
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
                    ITIR/SEZ & KIADB Zones
                  </li>
                </ul>
                <p className="text-gray-500 text-sm pt-3 border-t border-gray-100">
                  Perfect for professionals working in North Bangalore's growing
                  business hubs.
                </p>
              </div>
            </div>

            {/* Card 2 - High Investment Potential */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-[#24457b] to-[#3a66b0]"></div>
              <div className="p-6 md:p-8">
                <div className="w-12 h-12 bg-[#24457b]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#24457b]/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#24457b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  High Investment Potential
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Property values in Doddaballapur have shown steady
                  appreciation due to rapid urbanization and infrastructure
                  growth.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-700 text-sm font-semibold">
                    📈 Average appreciation: 15-20% year on year
                  </p>
                </div>
                <p className="text-gray-500 text-sm pt-3 border-t border-gray-100">
                  Investors looking for long-term returns are increasingly
                  choosing plotted developments in this area.
                </p>
              </div>
            </div>

            {/* Card 3 - Peaceful Lifestyle */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-[#24457b] to-[#3a66b0]"></div>
              <div className="p-6 md:p-8">
                <div className="w-12 h-12 bg-[#24457b]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#24457b]/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#24457b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Peaceful Lifestyle
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Unlike crowded city centers, Doddaballapur offers a serene and
                  green environment.
                </p>
                {/* <div className="flex gap-3 mb-4">
            <span className="text-2xl">🌳</span>
            <span className="text-2xl">🦜</span>
            <span className="text-2xl">🏞️</span>
          </div> */}
                <p className="text-gray-500 text-sm pt-3 border-t border-gray-100">
                  Enjoy a healthier lifestyle away from traffic congestion and
                  pollution while remaining connected to the city.
                </p>
              </div>
            </div>

            {/* Card 4 - Ideal for Home Construction */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-[#24457b] to-[#3a66b0]"></div>
              <div className="p-6 md:p-8">
                <div className="w-12 h-12 bg-[#24457b]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#24457b]/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#24457b]"
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Ideal for Future Home Construction
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Residential plots provide flexibility to build homes according
                  to personal preferences and budgets.
                </p>
                {/* <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3 mb-4">
            <div className="text-center flex-1">
              <div className="text-[#24457b] font-bold">✓</div>
              <p className="text-xs text-gray-600">Privacy</p>
            </div>
            <div className="text-center flex-1">
              <div className="text-[#24457b] font-bold">✓</div>
              <p className="text-xs text-gray-600">Customization</p>
            </div>
            <div className="text-center flex-1">
              <div className="text-[#24457b] font-bold">✓</div>
              <p className="text-xs text-gray-600">Value Growth</p>
            </div>
          </div> */}
                <p className="text-gray-500 text-sm pt-3 border-t border-gray-100">
                  Many families are now opting for plots instead of apartments
                  for greater flexibility.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-[#24457b] to-[#1a3363] rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative p-5 md:p-12 text-center">
              <img
                src={logo.src}
                className="w-[10%] mx-auto mb-2"
                alt="Plots for sale in North Bangalore"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Defence Housing Society
              </h3>
              <p className="text-blue-100 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Carefully planned layouts with modern infrastructure and
                excellent connectivity, making them an excellent choice for
                homebuyers and investors.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
        </div>
      </section>
    </>
  );
};

export default LocationAdvantages;
