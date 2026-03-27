import React from 'react'

interface PricingFeature {
  text: string
}

interface PricingCardProps {
  price: string
  period?: string
  features: PricingFeature[]
  ctaSlot: React.ReactNode
  disclaimer?: string
}

export function PricingCard({
  price,
  period,
  features,
  ctaSlot,
  disclaimer,
}: PricingCardProps) {
  return (
    <div className="relative mx-auto max-w-[460px] rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-md overflow-hidden">
      {/* Glow at top */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent/[0.06] blur-3xl rounded-full pointer-events-none" />

      <div className="relative p-8 md:p-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          <span className="font-mono text-[11px] text-accent tracking-widest uppercase">
            One-Time Purchase
          </span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="font-syne text-[64px] font-800 text-white leading-none">
              {price}
            </span>
            {period && (
              <span className="font-body text-text-muted text-sm">{period}</span>
            )}
          </div>
          <p className="font-body text-text-muted text-sm mt-1">
            Pay once. Use forever.
          </p>
        </div>

        {/* Divider */}
        <div className="glow-line mb-6" />

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-accent flex-shrink-0"
              >
                <path
                  d="M3 8l3.5 3.5L13 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-body text-sm text-text">{f.text}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {ctaSlot}

        {/* Disclaimer */}
        {disclaimer && (
          <p className="font-mono text-[11px] text-text-muted text-center mt-4 leading-relaxed">
            {disclaimer}
          </p>
        )}
      </div>
    </div>
  )
}
