import React, { useState, useEffect } from "react";
import Icon from "./Icon";

export const Workflow = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [opsCount, setOpsCount] = useState(14240);

  // Live ticking central operations counter
  useEffect(() => {
    const interval = setInterval(() => {
      setOpsCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { 
      id: "email", 
      label: "Email Ingest", 
      icon: "link", 
      type: "source", 
      coords: "12% 20%",
      status: "STREAMING",
      metric: "Active Connection"
    },
    { 
      id: "database", 
      label: "Database Stream", 
      icon: "cube-16-solid", 
      type: "source", 
      coords: "12% 72%",
      status: "SYNC_OK",
      metric: "99.9% Connected"
    },
    { 
      id: "agent", 
      label: "AI CORE AGENT", 
      icon: "cog-8-tooth", 
      type: "core", 
      coords: "46% 46%",
      status: "ACTIVE",
      metric: "Orchestrator Node"
    },
    { 
      id: "crm", 
      label: "CRM Sync", 
      icon: "link-solid", 
      type: "destination", 
      coords: "78% 18%",
      status: "DISPATCHED",
      metric: "99.98% Deliver"
    },
    { 
      id: "slack", 
      label: "Slack Alert", 
      icon: "arrow-path", 
      type: "destination", 
      coords: "78% 46%",
      status: "COMPLETED",
      metric: "Latency < 8ms"
    },
    { 
      id: "reports", 
      label: "Reports Dispatch", 
      icon: "chart-pie", 
      type: "destination", 
      coords: "78% 74%",
      status: "STANDBY",
      metric: "12.4k Disp/hr"
    }
  ];

  return (
    <section id="workflow" className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      {/* Background blueprint details and drifting particles */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      {/* Soft slow drifting blueprint particles */}
      <div className="absolute top-[15%] left-[20%] h-48 w-48 rounded-full bg-[#FFC801]/3 filter blur-3xl pointer-events-none animate-drift-1"></div>
      <div className="absolute bottom-[20%] right-[25%] h-56 w-56 rounded-full bg-[#114C5A]/10 filter blur-3xl pointer-events-none animate-drift-2"></div>
      <div className="absolute top-1/2 left-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full forsythia-glow pointer-events-none opacity-[0.08] filter blur-[150px]"></div>

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
        <div className="relative mt-20 hidden lg:block h-[440px] w-full border border-[#D9E8E2]/12 bg-[#114C5A]/5 rounded-3xl overflow-hidden shadow-[inset_0_0_80px_rgba(0,0,0,0.6),0_25px_60px_rgba(0,0,0,0.55)]">
          
          {/* Subtle vignette border highlights */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>

          {/* Animated SVG path lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 440" preserveAspectRatio="none">
            <defs>
              <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFC801" />
                <stop offset="100%" stopColor="#FF9932" />
              </linearGradient>
            </defs>

            {/* Grid Line Deck */}
            <path d="M 0 110 L 1000 110 M 0 220 L 1000 220 M 0 330 L 1000 330 M 250 0 L 250 440 M 500 0 L 500 440 M 750 0 L 750 440" stroke="rgba(217, 232, 226, 0.02)" strokeWidth="1" />

            {/* Path 1: Source 1 (Email) to Core Agent */}
            {/* Inactive Line base */}
            <path d="M 230 110 C 360 110, 360 220, 460 220" fill="none" stroke="rgba(217, 232, 226, 0.08)" strokeWidth="2" />
            {/* Flow line indicator */}
            <path 
              d="M 230 110 C 360 110, 360 220, 460 220" 
              fill="none" 
              stroke={hoveredNode === "email" || hoveredNode === "agent" || !hoveredNode ? "#FFC801" : "rgba(217, 232, 226, 0.15)"} 
              strokeWidth={hoveredNode === "email" ? "3" : "2"} 
              className={`transition-all duration-200 ${(!hoveredNode || hoveredNode === "email" || hoveredNode === "agent") ? "animate-dash-flow opacity-100" : "opacity-30"}`}
            />

            {/* Path 2: Source 2 (Database) to Core Agent */}
            <path d="M 230 330 C 360 330, 360 220, 460 220" fill="none" stroke="rgba(217, 232, 226, 0.08)" strokeWidth="2" />
            <path 
              d="M 230 330 C 360 330, 360 220, 460 220" 
              fill="none" 
              stroke={hoveredNode === "database" || hoveredNode === "agent" || !hoveredNode ? "#FFC801" : "rgba(217, 232, 226, 0.15)"} 
              strokeWidth={hoveredNode === "database" ? "3" : "2"} 
              className={`transition-all duration-200 ${(!hoveredNode || hoveredNode === "database" || hoveredNode === "agent") ? "animate-dash-flow opacity-100" : "opacity-30"}`}
            />

            {/* Path 3: Core Agent to Dest 1 (CRM) */}
            <path d="M 460 220 C 580 220, 580 88, 780 88" fill="none" stroke="rgba(217, 232, 226, 0.08)" strokeWidth="2" />
            <path 
              d="M 460 220 C 580 220, 580 88, 780 88" 
              fill="none" 
              stroke={hoveredNode === "crm" || hoveredNode === "agent" || !hoveredNode ? "#FF9932" : "rgba(217, 232, 226, 0.15)"} 
              strokeWidth={hoveredNode === "crm" ? "3" : "2"} 
              className={`transition-all duration-200 ${(!hoveredNode || hoveredNode === "crm" || hoveredNode === "agent") ? "animate-dash-flow opacity-100" : "opacity-30"}`}
            />

            {/* Path 4: Core Agent to Dest 2 (Slack) */}
            <path d="M 460 220 C 580 220, 580 220, 780 220" fill="none" stroke="rgba(217, 232, 226, 0.08)" strokeWidth="2" />
            <path 
              d="M 460 220 C 580 220, 580 220, 780 220" 
              fill="none" 
              stroke={hoveredNode === "slack" || hoveredNode === "agent" || !hoveredNode ? "#FF9932" : "rgba(217, 232, 226, 0.15)"} 
              strokeWidth={hoveredNode === "slack" ? "3" : "2"} 
              className={`transition-all duration-200 ${(!hoveredNode || hoveredNode === "slack" || hoveredNode === "agent") ? "animate-dash-flow opacity-100" : "opacity-30"}`}
            />

            {/* Path 5: Core Agent to Dest 3 (Reports) */}
            <path d="M 460 220 C 580 220, 580 352, 780 352" fill="none" stroke="rgba(217, 232, 226, 0.08)" strokeWidth="2" />
            <path 
              d="M 460 220 C 580 220, 580 352, 780 352" 
              fill="none" 
              stroke={hoveredNode === "reports" || hoveredNode === "agent" || !hoveredNode ? "#FF9932" : "rgba(217, 232, 226, 0.15)"} 
              strokeWidth={hoveredNode === "reports" ? "3" : "2"} 
              className={`transition-all duration-200 ${(!hoveredNode || hoveredNode === "reports" || hoveredNode === "agent") ? "animate-dash-flow opacity-100" : "opacity-30"}`}
            />
          </svg>

          {/* Absolute HTML node overlays for premium hover interactions */}
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isCore = node.type === "core";
            
            // Dim matrix for visual focus
            const isDimmed = hoveredNode && hoveredNode !== node.id && !(node.id === "agent" || hoveredNode === "agent");

            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ left: node.coords.split(" ")[0], top: node.coords.split(" ")[1] }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-5 cursor-pointer transition-all duration-200 ease-out select-none ${
                  isCore
                    ? isHovered
                      ? "border-[#FFC801] bg-[#172B36] w-72 shadow-[0_0_40px_rgba(255,200,1,0.25)] scale-[1.03] animate-border-shimmer"
                      : "border-[#FF9932]/40 bg-[#172B36] w-72 shadow-[0_15px_35px_rgba(0,0,0,0.5)] scale-100 animate-border-shimmer"
                    : isHovered
                      ? "border-[#FFC801] bg-[#114C5A]/50 w-48 shadow-[0_0_20px_rgba(255,200,1,0.15)] scale-[1.03] -translate-y-1"
                      : "border-[#D9E8E2]/12 bg-[#172B36]/90 w-48 shadow-lg scale-100"
                } ${isDimmed ? "opacity-35 scale-[0.97]" : "opacity-100"}`}
              >
                {/* OS Glow backplane spot inside central core agent */}
                {isCore && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC801]/3 to-transparent pointer-events-none rounded-2xl"></div>
                )}

                <div className="flex items-center gap-3.5 relative z-10">
                  {/* Icon container */}
                  <div className={`rounded-xl p-2.5 shrink-0 ${
                    isCore 
                      ? "bg-[#FFC801] text-[#172B36] animate-spin [animation-duration:15s]" 
                      : isHovered 
                        ? "bg-[#FFC801] text-[#172B36]" 
                        : "bg-[#114C5A]/60 text-[#D9E8E2]"
                  }`}>
                    <Icon name={node.icon} className="h-4.5 w-4.5" />
                  </div>

                  {/* Labels and headings */}
                  <div className="text-left font-mono">
                    <div className="text-[8px] text-[#D9E8E2]/40 uppercase tracking-widest font-extrabold mb-0.5">
                      {node.type === "core" ? "Central Agent" : node.type}
                    </div>
                    <div className={`text-xs font-bold tracking-tight ${isCore ? "text-[#FFC801]" : "text-[#F1F6F4]"}`}>
                      {node.label}
                    </div>
                  </div>
                </div>

                {/* Internal card parameters */}
                {isCore ? (
                  <div className="mt-4 border-t border-[#D9E8E2]/8 pt-3 relative z-10">
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#D9E8E2]/60">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-heartbeat"></span>
                        <span className="text-emerald-400 font-bold uppercase tracking-wider">PROCESSING</span>
                      </div>
                      <span className="bg-[#114C5A]/50 px-2 py-0.5 rounded border border-[#D9E8E2]/10 text-emerald-400 font-bold">ONLINE</span>
                    </div>

                    {/* Operational telemetry rows */}
                    <div className="mt-3 flex items-center justify-between text-[9px] font-mono">
                      <div className="flex items-center gap-1">
                        <span className="text-[#D9E8E2]/40">OPS:</span>
                        <span className="font-extrabold text-[#F1F6F4]">{opsCount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[#FF9932]">LOAD:</span>
                        <span className="font-extrabold text-[#FFC801]">42 rps</span>
                      </div>
                    </div>

                    {/* Micro loading status indicator */}
                    <div className="mt-2.5 w-full bg-[#114C5A]/40 h-1 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FFC801] to-[#FF9932] rounded-full animate-pulse" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 border-t border-[#D9E8E2]/6 pt-2 flex items-center justify-between text-[8px] font-mono text-[#D9E8E2]/40">
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>{node.status}</span>
                    </div>
                    <span className="text-[#FFC801] font-bold">{node.metric}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --- MOBILE VIEWPORT: STACK PIPELINE VIEW --- */}
        <div className="mt-12 flex flex-col gap-6 lg:hidden">
          <div className="rounded-2xl border border-[#D9E8E2]/10 bg-[#114C5A]/5 p-6 relative overflow-hidden shadow-lg">
            
            {/* Window header controls on mobile stack too */}
            <div className="flex items-center justify-between border-b border-[#D9E8E2]/5 pb-3 mb-5">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801]/30"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF9932]/30"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9E8E2]/30"></span>
              </div>
              <span className="font-mono text-[7px] text-[#D9E8E2]/30">MOBILE_CANVAS</span>
            </div>

            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#FFC801] flex items-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FFC801] animate-heartbeat"></span>
              Central AI Core Node
            </h3>

            <div className="flex flex-col gap-6 relative">
              {/* Ingestion blocks */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#D9E8E2]/10 bg-[#172B36] p-4 font-mono text-xs shadow-sm">
                  <div className="text-[#FF9932] font-bold">EMAIL_INGEST</div>
                  <div className="text-[9px] text-[#D9E8E2]/40 mt-1">trigger: mail_events</div>
                </div>
                <div className="rounded-xl border border-[#D9E8E2]/10 bg-[#172B36] p-4 font-mono text-xs shadow-sm">
                  <div className="text-[#FF9932] font-bold">DB_STREAM</div>
                  <div className="text-[9px] text-[#D9E8E2]/40 mt-1">trigger: query_sync</div>
                </div>
              </div>

              {/* Central flow connector */}
              <div className="flex items-center justify-center py-2">
                <Icon name="cog-8-tooth" className="h-8 w-8 text-[#FFC801] animate-spin [animation-duration:8s]" />
              </div>

              {/* Destination blocks */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-xl border border-[#D9E8E2]/10 bg-[#172B36] p-4 font-mono text-xs shadow-sm">
                  <span className="text-[#D9E8E2] font-bold">CRM Sync</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#D9E8E2]/10 bg-[#172B36] p-4 font-mono text-xs shadow-sm">
                  <span className="text-[#D9E8E2] font-bold">Slack Alert</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#D9E8E2]/10 bg-[#172B36] p-4 font-mono text-xs shadow-sm">
                  <span className="text-[#D9E8E2] font-bold">Reports Dispatch</span>
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
