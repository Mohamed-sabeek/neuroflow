import { useEffect, useRef } from "react";
import { calculatePrice } from "../pricing/config";
import { pricingStore } from "../pricing/pricingStore";

/**
 * Custom React hook to bind pricing DOM elements directly to the pricing store.
 * Direct DOM updates avoid React rendering cycles, fulfilling the strict state isolation requirements.
 * @param {string} tierId - The pricing tier ID
 * @returns {object} { priceRef, periodRef } - Refs to attach to the price and billing cycle text elements.
 */
export const usePriceDOM = (tierId) => {
  const priceRef = useRef(null);
  const periodRef = useRef(null);

  useEffect(() => {
    const updateDOM = (currency, isAnnual) => {
      if (priceRef.current) {
        priceRef.current.textContent = calculatePrice(tierId, currency, isAnnual);
      }
      if (periodRef.current) {
        periodRef.current.textContent = isAnnual ? "/mo (billed annually)" : "/mo";
      }
    };

    // Initialize with current values
    updateDOM(pricingStore.getCurrency(), pricingStore.getIsAnnual());

    // Subscribe to store updates
    const unsubscribe = pricingStore.subscribe(updateDOM);
    return unsubscribe;
  }, [tierId]);

  return { priceRef, periodRef };
};
