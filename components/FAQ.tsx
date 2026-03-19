import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { FAQItem } from './ui/FAQItem'

const faqs = [
  {
    question: 'Is this Open-Sora?',
    answer:
      'No. Open-Sora is an open-source AI video generation model developed by HPC-AI Tech. OpenSora-UI is a completely separate commercial product — a graphical desktop application that makes it easier to install and run Open-Sora and other open-source models on your own computer. We are not affiliated with HPC-AI Tech.',
  },
  {
    question: 'Do I need a GPU?',
    answer:
      'Yes. AI video generation is computationally intensive and requires a CUDA-capable NVIDIA GPU. We recommend a minimum of 8 GB VRAM for smaller models (Open-Sora at lower resolutions), and 16–24 GB VRAM for larger models like HunyuanVideo or high-resolution generation. AMD GPU support via ROCm is experimental.',
  },
  {
    question: 'Does the license include the models?',
    answer:
      'No. The $29 license covers the OpenSora-UI application only — the installer, the interface, and the model manager. The actual AI models (Open-Sora, Wan, Mochi, etc.) are open-source and free, and are downloaded directly from their official sources (HuggingFace, GitHub) through the app. You never pay for the models themselves.',
  },
  {
    question: 'Is this a subscription?',
    answer:
      'No. OpenSora-UI is a one-time purchase. You pay once and own the license permanently. There are no monthly fees, no usage limits, no seat charges, and no renewal required. Updates within the current major version are free.',
  },
  {
    question: 'Can I use it completely offline?',
    answer:
      'Yes, once you have downloaded the models you want to use, OpenSora-UI works entirely offline. There is no internet connection required for generation. The only time internet is needed is for downloading models — and that uses official public sources (HuggingFace).',
  },
  {
    question: 'Is this legal to use?',
    answer:
      'Yes. All models supported by OpenSora-UI are open-source projects released under permissive licenses (Apache 2.0, etc.) that explicitly allow personal and commercial use. OpenSora-UI itself is a commercial software wrapper. Always check the specific license of each model for your use case, particularly for commercial output.',
  },
  {
    question: 'What operating systems are supported?',
    answer:
      'OpenSora-UI supports Windows 10/11 (x64) with NVIDIA GPU. macOS and Linux support is in active development. All platforms require an NVIDIA CUDA-capable GPU. Metal (Apple Silicon) support is planned for a future release.',
  },
  {
    question: 'What if I need help or find a bug?',
    answer:
      'We provide documentation, a GitHub issues tracker for bug reports, and direct email support for license holders. We actively maintain the software and release updates to keep pace with new model versions and upstream changes.',
  },
  {
    question: 'Can I use a rented GPU instead of my own?',
    answer:
      "Yes. OpenSora-UI works with any CUDA-capable GPU, including rented instances from providers like Vast.ai, RunPod, or Lambda Labs. You pay the provider directly at their published rates — we're not involved in that transaction at all. We don't mark up GPU time, take a commission, or even know which provider you use. Rates vary but can be as low as $0.09/hr for capable hardware.",
  },
  {
    question: 'Do you track how many videos I generate or collect any usage data?',
    answer:
      'No. There is no telemetry in OpenSora-UI. We do not track generation counts, prompt content, video output, model usage, or anything else. Once the app is running, it operates entirely on your machine. We have no server that receives data from your installation. This is not a policy that might change — the app is architecturally incapable of sending this data because we never built the infrastructure to receive it.',
  },
]

export function FAQ() {
  return (
    <Section id="faq">
      <Container narrow>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
            FAQ
          </span>
          <h2 className="font-syne font-800 text-[36px] md:text-[48px] text-white leading-tight tracking-tight mb-4">
            Common questions.
          </h2>
          <p className="font-body text-text-muted text-[16px] max-w-[440px] mx-auto leading-relaxed">
            Everything you need to know before purchasing. More in the docs.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 rounded-xl border border-white/[0.07] bg-surface/40">
          <h3 className="font-syne font-700 text-[18px] text-white mb-2">
            Still have questions?
          </h3>
          <p className="font-body text-sm text-text-muted mb-5">
            Check the documentation or reach out directly.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text transition-colors border border-white/[0.07] hover:border-white/[0.12] px-5 py-2.5 rounded-lg hover:bg-white/[0.03]"
            >
              Read the docs
            </a>
            <a
              href="mailto:support@opensora-ui.com"
              className="inline-flex items-center gap-2 font-body text-sm text-accent hover:text-accent/80 transition-colors border border-accent/25 hover:border-accent/40 bg-accent/[0.07] hover:bg-accent/[0.1] px-5 py-2.5 rounded-lg"
            >
              Contact support
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
