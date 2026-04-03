import { Container } from './ui/Container'
import { Section } from './ui/Section'

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Unlimited generations',
    description:
      'No credits, no generation limits. You pay for GPU time by the hour at provider rates. Run 50 jobs or 5 — the cost is transparent and direct.',
    stat: 'Pay per hour',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Real GPU prices',
    description:
      'RunPod and Vast.ai publish their rates. We show you those rates unmodified. We don\'t take a commission, referral fee, or markup. Our job is to connect you, not profit from the connection.',
    stat: 'No markups',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'One-time $49',
    description:
      'Pay once, use forever. No monthly fees, no seat licenses, no pricing tiers. The license is yours permanently.',
    stat: 'Lifetime access',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.5 5H18l-4.5 3.5 1.5 5.5L10 13l-5 3 1.5-5.5L2 7h5.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: 'No data collection',
    description:
      'Your prompts, your videos, your ideas — none of it reaches us. No telemetry, no analytics, no usage tracking.',
    stat: 'Zero telemetry',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Multi-instance parallelism',
    description:
      'Run jobs across multiple cloud instances simultaneously. The job queue handles routing automatically.',
    stat: 'Parallel jobs',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 7h12M4 10h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M13 13l2-1.5-2-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Free open-source models',
    description:
      'Open-Sora, Wan, Mochi, HunyuanVideo — all open-source, downloaded directly from HuggingFace. You never pay for the models themselves.',
    stat: '$0 for models',
  },
]

const comparison = [
  { label: 'Monthly cost', cloud: '$30–150/mo', local: '$0 after one-time $49' },
  { label: 'Generations', cloud: 'Limited by credits', local: 'Unlimited (pay GPU time only)' },
  { label: 'Privacy', cloud: 'Uploaded to servers', local: 'Never sent to us. Zero telemetry.' },
  { label: 'Queue wait', cloud: '30s–10min (platform queue)', local: 'Your GPU, your queue' },
  { label: 'Offline use', cloud: 'Internet required', local: 'Internet required (GPU is remote)' },
  { label: 'Customization', cloud: 'Platform presets', local: 'Full control' },
  { label: 'GPU cost', cloud: 'Marked up in credits', local: 'Native provider pricing' },
  { label: 'Model cost', cloud: 'Bundled into subscription', local: 'Free (open-source)' },
]

export function WhyLocal() {
  return (
    <Section id="why-local">
      <Container>
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
            Skip the Platform Tax
          </span>
          <h2 className="font-syne font-800 text-[36px] md:text-[48px] text-white leading-tight tracking-tight mb-4">
            Rent GPU at cost.
          </h2>
          <p className="font-body text-text-muted text-[16px] max-w-[500px] mx-auto leading-relaxed">
            Cloud AI video tools like Runway and Kling buy GPU time in bulk and resell it to you — marked up, credit-gated, and subscription-locked. OpenSora-UI connects directly to providers like RunPod and Vast.ai so you pay their actual rate and keep full control.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="card-hover group p-6 rounded-xl border border-white/[0.07] bg-surface/40"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-accent">{b.icon}</div>
                <span className="font-mono text-[11px] text-accent/70 bg-accent/[0.07] border border-accent/15 px-2.5 py-1 rounded-md">
                  {b.stat}
                </span>
              </div>
              <h3 className="font-syne font-700 text-[15px] text-white mb-2">
                {b.title}
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="max-w-[760px] mx-auto rounded-2xl border border-white/[0.07] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-surface/80 border-b border-white/[0.06]">
            <div className="px-6 py-4">
              <span className="font-mono text-[11px] text-text-dim uppercase tracking-widest">
                Comparison
              </span>
            </div>
            <div className="px-6 py-4 border-l border-white/[0.06] text-center">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">
                Cloud Tools
              </span>
            </div>
            <div className="px-6 py-4 border-l border-white/[0.06] text-center">
              <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
                OpenSora-UI
              </span>
            </div>
          </div>

          {comparison.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 ${
                i < comparison.length - 1 ? 'border-b border-white/[0.04]' : ''
              } hover:bg-white/[0.01] transition-colors`}
            >
              <div className="px-6 py-4">
                <span className="font-body text-sm text-text-muted">{row.label}</span>
              </div>
              <div className="px-6 py-4 border-l border-white/[0.04] text-center">
                <span className="font-mono text-[12px] text-text-dim">{row.cloud}</span>
              </div>
              <div className="px-6 py-4 border-l border-white/[0.04] text-center">
                <span className="font-mono text-[12px] text-accent">{row.local}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
