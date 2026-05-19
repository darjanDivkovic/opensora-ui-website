import Image from "next/image";

export function MockupShowcase() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="relative mx-auto max-w-[900px] hidden sm:block">
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 to-transparent pointer-events-none" />
          <div className="absolute -inset-8 bg-accent/[0.03] blur-3xl rounded-3xl pointer-events-none" />

          {/* Window frame */}
          <div className="relative rounded-2xl border border-white/[0.09] bg-[#0a0a0a] overflow-hidden shadow-2xl shadow-black/60">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-[#0d0d0d]">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  <Image
                    src="/logo.png"
                    alt="CloudsForge"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 rounded-sm"
                  />
                  <span className="font-mono text-[11px] text-text-muted">
                    CloudsForge
                  </span>
                </div>
              </div>
            </div>

            {/* App layout */}
            <div className="flex" style={{ height: "460px" }}>
              {/* Sidebar */}
              <div className="w-[200px] border-r border-white/[0.06] bg-[#050505] p-4 flex flex-col gap-4 flex-shrink-0 text-left">
                {/* Brand mark */}
                <div className="flex items-center gap-2 pb-3 border-b border-white/[0.05]">
                  <Image
                    src="/logo.png"
                    alt="CloudsForge"
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-md"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="font-syne font-700 text-[12px] text-white tracking-tight">
                      Clouds<span className="text-accent">Forge</span>
                    </span>
                    <span className="font-mono text-[8px] text-text-dim tracking-[0.25em] mt-0.5">
                      STUDIO
                    </span>
                  </div>
                </div>

                {/* Workspace */}
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] text-text-dim uppercase tracking-widest mb-1 px-2">
                    Workspace
                  </span>
                  {["Generate", "Jobs", "Gallery"].map((name) => (
                    <div
                      key={name}
                      className="px-2 py-1.5 rounded-md font-body text-[12px] text-text-muted"
                    >
                      {name}
                    </div>
                  ))}
                </div>

                {/* Compute */}
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] text-text-dim uppercase tracking-widest mb-1 px-2">
                    Compute
                  </span>
                  <div className="px-2 py-1.5 rounded-md bg-accent/10 border border-accent/20 font-body text-[12px] text-accent flex items-center justify-between">
                    <span>Cloud GPUs</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <div className="px-2 py-1.5 rounded-md font-body text-[12px] text-text-muted flex items-center gap-1.5">
                    Spending
                    <span className="font-mono text-[8px] px-1 py-0.5 rounded bg-white/[0.05] text-text-dim tracking-widest">
                      BETA
                    </span>
                  </div>
                </div>

                {/* System */}
                <div className="flex flex-col gap-0.5 mt-auto">
                  <span className="font-mono text-[9px] text-text-dim uppercase tracking-widest mb-1 px-2">
                    System
                  </span>
                  <div className="px-2 py-1.5 rounded-md font-body text-[12px] text-text-muted">
                    Settings
                  </div>
                </div>
              </div>

              {/* Main area */}
              <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden text-left">
                {/* Provider tabs */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-white/[0.03] border border-white/[0.06] w-fit mx-auto">
                  <div className="px-4 py-1 rounded-md bg-white/[0.07] border border-white/[0.06] font-body text-[12px] text-white">
                    RunPod
                  </div>
                  <div className="px-4 py-1 font-body text-[12px] text-text-muted">
                    Vast.ai
                  </div>
                </div>

                {/* API key row */}
                <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                  <span className="font-mono text-[9px] text-text-dim uppercase tracking-widest">
                    API Key
                  </span>
                  <span className="flex-1 font-mono text-[12px] text-text-muted tracking-[0.2em]">
                    ••••••••••••
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                {/* Choose a model */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-4 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-mono text-[9px] text-accent">
                      1
                    </span>
                    <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest">
                      Choose a model
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {
                        name: "HunyuanVideo",
                        res: "720p",
                        vram: "80 GB",
                        recommended: true,
                      },
                      {
                        name: "Wan2.1",
                        res: "720p",
                        vram: "48 GB",
                        recommended: false,
                      },
                      {
                        name: "Open-Sora v2",
                        res: "1080p",
                        vram: "80 GB",
                        recommended: false,
                      },
                    ].map((m) => (
                      <div
                        key={m.name}
                        className={`rounded-lg border p-2.5 ${
                          m.recommended
                            ? "bg-accent/[0.06] border-accent/25"
                            : "bg-white/[0.02] border-white/[0.06]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-syne font-700 text-[11px] text-white">
                            {m.name}
                          </span>
                          {m.recommended && (
                            <span className="font-mono text-[7px] text-accent uppercase tracking-widest px-1 py-0.5 rounded bg-accent/15 border border-accent/25">
                              Best
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[9px] text-text-dim">
                          <span>{m.res}</span>
                          <span className="opacity-50">·</span>
                          <span>{m.vram}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pick a GPU */}
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-4 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-mono text-[9px] text-accent">
                      2
                    </span>
                    <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest">
                      Pick a GPU
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: "NVIDIA A100", spec: "80 GB", price: "$1.39" },
                      { name: "NVIDIA H100", spec: "80 GB", price: "$2.99" },
                      { name: "NVIDIA H200", spec: "141 GB", price: "$3.99" },
                    ].map((g) => (
                      <div
                        key={g.name}
                        className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-5 rounded bg-gradient-to-br from-[#F3BC47]/40 to-[#D45D13]/5 border border-[#76b900]/25 opacity-25" />
                          <div>
                            <div className="font-body text-[11px] text-white font-500 leading-none mb-1">
                              {g.name}
                            </div>
                            <div className="flex items-center gap-1.5 font-mono text-[9px] text-text-dim">
                              <span>{g.spec}</span>
                              <span className="opacity-50">·</span>
                              <span className="text-accent/80">BEST</span>
                            </div>
                          </div>
                        </div>
                        <div className="font-syne font-700 text-[13px] text-white">
                          {g.price}
                          <span className="font-mono text-[9px] text-text-dim font-400 ml-0.5">
                            /hr
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel - Active Instances */}
              <div className="w-[180px] border-l border-white/[0.06] bg-[#050505] p-4 flex flex-col flex-shrink-0 text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest">
                    Active Instances
                  </span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-text-dim"
                  >
                    <path
                      d="M3 8a5 5 0 019-3M13 8a5 5 0 01-9 3M11 5h2V3M5 11H3v2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center px-1">
                  <div className="w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center mb-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-text-dim"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="12"
                        height="8"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                      <line
                        x1="5.5"
                        y1="13.5"
                        x2="10.5"
                        y2="13.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="font-body text-[11px] text-text-muted leading-snug mb-1.5">
                    No active instances
                  </p>
                  <p className="font-mono text-[9px] text-text-dim leading-relaxed">
                    Rent a GPU to
                    <br />
                    spin one up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
