import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative sm:min-h-screen flex flex-col items-center sm:justify-center pt-[80px] pb-12 sm:pt-[64px] sm:pb-0 overflow-hidden mt-[7%]">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.05] blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-accent-2/[0.06] blur-[80px] rounded-full" />
      </div>

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/[0.07] mb-5 sm:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase">
            Local · Open-Source · GPU Powered
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up delay-100 font-syne font-800 text-[38px] md:text-[72px] lg:text-[88px] text-white leading-[1.06] tracking-[-0.03em] mb-4 sm:mb-6 max-w-[900px] mx-auto">
          Run AI Video <span className="gradient-text">Generation.</span>
          <br />
          <span className="text-white">Own It</span>{" "}
          <span className="text-text-dim">Completely.</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-200 font-body text-[16px] md:text-[19px] text-text-muted leading-relaxed max-w-[600px] mx-auto mb-6 sm:mb-10">
          OpenSora-UI is a desktop app that runs open-source video models on
          your GPU — or any rented GPU at native cost. No subscriptions. No
          credit limits. No data collection. Ever.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-5 sm:mb-8">
          <Button variant="primary" size="lg" href="#pricing">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2v9M4.5 7.5L8 11l3.5-3.5M2 13h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download
          </Button>
          <Button variant="secondary" size="lg" href="#pricing">
            Buy License — $29
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            GitHub
          </Button>
        </div>

        {/* Trust line */}
        <div className="animate-fade-in delay-400 flex flex-wrap items-center justify-center gap-3 text-text-muted">
          {[
            "Pay once · $29",
            "Rent GPU at native cost (~$0.09/hr)",
            "Zero data. Zero telemetry.",
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-text-dim" />}
              <span className="font-mono text-[12px] tracking-wide">
                {item}
              </span>
            </span>
          ))}
        </div>

        {/* UI Mockup */}
        <div className="animate-fade-up delay-500 mt-16 relative mx-auto max-w-[900px] hidden sm:block">
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 to-transparent pointer-events-none" />
          <div className="absolute -inset-8 bg-accent/[0.03] blur-3xl rounded-3xl pointer-events-none" />

          {/* Window frame */}
          <div className="relative rounded-2xl border border-white/[0.09] bg-[#0a0a12] overflow-hidden shadow-2xl shadow-black/60">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-[#0d0d18]">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  <div className="w-2 h-2 rounded-full bg-accent/60" />
                  <span className="font-mono text-[11px] text-text-muted">
                    OpenSora-UI
                  </span>
                </div>
              </div>
            </div>

            {/* App layout */}
            <div className="flex" style={{ height: "400px" }}>
              {/* Sidebar */}
              <div className="w-[220px] border-r border-white/[0.06] bg-[#08080f] p-4 flex flex-col gap-2 flex-shrink-0">
                <div className="mb-2">
                  <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest">
                    Models
                  </span>
                </div>
                {[
                  { name: "Open-Sora v1.2", active: true, size: "14.2 GB" },
                  { name: "Wan T2V", active: false, size: "8.7 GB" },
                  { name: "Mochi 1", active: false, size: "19.1 GB" },
                  { name: "HunyuanVideo", active: false, size: "22.4 GB" },
                ].map((m) => (
                  <div
                    key={m.name}
                    className={`flex items-center justify-between p-2.5 rounded-lg text-left ${
                      m.active
                        ? "bg-accent/10 border border-accent/20"
                        : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <div>
                      <div
                        className={`font-body text-[12px] font-500 ${m.active ? "text-accent" : "text-text-muted"}`}
                      >
                        {m.name}
                      </div>
                      <div className="font-mono text-[10px] text-text-dim mt-0.5">
                        {m.size}
                      </div>
                    </div>
                    {m.active && (
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="flex-1 p-5 flex flex-col gap-4">
                {/* Prompt */}
                <div>
                  <label className="font-mono text-[11px] text-text-dim uppercase tracking-widest block mb-2">
                    Prompt
                  </label>
                  <div className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-body text-sm text-text-muted">
                    A cinematic shot of a futuristic city at night, neon
                    lights...
                    <span className="cursor-blink inline-block w-[2px] h-[14px] bg-accent ml-0.5 align-middle" />
                  </div>
                </div>

                {/* Settings row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Resolution", value: "1280×720" },
                    { label: "Frames", value: "120" },
                    { label: "Steps", value: "50" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      <div className="font-mono text-[10px] text-text-dim uppercase tracking-widest mb-1">
                        {s.label}
                      </div>
                      <div className="font-syne font-700 text-[15px] text-white">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* GPU stats */}
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest">
                      GPU Memory
                    </span>
                    <span className="font-mono text-[11px] text-accent">
                      10.2 / 24 GB
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                      style={{ width: "42%" }}
                    />
                  </div>
                </div>

                {/* Generate button */}
                <div className="mt-auto flex items-center gap-3">
                  <div className="flex-1 h-10 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[12px] text-accent">
                      Generating... 47%
                    </span>
                  </div>
                  <div className="h-10 w-10 rounded-lg border border-white/[0.08] flex items-center justify-center text-text-muted">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect
                        x="4"
                        y="4"
                        width="8"
                        height="8"
                        rx="1.5"
                        fill="currentColor"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right panel - queue */}
              <div className="w-[180px] border-l border-white/[0.06] bg-[#08080f] p-4 flex-shrink-0">
                <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest block mb-3">
                  Queue
                </span>
                <div className="space-y-2">
                  {[
                    { id: "#001", status: "done", pct: 100 },
                    { id: "#002", status: "running", pct: 47 },
                    { id: "#003", status: "pending", pct: 0 },
                  ].map((job) => (
                    <div
                      key={job.id}
                      className="rounded-lg border border-white/[0.06] p-2.5"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[11px] text-text-muted">
                          {job.id}
                        </span>
                        <span
                          className={`font-mono text-[10px] ${
                            job.status === "done"
                              ? "text-accent"
                              : job.status === "running"
                                ? "text-[#ffbd2e]"
                                : "text-text-dim"
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            job.status === "done"
                              ? "bg-accent"
                              : job.status === "running"
                                ? "bg-[#ffbd2e]"
                                : "bg-white/10"
                          }`}
                          style={{ width: `${job.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060609] to-transparent pointer-events-none" />
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
