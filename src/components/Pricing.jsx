import React, { useState, useEffect } from "react";
import { pricingMatrix } from "../pricing/config";
import { pricingStore } from "../pricing/pricingStore";
import { usePriceDOM } from "../hooks/usePriceDOM";
import Icon from "./Icon";

// Sub-component for pricing card. It uses refs to isolate price updates from React re-renders.
const PricingCard = ({ tierId, tier }) => {
  const { priceRef, periodRef } = usePriceDOM(tierId);

  return (
    <div
      className={`rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
        tier.popular
          ? "border-[#FFC801] bg-[#114C5A]/25 shadow-[0_20px_50px_rgba(0,0,0,0.4)] scale-[1.02] md:scale-[1.03] z-10"
          : "border-[#D9E8E2]/8 bg-[#114C5A]/5 hover:border-[#D9E8E2]/20 hover:translate-y-[-4px]"
      }`}
    >
      {/* Featured Tag Indicator */}
      {tier.popular && (
        <div className="absolute top-0 right-0 bg-[#FFC801] text-[#172B36] font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md">
          Most Popular
        </div>
      )}

      <div>
        {/* Tier Header */}
        <h3 className="font-mono text-xl font-bold text-[#F1F6F4]">
          {tier.name}
        </h3>
        <p className="mt-3 font-sans text-xs text-[#D9E8E2]/60 min-h-[36px] leading-relaxed">
          {tier.description}
        </p>

        {/* Price display - populated dynamically by hook */}
        <div className="mt-8 flex items-baseline gap-2.5">
          <span
            ref={priceRef}
            className="font-mono text-4xl font-extrabold tracking-tight text-[#FFC801]"
          ></span>
          <span
            ref={periodRef}
            className="font-sans text-xs text-[#D9E8E2]/50 font-bold uppercase tracking-wider"
          ></span>
        </div>

        {/* Features list */}
        <div className="mt-8 border-t border-[#D9E8E2]/8 pt-8">
          <ul className="flex flex-col gap-4">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3.5 text-xs">
                <span className="text-[#FF9932] mt-0.5 shrink-0 bg-[#FF9932]/10 p-0.5 rounded">
                  <Icon name="chevron-up-solid" className="h-3 w-3 rotate-90" />
                </span>
                <span className="font-sans text-[#D9E8E2]/80 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="mt-8">
        <button
          className={`w-full rounded-xl py-3.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-150 ease-out hover:scale-[1.02] active:scale-[0.98] ${
            tier.popular
              ? "bg-[#FFC801] text-[#172B36] hover:bg-[#FF9932] hover:text-[#F1F6F4] hover:shadow-[0_0_20px_rgba(255,200,1,0.25)]"
              : "border border-[#D9E8E2]/15 text-[#F1F6F4] hover:bg-[#D9E8E2]/5 hover:border-[#D9E8E2]/35"
          }`}
        >
          {tier.cta}
        </button>
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
      <div className="flex items-center gap-2 rounded-xl bg-[#114C5A]/35 border border-[#D9E8E2]/8 p-1">
        <button
          onClick={() => pricingStore.setIsAnnual(false)}
          className={`rounded-lg px-4.5 py-2 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
            !isAnnual
              ? "bg-[#FFC801] text-[#172B36] shadow-sm"
              : "text-[#D9E8E2]/60 hover:text-[#F1F6F4]"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => pricingStore.setIsAnnual(true)}
          className={`rounded-lg px-4.5 py-2 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 ${
            isAnnual
              ? "bg-[#FFC801] text-[#172B36] shadow-sm"
              : "text-[#D9E8E2]/60 hover:text-[#F1F6F4]"
          }`}
        >
          Annual
          <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
            isAnnual ? "bg-[#172B36]/15 text-[#172B36]" : "bg-[#FF9932] text-[#F1F6F4]"
          }`}>
            -20%
          </span>
        </button>
      </div>

      {/* Currency Switcher Dropdown */}
      <div className="relative">
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="appearance-none rounded-xl border border-[#D9E8E2]/12 bg-[#114C5A]/30 px-5 py-3 pr-11 font-mono text-xs font-bold text-[#F1F6F4] outline-none transition-all duration-150 hover:border-[#D9E8E2]/25 focus:border-[#FFC801] cursor-pointer"
        >
          <option value="USD" className="bg-[#172B36]">USD ($)</option>
          <option value="EUR" className="bg-[#172B36]">EUR (€)</option>
          <option value="INR" className="bg-[#172B36]">INR (₹)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-[#D9E8E2]/50">
          <Icon name="chevron-down" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

// Main Pricing Section. Mounts once statically.
export const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full gradient-glow pointer-events-none opacity-20"></div>

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
