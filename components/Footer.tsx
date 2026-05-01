import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#04040a]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="CloudsForge"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-syne font-700 text-[17px] text-white tracking-tight">
                Clouds<span className="text-accent">Forge</span>
              </span>
            </div>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-4 max-w-[320px]">
              A local-first workstation for open-source AI. Multi-model,
              multi-cloud, zero extraction.
            </p>
            <p className="font-mono text-[11px] text-text-dim leading-relaxed max-w-[320px]">
              Not affiliated with the upstream authors of the open-source models
              CloudsForge supports.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-mono text-[11px] text-text-dim uppercase tracking-[0.12em] mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '/#features' },
                { label: 'How It Works', href: '/#how-it-works' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'FAQ', href: '/#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-[11px] text-text-dim uppercase tracking-[0.12em] mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Documentation', href: '#' },
                { label: 'GitHub', href: 'https://github.com', external: true },
                { label: 'License', href: '#' },
                { label: 'Contact', href: 'mailto:support@cloudsforge.com' },
                {
                  label: 'Open-Sora (HPC-AI Tech)',
                  href: 'https://github.com/hpcaitech/Open-Sora',
                  external: true,
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="font-body text-sm text-text-muted hover:text-text transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        className="opacity-50"
                      >
                        <path
                          d="M2 8L8 2M8 2H4M8 2v4"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glow-line mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-text-dim">
            © {currentYear} CloudsForge. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center sm:justify-end">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms & Conditions', href: '/terms-and-conditions' },
              { label: 'Refund Policy', href: '/refund' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] text-text-dim hover:text-text-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
