import { Container } from './ui/Container'
import { Section } from './ui/Section'
import { FeatureCard } from './ui/FeatureCard'

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2v5M6 4l3-2 3 2M4 9h10M6 13l3 3 3-3M9 11v5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'One-Click Install',
    description:
      'No conda, no pip conflicts, no CUDA headaches. The installer handles all dependencies and environment configuration automatically.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 9h6M9 6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Model Manager',
    description:
      'Browse, download, and switch between Open-Sora, Wan, Mochi, HunyuanVideo, and more from a unified library view.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 5h12M3 9h8M3 13h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="14" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Job Queue',
    description:
      'Queue multiple generation jobs and let them run back-to-back. Track progress, cancel jobs, and review history — all in one place.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 5V4a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 8v3M7.5 9.5L9 8l1.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Local GPU Acceleration',
    description:
      'Full CUDA support out of the box. OpenSora-UI automatically detects your GPU and configures optimal settings for your hardware.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 4h14v10H2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M5 7h8M5 10h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Clean Interface',
    description:
      'Prompt, settings, preview, queue — everything is exactly where you expect it. Designed for repeated daily use, not just demos.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 14.5L4 16M12.5 14.5L14 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fully Offline',
    description:
      'Once models are downloaded, nothing phones home. No analytics, no license checks, no cloud dependency. Your GPU, your data, your control.',
  },
]

export function Features() {
  return (
    <Section id="features">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
            Features
          </span>
          <h2 className="font-syne font-800 text-[36px] md:text-[48px] text-white leading-tight tracking-tight mb-4">
            Everything you need.{' '}
            <span className="text-text-muted">Nothing you don&apos;t.</span>
          </h2>
          <p className="font-body text-text-muted text-[16px] max-w-[520px] mx-auto leading-relaxed">
            OpenSora-UI is purpose-built for running open-source video models
            locally — not adapted from something else.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
