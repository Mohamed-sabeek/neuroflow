import React, { useState } from "react";
import Icon from "./Icon";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Console", href: "#dashboard" },
    { label: "Pricing", href: "#pricing" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D9E8E2]/5 bg-[#172B36]/80 backdrop-blur-md transition-all duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        {/* Brand Logo in JetBrains Mono */}
        <a href="#" className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#F1F6F4] group">
          <span className="font-mono text-[#FFC801] transition-transform duration-200 group-hover:-translate-x-1">&lt;</span>
          <span className="font-mono tracking-widest text-[#F1F6F4] uppercase text-lg">NeuroFlow</span>
          <span className="font-mono text-[#FF9932] transition-transform duration-200 group-hover:translate-x-1">.AI/&gt;</span>
        </a>

        {/* Desktop Navigation with sliding underlines */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 font-sans text-xs font-semibold uppercase tracking-wider text-[#D9E8E2]/65 transition-colors duration-150 ease-out hover:text-[#F1F6F4] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#FFC801] transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#pricing"
            className="rounded-lg border border-[#D9E8E2]/15 px-4.5 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#D9E8E2]/80 transition-all duration-150 ease-out hover:bg-[#D9E8E2]/5 hover:border-[#D9E8E2]/30 hover:text-[#F1F6F4]"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            className="rounded-lg bg-[#FFC801] px-5 py-2 font-sans text-xs font-bold uppercase tracking-wider text-[#172B36] transition-all duration-150 ease-out hover:bg-[#FF9932] hover:text-[#F1F6F4] hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(255,200,1,0.2)]"
          >
            Deploy Free
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#F1F6F4] hover:bg-[#114C5A]/30 transition-all duration-150 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Icon name={mobileMenuOpen ? "x-mark" : "cog-8-tooth"} className={`h-6 w-6 ${mobileMenuOpen ? "" : "animate-spin [animation-duration:10s]"}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`absolute left-0 w-full border-b border-[#D9E8E2]/10 bg-[#172B36] transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-[350px] opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden py-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-base font-semibold uppercase tracking-wider text-[#D9E8E2]/70 hover:text-[#F1F6F4] py-1 border-b border-[#D9E8E2]/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <a
              href="#pricing"
              className="flex justify-center rounded-lg border border-[#D9E8E2]/15 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#F1F6F4]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="flex justify-center rounded-lg bg-[#FFC801] py-3 font-sans text-xs font-bold uppercase tracking-wider text-[#172B36]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Deploy Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
