import React from "react";
import {
  LuSparkles as Sparkles,
  LuClock as Clock,
  LuZap as Zap,
  LuAward as Award,
} from "react-icons/lu";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#031430] via-[#052354] to-slate-900 border-b border-[#c5a85c]/20 md:py-4 lg:py-8 px-4">
      {/* Background accents */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#c5a85c]/5 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none"></div>
      <div className="absolute left-10 top-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Main hero copy */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left fade-in">
          <h2
            className="text-2xl md:text-4xl font-serif text-white leading-tight font-extrabold"
            id="hero-title"
          >
            Premium Residential
            <br />
            <span className="text-transparent font-bold text-2xl md:text-4xl font-serif bg-clip-text bg-gradient-to-r from-[#f3e9cb] via-[#c5a85c] to-yellow-600">
              Plots for Sale
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-200 font-light tracking-wide max-w-xl">
            In Doddaballapur, North Bangalore
          </p>

          {/* Badge band */}
          <div className="p-1 rounded-sm bg-gradient-to-r from-[#c5a85c]/50 via-[#f3e9cb]/40 to-[#c5a85c]/50 max-w-xl shadow-xl overflow-hidden">
            <div
              className="bg-white/95 px-6 py-3.5 text-center flex flex-wrap gap-x-6 gap-y-2 items-center justify-center font-serif text-base font-bold text-[#5c131a] rounded-[1px]"
              id="badge-advert-bar"
            >
              <span>Gated Community</span>
              <span className="text-[#c5a85c]/80">•</span>
              <span>A Khata Plots</span>
              <span className="text-[#c5a85c]/80">•</span>
              <span>North Bangalore</span>
            </div>
          </div>

          {/* Feature pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl pt-2">
            {[
              "✓ 4 Easy Instalments",
              "✓ High Appreciation",
              "✓ Modern Amenities",
              "✓ Excellent Connectivity",
            ].map((value) => (
              <div
                key={value}
                className="bg-[#052354]/60 border border-slate-700/60 rounded-full px-4 py-2 text-xs text-center text-slate-200 font-medium tracking-wide shadow-sm"
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        {/* Right promo card */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="relative w-full max-w-md bg-[#052354]/90 border border-[#c5a85c]/30 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden backdrop-blur"
            id="promo-card"
          >
            {/* Golden bookings ribbon */}
            <div className="absolute top-0 right-6 w-32 bg-gradient-to-b from-[#fceabb] via-[#fccd4d] to-[#b78628] rounded-b-xl px-2 py-4 shadow-xl border-x border-b border-[#fceabb]/40 text-center flex flex-col items-center">
              <Clock className="w-5 h-5 text-[#031430] mb-1" />
              <span className="text-[10px] tracking-wider uppercase font-extrabold text-[#052354]">
                BOOKINGS
              </span>
              <span className="text-lg font-serif font-extrabold text-[#052354] tracking-wide">
                OPEN
              </span>
              <div className="flex space-x-1 mt-1">
                <span className="text-[8px] text-[#052354]">★</span>
                <span className="text-[8px] text-[#052354]">★</span>
                <span className="text-[8px] text-[#052354]">★</span>
              </div>
            </div>

            {/* Promo content */}
            <div className="pr-40 flex flex-col space-y-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#c5a85c]">
                Premium Plots
              </h3>

              <p className="text-slate-300 text-xs">
                By Defence Habitat Housing Co-operative Society Ltd. Secured
                and fully cleared real estate units.
              </p>

              {/* Three promotional points */}
              <div className="flex flex-col space-y-3.5 pt-2">
                {[
                  { icon: Sparkles, text: "Pre-Launch Bookings Open" },
                  { icon: Zap, text: "4 Easy Instalments" },
                  { icon: Award, text: "Excellent Connectivity" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center space-x-3">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#c5a85c]/10 border border-[#c5a85c]/30 flex items-center justify-center text-[#c5a85c]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-700/60 my-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}