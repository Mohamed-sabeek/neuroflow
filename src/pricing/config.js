// Pricing Configuration Matrix for NeuroFlow AI

export const pricingMatrix = {
  currencies: {
    USD: { symbol: '$', rate: 1.0, format: (val) => `$${val}` },
    EUR: { symbol: '€', rate: 0.9, format: (val) => `€${val}` },
    INR: { symbol: '₹', rate: 83.0, format: (val) => `₹${val.toLocaleString('en-IN')}` },
  },
  tiers: {
    starter: {
      name: "Starter",
      description: "For small teams starting with intelligent data automation.",
      basePriceUSD: 29,
      features: [
        "Up to 5 custom AI Agents",
        "10,000 automated workflow runs/mo",
        "Standard security (AES-256)",
        "Basic analytics dashboard",
        "Standard API Integration",
        "Email support (24hr SLA)"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    growth: {
      name: "Growth",
      description: "For scaling businesses requiring advanced orchestration.",
      basePriceUSD: 79,
      features: [
        "Up to 25 custom AI Agents",
        "100,000 automated workflow runs/mo",
        "Advanced security & SOC2 compliance",
        "Real-time analytics dashboard",
        "Priority API access & webhooks",
        "24/7 Priority support (1hr SLA)"
      ],
      popular: true,
      cta: "Upgrade to Growth"
    },
    enterprise: {
      name: "Enterprise",
      description: "For organizations demanding custom security and scale.",
      basePriceUSD: 249,
      features: [
        "Unlimited custom AI Agents",
        "Unlimited workflow runs/mo",
        "Dedicated isolated database instances",
        "Custom security protocols & SSO/SAML",
        "Advanced custom analytics & reports",
        "Dedicated account manager",
        "99.99% Uptime SLA guarantee"
      ],
      popular: false,
      cta: "Contact Enterprise"
    }
  },
  discountAnnualMultiplier: 0.8, // Flat 20% annual discount
};

/**
 * Computes the formatted price for a given tier, currency, and billing cycle.
 * @param {string} tierId - The ID of the pricing tier ('starter', 'growth', 'enterprise').
 * @param {string} currencyCode - The currency ('USD', 'EUR', 'INR').
 * @param {boolean} isAnnual - Whether the billing cycle is annual.
 * @returns {string} The formatted price string.
 */
export const calculatePrice = (tierId, currencyCode, isAnnual) => {
  const tier = pricingMatrix.tiers[tierId];
  if (!tier) return "";
  
  const currency = pricingMatrix.currencies[currencyCode];
  if (!currency) return "";
  
  // 1. Calculate regional price based on conversion rate
  let computedPrice = tier.basePriceUSD * currency.rate;
  
  // 2. Apply 20% discount if billing is annual
  if (isAnnual) {
    computedPrice = computedPrice * pricingMatrix.discountAnnualMultiplier;
  }
  
  // 3. Round to nearest whole number for clean display
  const roundedPrice = Math.round(computedPrice);
  
  // 4. Return formatted output
  return currency.format(roundedPrice);
};
