import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/Container";
import { Footer } from "./Footer";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  eyebrow = "Legal",
  children,
}: LegalLayoutProps) {
  return (
    <>
      {/* Slim header — links back to home, no marketing CTA noise */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#060609]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="CloudsForge"
              width={32}
              height={32}
              priority
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-syne font-700 text-[17px] text-white tracking-tight">
              Clouds<span className="text-accent">Forge</span>
            </span>
          </Link>
          <Link
            href="/"
            className="font-mono text-[12px] text-text-muted hover:text-text transition-colors inline-flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M7.5 2.5L4 6l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <main className="relative pt-[64px]">
        {/* Soft glow */}
        <div className="absolute inset-x-0 top-[64px] h-[420px] pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-accent/[0.05] blur-[120px] rounded-full" />
        </div>

        <Container narrow className="relative pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="mb-10 md:mb-14">
            <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.15em] block mb-4">
              {eyebrow}
            </span>
            <h1 className="font-syne font-800 text-[36px] md:text-[52px] text-white leading-tight tracking-tight mb-4">
              {title}
            </h1>
            <p className="font-mono text-[12px] text-text-dim">
              Last updated: {lastUpdated}
            </p>
            <div className="glow-line mt-8" />
          </div>

          <article className="legal-prose">{children}</article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
