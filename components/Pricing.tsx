"use client";

import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { PricingCard } from './ui/PricingCard'
import { WishlistButton } from './WishlistButton'

const features = [
  { text: 'Full desktop UI application' },
  { text: 'Automatic installer & dependency manager' },
  { text: 'Model library & download manager' },
  { text: 'Job queue with progress tracking' },
  { text: 'Local GPU acceleration (CUDA)' },
  { text: 'Lifetime access — no expiry' },
  { text: 'Free updates for current major version' },
  { text: 'No subscription, ever' },
]

export function Pricing() {
  return (
    <Section id="pricing" className="bg-[#07070c]">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 glow-line" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.03] blur-[120px] rounded-full" />
      </div>

      <Container narrow>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
            Pricing
          </span>
          <h2 className="font-syne font-800 text-[36px] md:text-[48px] text-white leading-tight tracking-tight mb-4">
            Simple pricing.{' '}
            <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="font-body text-text-muted text-[16px] max-w-[420px] mx-auto leading-relaxed">
            One license. One payment. No subscriptions, no per-video fees, no
            seat limits.
          </p>
        </div>

        <PricingCard
          price="$29"
          features={features}
          ctaSlot={
            <div className="space-y-3">
              {/* Wishlist callout */}
              <div className="rounded-xl border border-accent/20 bg-accent/[0.06] p-4">
                <p className="font-mono text-[11px] text-accent text-center uppercase tracking-widest mb-2">
                  Wishlist members get
                </p>
                <div className="flex items-center justify-center gap-6">
                  {[
                    { label: '33% Off', sub: 'Lifetime price' },
                    { label: 'Feature Requests', sub: 'Shape the roadmap' },
                    { label: 'Direct Access', sub: 'Close collaboration' },
                  ].map((p) => (
                    <div key={p.label} className="text-center">
                      <div className="font-syne font-700 text-[13px] text-white">{p.label}</div>
                      <div className="font-mono text-[10px] text-text-dim">{p.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <WishlistButton className="w-full justify-center" />
            </div>
          }
          disclaimer="Models are not included. They are downloaded separately from official sources (HuggingFace, GitHub). Open-Sora is an open-source project by HPC-AI Tech."
        />

        {/* Trust line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: '⭐', text: '33% off — founding members only' },
            { icon: '💬', text: 'Request features directly' },
            { icon: '♾️', text: 'Lifetime license when ready' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-[14px]">{item.icon}</span>
              <span className="font-mono text-[12px] text-text-muted">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </Section>
  )
}
