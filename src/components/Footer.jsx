import React from "react";
import Icon from "./Icon";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[#D9E8E2]/8 bg-[#172B36] py-20 relative overflow-hidden">
      {/* Background technical details */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full forsythia-glow pointer-events-none opacity-[0.03] filter blur-[100px]"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Top footer row: Brand, Newsletter Sign Up */}
        <div className="grid grid-cols-1 gap-12 pb-12 border-b border-[#D9E8E2]/5 lg:grid-cols-12 lg:gap-8">
          
          {/* Logo & Pitch */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-left">
            <a href="#" className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight text-[#F1F6F4]">
              <span className="font-mono text-[#FFC801]">&lt;</span>
              <span className="font-mono tracking-widest text-[#F1F6F4] uppercase">NeuroFlow</span>
              <span className="font-mono text-[#FF9932]">.AI/&gt;</span>
            </a>
            <p className="font-sans text-xs text-[#D9E8E2]/50 max-w-sm leading-relaxed">
              Orchestrate serverless AI database tasks, trigger event-driven workflows, and automate systems with zero re-rendering overhead. Secured at root.
            </p>

            {/* Premium status pills */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#114C5A]/40 border border-[#D9E8E2]/8 px-2.5 py-1 font-mono text-[8px] font-bold text-[#FFC801] uppercase tracking-wider">
                <span className="h-1 w-1 rounded-full bg-[#FFC801] animate-pulse"></span>
                99.99% Global Uptime
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#114C5A]/40 border border-[#D9E8E2]/8 px-2.5 py-1 font-mono text-[8px] font-bold text-[#D9E8E2]/70 uppercase tracking-wider">
                SOC2 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#114C5A]/40 border border-[#D9E8E2]/8 px-2.5 py-1 font-mono text-[8px] font-bold text-[#FF9932] uppercase tracking-wider">
                AES-256 Encryption
              </span>
            </div>

            {/* Social Icons row with micro-rotation hovers */}
            <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="group rounded-lg bg-[#114C5A]/40 p-2.5 text-[#D9E8E2]/60 hover:text-[#FFC801] hover:bg-[#114C5A]/60 hover:scale-105 hover:-rotate-6 hover:shadow-[0_0_15px_rgba(255,200,1,0.15)] border border-[#D9E8E2]/5 transition-all duration-200" 
                aria-label="Github"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="group rounded-lg bg-[#114C5A]/40 p-2.5 text-[#D9E8E2]/60 hover:text-[#FFC801] hover:bg-[#114C5A]/60 hover:scale-105 hover:rotate-6 hover:shadow-[0_0_15px_rgba(255,200,1,0.15)] border border-[#D9E8E2]/5 transition-all duration-200" 
                aria-label="Twitter"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="group rounded-lg bg-[#114C5A]/40 p-2.5 text-[#D9E8E2]/60 hover:text-[#FFC801] hover:bg-[#114C5A]/60 hover:scale-105 hover:-rotate-6 hover:shadow-[0_0_15px_rgba(255,200,1,0.15)] border border-[#D9E8E2]/5 transition-all duration-200" 
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="group rounded-lg bg-[#114C5A]/40 p-2.5 text-[#D9E8E2]/60 hover:text-[#FFC801] hover:bg-[#114C5A]/60 hover:scale-105 hover:rotate-6 hover:shadow-[0_0_15px_rgba(255,200,1,0.15)] border border-[#D9E8E2]/5 transition-all duration-200" 
                aria-label="Discord"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011 13.99 13.99 0 0 0 10.15 0 .075.075 0 0 1 .078.01c.12.098.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Input Section */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-left lg:items-end">
            <div className="w-full max-w-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F1F6F4]">Subscribe to Node Updates</span>
              <p className="font-sans text-[11px] text-[#D9E8E2]/50 mt-1 leading-relaxed">
                Receive logs, version tags, and performance tips directly to your inbox.
              </p>
              
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="flex-1 rounded-xl border border-[#D9E8E2]/12 bg-[#114C5A]/25 px-4 py-2.5 font-sans text-xs text-[#F1F6F4] outline-none transition-all duration-200 focus:border-[#FFC801] focus:shadow-[0_0_15px_rgba(255,200,1,0.1)] focus:bg-[#114C5A]/35"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#FFC801] px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wider text-[#172B36] hover:bg-[#FF9932] hover:text-[#F1F6F4] hover:shadow-[0_0_20px_rgba(255,200,1,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom footer columns: links navigation with sliding hover transitions */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 border-b border-[#D9E8E2]/5">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-[#FFC801]">Features</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-[#D9E8E2]/50">
              <a href="#features" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Bento Grid
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#features" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Mobile Accordion
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#workflow" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Workflow Canvas
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#dashboard" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Telemetry Dashboard
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-[#FFC801]">Resources</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-[#D9E8E2]/50">
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Documentation
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                API Reference
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#pricing" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Pricing Matrix
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Status Page
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-[#FFC801]">Company</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-[#D9E8E2]/50">
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                About
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Careers
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Blog
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                News
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-[#FFC801]">Legal</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-[#D9E8E2]/50">
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Privacy Policy
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Terms of Use
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Security Enclave
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
              <a href="#" className="group flex items-center gap-1 hover:text-[#F1F6F4] transition-all duration-150 hover:translate-x-1">
                Trust Vault
                <Icon name="chevron-right" className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-all duration-150" />
              </a>
            </div>
          </div>
        </div>

        {/* Premium Horizontal Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-8 border-b border-[#D9E8E2]/5">
          {["99.99% Uptime", "256-bit Encryption", "24/7 Monitoring", "Global CDN", "SOC2 Ready"].map((pill, i) => (
            <span 
              key={i} 
              className="inline-flex items-center gap-1.5 rounded-full bg-[#114C5A]/20 border border-[#D9E8E2]/6 px-3.5 py-1.5 font-mono text-[8px] font-bold text-[#D9E8E2]/70 uppercase tracking-widest"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {pill}
            </span>
          ))}
        </div>

        {/* Bottom Panel Copyright, Version and Regional Statuses */}
        <div className="mt-8 flex flex-col justify-between gap-4 text-[10px] text-[#D9E8E2]/40 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2 font-sans text-left">
            <span>&copy; {new Date().getFullYear()} NeuroFlow AI. All rights reserved.</span>
            <span className="text-[#D9E8E2]/20">|</span>
            <span className="font-mono text-[9px] text-[#FF9932]">v2.4.7</span>
            <span className="text-[#D9E8E2]/20">|</span>
            <span className="font-mono text-[9px]">REG_US_EAST</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-[9px]">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-heartbeat"></span>
              ONLINE
            </div>
            <span className="text-[#D9E8E2]/20">|</span>
            <span>Cluster: EU-01</span>
            <span className="text-[#D9E8E2]/20">|</span>
            <span>Build: production-31145</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
