import React, { useState, useEffect } from "react";
import Icon from "./Icon";

// Custom high-performance count-up component using requestAnimationFrame
const CountUp = ({ end, decimals = 0, duration = 1.5, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(progress * end);
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[85svh] w-full overflow-hidden bg-[#172B36] px-6 pb-12 pt-10 md:pb-16 md:pt-14 flex flex-col justify-center">
      {/* Background Grid Pattern & Glowing spots */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none animate-grid-pulse"></div>
      
      {/* Soft radial glow spots in the background */}
      <div className="absolute -left-[10%] top-[10%] h-[550px] w-[550px] rounded-full forsythia-glow pointer-events-none opacity-[0.08] filter blur-[100px]"></div>
      <div className="absolute right-[5%] top-[15%] h-[600px] w-[600px] rounded-full mint-glow pointer-events-none opacity-[0.12] filter blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: Pitch, CTAs, Metrics, Logos (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Trust Badge */}
            <div className="inline-flex self-start items-center gap-2 rounded-full border border-[#D9E8E2]/15 bg-[#114C5A]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D9E8E2] animate-fade-in [animation-delay:50ms] [animation-fill-mode:backwards]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC801] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC801]"></span>
              </span>
              Enterprise Orchestration Engine
            </div>

            {/* Headline in JetBrains Mono with strengthened hierarchy */}
            <h1 className="mt-5 font-mono text-4xl font-extrabold tracking-tight text-[#F1F6F4] sm:text-5xl lg:text-6xl leading-[1.05] animate-fade-in-up [animation-delay:150ms] [animation-fill-mode:backwards]">
              Data Automation <br className="hidden sm:inline" />
              Without <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FFC801] to-[#FF9932]">
                Complexity
                <span className="absolute bottom-2 left-0 w-full h-[4px] bg-[#FF9932]/40 rounded-full"></span>
              </span>
            </h1>

            {/* Subtext in Inter */}
            <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-[#D9E8E2]/75 sm:text-base animate-fade-in-up [animation-delay:250ms] [animation-fill-mode:backwards]">
              Deploy self-orchestrating AI agents that ingest data streams, route events, and automate databases. High-performance containers secured at the root.
            </p>

            {/* CTAs with refined hover effects */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center animate-fade-in-up [animation-delay:350ms] [animation-fill-mode:backwards]">
              <a
                href="#pricing"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#FF9932] px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-[#172B36] transition-all duration-150 ease-out hover:bg-[#FFC801] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(255,153,50,0.35)]"
              >
                Deploy Node Free
                <Icon name="arrow-trending-up" className="h-4 w-4 shrink-0 text-[#172B36] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#features"
                className="relative flex items-center justify-center gap-2 rounded-xl border border-[#D9E8E2]/15 bg-[#172B36]/60 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#D9E8E2] transition-all duration-200 ease-out hover:bg-[#D9E8E2]/5 hover:border-[#FFC801]/40 hover:text-[#F1F6F4] group overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D9E8E2]/5 to-transparent -translate-x-full group-hover:animate-shine"></span>
                Explore Bento System
              </a>
            </div>

            {/* Premium Metrics Cards with hover elevation and count-ups */}
            <div className="mt-10 grid grid-cols-3 gap-4 animate-fade-in-up [animation-delay:450ms] [animation-fill-mode:backwards]">
              <div className="rounded-xl border border-[#D9E8E2]/8 bg-[#114C5A]/10 p-4 flex flex-col justify-between transition-all duration-300 hover:border-[#FFC801]/30 hover:translate-y-[-3px] hover:bg-[#114C5A]/15 group shadow-sm">
                <div className="font-mono text-xl font-extrabold text-[#FFC801] sm:text-2xl group-hover:text-[#FF9932] transition-colors duration-150">
                  <CountUp end={320} duration={1.8} prefix="<" suffix="ms" />
                </div>
                <div className="mt-1.5 font-sans text-[8px] font-bold uppercase tracking-widest text-[#D9E8E2]/40">Avg Execution</div>
              </div>
              <div className="rounded-xl border border-[#D9E8E2]/8 bg-[#114C5A]/10 p-4 flex flex-col justify-between transition-all duration-300 hover:border-[#FFC801]/30 hover:translate-y-[-3px] hover:bg-[#114C5A]/15 group shadow-sm">
                <div className="font-mono text-xl font-extrabold text-[#F1F6F4] sm:text-2xl group-hover:text-[#FFC801] transition-colors duration-150">
                  <CountUp end={99.9} decimals={1} duration={1.8} suffix="%" />
                </div>
                <div className="mt-1.5 font-sans text-[8px] font-bold uppercase tracking-widest text-[#D9E8E2]/40">Accuracy Rate</div>
              </div>
              <div className="rounded-xl border border-[#D9E8E2]/8 bg-[#114C5A]/10 p-4 flex flex-col justify-between transition-all duration-300 hover:border-[#FFC801]/30 hover:translate-y-[-3px] hover:bg-[#114C5A]/15 group shadow-sm">
                <div className="font-mono text-xl font-extrabold text-[#FF9932] sm:text-2xl group-hover:text-[#FFC801] transition-colors duration-150">
                  <CountUp end={100} duration={1.8} suffix="%" />
                </div>
                <div className="mt-1.5 font-sans text-[8px] font-bold uppercase tracking-widest text-[#D9E8E2]/40">Secure Enclaves</div>
              </div>
            </div>

            {/* Trust Partner Logos in Inter */}
            <div className="mt-8 flex items-center gap-4 flex-wrap opacity-40 hover:opacity-60 transition-opacity duration-200">
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#D9E8E2] mr-2">Core Partners:</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#F1F6F4]">ACME AI</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#F1F6F4]">SYNTHFLOW</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#F1F6F4]">GLOBAL DATA</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium AI Visualization Canvas (lg:col-span-5) */}
          <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[400px] lg:h-[460px] flex items-center justify-center animate-fade-in [animation-delay:300ms] [animation-fill-mode:backwards]">
            
            {/* Visual background deck with improved shadows and depth */}
            <div className="absolute inset-0 rounded-3xl border border-[#D9E8E2]/12 bg-[#114C5A]/8 backdrop-blur-[4px] shadow-[0_25px_60px_rgba(0,0,0,0.55)]"></div>

            {/* Flow visualization */}
            <svg className="w-[85%] h-[80%] relative z-10 overflow-visible" viewBox="0 0 320 300">
              <defs>
                <linearGradient id="saffronGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF9932" />
                  <stop offset="100%" stopColor="#FFC801" />
                </linearGradient>
                <linearGradient id="mintGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D9E8E2" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#114C5A" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Grid background lines */}
              <line x1="20" y1="0" x2="20" y2="300" stroke="rgba(217, 232, 226, 0.04)" />
              <line x1="160" y1="0" x2="160" y2="300" stroke="rgba(217, 232, 226, 0.04)" />
              <line x1="300" y1="0" x2="300" y2="300" stroke="rgba(217, 232, 226, 0.04)" />
              <line x1="0" y1="80" x2="320" y2="80" stroke="rgba(217, 232, 226, 0.04)" />
              <line x1="0" y1="220" x2="320" y2="220" stroke="rgba(217, 232, 226, 0.04)" />

              {/* Animated Connection Lines with faster, smoother CSS animations */}
              {/* Path 1: Top Ingest to Center Agent */}
              <path d="M 40 80 C 100 80, 100 150, 160 150" fill="none" stroke="rgba(217, 232, 226, 0.12)" strokeWidth="2" />
              <path d="M 40 80 C 100 80, 100 150, 160 150" fill="none" stroke="url(#saffronGlow)" strokeWidth="2.5" className="animate-dash" strokeDasharray="10 8" />

              {/* Path 2: Bottom Ingest to Center Agent */}
              <path d="M 40 220 C 100 220, 100 150, 160 150" fill="none" stroke="rgba(217, 232, 226, 0.12)" strokeWidth="2" />
              <path d="M 40 220 C 100 220, 100 150, 160 150" fill="none" stroke="url(#saffronGlow)" strokeWidth="2.5" className="animate-dash" strokeDasharray="10 8" />

              {/* Path 3: Center Agent to Top DB */}
              <path d="M 160 150 C 220 150, 220 80, 280 80" fill="none" stroke="rgba(217, 232, 226, 0.12)" strokeWidth="2" />
              <path d="M 160 150 C 220 150, 220 80, 280 80" fill="none" stroke="#FFC801" strokeWidth="2.5" className="animate-dash" strokeDasharray="8 8" />

              {/* Path 4: Center Agent to Bottom Queue */}
              <path d="M 160 150 C 220 150, 220 220, 280 220" fill="none" stroke="rgba(217, 232, 226, 0.12)" strokeWidth="2" />
              <path d="M 160 150 C 220 150, 220 220, 280 220" fill="none" stroke="#FF9932" strokeWidth="2.5" className="animate-dash" strokeDasharray="8 8" />

              {/* NODE 1: Webhook Ingest (Top Left) with gentle pulse */}
              <g className="animate-float animate-pulse-node" style={{ animationDelay: "0.2s" }}>
                <circle cx="40" cy="80" r="16" fill="#172B36" stroke="#D9E8E2" strokeWidth="1.5" />
                <circle cx="40" cy="80" r="6" fill="#D9E8E2" />
                <text x="40" y="55" textAnchor="middle" fill="#D9E8E2" fontSize="9" fontWeight="bold" fontFamily="monospace">API_STREAM</text>
              </g>

              {/* NODE 2: Database Ingest (Bottom Left) with gentle pulse */}
              <g className="animate-float animate-pulse-node" style={{ animationDelay: "0.8s" }}>
                <circle cx="40" cy="220" r="16" fill="#172B36" stroke="#D9E8E2" strokeWidth="1.5" />
                <circle cx="40" cy="220" r="6" fill="#D9E8E2" />
                <text x="40" y="252" textAnchor="middle" fill="#D9E8E2" fontSize="9" fontWeight="bold" fontFamily="monospace">WEBHOOK</text>
              </g>

              {/* CENTRAL NODE: AI Agent Orchestrator with glow and pulse rings */}
              <g className="animate-glow-active">
                <circle cx="160" cy="150" r="28" fill="#172B36" stroke="#FFC801" strokeWidth="2" className="animate-pulse-ring" />
                <circle cx="160" cy="150" r="22" fill="#114C5A" stroke="#FF9932" strokeWidth="1.5" />
                {/* Embedded gear icon symbol in the center */}
                <path d="M 156 146 L 164 154 M 164 146 L 156 154" stroke="#FFC801" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="160" cy="150" r="4" fill="#FFC801" />
                <text x="160" y="114" textAnchor="middle" fill="#FFC801" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="1">FLOW_ENGINE</text>
              </g>

              {/* NODE 4: Target Database (Top Right) with gentle pulse */}
              <g className="animate-float animate-pulse-node" style={{ animationDelay: "0.5s" }}>
                <circle cx="280" cy="80" r="16" fill="#172B36" stroke="#FFC801" strokeWidth="1.5" />
                <circle cx="280" cy="80" r="6" fill="#FFC801" />
                <text x="280" y="55" textAnchor="middle" fill="#FFC801" fontSize="9" fontWeight="bold" fontFamily="monospace">POSTGRES_DB</text>
              </g>

              {/* NODE 5: Slack Notify (Bottom Right) with gentle pulse */}
              <g className="animate-float animate-pulse-node" style={{ animationDelay: "1.1s" }}>
                <circle cx="280" cy="220" r="16" fill="#172B36" stroke="#FF9932" strokeWidth="1.5" />
                <circle cx="280" cy="220" r="6" fill="#FF9932" />
                <text x="280" y="252" textAnchor="middle" fill="#FF9932" fontSize="9" fontWeight="bold" fontFamily="monospace">SLACK_ALERT</text>
              </g>
            </svg>

            {/* Decorative Floating UI Card 1 (Tokens Speed) */}
            <div className="absolute right-4 bottom-12 z-20 hidden sm:flex items-center gap-3 rounded-xl border border-[#D9E8E2]/15 bg-[#172B36] p-3 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="rounded-lg bg-[#FFC801]/10 p-2 text-[#FFC801]">
                <Icon name="cog-8-tooth" className="h-4 w-4 animate-spin [animation-duration:8s]" />
              </div>
              <div className="font-mono text-left">
                <div className="text-[10px] font-bold text-[#F1F6F4]">RUNNER_NODE</div>
                <div className="text-[9px] text-[#FFC801] font-bold">14,800 tpm</div>
              </div>
            </div>

            {/* Decorative Floating UI Card 2 (SSL Security Status) */}
            <div className="absolute left-6 top-8 z-20 hidden sm:flex items-center gap-3 rounded-xl border border-[#D9E8E2]/15 bg-[#172B36] p-3 shadow-lg animate-float" style={{ animationDelay: "2.2s" }}>
              <div className="rounded-lg bg-[#FF9932]/10 p-2 text-[#FF9932]">
                <Icon name="cube-16-solid" className="h-4 w-4" />
              </div>
              <div className="font-mono text-left">
                <div className="text-[10px] font-bold text-[#F1F6F4]">ENCLAVE_STATUS</div>
                <div className="text-[9px] text-[#FF9932] font-bold">SECURE_VAULT_ACTIVE</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightweight Scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35 hover:opacity-75 transition-opacity duration-200 cursor-pointer pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#D9E8E2]/40">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-[#D9E8E2]/25 flex justify-center p-1">
          <div className="w-1.5 h-2 bg-[#FFC801] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
