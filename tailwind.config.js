/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arcticPowder: "#F1F6F4",
        mysticMint: "#D9E8E2",
        forsythia: "#FFC801",
        deepSaffron: "#FF9932",
        nocturnalExpedition: "#114C5A",
        oceanicNoir: "#172B36",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'grid-pulse': 'gridPulse 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.3' },
        }
      }
    },
  },
  plugins: [],
}
