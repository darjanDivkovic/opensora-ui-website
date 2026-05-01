import { Container } from './ui/Container'
import { Section } from './ui/Section'

const neverDoItems = [
  {
    title: 'Charge you more for GPU access.',
    description: 'We show you available providers and their real prices — you compare, you choose, you pay them directly. We never touch that transaction.',
  },
  {
    title: 'Charge you for software you already own.',
    description: 'The version of CloudsForge you purchased is yours, at the price you paid, forever. Future major versions are separate, optional upgrades — never required, never automatic, and your existing version keeps working indefinitely. Optional add-ons exist (like Cloud Queue), but they\'re never required to use what you bought.',
  },
  {
    title: 'Convert your license into a subscription.',
    description: 'CloudsForge Personal is a one-time purchase, and that will not change. We will never retroactively shift purchased licenses to recurring billing or paywall features that were available in the version you bought.',
  },
  {
    title: 'Watermark or interfere with your output.',
    description: 'No logos, no branding, no hidden modifications. What your GPU generates is exactly what you get — unaltered, yours completely.',
  },
  {
    title: 'Use coins, tokens, or credits.',
    description: 'All pricing is straightforward USD. No artificial currencies designed to obscure what you\'re actually spending.',
  },
]

export function NeverDo() {
  return (
    <Section id="never-do" className="py-24 md:py-32">
      <Container>
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em]">
            What We Will Never Do
          </span>
        </div>

        <div className="max-w-[800px] mx-auto">
          <h2 className="font-syne font-800 text-[32px] md:text-[42px] text-white leading-tight tracking-tight text-center mb-12">
            What CloudsForge Will Never Do
          </h2>

          <div className="grid gap-6">
            {neverDoItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-xl border border-white/[0.07] bg-surface/40 hover:bg-surface/60 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                  <span className="font-mono text-[12px] text-accent font-600">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-syne font-700 text-[16px] text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-text-muted text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}