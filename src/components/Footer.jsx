import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[#D9E8E2]/8 bg-[#172B36] py-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Top footer row: Brand, Newsletter Sign Up */}
        <div className="grid grid-cols-1 gap-12 pb-12 border-b border-[#D9E8E2]/5 lg:grid-cols-12 lg:gap-8">
          {/* Logo & Pitch */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-left">
            <a href="#" className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#F1F6F4]">
              <span className="font-mono text-[#FFC801]">&lt;</span>
              <span className="font-mono tracking-widest text-[#F1F6F4] uppercase">NeuroFlow</span>
              <span className="font-mono text-[#FF9932]">.AI/&gt;</span>
            </a>
            <p className="font-sans text-xs text-[#D9E8E2]/50 max-w-sm leading-relaxed">
              Orchestrate serverless AI database tasks, trigger event-driven workflows, and automate systems with zero re-rendering overhead. Secured at root.
            </p>

            {/* Social Icons row */}
            <div className="flex gap-3.5 mt-2">
              <a href="#" className="rounded-lg bg-[#114C5A]/40 p-2 text-[#D9E8E2]/60 hover:text-[#FFC801] hover:bg-[#114C5A]/60 border border-[#D9E8E2]/5 transition-all duration-150" aria-label="Github">
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="rounded-lg bg-[#114C5A]/40 p-2 text-[#D9E8E2]/60 hover:text-[#FFC801] hover:bg-[#114C5A]/60 border border-[#D9E8E2]/5 transition-all duration-150" aria-label="Twitter">
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
                  className="flex-1 rounded-xl border border-[#D9E8E2]/12 bg-[#114C5A]/20 px-4 py-2.5 font-sans text-xs text-[#F1F6F4] outline-none transition-all duration-150 focus:border-[#FFC801]"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#FFC801] px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wider text-[#172B36] hover:bg-[#FF9932] hover:text-[#F1F6F4] transition-all duration-150"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom footer columns: links navigation */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 border-b border-[#D9E8E2]/5">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFC801]">Features</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-[#D9E8E2]/50">
              <a href="#features" className="hover:text-[#F1F6F4] transition-colors duration-150">Bento Grid</a>
              <a href="#features" className="hover:text-[#F1F6F4] transition-colors duration-150">Mobile Accordion</a>
              <a href="#workflow" className="hover:text-[#F1F6F4] transition-colors duration-150">Workflow Canvas</a>
              <a href="#dashboard" className="hover:text-[#F1F6F4] transition-colors duration-150">Telemetry Dashboard</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFC801]">Resources</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-[#D9E8E2]/50">
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Documentation</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">API Reference</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Pricing Matrix</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Status Page</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFC801]">Company</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-[#D9E8E2]/50">
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">About</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Careers</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Blog</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">News</a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFC801]">Legal</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-[#D9E8E2]/50">
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Privacy Policy</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Terms of Use</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Security Enclave</a>
              <a href="#" className="hover:text-[#F1F6F4] transition-colors duration-150">Trust Vault</a>
            </div>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="mt-8 flex flex-col justify-between gap-4 text-[10px] text-[#D9E8E2]/30 sm:flex-row sm:items-center">
          <p className="font-sans text-left">
            &copy; {new Date().getFullYear()} NeuroFlow AI. All rights reserved. Secured and deployed globally.
          </p>
          <div className="flex items-center gap-2 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801] animate-pulse"></span>
            SYS_SECURE: ENCLAVE_CONTAINER_V2
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
