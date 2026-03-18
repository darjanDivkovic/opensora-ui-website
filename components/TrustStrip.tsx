const models = [
  'Open-Sora',
  'Stable Video Diffusion',
  'Diffusers',
  'Wan T2V',
  'Mochi 1',
  'HunyuanVideo',
  'CogVideoX',
  'AnimateDiff',
]

export function TrustStrip() {
  // Duplicate for seamless loop
  const items = [...models, ...models]

  return (
    <div className="relative border-y border-white/[0.06] bg-[#08080f] py-5 overflow-hidden">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08080f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08080f] to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="px-4 py-1.5 rounded-full bg-[#08080f] border border-white/[0.08]">
          <span className="font-mono text-[11px] text-text-muted tracking-wider uppercase whitespace-nowrap">
            Works with popular open-source models
          </span>
        </div>
      </div>

      <div className="flex gap-0 animate-scroll">
        {items.map((model, i) => (
          <div
            key={`${model}-${i}`}
            className="flex items-center gap-6 px-8 flex-shrink-0"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-text-dim flex-shrink-0" />
            <span className="font-syne font-600 text-[13px] text-text-muted whitespace-nowrap">
              {model}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
