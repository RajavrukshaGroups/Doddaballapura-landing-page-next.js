// import React from "react";
// import {
//   FaPlane,
//   FaIndustry,
//   FaBuilding,
//   FaChartLine,
//   FaLeaf,
//   FaRoad,
// } from "react-icons/fa";

// const reasons = [
//   {
//     icon: <FaPlane className="text-3xl text-[#24457b]" />,
//     title: "Airport Connectivity",
//     desc: "Excellent connectivity to Kempegowda International Airport — a major advantage for professionals, NRIs, and frequent travelers.",
//   },
//   {
//     icon: <FaIndustry className="text-3xl text-[#24457b]" />,
//     title: "IT & Industrial Growth",
//     desc: "Fast-growing IT parks, Industrial (KIADB) developments, and industrial corridors are driving massive demand for residential land.",
//   },
//   {
//     icon: <FaBuilding className="text-3xl text-[#24457b]" />,
//     title: "Social Infrastructure",
//     desc: "Reputed educational institutions, hospitals, shopping centers, and retail zones are well within reach.",
//   },
//   {
//     icon: <FaChartLine className="text-3xl text-[#24457b]" />,
//     title: "High Appreciation",
//     desc: "Residential land in North Bangalore has shown consistent value appreciation year on year due to rapid urbanisation.",
//   },
//   {
//     icon: <FaLeaf className="text-3xl text-[#24457b]" />,
//     title: "Peaceful Environment",
//     desc: "Pollution-free, green surroundings ideal for families seeking a balanced and healthy lifestyle away from city congestion.",
//   },
//   {
//     icon: <FaRoad className="text-3xl text-[#24457b]" />,
//     title: "Upcoming Metro & Roads",
//     desc: "Metro expansion and Satellite Township Ring Road (STRR) infrastructure projects are boosting accessibility significantly.",
//   },
// ];

// const WhyNorthBangalore = () => {
//   return (
//     <section className="py-14 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Section heading */}
//         <div className="text-center mb-10">
//           <h2
//             className="text-2xl md:text-3xl font-extrabold text-[#24457b]"
//           >
//             Why North Bangalore is the Preferred Real Estate Destination
//           </h2>
//           <div className="w-20 h-1 bg-yellow-900 mx-auto mt-3 rounded-full" />
//           <p className="text-gray-500 mt-4 max-w-6xl mx-auto text-sm md:text-base">
//             North Bangalore has transformed into a thriving residential and
//             commercial hub. Major infrastructure projects, IT parks, Industrial (KIADB)
//             developments, and improved road networks have significantly increased
//             demand for plotted developments in the region.
//           </p>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reasons.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-3"
//             >
//               <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
//                 {item.icon}
//               </div>
//               <h3
//                 className="text-base font-bold text-[#24457b]"
//               >
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyNorthBangalore;

import React from "react";
import { 
  Plane, 
  TrendingUp, 
  School, 
  Percent, 
  Leaf, 
  Route, 
  ArrowUpRight, 
  Sparkles 
} from "lucide-react";
//import { DRIVER_DATA } from "../data";

