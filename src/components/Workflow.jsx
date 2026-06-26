import React, { useState } from "react";
import Icon from "./Icon";

export const Workflow = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    { id: "email", label: "Email Ingest", icon: "link", type: "source", pos: "top-left", coords: "12% 20%" },
    { id: "database", label: "Database Stream", icon: "cube-16-solid", type: "source", pos: "bottom-left", coords: "12% 70%" },
    { id: "agent", label: "AI AGENT ORCHESTRATOR", icon: "cog-8-tooth", type: "core", pos: "center", coords: "45% 45%" },
    { id: "crm", label: "CRM Sync", icon: "link-solid", type: "destination", pos: "top-right", coords: "78% 15%" },
    { id: "slack", label: "Slack Alert", icon: "arrow-path", type: "destination", pos: "center-right", coords: "78% 45%" },
    { id: "reports", label: "Reports Dispatch", icon: "chart-pie", type: "destination", pos: "bottom-right", coords: "78% 75%" }
  ];

  return (
    <section id="workflow" className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full forsythia-glow pointer-events-none opacity-20"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-mono text-3xl font-extrabold tracking-tight text-[#F1F6F4] sm:text-5xl">
            AI Execution Canvas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-[#D9E8E2]/70 sm:text-base">
            Trace the live event-driven connection graph. Hover over nodes to inspect data package routes.
          </p>
        </div>

        {/* --- DESKTOP VIEWPORT: INTERACTIVE SVG CANVAS --- */}
        <div className="relative mt-20 hidden lg:block h-[420px] w-full border border-[#D9E8E2]/10 bg-[#114C5A]/5 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          {/* Animated SVG path lines background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 420" preserveAspectRatio="none">
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9932" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFC801" stopOpacity="1" />
                <stop offset="100%" stopColor="#D9E8E2" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Grid Line Deck */}
            <path d="M 0 105 L 1000 105 M 0 210 L 1000 210 M 0 315 L 1000 315 M 250 0 L 250 420 M 500 0 L 500 420 M 750 0 L 750 420" stroke="rgba(217, 232, 226, 0.03)" strokeWidth="1" />

            {/* Source 1 (Email) to Core Agent path */}
            <path 
              d="M 220 105 C 350 105, 350 210, 480 210" 
              fill="none" 
              stroke={hoveredNode === "email" ? "#FFC801" : "rgba(217, 232, 226, 0.1)"} 
              strokeWidth={hoveredNode === "email" ? "2.5" : "1.5"} 
              className={`transition-colors duration-200 ${hoveredNode === "email" ? "animate-dash" : ""}`}
              strokeDasharray={hoveredNode === "email" ? "8 4" : "none"}
            />

            {/* Source 2 (Database) to Core Agent path */}
            <path 
              d="M 220 315 C 350 315, 350 210, 480 210" 
              fill="none" 
              stroke={hoveredNode === "database" ? "#FFC801" : "rgba(217, 232, 226, 0.1)"} 
              strokeWidth={hoveredNode === "database" ? "2.5" : "1.5"} 
              className={`transition-colors duration-200 ${hoveredNode === "database" ? "animate-dash" : ""}`}
              strokeDasharray={hoveredNode === "database" ? "8 4" : "none"}
            />

            {/* Core Agent to Dest 1 (CRM) path */}
            <path 
              d="M 520 210 C 650 210, 650 84, 780 84" 
              fill="none" 
              stroke={hoveredNode === "crm" ? "#FF9932" : "rgba(217, 232, 226, 0.1)"} 
              strokeWidth={hoveredNode === "crm" ? "2.5" : "1.5"} 
              className={`transition-colors duration-200 ${hoveredNode === "crm" ? "animate-dash" : ""}`}
              strokeDasharray={hoveredNode === "crm" ? "8 4" : "none"}
            />

            {/* Core Agent to Dest 2 (Slack) path */}
            <path 
              d="M 520 210 C 650 210, 650 210, 780 210" 
              fill="none" 
              stroke={hoveredNode === "slack" ? "#FF9932" : "rgba(217, 232, 226, 0.1)"} 
              strokeWidth={hoveredNode === "slack" ? "2.5" : "1.5"} 
              className={`transition-colors duration-200 ${hoveredNode === "slack" ? "animate-dash" : ""}`}
              strokeDasharray={hoveredNode === "slack" ? "8 4" : "none"}
            />

            {/* Core Agent to Dest 3 (Reports) path */}
            <path 
              d="M 520 210 C 650 210, 650 336, 780 336" 
              fill="none" 
              stroke={hoveredNode === "reports" ? "#FF9932" : "rgba(217, 232, 226, 0.1)"} 
              strokeWidth={hoveredNode === "reports" ? "2.5" : "1.5"} 
              className={`transition-colors duration-200 ${hoveredNode === "reports" ? "animate-dash" : ""}`}
              strokeDasharray={hoveredNode === "reports" ? "8 4" : "none"}
            />
          </svg>

          {/* Absolute HTML node overlays for premium hover interactions */}
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isCore = node.type === "core";
            
            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ left: node.coords.split(" ")[0], top: node.coords.split(" ")[1] }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-4 cursor-pointer transition-all duration-300 ${
                  isCore
                    ? isHovered
                      ? "border-[#FFC801] bg-[#172B36] w-64 shadow-[0_0_30px_rgba(255,200,1,0.15)] scale-[1.03]"
                      : "border-[#FF9932]/50 bg-[#172B36] w-64 shadow-lg scale-100"
                    : isHovered
                      ? "border-[#FFC801] bg-[#114C5A]/40 w-44 shadow-md scale-[1.03]"
                      : "border-[#D9E8E2]/10 bg-[#172B36]/90 w-44 shadow-sm scale-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl p-2 shrink-0 ${
                    isCore 
                      ? "bg-[#FFC801] text-[#172B36] animate-spin [animation-duration:15s]" 
                      : isHovered 
                        ? "bg-[#FFC801] text-[#172B36]" 
                        : "bg-[#114C5A]/60 text-[#D9E8E2]"
                  }`}>
                    <Icon name={node.icon} className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left font-mono">
                    <div className={`text-[10px] font-bold tracking-wide uppercase ${isCore ? "text-[#FFC801]" : "text-[#F1F6F4]"}`}>
                      {node.label}
                    </div>
                    <div className="text-[8px] text-[#D9E8E2]/40 uppercase tracking-widest font-bold">
                      {node.type === "core" ? "Central Agent" : node.type}
                    </div>
                  </div>
                </div>

                {isCore && (
                  <div className="mt-3 border-t border-[#D9E8E2]/5 pt-2 flex items-center justify-between text-[8px] font-mono text-[#D9E8E2]/50">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      SYSTEM_IDLE
                    </div>
                    <span>NODE_OPS: 14,240/sec</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --- MOBILE VIEWPORT: STACK PIPELINE VIEW --- */}
        <div className="mt-12 flex flex-col gap-6 lg:hidden">
          <div className="rounded-2xl border border-[#D9E8E2]/10 bg-[#114C5A]/5 p-6">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#FFC801] flex items-center gap-2 mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFC801] animate-pulse"></span>
              Central AI Core Node
            </h3>

            <div className="flex flex-col gap-6 relative">
              {/* Ingestion blocks */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#D9E8E2]/8 bg-[#172B36] p-4 font-mono text-xs">
                  <div className="text-[#FF9932] font-bold">EMAIL_INGEST</div>
                  <div className="text-[10px] text-[#D9E8E2]/40 mt-1">trigger: mail_events</div>
                </div>
                <div className="rounded-xl border border-[#D9E8E2]/8 bg-[#172B36] p-4 font-mono text-xs">
                  <div className="text-[#FF9932] font-bold">DB_STREAM</div>
                  <div className="text-[10px] text-[#D9E8E2]/40 mt-1">trigger: query_sync</div>
                </div>
              </div>

              {/* Central flow connector */}
              <div className="flex items-center justify-center py-2">
                <Icon name="cog-8-tooth" className="h-8 w-8 text-[#FFC801] animate-spin [animation-duration:8s]" />
              </div>

              {/* Destination blocks */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-xl border border-[#D9E8E2]/8 bg-[#172B36] p-4 font-mono text-xs">
                  <span className="text-[#D9E8E2]">CRM Sync</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#D9E8E2]/8 bg-[#172B36] p-4 font-mono text-xs">
                  <span className="text-[#D9E8E2]">Slack Alert</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#D9E8E2]/8 bg-[#172B36] p-4 font-mono text-xs">
                  <span className="text-[#D9E8E2]">Reports Dispatch</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Workflow;
