"use client";

import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { BuyButton } from "./BuyButton";

// Studio tier is hidden for now. Set this to true to bring it back.
const SHOW_STUDIO = false;

const personalFeatures = [
  "Desktop app for Windows, macOS, Linux",
  "Multi-cloud GPU integration (RunPod, Vast.ai, more coming)",
  "All current open-source video models (Open-Sora v2, Wan2.1, more)",
  "Image, audio, and fine-tuning support as added (within current major version)",
  "Job queue with real-time log streaming",
  "Video gallery with download",
  "Lifetime access to current major version",
  "Free updates within current major version",
  "Future major versions: optional paid upgrade (~$29 for existing license holders)",
  "No subscription, ever",
];

const studioFeatures = [
  "Everything in Personal",
  "SSO and team management",
  "Shared prompt libraries and workflows",
  "Multi-user job queue",
  "Audit logs",
  "Priority email support with SLA",
  "All major version upgrades included while subscribed",
];

const cloudQueueFeatures = [
  "Always-on hosted job runner",
  "Schedule generations while you’re away from your machine",
  "100% optional — the desktop app is fully functional without it",
  "Your prompts and outputs still never reach us; we only manage job lifecycle",
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-accent flex-shrink-0 mt-[3px]"
      aria-hidden
    >
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" className="bg-[#07070c]">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 glow-line" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] bg-accent/[0.03] blur-[120px] rounded-full" />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
            Pricing
          </span>
          <h2 className="font-syne font-800 text-[36px] md:text-[48px] text-white leading-tight tracking-tight mb-4">
            Simple pricing. <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="font-body text-text-muted text-[16px] max-w-[480px] mx-auto leading-relaxed">
            Pay once. Own it forever. No subscription, no markups, no
            telemetry.
          </p>
        </div>

        {/* Tier grid */}
        <div
          className={`grid gap-5 lg:gap-6 mx-auto ${
            SHOW_STUDIO ? "lg:grid-cols-2 max-w-[1000px]" : "max-w-[520px]"
          }`}
        >
          {/* ── Personal ── */}
          <div className="relative rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-md overflow-hidden">
            {/* Highlight glow */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent/[0.07] blur-3xl rounded-full pointer-events-none" />

            <div className="relative p-8 md:p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                <span className="font-mono text-[11px] text-accent tracking-widest uppercase">
                  One-Time · Personal
                </span>
              </div>

              <h3 className="font-syne font-800 text-[22px] text-white mb-1">
                Personal
              </h3>
              <p className="font-body text-text-muted text-sm mb-5">
                Pay once. Own it forever.
              </p>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-syne text-[64px] font-800 text-white leading-none">
                  $59
                </span>
                <span className="font-body text-text-muted text-sm">
                  one-time
                </span>
              </div>

              {/* Divider */}
              <div className="glow-line mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {personalFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-body text-sm text-text leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <BuyButton className="w-full justify-center" />
            </div>
          </div>

          {/* ── Studio (hidden via SHOW_STUDIO flag) ── */}
          {SHOW_STUDIO && (
          <div className="relative rounded-2xl border border-white/[0.08] bg-surface/40 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent-2/40 to-transparent" />

            <div className="relative p-8 md:p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-2/30 bg-accent-2/[0.08] mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-2" />
                <span className="font-mono text-[11px] text-accent-2 tracking-widest uppercase">
                  Annual · Studio
                </span>
              </div>

              <h3 className="font-syne font-800 text-[22px] text-white mb-1">
                Studio
              </h3>
              <p className="font-body text-text-muted text-sm mb-5">
                For teams that ship.
              </p>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-syne text-[64px] font-800 text-white leading-none">
                  $299
                </span>
                <span className="font-body text-text-muted text-sm">
                  / year per seat
                </span>
              </div>

              {/* Divider */}
              <div className="glow-line mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {studioFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-body text-sm text-text leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="mailto:darren@cloudsforge.com?subject=CloudsForge%20Studio%20access"
                className="w-full inline-flex items-center justify-center gap-2 font-body font-600 text-[14px] px-5 py-3 rounded-lg border border-accent-2/40 text-accent-2 hover:bg-accent-2/10 transition-colors"
              >
                Get Studio access
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          )}
        </div>

        {/* Why notes */}
        <div
          className={`mx-auto mt-10 grid gap-4 ${
            SHOW_STUDIO ? "max-w-[760px] md:grid-cols-2" : "max-w-[520px]"
          }`}
        >
          {SHOW_STUDIO && (
            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <h5 className="font-syne font-700 text-[13px] text-white mb-2">
                Why a Studio tier?
              </h5>
              <p className="font-body text-[13px] text-text-muted leading-relaxed">
                Personal pricing isn&apos;t changing. Studio is a different
                product for teams who need shared resources, SSO, and a support
                SLA. If you&apos;re an individual, ignore it.
              </p>
            </div>
          )}
          <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <h5 className="font-syne font-700 text-[13px] text-white mb-2">
              Why paid major versions?
            </h5>
            <p className="font-body text-[13px] text-text-muted leading-relaxed">
              Maintaining CloudsForge across a moving open-source ecosystem is
              real ongoing work. Major version upgrades fund that work without
              subscriptions or markups. Your current version is always yours.
            </p>
          </div>
        </div>

        {/* Footnote */}
        <p className="font-mono text-[11px] text-text-muted text-center mt-8 leading-relaxed max-w-[640px] mx-auto">
          Models are not included. They are downloaded separately from official
          sources (HuggingFace, GitHub).
        </p>

        {/* Trust line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "💬", text: "Request features directly" },
            { icon: "♾️", text: "Lifetime Personal license" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-[14px]">{item.icon}</span>
              <span className="font-mono text-[12px] text-text-muted">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </Section>
  );
}
