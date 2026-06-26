import React, { useState, useEffect } from "react";
import { featuresData } from "../data/landingData";
import Icon from "./Icon";

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Verification listener for viewport resize state tracking
  useEffect(() => {
    const handleResize = () => {
      console.log(`[Viewport Resize] Active Feature Context preserved at index: ${activeIndex}`);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  // Helper to render responsive animated visualizations inside the desktop bento cards
  const renderCardVisual = (id) => {
    const isActive = activeIndex === id;
    
    switch (id) {
      case 0:
        return (
          <div className="mt-4 rounded-xl bg-[#172B36]/75 p-4 border border-[#D9E8E2]/5 font-mono text-[10px] shadow-inner transition-all duration-300">
            <div className="flex items-center gap-1.5 text-[#FFC801]">
              <span className="animate-pulse h-1.5 w-1.5 rounded-full bg-[#FFC801]"></span>
              [AGENT_NODE_RUNNING]
            </div>
            <div className="mt-2 text-[#D9E8E2]/85">&gt; THOUGHT: parsing raw ingest streams...</div>
            <div className="text-[#FF9932]">&gt; ACTION: querySyncDatabase(&#123; tier: "enterprise" &#125;)</div>
            <div className={`transition-opacity duration-300 text-[#D9E8E2]/40 ${isActive ? "opacity-100" : "opacity-0"}`}>
              &gt; STATUS: OK (200 OK, latency: 12ms)
            </div>
          </div>
        );
      case 1:
        return (
          <div className="mt-4 flex items-center justify-around rounded-xl bg-[#172B36]/75 p-4 border border-[#D9E8E2]/5 h-20 shadow-inner">
            <div className="flex flex-col items-center">
              <span className="rounded bg-[#FF9932]/10 px-2 py-0.5 text-[#FF9932] text-[9px] font-mono border border-[#FF9932]/20">DB_SYNC</span>
              <div className={`h-4 w-[1px] bg-gradient-to-b from-[#FF9932] to-transparent mt-1 ${isActive ? "animate-pulse" : ""}`}></div>
            </div>
            <span className={`text-[10px] font-mono text-[#D9E8E2]/30 transition-all duration-300 ${isActive ? "text-[#FFC801] translate-x-1" : ""}`}>&gt;&gt;</span>
            <div className="flex flex-col items-center">
              <span className="rounded bg-[#FFC801]/10 px-2 py-0.5 text-[#FFC801] text-[9px] font-mono border border-[#FFC801]/20">AI_ROUTING</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-4 flex flex-col justify-center rounded-xl bg-[#172B36]/75 p-4 border border-[#D9E8E2]/5 h-20 shadow-inner font-mono text-[9px] text-[#D9E8E2]/50">
            <div className="flex justify-between items-center">
              <span>ENCLAVE_VAULT_9</span>
              <span className={`h-2 w-2 rounded-full ${isActive ? "bg-[#FFC801] animate-pulse" : "bg-[#D9E8E2]/20"}`}></span>
            </div>
            <div className="mt-2 text-xs font-bold text-[#F1F6F4] tracking-widest text-center truncate bg-[#114C5A]/40 py-1.5 rounded border border-[#D9E8E2]/5">
              AES_256_GCM_SECURE
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mt-4 flex items-end gap-2 justify-center rounded-xl bg-[#172B36]/75 p-4 border border-[#D9E8E2]/5 h-28 shadow-inner">
            <div className="w-4 bg-[#FFC801]/80 rounded-t transition-all duration-500 ease-out" style={{ height: isActive ? "80%" : "30%" }}></div>
            <div className="w-4 bg-[#FF9932]/80 rounded-t transition-all duration-500 ease-out" style={{ height: isActive ? "60%" : "20%" }}></div>
            <div className="w-4 bg-[#D9E8E2]/80 rounded-t transition-all duration-500 ease-out" style={{ height: isActive ? "95%" : "40%" }}></div>
            <div className="w-4 bg-[#114C5A] rounded-t border border-[#D9E8E2]/20 transition-all duration-500 ease-out" style={{ height: isActive ? "50%" : "15%" }}></div>
          </div>
        );
      case 4:
        return (
          <div className="mt-4 rounded-xl bg-[#172B36]/75 p-4 border border-[#D9E8E2]/5 font-mono text-[9px] text-[#D9E8E2]/70 h-24 overflow-hidden shadow-inner">
            <span className="text-[#FF9932] font-semibold">import</span> &#123; NeuroFlow &#125; <span className="text-[#FF9932] font-semibold">from</span> <span className="text-[#D9E8E2]/50">"@neuroflow/sdk"</span>;
            <div className="mt-1">
              <span className="text-[#FFC801]">const</span> client = <span className="text-[#FF9932]">new</span> NeuroFlow(&#123; token &#125;);
            </div>
            <div className={`mt-1 text-[#FFC801]/60 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-30"}`}>
              await client.agent("main").run();
            </div>
          </div>
        );
      case 5:
        return (
          <div className="mt-4 flex flex-col justify-center rounded-xl bg-[#172B36]/75 p-4 border border-[#D9E8E2]/5 h-20 shadow-inner font-mono text-[9px]">
            <div className="flex justify-between">
              <span className="text-[#D9E8E2]/60">CONCURRENT_WORKERS</span>
              <span className="text-[#FFC801] font-bold">14,280/sec</span>
            </div>
            <div className="mt-2.5 w-full bg-[#114C5A]/40 h-2.5 rounded-full overflow-hidden border border-[#D9E8E2]/5">
              <div 
                className="bg-[#FF9932] h-full rounded-full transition-all duration-700 ease-out" 
                style={{ width: isActive ? "88%" : "20%" }}
              ></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full mint-glow pointer-events-none opacity-20"></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center">
          {/* Section title in JetBrains Mono */}
          <h2 className="font-mono text-3xl font-extrabold tracking-tight text-[#F1F6F4] sm:text-5xl">
            Bento Grid Infrastructure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-[#D9E8E2]/70 sm:text-base">
            Hover over cards on desktop or touch accordion items on mobile to inspect each automation pipeline node.
          </p>
        </div>

        {/* --- DESKTOP VIEWPORT: BENTO GRID --- */}
        <div className="hidden mt-16 grid-cols-1 gap-6 md:grid md:grid-cols-3 md:grid-rows-3 auto-rows-[250px]">
          {featuresData.map((feature) => {
            const isActive = activeIndex === feature.id;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(feature.id)}
                className={`group flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 ease-out cursor-pointer relative overflow-hidden ${feature.bentoClass} ${
                  isActive
                    ? "border-[#FFC801] shadow-[0_15px_40px_rgba(0,0,0,0.4)] bg-[#114C5A]/25"
                    : "border-[#D9E8E2]/8 hover:border-[#FF9932]/35 bg-[#114C5A]/5"
                }`}
              >
                {/* Visual Glow background on active card */}
                {isActive && (
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFC801]/5 blur-2xl pointer-events-none"></div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <div className={`rounded-xl p-2.5 transition-all duration-200 ${
                      isActive ? "bg-[#FFC801] text-[#172B36]" : "bg-[#114C5A]/60 text-[#D9E8E2]/70"
                    }`}>
                      <Icon name={feature.icon} className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#D9E8E2]/40 font-bold">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-mono text-base font-bold text-[#F1F6F4]">
                    {feature.title}
                  </h3>
                  
                  <p className="mt-2.5 font-sans text-xs text-[#D9E8E2]/65 leading-relaxed">
                    {feature.shortDesc}
                  </p>
                </div>

                {/* Simulation block inside active card */}
                {renderCardVisual(feature.id)}

                {/* Footer metrics and state tracker */}
                <div className={`mt-2 border-t border-[#D9E8E2]/5 pt-3.5 flex items-center justify-between text-[11px] transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-30"
                }`}>
                  <span className="font-mono text-[#FF9932] font-extrabold">{feature.metrics}</span>
                  <span className="font-sans text-[#D9E8E2]/40 group-hover:text-[#FFC801] flex items-center gap-1 transition-colors duration-150 font-bold uppercase tracking-wider text-[9px]">
                    ACTIVE NODE <Icon name="chevron-right" className="h-2.5 w-2.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE VIEWPORT: ACCORDION LIST --- */}
        <div className="mt-12 flex flex-col gap-4 md:hidden">
          {featuresData.map((feature) => {
            const isOpen = activeIndex === feature.id;
            return (
              <div
                key={feature.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#FFC801] bg-[#114C5A]/25 shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
                    : "border-[#D9E8E2]/8 bg-[#114C5A]/5"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  className="flex w-full items-center justify-between p-5.5 text-left"
                  onClick={() => setActiveIndex(isOpen ? null : feature.id)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${feature.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`rounded-xl p-2.5 transition-colors duration-200 ${
                      isOpen ? "bg-[#FFC801] text-[#172B36]" : "bg-[#114C5A]/50 text-[#D9E8E2]/80"
                    }`}>
                      <Icon name={feature.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-bold text-[#F1F6F4]">
                        {feature.title}
                      </h3>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-[#D9E8E2]/40 font-bold">
                        {feature.badge}
                      </span>
                    </div>
                  </div>
                  <Icon
                    name="chevron-down"
                    className={`h-5 w-5 text-[#D9E8E2]/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#FFC801]" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content with smooth height transition */}
                <div
                  id={`accordion-panel-${feature.id}`}
                  className="accordion-content transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr"
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5.5 pb-5.5 pt-1 border-t border-[#D9E8E2]/5 text-xs">
                      <p className="font-sans text-[#D9E8E2]/80 leading-relaxed">
                        {feature.longDesc}
                      </p>
                      
                      {/* Mobile simulation visualization */}
                      <div className="mt-4">
                        {renderCardVisual(feature.id)}
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-[#D9E8E2]/5 pt-4 text-[10px]">
                        <span className="font-mono text-[#FF9932] font-bold">
                          {feature.metrics}
                        </span>
                        <span className="font-mono text-[#FFC801] bg-[#FFC801]/10 px-2.5 py-1 rounded-md font-bold uppercase tracking-widest text-[8px]">
                          Node Configured
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;