const DRIVER_DATA = [
  {
    id: "airport",
    number: "01",
    title: "Airport Connectivity",
    description: "Excellent connectivity to Kempegowda International Airport – a major advantage for professionals, NRIs, and frequent travelers.",
    iconName: "Plane",
    detailedInfo: "The Kempegowda International Airport is just a 15-20 min drive away from key plotted nodes in Devanahalli. This massive aviation hub has catalyzed corporate development, high-speed rail proposals, and luxury business hospitality nearby.",
    accentColor: "bg-blue-600",
    category: "connectivity",
    stats: { label: "Drive Time", value: "15-20 Mins" },
    dividerColor: "gold"
  },
  {
    id: "it-growth",
    number: "02",
    title: "IT & Industrial Growth",
    description: "Fast-growing IT parks, Industrial (KIADB) developments, and industrial corridors are driving massive demand for residential land.",
    iconName: "TrendingUp",
    detailedInfo: "North Bangalore hosts massive investment zones like the 3000-acre KIADB Aerospace & Hardware Park, Manyata Tech Park, and the upcoming Devanahalli Business Park. Major tech entities like Shell, Boeing, and Foxconn have set up colossal bases here.",
    accentColor: "bg-indigo-600",
    category: "growth",
    stats: { label: "Tech Core Area", value: "3,000+ Acres" },
    dividerColor: "navy"
  },
  {
    id: "social-infra",
    number: "03",
    title: "Social Infrastructure",
    description: "Reputed educational institutions, hospitals, shopping centers, and retail zones are well within reach.",
    iconName: "School",
    detailedInfo: "Live surrounded by top-tier facilities including Delhi Public School, Ryan International, Aster CMI Hospital, Padukone-Dravid Sports Center, and major upcoming shopping malls, making it an incredibly rich and secure neighborhood for families.",
    accentColor: "bg-emerald-600",
    category: "social",
    stats: { label: "Top Schools", value: "12+ Elite" },
    dividerColor: "gold"
  },
  {
    id: "appreciation",
    number: "04",
    title: "High Appreciation",
    description: "Residential land in North Bangalore has shown consistent value appreciation year on year due to rapid urbanisation.",
    iconName: "Percent",
    detailedInfo: "With institutional backing, wide arterial roads, and high-income commercial populations crowding the region, land values have increased by an average of 14% to 18% annually, offering premium secure multi-generational wealth aggregation.",
    accentColor: "bg-[#0b1b4f]",
    category: "growth",
    stats: { label: "Avg Annual Grow", value: "14% - 18% YoY" },
    dividerColor: "navy"
  },
  {
    id: "environment",
    number: "05",
    title: "Peaceful Environment",
    description: "Pollution-free, green surroundings ideal for families seeking a balanced and healthy lifestyle away from city congestion.",
    iconName: "Leaf",
    detailedInfo: "Unmatched green cover, low-density zoning regulations, and organic farms. North Bangalore is shielded from the heavy environmental congestion of central areas, providing pristine clean air index rates (AQI average under 55) for active living.",
    accentColor: "bg-green-600",
    category: "environment",
    stats: { label: "Average AQI", value: "50-60 (Clean)" },
    dividerColor: "gold"
  },
  {
    id: "metro-roads",
    number: "06",
    // title: "Upcoming Metro & Roads",
    title: "Upcoming Sub-Urban Railway Network,Metro & Roads",
    description: "Metro expansion and Satellite Township Ring Road (STRR) infrastructure projects are boosting accessibility significantly.",
    iconName: "Route",
    detailedInfo: "The Namma Metro Phase 2B (Airport Blue Line) features multiple active stations spanning North Bangalore. Complemented by the 280-km Satellite Township Ring Road (STRR) and high-speed tollways, long commutes are completely resolved.",
    accentColor: "bg-amber-600",
    category: "connectivity",
    stats: { label: "Namma Metro Line", value: "Phase 2B Connection" },
    dividerColor: "navy"
  }
];

