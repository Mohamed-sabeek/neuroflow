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
          <div className="mt-4 rounded-xl bg-[#172B36]/80 p-4 border border-[#D9E8E2]/8 font-mono text-[10px] shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between text-[#FFC801] font-bold">
              <span className="flex items-center gap-1.5">
                <span className="animate-ping h-1.5 w-1.5 rounded-full bg-[#FFC801]"></span>
                <span className="h-1.5 w-1.5 absolute rounded-full bg-[#FFC801]"></span>
                AGENT_CORE_RUNNING
              </span>
              <span className="text-[#D9E8E2]/30">v1.2.0</span>
            </div>
            <div className="mt-2 text-[#D9E8E2]/80 space-y-1">
              <div className="truncate">&gt; [LOG] init_agent_thought_loop()</div>
              <div className="text-[#FF9932] truncate">&gt; [DECISION] tool_call: db_route(...)</div>
              <div className="text-[#D9E8E2]/40 truncate">&gt; [STATUS] latency: 14ms | tokens: 280</div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#172B36]/80 p-4 border border-[#D9E8E2]/8 h-20 shadow-inner">
            <div className="flex flex-col items-center gap-1">
              <span className="rounded bg-[#FF9932]/10 px-2 py-0.5 text-[#FF9932] text-[8px] font-mono border border-[#FF9932]/20">SOURCE</span>
              <span className="text-[9px] font-mono text-[#D9E8E2]/40">JSON_API</span>
            </div>
            <div className="flex-1 px-4 relative flex items-center justify-center">
              <svg className="w-full h-4 overflow-visible" viewBox="0 0 100 20">
                <path d="M 0 10 L 100 10" fill="none" stroke="rgba(217, 232, 226, 0.1)" strokeWidth="2" />
                <path d="M 0 10 L 100 10" fill="none" stroke="#FFC801" strokeWidth="2" className="animate-dash" strokeDasharray="10 10" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="rounded bg-[#FFC801]/10 px-2 py-0.5 text-[#FFC801] text-[8px] font-mono border border-[#FFC801]/20">ACTION</span>
              <span className="text-[9px] font-mono text-[#D9E8E2]/40">DISPATCH</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-4 flex items-center gap-4 rounded-xl bg-[#172B36]/80 p-4 border border-[#D9E8E2]/8 h-20 shadow-inner font-mono text-[9px] text-[#D9E8E2]/50">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#114C5A]/50 border border-[#D9E8E2]/10 text-[#FFC801]">
              <Icon name="cube-16-solid" className="h-5 w-5 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9932] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9932]"></span>
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center text-left">
              <div className="text-[#F1F6F4] font-bold">AES_256_GCM</div>
              <div className="text-[8px] text-[#FFC801] mt-0.5">VAULT_LOCK_ACTIVE</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mt-4 rounded-xl bg-[#172B36]/80 p-4 border border-[#D9E8E2]/8 h-28 shadow-inner relative overflow-hidden flex flex-col justify-end">
            <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 160 80">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFC801" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FFC801" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d="M 0 70 Q 30 20, 60 50 T 120 15 T 160 45 L 160 80 L 0 80 Z" fill="url(#chartGrad)" />
              <path d="M 0 70 Q 30 20, 60 50 T 120 15 T 160 45" fill="none" stroke="#FFC801" strokeWidth="2" />
              <circle cx="120" cy="15" r="3" fill="#FF9932" className="animate-ping" />
              <circle cx="120" cy="15" r="3" fill="#FF9932" />
            </svg>
            <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-[#D9E8E2]/40 bg-[#172B36]/70 px-2 py-1 rounded border border-[#D9E8E2]/5">
              <span>METRIC: OPS/SEC</span>
              <span className="text-[#FFC801] font-bold">12,408/s</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="mt-4 rounded-xl bg-[#172B36]/80 p-4 border border-[#D9E8E2]/8 font-mono text-[9px] text-[#D9E8E2]/70 h-24 overflow-hidden shadow-inner flex flex-col justify-between">
            <div className="flex justify-between border-b border-[#D9E8E2]/5 pb-1">
              <span className="text-[#FFC801] font-bold">POST /v1/agents/run</span>
              <span className="text-[#D9E8E2]/30">HTTP/2</span>
            </div>
            <div className="space-y-0.5 text-[8px] text-[#D9E8E2]/60 mt-1">
              <div>&gt; Payload: &#123; "id": "agent_0" &#125;</div>
              <div className="text-[#FF9932]">&lt; Response: 200 OK (in 12ms)</div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="mt-4 flex flex-col justify-center rounded-xl bg-[#172B36]/80 p-4 border border-[#D9E8E2]/8 h-20 shadow-inner font-mono text-[9px]">
            <div className="flex justify-between items-center text-[8px] text-[#D9E8E2]/60">
              <span>CLUSTER_LOAD</span>
              <span className="text-[#FFC801] font-bold">88%</span>
            </div>
            <div className="mt-2 w-full bg-[#114C5A]/40 h-2.5 rounded-full overflow-hidden border border-[#D9E8E2]/5 relative">
              <div 
                className="bg-gradient-to-r from-[#FFC801] to-[#FF9932] h-full rounded-full transition-all duration-700 ease-out" 
                style={{ width: isActive ? "88%" : "20%" }}
              ></div>
            </div>
            <div className="mt-2 flex justify-between text-[8px] text-[#D9E8E2]/30">
              <span>CORES: 128/128</span>
              <span>LATENCY: 1.2ms</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      {/* OS Backplane details: subtle technical grid and glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full mint-glow pointer-events-none opacity-15 filter blur-[150px]"></div>
      
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
        <div className="hidden mt-16 grid-cols-1 gap-6 md:grid md:grid-cols-3 md:grid-rows-3 auto-rows-[270px]">
          {featuresData.map((feature) => {
            const isActive = activeIndex === feature.id;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(feature.id)}
                className={`group flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ease-out cursor-pointer relative overflow-hidden ${feature.bentoClass} ${
                  isActive
                    ? "border-[#FFC801] shadow-[0_20px_45px_rgba(255,200,1,0.12)] bg-[#114C5A]/25 translate-y-[-4px]"
                    : "border-[#D9E8E2]/8 hover:border-[#FF9932]/35 bg-[#114C5A]/5 hover:translate-y-[-4px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
                }`}
              >
                {/* OS Highlight top accent line */}
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFC801] to-[#FF9932] transition-all duration-300 group-hover:w-full"></span>

                {/* OS Window header buttons decoration */}
                <div className="flex items-center justify-between border-b border-[#D9E8E2]/5 pb-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801]/30"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9932]/30"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9E8E2]/30"></span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#D9E8E2]/30">sys_node_0{feature.id}</span>
                </div>

                {/* Card details */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`rounded-xl p-2 transition-all duration-300 ${
                      isActive ? "bg-[#FFC801] text-[#172B36]" : "bg-[#114C5A]/60 text-[#D9E8E2]/70"
                    }`}>
                      <Icon 
                        name={feature.icon} 
                        className={`h-4.5 w-4.5 transition-transform duration-300 ${
                          feature.icon === "cog-8-tooth" ? (isActive ? "rotate-90" : "group-hover:rotate-45") : (isActive ? "scale-110" : "group-hover:scale-110")
                        }`} 
                      />
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#FFC801] bg-[#FFC801]/10 px-2 py-0.5 rounded border border-[#FFC801]/25 font-bold">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 font-mono text-sm font-bold text-[#F1F6F4] group-hover:text-[#FFC801] transition-colors duration-150">
                    {feature.title}
                  </h3>
                  
                  <p className="mt-2 font-sans text-xs text-[#D9E8E2]/65 leading-relaxed">
                    {feature.shortDesc}
                  </p>
                </div>

                {/* Simulation block inside active card */}
                {renderCardVisual(feature.id)}

                {/* Footer metrics and state tracker */}
                <div className={`mt-2 border-t border-[#D9E8E2]/5 pt-3 flex items-center justify-between text-[10px] transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-30"
                }`}>
                  <span className="font-mono text-[#FF9932] font-extrabold">{feature.metrics}</span>
                  <span className="font-sans text-[#D9E8E2]/40 group-hover:text-[#FFC801] flex items-center gap-1 transition-colors duration-150 font-bold uppercase tracking-wider text-[8px]">
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
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={() => setActiveIndex(isOpen ? null : feature.id)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${feature.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`rounded-xl p-2 transition-colors duration-200 ${
                      isOpen ? "bg-[#FFC801] text-[#172B36]" : "bg-[#114C5A]/50 text-[#D9E8E2]/80"
                    }`}>
                      <Icon name={feature.icon} className="h-4.5 w-4.5" />
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
                    className={`h-4.5 w-4.5 text-[#D9E8E2]/50 transition-transform duration-300 ${
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
                    <div className="px-5 pb-5 pt-1 border-t border-[#D9E8E2]/5 text-xs">
                      {/* OS Header decoration on mobile too */}
                      <div className="flex items-center justify-between border-b border-[#D9E8E2]/5 pb-2 mb-3">
                        <div className="flex items-center gap-1">
                          <span className="h-1 w-1 rounded-full bg-[#FFC801]/30"></span>
                          <span className="h-1 w-1 rounded-full bg-[#FF9932]/30"></span>
                          <span className="h-1 w-1 rounded-full bg-[#D9E8E2]/30"></span>
                        </div>
                        <span className="font-mono text-[7px] text-[#D9E8E2]/30">SYS_ACCORDION_0{feature.id}</span>
                      </div>

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
