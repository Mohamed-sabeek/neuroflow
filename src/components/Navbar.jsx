import React, { useState, useEffect } from "react";
import Icon from "./Icon";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Console", href: "#dashboard" },
    { label: "Pricing", href: "#pricing" }
  ];

  // Track page scroll to compress header and increase blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using performant IntersectionObserver
  useEffect(() => {
    const sections = ["features", "workflow", "dashboard", "pricing"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "bg-[#172B36]/90 border-[#D9E8E2]/12 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" 
          : "bg-[#172B36]/70 border-[#D9E8E2]/5"
      }`}
    >
      <div 
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ease-in-out ${
          isScrolled ? "py-3.5" : "py-5"
        }`}
      >
        {/* Brand Logo in JetBrains Mono with status dot and blinking cursor */}
        <a href="#" className="flex items-center gap-2 group transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981] animate-pulse"></span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F1F6F4]">
            <span className="text-[#FFC801]">&lt;</span>
            NEUROFLOW
            <span className="text-[#FF9932]">.AI/&gt;</span>
            <span className="text-[#FFC801] animate-cursor-blink ml-0.5 font-sans">|</span>
          </span>
        </a>

        {/* Desktop Navigation with sliding underlines and active dots */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1.5 font-sans text-[11px] font-bold uppercase tracking-wider transition-all duration-200 hover:text-[#F1F6F4] hover:-translate-y-[1px] group ${
                  isActive ? "text-[#FFC801]" : "text-[#D9E8E2]/60"
                }`}
              >
                {link.label}
                {/* Underline grows from center on hover */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 bg-[#FFC801] transition-all duration-200 group-hover:w-full"></span>
                {/* Active page glowing indicator dot */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-1.5 rounded-full bg-[#FFC801] shadow-[0_0_8px_#FFC801] transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}></span>
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#pricing"
            className="rounded-xl border border-[#D9E8E2]/15 px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#D9E8E2]/80 transition-all duration-200 hover:bg-[#114C5A]/30 hover:border-[#FFC801]/40 hover:text-[#F1F6F4] hover:shadow-[0_0_15px_rgba(255,200,1,0.1)] hover:-translate-y-0.5"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-[#FFC801] to-[#FF9932] px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#172B36] transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,200,1,0.3)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#F1F6F4]/20 to-transparent -translate-x-full group-hover/btn:animate-shine"></span>
            <span className="flex items-center gap-1">
              Deploy Free
              <Icon name="chevron-right" className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </span>
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

      {/* Mobile Drawer with backdrop blur */}
      <div
        className={`absolute left-0 w-full border-b border-[#D9E8E2]/10 bg-[#172B36]/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-[350px] opacity-100 py-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)]" : "max-h-0 opacity-0 overflow-hidden py-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-xs font-bold uppercase tracking-wider py-1.5 border-b border-[#D9E8E2]/5 flex items-center justify-between ${
                  isActive ? "text-[#FFC801]" : "text-[#D9E8E2]/70 hover:text-[#F1F6F4]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801]"></span>}
              </a>
            );
          })}
          <div className="mt-2 flex flex-col gap-3">
            <a
              href="#pricing"
              className="flex justify-center rounded-xl border border-[#D9E8E2]/15 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#F1F6F4]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="flex justify-center rounded-xl bg-gradient-to-r from-[#FFC801] to-[#FF9932] py-3 font-sans text-xs font-bold uppercase tracking-wider text-[#172B36]"
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