export default function DriverCard() {
  const handleCardClick = (driver) => {
    window.dispatchEvent(new CustomEvent("select-driver", { detail: driver }));
  };

  // Render direct Lucide Icon based on name
  const renderIcon = (iconName, className = "w-[22px] h-[22px] text-blue-900") => {
    switch (iconName) {
      case "Plane":
        return <Plane className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      case "School":
        return <School className={className} />;
      case "Percent":
        return <Percent className={className} />;
      case "Leaf":
        return <Leaf className={className} />;
      case "Route":
        return <Route className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  // Render handdrawn custom visual watermarks
  const renderWatermarkSVG = (driverId) => {
    const commonClass = "absolute bottom-1 right-2 w-32 h-24 select-none pointer-events-none opacity-20 group-hover:opacity-35 transition-all duration-500 group-hover:scale-110 group-hover:origin-bottom-right";
    
    switch (driverId) {
      case "airport":
        return (
          <svg className={commonClass} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75 80 L79 35 L85 35 L89 80 Z" stroke="#cbd5e1" strokeWidth="1" strokeLinecap="round" />
            <path d="M77 35 L75 24 L89 24 L87 35 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
            <rect x="73" y="20" width="18" height="4" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="82" cy="14" r="2" fill="#3b82f6" />
            <path d="M82 14 L82 8" stroke="#94a3b8" strokeWidth="1" />
            <path d="M15 35 L38 32 L44 18 L48 18 L44 31 L65 29 L70 20 L73 20 L70 28 L78 27 L80 32 L15 35" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
            <line x1="10" y1="75" x2="110" y2="75" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M25 50 C 50 42, 85 41, 105 45" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" strokeLinecap="round" />
          </svg>
        );
      case "it-growth":
        return (
          <svg className={commonClass} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="35" width="22" height="45" rx="1" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="30" y1="42" x2="34" y2="42" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="30" y1="48" x2="34" y2="48" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="30" y1="54" x2="34" y2="54" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="30" y1="60" x2="34" y2="60" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="30" y1="66" x2="34" y2="66" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="38" y1="42" x2="42" y2="42" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="38" y1="48" x2="42" y2="48" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="38" y1="54" x2="42" y2="54" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="38" y1="60" x2="42" y2="60" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="38" y1="66" x2="42" y2="66" stroke="#e2e8f0" strokeWidth="1" />
            <rect x="52" y="15" width="28" height="65" rx="1.5" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
            <path d="M64 15 L64 80 M68 15 L68 80" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="57" y1="24" x2="60" y2="24" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="57" y1="32" x2="60" y2="32" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="57" y1="40" x2="60" y2="40" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="57" y1="48" x2="60" y2="48" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="57" y1="56" x2="60" y2="56" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="57" y1="64" x2="60" y2="64" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="57" y1="72" x2="60" y2="72" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="72" y1="24" x2="75" y2="24" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="72" y1="32" x2="75" y2="32" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="72" y1="40" x2="75" y2="40" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="72" y1="48" x2="75" y2="48" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="72" y1="56" x2="75" y2="56" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="72" y1="64" x2="75" y2="64" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="72" y1="72" x2="75" y2="72" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="85" y="42" width="22" height="38" rx="1" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="90" y1="50" x2="94" y2="50" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="90" y1="58" x2="94" y2="58" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="90" y1="66" x2="94" y2="66" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="98" y1="50" x2="102" y2="50" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="98" y1="58" x2="102" y2="58" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="98" y1="66" x2="102" y2="66" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="10" y1="80" x2="115" y2="80" stroke="#94a3b8" strokeWidth="1" />
          </svg>
        );
      case "social-infra":
        return (
          <svg className={commonClass} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="45" width="70" height="32" rx="2" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
            <path d="M50 45 L50 32 L70 32 L70 45 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
            <path d="M52 32 C52 22, 68 22, 68 32 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="60" cy="38" r="3" stroke="#94a3b8" strokeWidth="1" fill="white" />
            <path d="M60 38 L60 36 M60 38 L62 38" stroke="#94a3b8" strokeWidth="0.75" />
            <line x1="60" y1="22" x2="60" y2="10" stroke="#475569" strokeWidth="1" />
            <path d="M60 10 L70 14 L60 18 Z" fill="#ef4444" stroke="#ef4444" strokeWidth="0.5" />
            <path d="M55 77 L55 64 C55 60, 65 60, 65 64 L65 77 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            <rect x="31" y="52" width="6" height="8" rx="0.5" fill="white" stroke="#cbd5e1" />
            <rect x="41" y="52" width="6" height="8" rx="0.5" fill="white" stroke="#cbd5e1" />
            <rect x="73" y="52" width="6" height="8" rx="0.5" fill="white" stroke="#cbd5e1" />
            <rect x="83" y="52" width="6" height="8" rx="0.5" fill="white" stroke="#cbd5e1" />
            <rect x="31" y="64" width="6" height="8" rx="0.5" fill="white" stroke="#cbd5e1" />
            <rect x="41" y="64" width="6" height="8" rx="0.5" fill="white" stroke="#cbd5e1" />
            <rect x="73" y="64" width="6" height="8" rx="0.5" fill="white" stroke="#cbd5e1" />
            <rect x="83" y="64" width="6" height="8" rx="0.5" fill="white" stroke="#cbd5e1" />
            <line x1="15" y1="77" x2="105" y2="77" stroke="#94a3b8" strokeWidth="1.2" />
          </svg>
        );
      case "appreciation":
        return (
          <svg className={commonClass} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 75 Q45 70, 65 48 T105 14" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M96 14 L105 14 L105 23" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="25" y="65" width="8" height="10" rx="0.5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="40" y="55" width="8" height="20" rx="0.5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="55" y="45" width="8" height="30" rx="0.5" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="70" y="32" width="8" height="43" rx="0.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            <rect x="85" y="18" width="8" height="57" rx="0.5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
            <path d="M102 35 L104 38 L107 39 L104 40 L102 43 L100 40 L97 39 L100 38 Z" fill="#fbbf24" />
            <path d="M48 24 L49 26 L51 27 L49 28 L48 30 L47 28 L45 27 L47 26 Z" fill="#fbbf24" />
            <line x1="10" y1="75" x2="110" y2="75" stroke="#94a3b8" strokeWidth="1" />
          </svg>
        );
      case "environment":
        return (
          <svg className={commonClass} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 75 Q40 55, 75 75" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M50 75 Q80 48, 110 75" stroke="#94a3b8" strokeWidth="1" />
            <path d="M35 75 L35 55" stroke="#475569" strokeWidth="1.5" />
            <circle cx="35" cy="48" r="10" fill="#f1f5f9" stroke="#10b981" strokeWidth="1" />
            <line x1="35" y1="52" x2="35" y2="44" stroke="#10b981" strokeWidth="0.75" />
            <line x1="35" y1="48" x2="31" y2="46" stroke="#10b981" strokeWidth="0.75" />
            <line x1="35" y1="48" x2="39" y2="46" stroke="#10b981" strokeWidth="0.75" />
            <path d="M85 75 L85 45" stroke="#475569" strokeWidth="1.5" />
            <path d="M85 36 L75 52 L95 52 Z" fill="#f1f5f9" stroke="#059669" strokeWidth="1" />
            <path d="M85 28 L78 41 L92 41 Z" fill="#f1f5f9" stroke="#059669" strokeWidth="1" />
            <path d="M55 75 C53 71, 57 66, 61 66 C65 66, 69 71, 67 75 Z" fill="#e2e8f0" stroke="#10b981" strokeWidth="1" />
            <path d="M22 24 Q26 21, 30 24 Q34 21, 38 24" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <path d="M48 16 Q51 14, 54 16 Q57 14, 60 16" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="10" y1="75" x2="110" y2="75" stroke="#94a3b8" strokeWidth="1.2" />
          </svg>
        );
      case "metro-roads":
        return (
          <svg className={commonClass} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="22" y="55" width="8" height="20" fill="#e2e8f0" stroke="#cbd5e1" />
            <rect x="56" y="55" width="8" height="20" fill="#e2e8f0" stroke="#cbd5e1" />
            <rect x="90" y="55" width="8" height="20" fill="#e2e8f0" stroke="#cbd5e1" />
            <rect x="10" y="47" width="100" height="8" rx="1.5" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
            <line x1="10" y1="49" x2="110" y2="49" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="10" y1="53" x2="110" y2="53" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M12 42 L65 42 L72 47 L12 47 Z" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
            <rect x="18" y="44" width="36" height="2" fill="#3b82f6" />
            <rect x="58" y="44" width="4" height="2" fill="#3b82f6" />
            <path d="M10 75 L110 75" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M45 75 L30 90" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M75 75 L90 90" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M60 75 L60 90" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 p-12 relative">
      {DRIVER_DATA.map((driver) => {
        const { id, number, title, description, iconName, dividerColor } = driver;
        const dividerStyle = dividerColor === "gold" ? "bg-amber-500" : "bg-[#0b1b4f]";

        return (
          <div
            key={id}
            onClick={() => handleCardClick(driver)}
            className="group relative bg-[#fdfefe] rounded-2xl shadow-[0_8px_30px_-10px_rgba(11,27,79,0.04)] hover:shadow-[0_20px_45px_1px_rgba(11,27,79,0.09)] border border-slate-100 p-8 transition-all duration-350 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden min-h-[300px]"
          >
            {/* Top Right large faded numbering watermark */}
            <span className="absolute top-4 right-8 font-display font-black text-6xl text-slate-100/70 group-hover:text-slate-200/90 transition-colors select-none">
              {number}
            </span>

            {/* Floating custom badge widget top left */}
            <div className="relative w-16 h-16 flex items-center justify-center mb-6">
              {/* Slowly spinning dotted outer circle */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-400 opacity-40 animate-dotted-spin" />
              
              {/* High-fidelity Floating Circle Blue Dot (10 o'clock marker) */}
              <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-blue-600 rounded-full border border-white shadow-sm" />

              {/* Solid inner core circle */}
              <div className="w-12 h-12 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center transition-colors group-hover:bg-blue-100/70 shadow-sm z-10">
                {renderIcon(iconName, "w-[22px] h-[22px] text-blue-800")}
              </div>
            </div>

            {/* Title of Card with Left Underline */}
            <div className="mb-4">
              <h3 className="font-display font-extrabold text-[#0b1b4f] text-[19px] tracking-tight group-hover:text-blue-900 transition-colors">
                {title}
              </h3>
              {/* Thick dynamic segment underline with alternating colors */}
              <div className={`w-8 h-[2.5px] ${dividerStyle} mt-2.5 transition-all duration-300 group-hover:w-16`} />
            </div>

            {/* Core Content */}
            <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
              {description}
            </p>

            {/* Faded background watermark illustrative sketch */}
            {renderWatermarkSVG(id)}

            {/* Interactive visual prompt on hover */}
            {/* <div className="flex items-center gap-1.5 text-[#0b1b4f] font-semibold text-xs mt-auto opacity-80 group-hover:opacity-100 font-display transition-all">
              <span>Explore details</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
