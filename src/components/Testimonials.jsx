import React from "react";
import { testimonials } from "../data/landingData";

export const Testimonials = () => {
  return (
    <section className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-mono text-3xl font-extrabold tracking-tight text-[#F1F6F4] sm:text-5xl">
            Developer Consensus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-[#D9E8E2]/70 sm:text-base">
            See how lead data engineering architects deploy, monitor, and scale automated AI database routines.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-[#D9E8E2]/8 bg-[#114C5A]/5 p-8 transition-all duration-300 hover:border-[#D9E8E2]/25 hover:translate-y-[-3px] relative overflow-hidden"
            >
              {/* Giant decorative SVG quote in background */}
              <div className="absolute right-4 top-4 text-[#D9E8E2]/3 pointer-events-none">
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="font-sans text-sm italic leading-relaxed text-[#D9E8E2]/85 relative z-10">
                "{t.quote}"
              </p>

              <div className="mt-8 flex items-center gap-4 relative z-10 border-t border-[#D9E8E2]/5 pt-6">
                {/* Initials Avatar in Forsythia */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFC801] font-mono text-sm font-bold text-[#172B36] shadow-sm">
                  {t.initials}
                </div>

                {/* Writer Information */}
                <div>
                  <div className="font-mono text-xs font-bold text-[#F1F6F4]">
                    {t.author}
                  </div>
                  <div className="font-sans text-[10px] text-[#D9E8E2]/40 font-bold uppercase tracking-wider mt-0.5">
                    {t.role}, <span className="text-[#FF9932]">{t.company}</span>
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
