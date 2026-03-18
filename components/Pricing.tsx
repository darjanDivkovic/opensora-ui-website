import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { PricingCard } from './ui/PricingCard'

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
          ctaText="Buy License"
          ctaHref="#"
          disclaimer="Models are not included. They are downloaded separately from official sources (HuggingFace, GitHub). Open-Sora is an open-source project by HPC-AI Tech."
        />

        {/* Trust line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: '🔒', text: 'Secure checkout' },
            { icon: '📦', text: 'Instant delivery' },
            { icon: '♾️', text: 'Lifetime license' },
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
