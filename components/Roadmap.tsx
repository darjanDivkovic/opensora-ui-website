import { Container } from "./ui/Container";
import { Section } from "./ui/Section";

const columns = [
  {
    label: "Available now",
    status: "shipping",
    items: [
      "Video generation (Open-Sora v2, Wan2.1, HunyuanVideo)",
      "RunPod + Vast.ai integration",
      "Job queue, real-time logs, gallery",
      "Spending and Benchmarks (beta)",
    ],
  },
  {
    label: "Next 6 months",
    status: "in progress",
    items: [
      "Additional video models (Mochi, CogVideoX)",
      "Additional cloud providers",
      "Studio tier — general availability",
    ],
  },
  {
    label: "Beyond",
    status: "planned",
    items: [
      "Image generation models (SDXL, Flux, others)",
      "LoRA fine-tuning UI",
      "More providers, more models",
    ],
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
            Roadmap
          </span>
          <h2 className="font-syne font-800 text-[36px] md:text-[48px] text-white leading-tight tracking-tight mb-4">
            One workstation.{" "}
            <span className="gradient-text">Many surfaces.</span>
          </h2>
          <p className="font-body text-text-muted text-[16px] max-w-[560px] mx-auto leading-relaxed">
            Video first. Image, audio, and fine-tuning next. Added to the same
            app, included with your current major version. These are intentions,
            not commitments.
          </p>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-5">
          {columns.map((col, ci) => (
            <div
              key={col.label}
              className="relative p-6 rounded-xl border border-white/[0.07] bg-surface/40"
            >
              {/* Top accent line, fading by column */}
              <div
                className="absolute inset-x-0 top-0 h-[1px] rounded-t-xl bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                style={{ opacity: ci === 0 ? 1 : ci === 1 ? 0.55 : 0.25 }}
              />

              {/* Column header */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest">
                  {col.label}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md ${
                    ci === 0
                      ? "text-accent bg-accent/10 border border-accent/25"
                      : ci === 1
                        ? "text-accent-2 bg-accent-2/10 border border-accent-2/25"
                        : "text-text-dim border border-white/[0.07]"
                  }`}
                >
                  {col.status}
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                        ci === 0
                          ? "bg-accent"
                          : ci === 1
                            ? "bg-accent-2/80"
                            : "border border-text-dim bg-transparent"
                      }`}
                      aria-hidden
                    />
                    <span className="font-body text-sm text-text leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center font-mono text-[11px] text-text-dim leading-relaxed max-w-[560px] mx-auto">
          Personal license holders receive everything added within their major
          version at no additional cost.
        </p>
      </Container>
    </Section>
  );
}
