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
    title: 'No credits. No limits.',
    description:
      'Cloud AI video tools charge per second of video or per generation. With OpenSora-UI, your GPU — or any rented GPU at provider cost — runs as many jobs as you want, forever. We don\'t sell GPU time. We just make it work.',
    stat: '∞ generations',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'No queue. Instant start.',
    description:
      'Cloud services have processing queues that can make you wait minutes — or hours during peak times. Local means you start the moment you click Generate.',
    stat: '0s wait time',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'No subscription.',
    description:
      'Buy once, use forever. No monthly fees, no seat licenses, no pricing tiers. The license is yours for as long as you need it.',
    stat: 'One-time $29',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.5 5H18l-4.5 3.5 1.5 5.5L10 13l-5 3 1.5-5.5L2 7h5.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Full privacy.',
    description:
      'Your prompts, your videos, your ideas — none of it leaves your machine. We have no telemetry, no analytics, no usage tracking. We genuinely do not know how many videos you\'ve generated. That\'s intentional and permanent.',
    stat: 'Air-gapped capable',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Unlimited runs.',
    description:
      'Test every setting. Iterate fast. Run 50 generations in an afternoon. When your GPU is the only limit, you can experiment freely.',
    stat: 'Your GPU. Your rules.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 7h12M4 10h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M13 13l2-1.5-2-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Models are free. Always.',
    description:
      'Every model OpenSora-UI supports is open-source and downloaded directly from official sources like HuggingFace. You never pay for models. We don\'t sell them. We never will.',
    stat: '$0 for models',
  },
]

const comparison = [
  { label: 'Monthly cost', cloud: '$30–150/mo', local: '$0 after setup' },
  { label: 'Generations', cloud: 'Limited by credits', local: 'Unlimited' },
  { label: 'Privacy', cloud: 'Uploaded to servers', local: 'Never leaves device. Zero telemetry.' },
  { label: 'Queue wait', cloud: '30s – 10min', local: '0 seconds' },
  { label: 'Offline use', cloud: 'Internet required', local: 'Fully offline' },
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
            Why Local
          </span>
          <h2 className="font-syne font-800 text-[36px] md:text-[48px] text-white leading-tight tracking-tight mb-4">
            Own your compute.
          </h2>
          <p className="font-body text-text-muted text-[16px] max-w-[500px] mx-auto leading-relaxed">
            Cloud video generation tools rent you time on hardware you don&apos;t
            own. Local generation means the power is yours.
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
