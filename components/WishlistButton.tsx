"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// ─────────────────────────────────────────────────────────────────────────────
// Web3Forms — free, no backend, sends submissions to your email.
// Setup (2 min):
//   1. Go to https://web3forms.com
//   2. Enter your email → get a free access key
//   3. Replace the value below (or set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local)
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

// ─── Modal ───────────────────────────────────────────────────────────────────

function WishlistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "🎉 New OpenSora-UI Wishlist Signup",
          name,
          email,
          message: `New wishlist signup:\n\nName: ${name}\nEmail: ${email}`,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop — sits behind the card */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="flex min-h-full items-end justify-center sm:items-center sm:p-4">
      {/* Modal card: full-width bottom sheet on mobile, max-w dialog on sm+ */}
      <div className="relative w-full sm:max-w-[460px] rounded-t-[24px] sm:rounded-2xl border border-white/10 bg-[#0a0a14] shadow-2xl overflow-hidden">
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Top glow line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        {/* Background glow blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent/[0.05] blur-3xl rounded-full pointer-events-none" />

        {status === "success" ? (
          /* ── Success state ── */
          <div className="relative p-8 sm:p-10 pb-10 text-center" style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}>
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path
                  d="M5 13l5.5 5.5L21 7"
                  stroke="#00ddb8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-syne font-800 text-[24px] text-white mb-2">
              You&apos;re on the list!
            </h3>
            <p className="font-body text-text-muted text-sm leading-relaxed mb-1 max-w-[300px] mx-auto">
              We&apos;ll reach out personally when OpenSora-UI launches.
            </p>
            <p className="font-mono text-[12px] text-accent mb-8">
              Your 33% lifetime discount is reserved.
            </p>
            <button
              onClick={onClose}
              className="font-mono text-[12px] text-text-dim hover:text-text-muted transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form state ── */
          <div className="relative p-6 sm:p-8" style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}>
            {/* Header row */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                    Early Access
                  </span>
                </div>
                <h3 className="font-syne font-800 text-[22px] text-white leading-tight">
                  Join the Wishlist
                </h3>
                <p className="font-body text-text-muted text-sm mt-1">
                  Lock in your founding-member perks.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-text-dim hover:text-text-muted transition-colors mt-1 p-1"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Perks grid */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="text-accent"
                    >
                      <path
                        d="M9 2l1.8 4.9H16l-4.2 3 1.6 5L9 12l-4.4 2.9 1.6-5L2 6.9h5.2L9 2z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  label: "33% Off",
                  sub: "Lifetime discount",
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="text-accent"
                    >
                      <path
                        d="M2 4h14v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm4 9v3m4-3v3M6 16h6"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 8h6M6 11h4"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  label: "Shape It",
                  sub: "Request features",
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="text-accent"
                    >
                      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.3" />
                      <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.3" />
                      <path
                        d="M1 16c0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  label: "Direct Line",
                  sub: "Close collaboration",
                },
              ].map((p) => (
                <div
                  key={p.label}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-center"
                >
                  <div className="flex justify-center mb-1.5">{p.icon}</div>
                  <div className="font-syne font-700 text-[13px] text-white mb-0.5">
                    {p.label}
                  </div>
                  <div className="font-mono text-[10px] text-text-dim leading-tight">
                    {p.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="glow-line mb-5" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="font-mono text-[10px] text-text-dim uppercase tracking-widest block mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-body text-sm text-white placeholder:text-text-dim focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-text-dim uppercase tracking-widest block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-body text-sm text-white placeholder:text-text-dim focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>

              {status === "error" && (
                <p className="font-mono text-[11px] text-red-400/80">
                  Something went wrong — please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-1 bg-accent text-bg font-body font-600 text-[14px] px-4 py-3 rounded-lg hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(0,221,184,0.35)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Joining...
                  </>
                ) : (
                  "Reserve My 33% Off Spot"
                )}
              </button>

              <p className="font-mono text-[10px] text-text-dim text-center pt-1">
                No spam. One email when we launch.
              </p>
            </form>
          </div>
        )}
      </div>
      </div>
    </div>,
    document.body
  );
}

// ─── Public exports ───────────────────────────────────────────────────────────

/** Drop-in CTA button that opens the wishlist modal. */
export function WishlistButton({
  className,
  variant = "primary",
}: {
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const [open, setOpen] = useState(false);

  const base =
    "inline-flex items-center justify-center gap-2 font-body font-600 transition-all duration-200 rounded-lg px-5 py-3 text-[14px]";
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-accent/90 hover:shadow-[0_0_22px_rgba(0,221,184,0.35)]"
      : "border border-accent/30 text-accent hover:bg-accent/10";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${base} ${styles} ${className ?? ""}`}
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path
            d="M7.5 1.5l1.6 4.4H14l-3.7 2.7 1.4 4.4-4.2-3-4.2 3 1.4-4.4L1 5.9h4.9L7.5 1.5z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
        Join Wishlist — Get 33% Off
      </button>

      <WishlistModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

/** Compact nav-sized version */
export function WishlistNavButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-accent text-bg font-body font-600 text-sm px-4 py-2 rounded-lg hover:bg-accent/90 hover:shadow-[0_0_18px_rgba(0,221,184,0.35)] transition-all duration-200"
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            d="M6.5 1.5l1.3 3.7H12l-3.1 2.3 1.2 3.7-3.6-2.6-3.6 2.6 1.2-3.7L1 5.2h4.2L6.5 1.5z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        Join Wishlist
      </button>

      <WishlistModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
