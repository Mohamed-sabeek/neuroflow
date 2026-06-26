# NeuroFlow AI - Data Automation Platform

NeuroFlow AI is a high-performance, responsive enterprise SaaS landing page representing a next-generation autonomous AI data orchestration engine. 

Built using **React + Vite + Tailwind CSS**, this repository implements professional visual depth (comparable to Stripe and Linear) alongside strict state performance constraints (zero-render pricing updates and context-locked viewport grids).

---

## 🚀 Key Architectural Features

### 1. Performance-Isolated Pricing Matrix
* **Engine Location**: `src/pricing/config.js` & `src/pricing/pricingStore.js`
* **Supported Options**: Currency selector (USD, EUR, INR) and billing period toggles (Monthly, Annual with 20% discount).
* **Isolation Mechanics**: Instead of standard React state triggers which reflow the DOM tree, controls write changes to a pub-sub store. Component spans containing prices use a targeted `usePriceDOM` hook, updating the node's `textContent` directly using DOM references. 
* **Outcome**: Changing billing cycles or currencies causes **zero React virtual DOM diffing** or outer layout reflows.

### 2. Bento Grid to Mobile Accordion (with Context Lock)
* **Desktop**: Features a responsive Bento Grid of grid cards displaying pipeline node configurations.
* **Mobile**: Automatically refactors the layout into a clean vertical Accordion list with CSS-transition height collapses (`grid-template-rows: 0fr -> 1fr`) to prevent overflow.
* **State Persistence**: A resize listener tracks viewport widths. The active card hovered on desktop remains open as the active accordion panel on mobile, maintaining the user's focus across devices.

### 3. SVG/CSS Motion Choreography
* **Orchestration Canvas**: Traces connections from sources (Email, Database streams) to action targets (CRM, Slack, Reports) through a central AI Orchestrator node.
* **Flow Indicator**: Animated curves with SVG dashes traversing paths via infinite CSS keyframe loops.
* **Telemetry Dashboard**: Contains circular SVG uptime rings, sparkline graphs, and simulated console terminal feeds.

---

## 🎨 Visual Identity & Spacing

* **Color Palette**:
  * **Oceanic Noir** (`#172B36`): Main background layout canvas.
  * **Nocturnal Expedition** (`#114C5A`): Grid backing and glowing spots.
  * **Arctic Powder** (`#F1F6F4`): Primary high-contrast text.
  * **Mystic Mint** (`#D9E8E2`): Borders, icons, and secondary annotations.
  * **Forsythia** (`#FFC801`) & **Deep Saffron** (`#FF9932`): Dynamic highlights, stats, and primary active states.
* **Typography Guideline**:
  * **JetBrains Mono**: Used for header elements, telemetry labels, count-ups, and console outputs.
  * **Inter**: Used for description cards, body copy, and button triggers.
* **Tactile Texture**: Injected a global CSS-turbulence noise overlay to create visual depth and premium physical texture.

---

## 🛠 Setup & Commands

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Dev Server
Runs the development server on localhost:
```bash
npm run dev
```

### 3. Compile Production Bundle
Builds optimized, compressed HTML, CSS, and JS assets to the `/dist` directory:
```bash
npm run build
```

### 4. Code Quality & Linting
Checks lint guidelines with Oxlint:
```bash
npm run lint
```

---

## 📂 Folder Structure

```
Neuroflow-AI/
├── src/
│   ├── assets/        # Inline SVGs and theme graphics
│   ├── components/    # Reusable UI parts (Navbar, Hero, Bento Grid, Canvas, Dashboard)
│   ├── data/          # Decoupled mock values and testimonials content
│   ├── hooks/         # DOM reference isolation triggers (usePriceDOM)
│   ├── pricing/       # Pricing matrices and store event listeners
│   ├── App.jsx        # Main application layout entry
│   ├── index.css      # Core tailwind setup & keyframe declarations
│   └── main.jsx       # Virtual DOM entry mount
├── index.html         # Main template & metadata headers
├── tailwind.config.js # Custom configuration of design tokens
└── package.json       # Script and dependencies index
```
