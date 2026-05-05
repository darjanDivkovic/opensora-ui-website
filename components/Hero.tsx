"use client";

import Image from "next/image";
import { BuyButton } from "./BuyButton";
import { Lightning } from "./ui/Lightning";

export function Hero() {
  return (
    <section className="relative sm:min-h-screen flex flex-col items-center sm:justify-center pt-[80px] pb-12  sm:pb-0 overflow-hidden mt-[66px]">
      {/* Lightning shader (background) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <Lightning
          color1={[0.831, 0.365, 0.075]}
          color2={[0.953, 0.737, 0.278]}
          speed={0.2}
          intensity={0.15}
          size={1.2}
          xOffset={0}
        />
      </div>

      {/* Generated-video ambient grid (flanking the UI mockup, plays on hover) */}
      <div className="absolute inset-0 pointer-events-none z-[2] hidden lg:block opacity-45">
        {/* Left cluster */}
        <div className="absolute left-[8%] top-[65%] w-[12%] aspect-[3/4] rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60 pointer-events-auto">
          <video
            src="/videos/gen-2.mp4"
            poster="/videos/gen-2.jpg"
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={(e) => {
              // Swallow AbortError — fires when the user hovers out before play() resolves.
              e.currentTarget.play().catch(() => {});
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-[1%] top-[82%] w-[10%] aspect-square rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60 pointer-events-auto">
          <video
            src="/videos/gen-3.mp4"
            poster="/videos/gen-3.jpg"
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={(e) => {
              // Swallow AbortError — fires when the user hovers out before play() resolves.
              e.currentTarget.play().catch(() => {});
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right cluster — mirrored positions */}
        <div className="absolute right-[8%] top-[65%] w-[12%] aspect-[3/4] rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60 pointer-events-auto">
          <video
            src="/videos/gen-1.mp4"
            poster="/videos/gen-1.jpg"
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={(e) => {
              // Swallow AbortError — fires when the user hovers out before play() resolves.
              e.currentTarget.play().catch(() => {});
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-[1%] top-[82%] w-[10%] aspect-square rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60 pointer-events-auto">
          <video
            src="/videos/gen-4.mp4"
            poster="/videos/gen-4.jpg"
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={(e) => {
              // Swallow AbortError — fires when the user hovers out before play() resolves.
              e.currentTarget.play().catch(() => {});
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Edge fade so tiles dissolve into the section bg, never hard-edge against the viewport */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060609] via-transparent to-[#060609] opacity-50 pointer-events-none" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.05] blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-accent-2/[0.06] blur-[80px] rounded-full" />
      </div>

      {/* Reading scrim — soft dark vignette so text reads cleanly over the bolt */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            "radial-gradient(ellipse 55% 42% at 50% 38%, rgba(6,6,9,0.88) 0%, rgba(6,6,9,0.6) 45%, rgba(6,6,9,0) 78%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] px-6 md:px-8 mt-16 text-center">
        {/* Logo */}
        <div className="animate-fade-in flex justify-center mb-6 sm:mb-8">
          <Image
            src="/logo-nobg.png"
            alt="CloudsForge"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up delay-100 font-syne font-800 text-[28px] md:text-[44px] lg:text-[48px] text-white leading-[1.12] tracking-[-0.025em] mb-4 sm:mb-12 max-w-[980px] mx-auto">
          Want to generate videos <br /> with{" "}
          <span className="gradient-text">Open-Source models</span>{" "}
          <span className="opacity-60">
            but don&apos;t have the GPU or the ability to set them up?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-200 font-body text-[16px] md:text-[16px] opacity-70 leading-relaxed max-w-[720px] mx-auto mb-6 sm:mb-10">
          CloudsForge is a desktop app that rents you a cloud GPU and configures
          everything in a couple of clicks. You run state-of-the-art open-source
          video models at the GPU provider&apos;s rate
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-5 sm:mb-8">
          <BuyButton />
        </div>

        {/* Trust line */}
        <div className="animate-fade-in delay-400 flex flex-wrap items-center justify-center gap-3 text-text-muted">
          {[
            "You own what you buy",
            "Multi-cloud, multi-model",
            "Zero telemetry",
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
        <div className="animate-fade-up delay-500 mt-[250px] relative mx-auto max-w-[900px] hidden sm:block">
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060609] to-transparent pointer-events-none" />
    </section>
  );
}
