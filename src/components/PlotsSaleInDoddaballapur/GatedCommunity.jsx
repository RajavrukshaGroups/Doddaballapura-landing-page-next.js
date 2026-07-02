import React from "react";
import {
  FaShieldAlt,
  FaRoad,
  FaWater,
  FaLightbulb,
  FaTree,
  FaHome,
  FaStreetView,
  FaChartLine,
} from "react-icons/fa";

const GatedCommunity = () => (
  <>
  <section className="py-12 px-4 md:px-8 lg:px-12 bg-[#fafbfe]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#24457b] text-center mb-10">
        Gated Community Plots for Sale in North Bangalore
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 lg:px-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <FaShieldAlt className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 text-[15px] font-medium">24/7 security surveillance with CCTV monitoring.</span>
          </div>
          <div className="flex items-center gap-4">
            <FaRoad className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 text-[15px] font-medium">Wide, well-laid internal roads for smooth movement.</span>
          </div>
          <div className="flex items-center gap-4">
            <FaWater className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 text-[15px] font-medium">Underground drainage and water supply networks.</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLightbulb className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 text-[15px] font-medium">Street lighting throughout the layout.</span>
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <FaTree className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 text-[15px] font-medium">Landscaped parks and tree plantation zones.</span>
          </div>
          <div className="flex items-center gap-4">
            <FaHome className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 text-[15px] font-medium">Clubhouse and recreational facilities for residents.</span>
          </div>
          <div className="flex items-center gap-4">
            <FaStreetView className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 text-[15px] font-medium">Walking tracks, play areas, and open community spaces.</span>
          </div>
          <div className="flex items-center gap-4">
            <FaChartLine className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 text-[15px] font-medium">Organised layouts for long-term value appreciation.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section className="py-16 px-4 bg-gradient-to-br from-[#f8f9fa] to-[#f0f2f5]">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <span className="bg-[#24457b]/10 text-[#24457b] text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
          Why Gated Communities?
        </span>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
        Live Securely. Live Better.
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-[#24457b] to-[#3a66b0] rounded-full mx-auto mb-6"></div>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        The concept of gated community living has become increasingly popular among modern homebuyers. 
        Safety, organized infrastructure, and premium amenities are some of the major reasons why buyers 
        prefer gated developments.
      </p>
    </div>

    

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
      
      {/* Card 1 - Enhanced Security */}
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-900"></div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Enhanced Security</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">Gated communities provide:</p>
          <div className="space-y-2 mb-4">
            {['24/7 security surveillance', 'CCTV monitoring', 'Secure environment for families'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg p-3 mt-2">
            <p className="text-blue-700 text-sm font-medium">
              🛡️ Security is the #1 concern for homebuyers today
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 - Modern Infrastructure */}
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-green-800 to-green-900"></div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Modern Infrastructure</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">Premium communities are designed with:</p>
          <div className="space-y-2 mb-4">
            {['Wide internal roads & drainage systems', 'Water supply & street lighting', 'Landscaped parks & clubhouse'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-lg p-3 mt-2">
            <p className="text-green-700 text-sm font-medium">
              🏗️ Enhance living experience & property value
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 - Better Community Living */}
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-red-800 to-red-900"></div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Better Community Living</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Gated layouts foster a sense of community and provide a family-friendly environment. 
            Residents can enjoy parks, walking tracks, play areas, and open spaces within the community.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {['👨‍👩‍👧‍👦 Family-friendly', '🌳 Green spaces', '🏃 Walking tracks', '🎮 Play areas'].map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Card 4 - Long-Term Appreciation */}
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-purple-800 to-purple-900"></div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Long-Term Appreciation</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Properties located in organized gated communities generally experience higher appreciation 
            compared to unplanned developments.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 mt-2">
            <p className="text-purple-700 text-sm font-medium text-center">
              📈 Buyers pay premium prices for well-maintained layouts with legal approvals
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Comparison Section */}
   

    {/* CTA Banner */}
    
  </div>
</section>
  </>
);

export default GatedCommunity;
