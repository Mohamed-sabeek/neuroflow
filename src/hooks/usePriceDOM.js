import { useEffect, useRef } from "react";
import { calculatePrice } from "../pricing/config";
import { pricingStore } from "../pricing/pricingStore";

/**
 * Custom React hook to bind pricing DOM elements directly to the pricing store.
 * Direct DOM updates avoid React rendering cycles, fulfilling the strict state isolation requirements.
 * Adds a premium fade-and-slide transition effect during update triggers.
 * @param {string} tierId - The pricing tier ID
 * @returns {object} { priceRef, periodRef } - Refs to attach to the price and billing cycle text elements.
 */
export const usePriceDOM = (tierId) => {
  const priceRef = useRef(null);
  const periodRef = useRef(null);

  useEffect(() => {
    let lastValue = "";

    const updateDOM = (currency, isAnnual) => {
      const newValue = calculatePrice(tierId, currency, isAnnual);
      const newPeriod = isAnnual ? "/mo (billed annually)" : "/mo";

      if (priceRef.current) {
        if (lastValue && lastValue !== newValue) {
          // Trigger a premium fade and slide transition directly in the DOM
          priceRef.current.style.transition = "opacity 0.15s ease-out, transform 0.15s ease-out";
          priceRef.current.style.opacity = "0.3";
          priceRef.current.style.transform = "translateY(-4px)";

          setTimeout(() => {
            if (priceRef.current) {
              priceRef.current.textContent = newValue;
              priceRef.current.style.opacity = "1";
              priceRef.current.style.transform = "translateY(0)";
            }
          }, 150);
        } else {
          priceRef.current.textContent = newValue;
        }
        lastValue = newValue;
      }

      if (periodRef.current) {
        if (periodRef.current.textContent !== newPeriod) {
          periodRef.current.style.transition = "opacity 0.15s ease-out";
          periodRef.current.style.opacity = "0.3";

          setTimeout(() => {
            if (periodRef.current) {
              periodRef.current.textContent = newPeriod;
              periodRef.current.style.opacity = "1";
            }
          }, 150);
        } else {
          periodRef.current.textContent = newPeriod;
        }
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
