import { Container } from './ui/Container'
import { Section } from './ui/Section'

const terminalLines = [
  { prompt: '$', text: 'conda create -n opensora python=3.10', type: 'cmd' },
  { prompt: '$', text: 'conda activate opensora', type: 'cmd' },
  { prompt: '$', text: 'pip install torch==2.1.0+cu121 --extra-index-url ...', type: 'cmd' },
  { prompt: '', text: 'Collecting torch==2.1.0+cu121', type: 'output' },
  { prompt: '', text: 'Downloading torch-2.1.0+cu121... [━━━━━━━━━━  ] 47%', type: 'progress' },
  { prompt: '$', text: 'pip install -r requirements.txt', type: 'cmd' },
  { prompt: '', text: 'ERROR: Dependency conflict: transformers 4.36.2 requires ...', type: 'error' },
  { prompt: '$', text: 'pip install transformers==4.35.0 --force-reinstall', type: 'cmd' },
  { prompt: '', text: '... 23 more packages ...', type: 'dim' },
  { prompt: '$', text: 'python -m opensora.train --config configs/opensora/train/64x512x512.py', type: 'cmd' },
  { prompt: '', text: 'CUDA error: no kernel image is available for execution', type: 'error' },
]

export function Problem() {
  return (
    <Section id="problem" className="py-24 md:py-32">
      <Container>
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em]">
            The Problem
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Terminal - The Old Way */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ff5f57]/10 border border-[#ff5f57]/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
              <span className="font-mono text-[11px] text-[#ff5f57] tracking-wide uppercase">
                Without OpenSora-UI
              </span>
            </div>

            <h2 className="font-syne font-800 text-[32px] md:text-[38px] text-white leading-tight tracking-tight mb-4">
              Running Open-Sora{' '}
              <span className="text-text-muted">is unnecessarily hard.</span>
            </h2>
            <p className="font-body text-text-muted text-[15px] leading-relaxed mb-8">
              Before you can generate a single frame, you&apos;re stuck configuring
              conda environments, resolving CUDA version mismatches, chasing
              dependency conflicts, and deciphering multi-page install guides.
            </p>

            <div className="flex flex-wrap gap-2">
              {['conda', 'CUDA 12.1', 'pip conflicts', 'PyTorch', 'CUDA drivers', '40+ dependencies'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Terminal window */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#ff5f57]/[0.03] blur-2xl rounded-2xl pointer-events-none" />
            <div className="relative rounded-xl border border-white/[0.08] bg-[#0a0a10] overflow-hidden font-mono text-[12px]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0d0d14]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
                </div>
                <span className="text-text-dim text-[11px] ml-2">
                  bash — opensora-install
                </span>
              </div>

              {/* Lines */}
              <div className="p-5 space-y-1.5 leading-relaxed">
                {terminalLines.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    {line.prompt && (
                      <span className="text-accent flex-shrink-0 select-none">
                        {line.prompt}
                      </span>
                    )}
                    <span
                      className={
                        line.type === 'error'
                          ? 'text-[#ff5f57]'
                          : line.type === 'progress'
                          ? 'text-[#ffbd2e]'
                          : line.type === 'dim'
                          ? 'text-text-dim'
                          : line.type === 'output'
                          ? 'text-text-muted'
                          : 'text-text'
                      }
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
                <div className="flex gap-3 mt-3">
                  <span className="text-accent">$</span>
                  <span className="text-text-dim">
                    <span className="cursor-blink inline-block w-[7px] h-[13px] bg-text-dim align-middle" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connector arrow */}
        <div className="flex items-center justify-center my-16">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-accent/40" />
            <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/25">
              <span className="font-mono text-[12px] text-accent tracking-wider">
                There&apos;s a better way
              </span>
            </div>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-accent/40" />
          </div>
        </div>

        {/* Solution preview */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <div className="rounded-xl border border-white/[0.08] bg-surface/60 overflow-hidden">
            <div className="border-b border-white/[0.06] px-5 py-4 flex items-center justify-between">
              <span className="font-mono text-[11px] text-text-dim uppercase tracking-widest">
                Install process
              </span>
              <span className="font-mono text-[11px] text-accent">✓ Done</span>
            </div>
            <div className="p-5 space-y-3">
              {[
                { step: '01', label: 'Download OpenSora-UI installer', done: true },
                { step: '02', label: 'Run system compatibility check', done: true },
                { step: '03', label: 'Select model from library', done: true },
                { step: '04', label: 'Start generating videos', done: true },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke="#00ddb8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-body text-sm text-text">{s.label}</span>
                  <div className="ml-auto">
                    <div className="w-16 h-1.5 rounded-full bg-accent/20 overflow-hidden">
                      <div className="h-full rounded-full bg-accent" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[11px] text-accent tracking-wide uppercase">
                With OpenSora-UI
              </span>
            </div>

            <h2 className="font-syne font-800 text-[32px] md:text-[38px] text-white leading-tight tracking-tight mb-4">
              Four steps.{' '}
              <span className="gradient-text">No terminal required.</span>
            </h2>
            <p className="font-body text-text-muted text-[15px] leading-relaxed">
              OpenSora-UI handles all the dependency management, CUDA
              configuration, and environment setup automatically. You click
              install. You pick a model. You generate video. That&apos;s it.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
