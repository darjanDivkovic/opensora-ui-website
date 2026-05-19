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

      {/* Generated-video ambient grid (flanking the centerpiece, plays on hover) */}
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

        {/* Motion graphics video — click to play with sound (Vimeo default behaviour) */}
        <div className="animate-fade-up delay-500 mt-16 sm:mt-[250px] relative mx-auto max-w-[900px]">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 to-transparent pointer-events-none" />
          <div className="absolute -inset-8 bg-accent/[0.03] blur-3xl rounded-3xl pointer-events-none" />

          <div className="relative rounded-2xl border border-white/[0.09] bg-black overflow-hidden shadow-2xl shadow-black/60 aspect-video">
            <iframe
              src="https://player.vimeo.com/video/1193693889"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              loading="lazy"
              title="CloudsForge motion graphics"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060609] to-transparent pointer-events-none" />
    </section>
  );
}
