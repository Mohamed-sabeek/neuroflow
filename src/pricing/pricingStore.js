// Performance-Isolated State Store for Pricing

const listeners = new Set();
let currentCurrency = "USD";
let isAnnual = false;

export const pricingStore = {
  getCurrency: () => currentCurrency,
  getIsAnnual: () => isAnnual,
  
  setCurrency: (currency) => {
    if (currentCurrency === currency) return;
    currentCurrency = currency;
    listeners.forEach((listener) => listener(currentCurrency, isAnnual));
  },
  
  setIsAnnual: (annual) => {
    if (isAnnual === annual) return;
    isAnnual = annual;
    listeners.forEach((listener) => listener(currentCurrency, isAnnual));
  },
  
  subscribe: (listener) => {
    listeners.add(listener);
    // Return unsubscribe function
    return () => {
      listeners.delete(listener);
    };
  }
};
