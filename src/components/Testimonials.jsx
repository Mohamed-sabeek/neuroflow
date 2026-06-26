import React from "react";
import { testimonials } from "../data/landingData";


export const Testimonials = () => {
  return (
    <section className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      {/* Background grids and lights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-[20%] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full forsythia-glow pointer-events-none opacity-[0.06] filter blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC801]/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-[#FFC801]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801] animate-pulse"></span>
            Trusted by Enterprise Teams
          </span>
          <h2 className="mt-4 font-mono text-3xl font-extrabold tracking-tight text-[#F1F6F4] sm:text-5xl">
            Developer Consensus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-[#D9E8E2]/70 sm:text-base">
            See how lead data engineering architects deploy, monitor, and scale automated AI database routines.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] text-[#FF9932] font-semibold">
            <span>★★★★★</span>
            <span className="text-[#D9E8E2]/50">Trusted by 2,000+ Engineering Teams</span>
          </div>
          <div className="mt-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D9E8E2]/15 to-transparent mx-auto"></div>
        </div>

        {/* Monochrome Trust Logos Row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-y-6 gap-x-14 border-b border-[#D9E8E2]/6 pb-12">
          {["APEX AUTOMATION", "SYNTHFLOW AI", "GLOBALDATA GROUP", "VECTOR CLOUD", "NEXUS SYSTEMS"].map((logo, i) => (
            <span 
              key={i} 
              className="font-mono text-[10px] font-black tracking-widest text-[#D9E8E2]/30 hover:text-[#D9E8E2]/85 transition-colors duration-150 cursor-default uppercase"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl border border-[#D9E8E2]/8 bg-gradient-to-br from-[#114C5A]/5 to-[#172B36]/90 p-8 transition-all duration-200 ease-out hover:border-[#FFC801]/30 hover:translate-y-[-8px] hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)] relative overflow-hidden"
            >
              {/* Giant decorative SVG quote in background */}
              <div className="absolute right-6 top-6 text-[#D9E8E2] opacity-[0.03] group-hover:opacity-[0.06] pointer-events-none z-0 transition-opacity duration-200">
                <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>


              <div>
                {/* 5-Star Rating */}
                <div className="text-[#FFC801] font-mono text-xs tracking-wider mb-4 transition-transform duration-200 group-hover:scale-105 origin-left">
                  ★★★★★
                </div>

                <p className="font-sans text-sm italic leading-relaxed text-[#D9E8E2]/85 relative z-10">
                  "{t.quote}"
                </p>

                {/* Verification badge */}
                <div className="mt-4 flex items-center gap-1.5 text-[9px] font-mono text-[#D9E8E2]/85 font-bold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801] animate-heartbeat"></span>
                  {index === 2 ? "✔ Verified Enterprise Customer" : "✔ Verified Production Deployment"}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-5 border-t border-[#D9E8E2]/5 pt-6 relative z-10">
                {/* Measurable Success Metric Pill */}
                <div className="self-start rounded-lg bg-[#114C5A]/30 border border-[#D9E8E2]/10 px-3 py-1.5 font-mono text-[9px] font-extrabold text-[#FFC801] transition-all duration-200 group-hover:border-[#FFC801]/40 group-hover:bg-[#114C5A]/50">
                  {index === 0 && "92% Faster Automation"}
                  {index === 1 && "-80% Infrastructure Cost"}
                  {index === 2 && "99.99% Uptime"}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Initials Avatar in Forsythia with Online Heartbeat LED */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC801] font-mono text-xs font-black text-[#172B36] shadow-[0_0_15px_rgba(255,200,1,0.2)] group-hover:shadow-[0_0_20px_rgba(255,200,1,0.4)] transition-all duration-200">
                    <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#FFC801] border-2 border-[#172B36] animate-pulse"></span>
                    {t.initials}
                  </div>

                  {/* Writer details */}
                  <div className="text-left font-mono">
                    <div className="text-xs font-bold text-[#F1F6F4]">
                      {t.author}
                    </div>
                    <div className="font-sans text-[9px] text-[#D9E8E2]/40 font-bold uppercase tracking-wider mt-0.5">
                      {t.role}, <span className="text-[#FF9932] group-hover:text-[#FFC801] transition-colors duration-150">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
