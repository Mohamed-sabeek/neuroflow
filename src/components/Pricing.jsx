import React, { useState, useEffect } from "react";
import { pricingMatrix } from "../pricing/config";
import { pricingStore } from "../pricing/pricingStore";
import { usePriceDOM } from "../hooks/usePriceDOM";
import Icon from "./Icon";

// Sub-component for pricing card. It uses refs to isolate price updates from React re-renders.
const PricingCard = ({ tierId, tier }) => {
  const { priceRef, periodRef } = usePriceDOM(tierId);
  const isFeatured = tier.popular;

  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl border p-8 transition-all duration-300 ease-out cursor-pointer relative overflow-hidden ${
        isFeatured
          ? "border-[#FFC801] bg-gradient-to-br from-[#114C5A]/25 to-[#172B36]/90 shadow-[0_20px_50px_rgba(255,200,1,0.15)] scale-[1.03] z-10 animate-border-shimmer"
          : "border-[#D9E8E2]/8 bg-gradient-to-br from-[#114C5A]/5 to-[#172B36]/80 hover:border-[#FF9932]/35 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
      }`}
    >
      {/* Visual OS-style top highlight bar */}
      <span className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFC801] to-[#FF9932] transition-all duration-300 group-hover:w-full"></span>

      {/* Featured Tag Indicator */}
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#FFC801] to-[#FF9932] text-[#172B36] font-mono text-[8px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#172B36] animate-ping"></span>
          Most Popular
        </div>
      )}

      <div>
        {/* Tier Header */}
        <h3 className="font-mono text-xl font-extrabold text-[#F1F6F4] group-hover:text-[#FFC801] transition-colors duration-150">
          {tier.name}
        </h3>
        <p className="mt-3 font-sans text-xs text-[#D9E8E2]/60 min-h-[36px] leading-relaxed">
          {tier.description}
        </p>

        {/* Price display - populated dynamically by hook */}
        <div className="mt-8 flex items-baseline gap-2.5">
          <span
            ref={priceRef}
            className="font-mono text-4xl font-extrabold tracking-tight text-[#FFC801] transition-all duration-200"
          ></span>
          <span
            ref={periodRef}
            className="font-mono text-[9px] text-[#D9E8E2]/50 font-bold uppercase tracking-wider"
          ></span>
        </div>

        {/* Features list */}
        <div className="mt-8 border-t border-[#D9E8E2]/8 pt-8">
          <ul className="flex flex-col gap-3">
            {tier.features.map((feature, i) => (
              <li key={i} className="group/item flex items-start gap-3 text-xs py-1 transition-colors duration-150 hover:bg-[#114C5A]/10 rounded-lg px-2 -mx-2">
                <span className="text-[#FFC801] mt-0.5 shrink-0 bg-[#FFC801]/10 p-0.5 rounded transition-transform duration-200 group-hover/item:scale-110">
                  <Icon name="chevron-up-solid" className="h-3 w-3 rotate-90" />
                </span>
                <span className="font-sans text-[#D9E8E2]/80 leading-relaxed group-hover/item:text-[#F1F6F4] transition-colors duration-150">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="mt-8">
        {isFeatured ? (
          <button
            className="group/btn relative w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFC801] to-[#FF9932] py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-[#172B36] transition-all duration-200 hover:shadow-[0_0_25px_rgba(255,200,1,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            {tier.cta}
            <Icon name="arrow-trending-up" className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
          </button>
        ) : (
          <button
            className="group/btn relative w-full flex items-center justify-center gap-2 rounded-xl border border-[#D9E8E2]/15 bg-[#172B36]/60 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-[#F1F6F4] transition-all duration-200 hover:bg-[#D9E8E2]/5 hover:border-[#FFC801]/40 hover:text-[#F1F6F4] hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D9E8E2]/5 to-transparent -translate-x-full group-hover/btn:animate-shine"></span>
            {tier.cta}
          </button>
        )}
      </div>
    </div>
  );
};

// Self-contained component to handle controls state locally.
// Re-renders here only affect the selector buttons, not the cards.
const PricingControls = () => {
  const [currency, setCurrency] = useState(pricingStore.getCurrency());
  const [isAnnual, setIsAnnual] = useState(pricingStore.getIsAnnual());

  useEffect(() => {
    const handleStoreChange = (newCurrency, newIsAnnual) => {
      setCurrency(newCurrency);
      setIsAnnual(newIsAnnual);
    };
    const unsubscribe = pricingStore.subscribe(handleStoreChange);
    return unsubscribe;
  }, []);

  const handleCurrencyChange = (e) => {
    pricingStore.setCurrency(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
      {/* Monthly / Annual Toggle switch with pill slides */}
      <div className="relative flex items-center gap-1 rounded-xl bg-[#114C5A]/35 border border-[#D9E8E2]/8 p-1 shadow-inner">
        <button
          onClick={() => pricingStore.setIsAnnual(false)}
          className={`relative rounded-lg px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
            !isAnnual
              ? "bg-[#FFC801] text-[#172B36] shadow-[0_0_15px_rgba(255,200,1,0.25)]"
              : "text-[#D9E8E2]/60 hover:text-[#F1F6F4]"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => pricingStore.setIsAnnual(true)}
          className={`relative rounded-lg px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
            isAnnual
              ? "bg-[#FFC801] text-[#172B36] shadow-[0_0_15px_rgba(255,200,1,0.25)]"
              : "text-[#D9E8E2]/60 hover:text-[#F1F6F4]"
          }`}
        >
          Annual
          <span className={`text-[8px] px-1.5 py-0.5 rounded font-mono font-bold ${
            isAnnual ? "bg-[#172B36]/20 text-[#172B36]" : "bg-[#FF9932] text-[#F1F6F4] animate-pulse"
          }`}>
            -20%
          </span>
        </button>
      </div>

      {/* Currency Switcher Dropdown wrapper */}
      <div className="relative group">
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="appearance-none rounded-xl border border-[#D9E8E2]/12 bg-[#114C5A]/30 px-5 py-2.5 pr-10 font-mono text-[10px] font-bold uppercase tracking-wider text-[#F1F6F4] outline-none transition-all duration-200 hover:border-[#FFC801]/40 hover:bg-[#114C5A]/45 hover:shadow-[0_0_15px_rgba(255,200,1,0.1)] focus:border-[#FFC801] cursor-pointer"
        >
          <option value="USD" className="bg-[#172B36]">USD ($)</option>
          <option value="EUR" className="bg-[#172B36]">EUR (€)</option>
          <option value="INR" className="bg-[#172B36]">INR (₹)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#D9E8E2]/40 group-hover:text-[#FFC801] transition-colors duration-200">
          <Icon name="chevron-down" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
        </div>
      </div>
    </div>
  );
};

// Main Pricing Section. Mounts once statically.
export const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      {/* OS blueprint grids and radial glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-[10%] left-[15%] h-[550px] w-[550px] rounded-full forsythia-glow pointer-events-none opacity-[0.05] filter blur-[100px]"></div>
      <div className="absolute bottom-[10%] right-[15%] h-[600px] w-[600px] rounded-full mint-glow pointer-events-none opacity-[0.08] filter blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-mono text-3xl font-extrabold tracking-tight text-[#F1F6F4] sm:text-5xl">
            Matrix Pricing Tiers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-[#D9E8E2]/70 sm:text-base">
            Choose a serverless node tier matching your transaction frequency and resource bandwidth.
          </p>
        </div>

        {/* Pricing Selector Controls */}
        <div className="mt-12">
          <PricingControls />
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          <PricingCard tierId="starter" tier={pricingMatrix.tiers.starter} />
          <PricingCard tierId="growth" tier={pricingMatrix.tiers.growth} />
          <PricingCard tierId="enterprise" tier={pricingMatrix.tiers.enterprise} />
        </div>
      </div>
    </section>
  );
};
export default Pricing;
