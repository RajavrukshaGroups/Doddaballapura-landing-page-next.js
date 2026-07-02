// import React from "react";
// import DoddaballapurPageBannerImg from "../../images/Doddaballapur-page-banner-img.jpeg"

// import LogoImg from "../../images/logo.png"


// const HeroSection = () => {
//   return (
//     <div
//       className="relative w-full sm:min-h-[420px] md:min-h-[400px] flex items-center justify-center text-center overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, #1a3a6c 0%, #24457b 50%, #1a3a6c 100%)",
//         // backgroundImage: `url(${DoddaballapurPageBannerImg})`,
//         // backgroundSize: "cover",
//         // backgroundPosition: "center",
        
//       }}
//     >
//       {/* Decorative background circles */}
//       <div className="absolute sm:top-[-40px] sm:right-[-40px] md:top-[-60px] md:right-[-60px] w-72 h-72 rounded-full opacity-10 bg-white" />
//       <div className="absolute sm:bottom-[-60px] sm:left-[-60px] md:bottom-[-80px] md:left-[-80px] w-96 h-96 rounded-full opacity-10 bg-white" />
      
//       <img src={LogoImg} className="hidden md:block absolute flex justify-end top-5 left-5 w-32 h-auto z-50"/>

//       <div className="relative z-10 sm:px-8 sm:py-20 md:px-12 md:py-24 px-6 py-16 max-w-4xl mx-auto">
//         {/* Eyebrow label */}
//         {/* <span className="inline-block bg-yellow-400 text-[#1a3a6c] text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-5">
//           Defence Housing Society
//         </span> */}

//         {/* Main headline */}
//         <h1 className="font-extrabold text-white leading-tight mb-4"
//           style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontFamily: "emoji", WebkitTextStroke: "0.6px #042965ff", }}>

//           Premium Residential Plots for Sale

//           <br />
//           <span className="text-white text-2xl font-bold" style={{ WebkitTextStroke: "0.7px #042965ff", }}>IN DODDABALLAPUR</span>
//         </h1>

//         {/* Sub-headline */}
//         <p className="text-[#5f0808ff] bg-[#fdfafae9] border-2 border-[#00000080] font-bold  text-lg md:text-2xl mb-8 max-w-2xl mx-auto" style={{WebkitTextStroke: "0px #e3e3e3ff", fontFamily: "emoji", }}>
//           Gated Community · A Khata Plots · North Bangalore
//         </p>
//  {/* <div className="p-1 rounded-sm bg-gradient-to-r from-[#c5a85c]/50 via-[#c5a85c]-light/40 to-[#c5a85c]/50 max-w-xl shadow-xl overflow-hidden">
//             <div className="bg-white/95 px-6 py-3.5 text-center flex flex-wrap gap-x-6 gap-y-2 items-center justify-center font-serif text-base font-bold text-[#5c131a] rounded-[1px]" id="badge-advert-bar">
//               <span>Gated Community</span>
//               <span className="text-[#c5a85c]/80">•</span>
//               <span>A Khata Plots</span>
//               <span className="text-[#c5a85c]/80">•</span>
//               <span>North Bangalore</span>
//             </div>
//           </div> */}

//         {/* Key badges */}
//         <div className="flex flex-wrap justify-center gap-3 relative -bottom-6">
//           {[
//             "Legally Approved",
//             "High Appreciation",
//             "Modern Amenities",
//             "Excellent Connectivity",
//           ].map((badge) => (
//             <span
//               key={badge}
//               className="bg-blue-950 border border-white/30 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm"
//             >
//               ✓ {badge}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import { Sparkles, Clock, Zap, Award, CheckCircle } from "lucide-react";

