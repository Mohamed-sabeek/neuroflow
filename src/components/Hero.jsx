import React from "react";
import Icon from "./Icon";

export const Hero = () => {
  return (
    <section className="relative min-h-[90svh] w-full overflow-hidden bg-[#172B36] px-6 py-16 md:py-24">
      {/* Background Grid Pattern & Glowing spots */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none animate-grid-pulse"></div>
      <div className="absolute top-1/4 right-10 h-[600px] w-[600px] rounded-full gradient-glow pointer-events-none opacity-40"></div>
      <div className="absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full forsythia-glow pointer-events-none opacity-20"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: Pitch, CTAs, Metrics, Logos (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Trust Badge */}
            <div className="inline-flex self-start items-center gap-2 rounded-full border border-[#D9E8E2]/15 bg-[#114C5A]/30 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D9E8E2] animate-fade-in [animation-delay:50ms] [animation-fill-mode:backwards]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC801] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC801]"></span>
              </span>
              Enterprise Orchestration Engine
            </div>

            {/* Headline in JetBrains Mono */}
            <h1 className="mt-6 font-mono text-4xl font-extrabold tracking-tight text-[#F1F6F4] sm:text-5xl lg:text-6xl leading-[1.1] animate-fade-in-up [animation-delay:150ms] [animation-fill-mode:backwards]">
              Data Automation <br className="hidden sm:inline" />
              Without <span className="text-[#FFC801] relative inline-block">
                Complexity
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#FF9932]/60 rounded-full"></span>
              </span>
            </h1>

            {/* Subtext in Inter */}
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[#D9E8E2]/75 sm:text-lg animate-fade-in-up [animation-delay:250ms] [animation-fill-mode:backwards]">
              Deploy self-orchestrating AI agents that ingest data streams, route events, and automate databases. High-performance containers secured at the root.
            </p>

            {/* CTAs with micro-interactions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center animate-fade-in-up [animation-delay:350ms] [animation-fill-mode:backwards]">
              <a
                href="#pricing"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FF9932] px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-wider text-[#172B36] transition-all duration-150 ease-out hover:bg-[#FFC801] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(255,153,50,0.25)]"
              >
                Deploy Node Free
                <Icon name="arrow-trending-up" className="h-4 w-4 shrink-0 text-[#172B36]" />
              </a>
              <a
                href="#features"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#D9E8E2]/15 bg-[#172B36]/60 px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[#D9E8E2] transition-all duration-150 ease-out hover:bg-[#D9E8E2]/5 hover:border-[#D9E8E2]/30"
              >
                Explore Bento System
              </a>
            </div>

            {/* Metrics block in JetBrains Mono */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#D9E8E2]/10 pt-8 animate-fade-in-up [animation-delay:450ms] [animation-fill-mode:backwards]">
              <div>
                <div className="font-mono text-2xl font-extrabold text-[#FFC801] sm:text-3xl">&lt;320ms</div>
                <div className="mt-1 font-sans text-[10px] font-bold uppercase tracking-wider text-[#D9E8E2]/40">Avg Execution</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-extrabold text-[#F1F6F4] sm:text-3xl">99.9%</div>
                <div className="mt-1 font-sans text-[10px] font-bold uppercase tracking-wider text-[#D9E8E2]/40">Accuracy Rate</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-extrabold text-[#FF9932] sm:text-3xl">100%</div>
                <div className="mt-1 font-sans text-[10px] font-bold uppercase tracking-wider text-[#D9E8E2]/40">Secure Enclaves</div>
              </div>
            </div>

            {/* Trust Partner Logos in Inter */}
            <div className="mt-10 flex items-center gap-4 flex-wrap opacity-40 hover:opacity-60 transition-opacity duration-200">
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#D9E8E2] mr-2">Core Partners:</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#F1F6F4]">ACME AI</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#F1F6F4]">SYNTHFLOW</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#F1F6F4]">GLOBAL DATA</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium AI Visualization Canvas (lg:col-span-5) */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[450px] flex items-center justify-center animate-fade-in [animation-delay:300ms] [animation-fill-mode:backwards]">
            {/* Visual background deck */}
            <div className="absolute inset-0 rounded-2xl border border-[#D9E8E2]/10 bg-[#114C5A]/5 backdrop-blur-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"></div>

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

              {/* Animated Connection Lines */}
              {/* Path 1: Top Ingest to Center Agent */}
              <path d="M 40 80 C 100 80, 100 150, 160 150" fill="none" stroke="rgba(217, 232, 226, 0.15)" strokeWidth="2" />
              <path d="M 40 80 C 100 80, 100 150, 160 150" fill="none" stroke="url(#saffronGlow)" strokeWidth="2" className="animate-dash" strokeDasharray="8 6" />

              {/* Path 2: Bottom Ingest to Center Agent */}
              <path d="M 40 220 C 100 220, 100 150, 160 150" fill="none" stroke="rgba(217, 232, 226, 0.15)" strokeWidth="2" />
              <path d="M 40 220 C 100 220, 100 150, 160 150" fill="none" stroke="url(#saffronGlow)" strokeWidth="2" className="animate-dash" strokeDasharray="8 6" />

              {/* Path 3: Center Agent to Top DB */}
              <path d="M 160 150 C 220 150, 220 80, 280 80" fill="none" stroke="rgba(217, 232, 226, 0.15)" strokeWidth="2" />
              <path d="M 160 150 C 220 150, 220 80, 280 80" fill="none" stroke="#FFC801" strokeWidth="2" className="animate-dash" strokeDasharray="6 6" />

              {/* Path 4: Center Agent to Bottom Queue */}
              <path d="M 160 150 C 220 150, 220 220, 280 220" fill="none" stroke="rgba(217, 232, 226, 0.15)" strokeWidth="2" />
              <path d="M 160 150 C 220 150, 220 220, 280 220" fill="none" stroke="#FFC801" strokeWidth="2" className="animate-dash" strokeDasharray="6 6" />

              {/* NODE 1: Webhook Ingest (Top Left) */}
              <g className="animate-float" style={{ animationDelay: "0.2s" }}>
                <circle cx="40" cy="80" r="16" fill="#172B36" stroke="#D9E8E2" strokeWidth="1.5" />
                <circle cx="40" cy="80" r="6" fill="#D9E8E2" />
                <text x="40" y="55" textAnchor="middle" fill="#D9E8E2" fontSize="9" fontWeight="bold" fontFamily="monospace">API_STREAM</text>
              </g>

              {/* NODE 2: Database Ingest (Bottom Left) */}
              <g className="animate-float" style={{ animationDelay: "0.8s" }}>
                <circle cx="40" cy="220" r="16" fill="#172B36" stroke="#D9E8E2" strokeWidth="1.5" />
                <circle cx="40" cy="220" r="6" fill="#D9E8E2" />
                <text x="40" y="252" textAnchor="middle" fill="#D9E8E2" fontSize="9" fontWeight="bold" fontFamily="monospace">WEBHOOK</text>
              </g>

              {/* CENTRAL NODE: AI Agent Orchestrator */}
              <g>
                <circle cx="160" cy="150" r="28" fill="#172B36" stroke="#FFC801" strokeWidth="2" className="animate-pulse-ring" />
                <circle cx="160" cy="150" r="22" fill="#114C5A" stroke="#FF9932" strokeWidth="1.5" />
                {/* Embedded gear icon symbol in the center */}
                <path d="M 156 146 L 164 154 M 164 146 L 156 154" stroke="#FFC801" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="160" cy="150" r="4" fill="#FFC801" />
                <text x="160" y="114" textAnchor="middle" fill="#FFC801" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="1">FLOW_ENGINE</text>
              </g>

              {/* NODE 4: Target Database (Top Right) */}
              <g className="animate-float" style={{ animationDelay: "0.5s" }}>
                <circle cx="280" cy="80" r="16" fill="#172B36" stroke="#FFC801" strokeWidth="1.5" />
                <circle cx="280" cy="80" r="6" fill="#FFC801" />
                <text x="280" y="55" textAnchor="middle" fill="#FFC801" fontSize="9" fontWeight="bold" fontFamily="monospace">POSTGRES_DB</text>
              </g>

              {/* NODE 5: Slack Notify (Bottom Right) */}
              <g className="animate-float" style={{ animationDelay: "1.1s" }}>
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
    </section>
  );
};
export default Hero;
