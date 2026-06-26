import React, { useState, useEffect } from "react";
import Icon from "./Icon";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("pipelines");
  const [timestamp, setTimestamp] = useState("15:18:29");
  const [logs, setLogs] = useState([
    { id: 1, time: "15:18:12", event: "Agent node-3 loaded workspace configurations", status: "success" },
    { id: 2, time: "15:18:15", event: "Ingested 2,420 records from Database Sync", status: "success" },
    { id: 3, time: "15:18:22", event: "AI Agent completed reasoning path for workflow-9", status: "success" },
    { id: 4, time: "15:18:29", event: "Dispatched webhook trigger to CRM automation", status: "success" }
  ]);

  // Simulate streaming real-time console log feeds & timestamp updating
  useEffect(() => {
    const timer = setInterval(() => {
      const timeStr = new Date().toTimeString().split(" ")[0];
      setTimestamp(timeStr);

      const events = [
        "Ingested stream payload from ApexAPI gateway",
        "Agent node-3 resolved custom tool-calling schema",
        "Flushed query logs to isolated security vault container",
        "Serverless worker auto-scaled: active nodes = 18",
        "Anomaly detection audit: 0 critical flags raised",
        "Rotated encryption key for security_vault_9",
        "CRM database sync successfully verified"
      ];
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      
      setLogs((prev) => [
        { id: Date.now(), time: timeStr, event: randomEvent, status: "success" },
        ...prev.slice(0, 3)
      ]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="dashboard" className="w-full bg-[#172B36] py-24 relative overflow-hidden border-t border-[#D9E8E2]/5">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full gradient-glow pointer-events-none opacity-[0.06] filter blur-[100px]"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-mono text-3xl font-extrabold tracking-tight text-[#F1F6F4] sm:text-5xl">
            Telemetry Console
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-[#D9E8E2]/70 sm:text-base">
            Live-feeling serverless metrics, container telemetry, and cluster operations audits.
          </p>
        </div>

        {/* --- DYNAMIC TELEMETRY CARDS (TOP ROW) --- */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* CARD 1: Latency Sparkline */}
          <div className="group rounded-2xl border border-[#D9E8E2]/10 bg-[#114C5A]/10 p-6 flex flex-col justify-between h-40 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_15px_30px_rgba(255,200,1,0.08)] hover:border-[#FFC801]/40">
            <div>
              <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-[#D9E8E2]/40">Pipeline Latency</span>
              <div className="font-mono text-3xl font-extrabold text-[#F1F6F4] mt-1">120ms</div>
              <span className="font-sans text-[9px] text-[#D9E8E2]/55 mt-0.5 block">Avg: 120ms (Target: &lt;300ms)</span>
            </div>
            {/* Custom SVG Sparkline with live animation wave */}
            <div className="h-10 w-full mt-3 relative overflow-hidden">
              <svg className="h-full w-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path d="M 0 25 Q 15 5, 30 18 T 60 12 T 90 4 T 100 15" fill="none" stroke="rgba(255,200,1,0.15)" strokeWidth="1.5" />
                <path d="M 0 25 Q 15 5, 30 18 T 60 12 T 90 4 T 100 15" fill="none" stroke="#FFC801" strokeWidth="1.5" className="animate-dash-flow" />
                <path d="M 0 25 Q 15 5, 30 18 T 60 12 T 90 4 T 100 15 L 100 30 L 0 30 Z" fill="url(#latencyGrad)" />
                <circle cx="100" cy="15" r="1.5" fill="#FFC801" className="animate-ping" />
              </svg>
            </div>
          </div>

          {/* CARD 2: Token Swarms Bar-indicator */}
          <div className="group rounded-2xl border border-[#D9E8E2]/10 bg-[#114C5A]/10 p-6 flex flex-col justify-between h-40 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_15px_30px_rgba(255,200,1,0.08)] hover:border-[#FFC801]/40">
            <div>
              <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-[#D9E8E2]/40">Active Swarm Rates</span>
              <div className="font-mono text-3xl font-extrabold text-[#FFC801] mt-1">14.8k <span className="text-xs text-[#D9E8E2]/40">/min</span></div>
              <span className="font-sans text-[9px] text-[#D9E8E2]/55 mt-0.5 block">Nodes scaled to 18 workers</span>
            </div>
            {/* Custom Mini Bar Grid with live equalizer pulse */}
            <div className="flex items-end gap-1.5 h-10 w-full mt-3">
              <div className="flex-1 bg-[#FFC801]/30 rounded-t h-4 transition-all duration-300 animate-pulse [animation-duration:1.2s]"></div>
              <div className="flex-1 bg-[#FFC801]/60 rounded-t h-7 transition-all duration-300 animate-pulse [animation-duration:0.8s] [animation-delay:0.2s]"></div>
              <div className="flex-1 bg-[#FFC801]/40 rounded-t h-5 transition-all duration-300 animate-pulse [animation-duration:1.5s] [animation-delay:0.1s]"></div>
              <div className="flex-1 bg-[#FF9932] rounded-t h-9 transition-all duration-300 animate-pulse [animation-duration:1s] [animation-delay:0.4s]"></div>
              <div className="flex-1 bg-[#FFC801] rounded-t h-6 transition-all duration-300 animate-pulse [animation-duration:1.3s] [animation-delay:0.3s]"></div>
            </div>
          </div>

          {/* CARD 3: Circular Uptime */}
          <div className="group rounded-2xl border border-[#D9E8E2]/10 bg-[#114C5A]/10 p-6 flex items-center justify-between h-40 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_15px_30px_rgba(255,200,1,0.08)] hover:border-[#FFC801]/40">
            <div className="flex flex-col justify-between h-full py-0.5">
              <div>
                <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-[#D9E8E2]/40">System Uptime</span>
                <div className="font-mono text-3xl font-extrabold text-[#F1F6F4] mt-1">99.99%</div>
              </div>
              <span className="font-sans text-[9px] text-[#D9E8E2]/55">30-day window verified</span>
            </div>
            {/* Rotating Progress Ring indicator */}
            <div className="relative h-16 w-16 shrink-0">
              <svg className="h-full w-full transform -rotate-90 animate-spin [animation-duration:15s]" viewBox="0 0 36 36">
                <path className="text-[#114C5A]" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-[#FFC801]" strokeDasharray="99.99, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-[#FFC801] font-bold">ONLINE</div>
            </div>
          </div>

          {/* CARD 4: Circular Accuracy */}
          <div className="group rounded-2xl border border-[#D9E8E2]/10 bg-[#114C5A]/10 p-6 flex items-center justify-between h-40 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_15px_30px_rgba(255,200,1,0.08)] hover:border-[#FFC801]/40">
            <div className="flex flex-col justify-between h-full py-0.5">
              <div>
                <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-[#D9E8E2]/40">AI Agent Accuracy</span>
                <div className="font-mono text-3xl font-extrabold text-[#FF9932] mt-1">99.9%</div>
              </div>
              <span className="font-sans text-[9px] text-[#D9E8E2]/55">Zero anomaly flags</span>
            </div>
            {/* Custom SVG Circular Progress Ring */}
            <div className="relative h-16 w-16 shrink-0">
              <svg className="h-full w-full transform -rotate-90 animate-pulse" viewBox="0 0 36 36">
                <path className="text-[#114C5A]" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-[#FF9932]" strokeDasharray="99.9, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-[#FF9932] font-bold">STABLE</div>
            </div>
          </div>

        </div>

        {/* --- DOCK PANEL MONITOR --- */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#D9E8E2]/12 bg-[#172B36]/50 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          
          {/* Telemetry Header */}
          <div className="flex flex-col gap-4 border-b border-[#D9E8E2]/10 bg-[#114C5A]/15 px-6 py-4.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC801] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC801]"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#F1F6F4] font-bold">
                CLUSTER_STATUS: <span className="text-[#FFC801]">STABLE_HEALTH</span>
              </span>
            </div>

            {/* Segmented controls tab switcher */}
            <div className="flex bg-[#172B36]/80 p-1 rounded-xl border border-[#D9E8E2]/8 self-start">
              <button
                className={`rounded-lg px-4.5 py-1.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                  activeTab === "pipelines"
                    ? "bg-[#FFC801] text-[#172B36] shadow-sm"
                    : "text-[#D9E8E2]/60 hover:text-[#F1F6F4]"
                }`}
                onClick={() => setActiveTab("pipelines")}
              >
                Telemetry
              </button>
              <button
                className={`rounded-lg px-4.5 py-1.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                  activeTab === "logs"
                    ? "bg-[#FFC801] text-[#172B36] shadow-sm"
                    : "text-[#D9E8E2]/60 hover:text-[#F1F6F4]"
                }`}
                onClick={() => setActiveTab("logs")}
              >
                Console Logs
              </button>
            </div>
          </div>

          {/* Console Body */}
          <div className="grid grid-cols-1 divide-y divide-[#D9E8E2]/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {/* Column 1 & 2: Large Telemetry Graph or Console logs */}
            <div className="p-6 sm:p-8 lg:col-span-2">
              {activeTab === "pipelines" ? (
                <div>
                  <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D9E8E2]/55">
                    Live Operations Stream (Token Rate / min)
                  </h3>
                  
                  {/* Custom SVG Line Chart with Oscilliscope Scan Line */}
                  <div className="relative mt-6 h-60 w-full overflow-hidden rounded-xl border border-[#D9E8E2]/5 bg-[#114C5A]/5">
                    <svg className="h-full w-full absolute inset-0" viewBox="0 0 600 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFC801" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#FFC801" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Grid Lines */}
                      <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(217, 232, 226, 0.02)" strokeWidth="1" />
                      <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(217, 232, 226, 0.02)" strokeWidth="1" />
                      <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(217, 232, 226, 0.02)" strokeWidth="1" />

                      {/* Area Gradient */}
                      <path
                        d="M0 200 L0 150 C50 135, 100 168, 150 115 C200 60, 250 145, 300 85 C350 25, 400 105, 450 65 C500 25, 550 95, 600 35 L600 200 Z"
                        fill="url(#chartGlow)"
                      />

                      {/* Path Line */}
                      <path
                        d="M0 150 C50 135, 100 168, 150 115 C200 60, 250 145, 300 85 C350 25, 400 105, 450 65 C500 25, 550 95, 600 35"
                        fill="none"
                        stroke="#FFC801"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />

                      {/* Live moving scanline traversing across the chart */}
                      <line x1="0" y1="0" x2="0" y2="200" stroke="#FFC801" strokeWidth="1.5" className="animate-scan-line" strokeDasharray="3 3" />

                      {/* Pulsing latest node point */}
                      <circle cx="600" cy="35" r="4" fill="#FFC801" />
                      <circle cx="600" cy="35" r="8" fill="#FFC801" className="animate-ping opacity-60" />

                      {/* Live stamp line */}
                      <line x1="600" y1="0" x2="600" y2="200" stroke="rgba(255, 153, 50, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>

                    {/* Chart tooltip highlight */}
                    <div className="absolute right-4 top-4 rounded border border-[#FF9932]/30 bg-[#172B36]/90 px-2.5 py-1 text-center font-mono text-[9px] text-[#F1F6F4] shadow-md z-10">
                      <div className="text-[#FF9932] font-bold">14,800 tpm</div>
                      <div className="text-[#D9E8E2]/50 text-[7px] font-bold uppercase tracking-wider">Node Enclave 3</div>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-[#D9E8E2]/40 font-bold uppercase tracking-widest">
                    <span>15:10 UTC</span>
                    <span>15:14 UTC</span>
                    <span className="text-[#FF9932] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF9932] animate-pulse"></span>
                      {timestamp} UTC (LIVE)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3 font-mono text-xs">
                  <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D9E8E2]/55 mb-2">
                    Cluster System Event Terminal
                  </h3>
                  {logs.map((log) => (
                    <div
                      key={log.id}
                      className="flex items-start gap-4 rounded-xl bg-[#114C5A]/10 p-3.5 border border-[#D9E8E2]/5 transition-colors duration-150 hover:bg-[#114C5A]/25"
                    >
                      <span className="text-[#FF9932] shrink-0 font-bold">[{log.time}]</span>
                      <span className="text-[#D9E8E2] flex-1">{log.event}</span>
                      <span className="text-[#FFC801] font-extrabold shrink-0 text-[10px]">OK</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Column 3: Stats Details / Node Status */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D9E8E2]/55">
                  Cluster Node Topology
                </h3>
                
                {/* Node Topologies with premium hovers */}
                <div className="mt-6 flex flex-col gap-4">
                  <div className="group flex items-center justify-between rounded-xl bg-[#114C5A]/10 p-4 border border-[#D9E8E2]/5 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:border-[#FFC801]/30">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-[#FF9932]/10 p-2 text-[#FF9932] transition-transform duration-200 group-hover:scale-105">
                        <Icon name="cog-8-tooth" className="h-5 w-5" />
                      </div>
                      <div className="text-left font-mono">
                        <div className="text-xs font-bold text-[#F1F6F4] group-hover:text-[#FFC801] transition-colors duration-150">agent_node_3</div>
                        <div className="font-sans text-[9px] text-[#D9E8E2]/40 font-bold uppercase tracking-wider mt-0.5">GPT-4o, Claude 3.5</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-md bg-[#FFC801]/10 px-2 py-0.5 font-mono text-[9px] text-[#FFC801] font-bold border border-[#FFC801]/25">
                      <span className="h-1 w-1 rounded-full bg-[#FFC801] animate-ping"></span>
                      ONLINE
                    </span>
                  </div>

                  <div className="group flex items-center justify-between rounded-xl bg-[#114C5A]/10 p-4 border border-[#D9E8E2]/5 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:border-[#FFC801]/30">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-[#FFC801]/10 p-2 text-[#FFC801] transition-transform duration-200 group-hover:rotate-45">
                        <Icon name="arrow-path" className="h-5 w-5" />
                      </div>
                      <div className="text-left font-mono">
                        <div className="text-xs font-bold text-[#F1F6F4] group-hover:text-[#FFC801] transition-colors duration-150">db_sync_master</div>
                        <div className="font-sans text-[9px] text-[#D9E8E2]/40 font-bold uppercase tracking-wider mt-0.5">Postgres, MongoDB</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-md bg-[#FFC801]/10 px-2 py-0.5 font-mono text-[9px] text-[#FFC801] font-bold border border-[#FFC801]/25">
                      <span className="h-1 w-1 rounded-full bg-[#FFC801] animate-ping"></span>
                      SYNCED
                    </span>
                  </div>

                  <div className="group flex items-center justify-between rounded-xl bg-[#114C5A]/10 p-4 border border-[#D9E8E2]/5 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:border-[#FFC801]/30">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-[#D9E8E2]/10 p-2 text-[#D9E8E2] transition-transform duration-200 group-hover:scale-105">
                        <Icon name="cube-16-solid" className="h-5 w-5 animate-pulse" />
                      </div>
                      <div className="text-left font-mono">
                        <div className="text-xs font-bold text-[#F1F6F4] group-hover:text-[#FFC801] transition-colors duration-150">security_vault_9</div>
                        <div className="font-sans text-[9px] text-[#D9E8E2]/40 font-bold uppercase tracking-wider mt-0.5">AES_256 SECURE</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-md bg-[#D9E8E2]/10 px-2 py-0.5 font-mono text-[9px] text-[#D9E8E2] font-bold border border-[#D9E8E2]/25">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D9E8E2] animate-pulse"></span>
                      ENCRYPT
                    </span>
                  </div>
                </div>
              </div>

              {/* Configure Trigger Button */}
              <div className="mt-8 border-t border-[#D9E8E2]/10 pt-6">
                <a
                  href="#pricing"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[#D9E8E2]/15 bg-[#114C5A]/30 py-3 font-sans text-xs font-bold uppercase tracking-wider text-[#F1F6F4] transition-all duration-200 hover:bg-[#D9E8E2]/5 hover:border-[#FFC801]/40 hover:shadow-[0_0_20px_rgba(255,200,1,0.15)] hover:scale-[1.01]"
                >
                  Configure Orchestration Node 
                  <Icon name="chevron-right" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
