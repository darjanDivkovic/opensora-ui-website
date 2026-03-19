import { Container } from './ui/Container'

const cards = [
  {
    visual: '~$0.09 / hr',
    title: 'Rent GPU at native prices',
    body: "Use your own hardware, or rent from providers like Vast.ai or RunPod at rates like $0.09/hr. OpenSora-UI connects directly. We don't touch the transaction, mark up the cost, or take a cut.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 5V4a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9" cy="10" r="1.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    visual: '$0',
    title: 'Open-source models, always free',
    body: 'HunyuanVideo, Wan T2V, Mochi, Open-Sora — all open-source, all free, downloaded straight from HuggingFace. One click in the model manager. No licence fees, no paywalls, no surprises.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2l2.3 4.6L16 7.6l-3.5 3.4.8 4.8L9 13.5l-4.3 2.3.8-4.8L2 7.6l4.7-.9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    visual: '$29 once',
    title: 'One payment. No further charges.',
    body: "$29 gets you the application. That's the only money we ever ask for. No seat licences, no renewal, no \"pro tier\". The licence is yours permanently.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 8h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6 12h2M11 12h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function VsCloud() {
  return (
    <section className="relative py-24 bg-[#04040a] border-y border-white/[0.06]">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/[0.04] blur-[100px] rounded-full" />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
            vs. cloud tools
          </span>
          <h2 className="font-syne font-800 text-[32px] md:text-[44px] text-white leading-tight tracking-tight mb-4 max-w-[640px] mx-auto">
            Stop paying the subscription tax.
          </h2>
          <p className="font-body text-text-muted text-[16px] max-w-[560px] mx-auto leading-relaxed">
            Runway, Kling, Pika, and Sora all rent you access to hardware you
            don&apos;t own and charge per generation. OpenSora-UI flips that
            model entirely.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative group p-6 rounded-xl border border-white/[0.07] bg-surface/40 hover:border-accent/20 transition-colors"
            >
              {/* Icon row */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-accent">{card.icon}</div>
                {/* Large visual cue */}
                <span className="font-syne font-800 text-[22px] text-accent tracking-tight">
                  {card.visual}
                </span>
              </div>

              <h3 className="font-syne font-700 text-[15px] text-white mb-2">
                {card.title}
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
