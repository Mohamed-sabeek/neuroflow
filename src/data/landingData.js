// Data configuration for NeuroFlow AI landing page

export const trustedCompanies = [
  { name: "Acme Corp", logoText: "ACME AI" },
  { name: "GlobalData", logoText: "GLOBAL DATA" },
  { name: "SynthFlow", logoText: "SYNTH FLOW" },
  { name: "Apex Automations", logoText: "APEX AUTO" },
  { name: "Quantum SaaS", logoText: "QUANTUM" },
  { name: "Vertex Labs", logoText: "VERTEX" }
];

export const featuresData = [
  {
    id: 0,
    title: "AI Agents Orchestration",
    shortDesc: "Deploy autonomous intelligence layers that handle reasoning, decision-making, and execution workflows.",
    longDesc: "Our advanced agent architecture leverages deep reasoning to autonomously orchestrate task execution. Build custom agents equipped with precise tool-calling capability, custom action graphs, and dynamic execution loops that continuously adapt to incoming data streams.",
    icon: "cog-8-tooth",
    bentoClass: "md:col-span-2 md:row-span-2 bg-[#114C5A]/15 border-[#D9E8E2]/10",
    metrics: "99.9% Task Success Rate",
    badge: "Autonomous",
    accentColor: "#FFC801" // Forsythia
  },
  {
    id: 1,
    title: "Dynamic Workflows",
    shortDesc: "Connect your enterprise services using event-driven triggers and visual, branching automation loops.",
    longDesc: "Design event-driven automation triggers that bridge internal databases with third-party APIs. Handle complicated logic splits, error fallbacks, and real-time state syncs with speed and precision.",
    icon: "arrow-path",
    bentoClass: "md:col-span-1 md:row-span-1 bg-[#114C5A]/10 border-[#D9E8E2]/5",
    metrics: "320ms Avg Execution",
    badge: "Real-time",
    accentColor: "#FF9932" // Deep Saffron
  },
  {
    id: 2,
    title: "Enterprise Vault Security",
    shortDesc: "Military-grade data protection featuring AES-256 encryption, key-rotation, and SOC2 isolation.",
    longDesc: "Security is non-negotiable. Enjoy end-to-end envelope encryption, continuous compliance logging, isolated database containers, and zero-trust key rotation protocols that protect your data assets at rest and in transit.",
    icon: "cube-16-solid",
    bentoClass: "md:col-span-1 md:row-span-1 bg-[#114C5A]/10 border-[#D9E8E2]/5",
    metrics: "SOC2 Type II Compliant",
    badge: "Secure",
    accentColor: "#D9E8E2" // Mystic Mint
  },
  {
    id: 3,
    title: "Telemetry & Live Analytics",
    shortDesc: "Obtain deep pipeline insights using automated anomaly detection and visual metric dashboards.",
    longDesc: "Monitor your AI workflows with advanced pipeline telemetry. Track model tokens, request latencies, and execution costs in real-time. Detect anomalies automatically before they disrupt operations.",
    icon: "chart-pie",
    bentoClass: "md:col-span-1 md:row-span-2 bg-[#114C5A]/15 border-[#D9E8E2]/10",
    metrics: "10M+ Operations Tracked",
    badge: "Analytics",
    accentColor: "#FFC801"
  },
  {
    id: 4,
    title: "Developer API Integration",
    shortDesc: "Complete developer ecosystem with SDK clients, webhooks, and raw REST API endpoints.",
    longDesc: "Built for engineers. Integrate NeuroFlow services directly into your code with lightweight SDKs, customizable webhooks, and a comprehensive REST API. Copy and execute production-ready integration code snippets instantly.",
    icon: "link",
    bentoClass: "md:col-span-2 md:row-span-1 bg-[#114C5A]/10 border-[#D9E8E2]/5",
    metrics: "Developer Playground",
    badge: "API-First",
    accentColor: "#FF9932"
  },
  {
    id: 5,
    title: "Infinite Scale Infrastructure",
    shortDesc: "Serverless workers that scale processing resources dynamically without provisioning overhead.",
    longDesc: "Leverage our serverless runner swarm that dynamically scales compute capabilities from zero to millions of daily actions. Never think about machine provisioning, cold starts, or network load balancing again.",
    icon: "arrow-trending-up",
    bentoClass: "md:col-span-1 md:row-span-1 bg-[#114C5A]/10 border-[#D9E8E2]/5",
    metrics: "< 10ms Cold Start",
    badge: "Scale",
    accentColor: "#D9E8E2"
  }
];

export const workflowSteps = [
  {
    step: "01",
    title: "Ingest Data Streams",
    desc: "Hook up your databases, telemetry streams, or live APIs. NeuroFlow listens to your events in real-time."
  },
  {
    step: "02",
    title: "Orchestrate via AI Agents",
    desc: "Autonomous agents analyze, classify, and decide the routing path based on your custom model prompts."
  },
  {
    step: "03",
    title: "Execute Actions",
    desc: "Workflows run pipelines, write back to target databases, and dispatch webhooks to internal applications."
  },
  {
    step: "04",
    title: "Monitor & Optimize",
    desc: "Track execution times, token costs, and automation success. Refine prompts and paths dynamically."
  }
];

export const testimonials = [
  {
    quote: "NeuroFlow AI cut our manual data entry processes by 92% in under three weeks. The performance isolation and security architecture gave our engineering team full confidence to deploy globally.",
    author: "Sarah Jenkins",
    role: "VP of Product",
    company: "Apex Automations",
    initials: "SJ"
  },
  {
    quote: "The Bento Grid features and local state pricing made evaluating the SaaS solution extremely simple. Setting up custom agent models takes minutes, and cold start times are non-existent.",
    author: "Rohan Gupta",
    role: "Lead Platform Architect",
    company: "SynthFlow AI",
    initials: "RG"
  },
  {
    quote: "With the secure sandbox containers, we migrated all of our automated financial auditing pipelines to NeuroFlow. Their 99.99% uptime guarantee has been flawless.",
    author: "Elena Rostova",
    role: "Chief Information Security Officer",
    company: "GlobalData Group",
    initials: "ER"
  }
];
