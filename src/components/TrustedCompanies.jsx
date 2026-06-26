import React from "react";
import { trustedCompanies } from "../data/landingData";

export const TrustedCompanies = () => {
  return (
    <section className="w-full border-y border-[#D9E8E2]/5 bg-[#172B36] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-sans text-[10px] font-bold uppercase tracking-widest text-[#D9E8E2]/40">
          Trusted by Platform & Infrastructure Leads Globally
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {trustedCompanies.map((company, index) => (
            <div
              key={index}
              className="group flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest text-[#D9E8E2]/35 transition-colors duration-150 hover:text-[#FFC801]"
            >
              <span className="text-[10px] text-[#FF9932] opacity-0 transition-all duration-150 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 mr-1">&lt;</span>
              {company.logoText}
              <span className="text-[10px] text-[#FF9932] opacity-0 transition-all duration-150 translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 ml-1">/&gt;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedCompanies;
