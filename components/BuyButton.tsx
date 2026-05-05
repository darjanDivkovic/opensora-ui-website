"use client";

const BUY_URL = "https://cloudsmith32.gumroad.com/l/cloudsforge?wanted=true";

const buyShell =
  "group inline-flex items-center justify-center font-body font-600 text-white rounded-lg " +
  "bg-gradient-to-b from-[#E37722] to-accent " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-8px_rgba(212,93,19,0.55)] " +
  "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_10px_28px_-6px_rgba(212,93,19,0.7)] " +
  "hover:brightness-[1.04] active:scale-[0.985] " +
  "transition-all duration-200 no-underline";

function CartIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 3h2.2l1.8 9.2a1 1 0 001 .8h7.4a1 1 0 001-.8L17 5.5H5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="15.5" r="1" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14" cy="15.5" r="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** Hero / Pricing CTA — full-size. */
export function BuyButton({ className }: { className?: string }) {
  return (
    <a
      href={BUY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buyShell} px-6 py-3 text-[14px] gap-2 tracking-[-0.005em] ${className ?? ""}`}
    >
      <CartIcon size={14} />
      Buy CloudsForge
    </a>
  );
}

/** Navbar CTA — compact. Same visual language as BuyButton. */
export function BuyNavButton() {
  return (
    <a
      href={BUY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buyShell} px-4 py-1.5 text-[13px] gap-1.5`}
    >
      Buy CloudsForge
    </a>
  );
}
