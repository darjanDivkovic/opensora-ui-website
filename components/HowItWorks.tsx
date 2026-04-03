import { Container } from './ui/Container'
import { Section } from './ui/Section'

const steps = [
  {
    number: '01',
    title: 'Install OpenSora-UI',
    description:
      'Download the app for your platform. Run it once.',
    detail: 'Windows · macOS · Linux',
  },
  {
    number: '02',
    title: 'Add your cloud API keys',
    description:
      'Enter your RunPod or Vast.ai API key. OpenSora-UI shows you available GPUs at their real published prices — you compare and choose.',
    detail: 'RunPod · Vast.ai',
  },
  {
    number: '03',
    title: 'Rent a GPU & let us set it up',
    description:
      'Pick a GPU offer. One click starts the instance and automatically installs everything: conda environment, dependencies, and model weights (Open-Sora v2 or Wan2.1). Real-time progress shown in the app.',
    detail: 'Automated setup · No terminal',
  },
  {
    number: '04',
    title: 'Generate video',
    description:
      'Write your prompt (or upload a reference image for Image-to-Video). Hit Generate. Your rented GPU does the work. Download your video. Terminate the instance when done.',
    detail: 'Runs on your rented GPU. You pay the provider directly.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-[#07070c]">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 glow-line" />

      <Container>
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
            How It Works
          </span>
          <h2 className="font-syne font-800 text-[36px] md:text-[48px] text-white leading-tight tracking-tight">
            Up and running{' '}
            <span className="gradient-text">in minutes.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[1px]">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative group">
                {/* Step number indicator */}
                <div className="relative mb-6 flex lg:justify-center">
                  <div className="w-[52px] h-[52px] rounded-xl border border-white/[0.1] bg-surface/80 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/[0.05] transition-all duration-300">
                    <span className="font-mono font-500 text-[13px] text-text-muted group-hover:text-accent transition-colors">
                      {step.number}
                    </span>
                  </div>
                  {/* Connector dot */}
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full border border-white/[0.1] bg-surface last:hidden" />
                </div>

                {/* Content */}
                <div className="lg:text-center">
                  <h3 className="font-syne font-700 text-[16px] text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <span className="font-mono text-[11px] text-text-dim">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA after steps */}
        <div className="mt-20 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 font-body text-sm text-accent hover:text-accent/80 transition-colors group"
          >
            Get started for $49
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="group-hover:translate-x-0.5 transition-transform"
            >
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
      </Container>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </Section>
  )
}