/**
 * DHS Doddaballapur Hero Section
 * 
 * Required Hero Section Color Codes Specification:
 * - Primary Dark Blue (DHS Blue): #031430
 * - Highlight Navy Blue (DHS Navy): #052354
 * - Premium Dull Gold (DHS Gold): #c5a85c
 * - Soft Premium Creams Accent (DHS Gold Light): #f3e9cb
 * - Deep Co-operative Red text: #5c131a
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#031430] via-[#052354] to-slate-900 border-b border-[#c5a85c]/20 md:py-4 lg:py-8 px-4">
      {/* Abstract design vector spheres matching high class aesthetic (Base Gold: #c5a85c) */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#c5a85c]/5 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none"></div>
      <div className="absolute left-10 top-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Main Hero Copy - Elegant display serif typography */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left fade-in">
          

          <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight font-extrabold" id="hero-title">
            Premium Residential 
            <br/>
            <span className="text-transparent font-bold text-2xl md:text-4xl font-serif bg-clip-text bg-gradient-to-r from-[#f3e9cb] via-[#c5a85c] to-yellow-600">
              Plots for Sale
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-200 font-light tracking-wide max-w-xl">
            In Doddaballapur, North Bangalore
          </p>

          {/* Custom Badge Band matching the advertisement layout */}
          <div className="p-1 rounded-sm bg-gradient-to-r from-[#c5a85c]/50 via-[#f3e9cb]/40 to-[#c5a85c]/50 max-w-xl shadow-xl overflow-hidden">
            <div className="bg-white/95 px-6 py-3.5 text-center flex flex-wrap gap-x-6 gap-y-2 items-center justify-center font-serif text-base font-bold text-[#5c131a] rounded-[1px]" id="badge-advert-bar">
              <span>Gated Community</span>
              <span className="text-[#c5a85c]/80">•</span>
              <span>A Khata Plots</span>
              <span className="text-[#c5a85c]/80">•</span>
              <span>North Bangalore</span>
            </div>
          </div>

          {/* Four circular horizontal features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl pt-2">
            {[
              "✓ 4 Easy instalments",
              "✓ High Appreciation",
              "✓ Modern Amenities",
              "✓ Excellent Connectivity"
            ].map((val, idx) => (
              <div 
                key={idx} 
                className="bg-[#052354]/60 border border-slate-700/60 rounded-full px-4 py-2 text-xs text-center text-slate-200 font-medium tracking-wide shadow-sm"
              >
                {val}
              </div>
            ))}
          </div>

         
        </div>

        {/* Right Ribbon Golden Bookings Block */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md bg-[#052354]/90 border border-[#c5a85c]/30 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden backdrop-blur" id="promo-card">
            
            {/* Premium Golden hanging label bookmark */}
            <div className="absolute top-0 right-6 w-32 bg-gradient-to-b from-[#fceabb] via-[#fccd4d] to-[#b78628] rounded-b-xl px-2 py-4 shadow-xl border-x border-b border-[#fceabb]/40 text-center flex flex-col items-center">
              <Clock className="w-5 h-5 text-[#031430] mb-1" />
              <span className="text-[10px] tracking-wider uppercase font-extrabold text-[#052354]">BOOKINGS</span>
              <span className="text-lg font-serif font-extrabold text-[#052354] tracking-wide line-height-none">OPEN</span>
              <div className="flex space-x-1 mt-1">
                <span className="text-[8px] text-[#052354]">★</span>
                <span className="text-[8px] text-[#052354]">★</span>
                <span className="text-[8px] text-[#052354]">★</span>
              </div>
            </div>

            {/* Promo Context */}
            <div className="pr-40 flex flex-col space-y-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#c5a85c]">
                Premium Plots
              </h3>
              <p className="text-slate-300 text-xs">
                By Defence Habitat Housing Co-operative Society Ltd. Secured and fully cleared real estate units.
              </p>
              
              <div className="flex flex-col space-y-3.5 pt-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/10 border border-[#c5a85c]/30 flex items-center justify-center text-[#c5a85c]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">Limited Units Remaining</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/10 border border-[#c5a85c]/30 flex items-center justify-center text-[#c5a85c]">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">A Khata Fully Certified</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/10 border border-[#c5a85c]/30 flex items-center justify-center text-[#c5a85c]">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">Ready for Immediate Registration</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700/60 my-6"></div>

            {/* Fast pricing estimator */}
            
          </div>
        </div>
      </div>
    </section>
  );
}
