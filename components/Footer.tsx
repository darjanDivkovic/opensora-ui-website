export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#04040a]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 10L7 3L12 10"
                    stroke="#00ddb8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 7.5h5"
                    stroke="#00ddb8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-syne font-700 text-[17px] text-white tracking-tight">
                OpenSora<span className="text-accent">-UI</span>
              </span>
            </div>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-4 max-w-[300px]">
              A graphical interface for running open-source video generation
              models locally on your own GPU.
            </p>
            {/* Disclaimer */}
            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="font-mono text-[11px] text-text-dim leading-relaxed">
                Open-Sora is an open-source project by HPC-AI Tech, released
                under the Apache 2.0 license. OpenSora-UI is a separate
                commercial product providing a UI wrapper only. We are not
                affiliated with or endorsed by HPC-AI Tech.
              </p>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-mono text-[11px] text-text-dim uppercase tracking-[0.12em] mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '#features' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Changelog', href: '#' },
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
                { label: 'Contact', href: 'mailto:support@opensora-ui.com' },
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
            © {currentYear} OpenSora-UI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'License'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-[11px] text-text-dim hover:text-text-muted transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
