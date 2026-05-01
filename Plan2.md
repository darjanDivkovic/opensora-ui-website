# CloudsForge Website Revamp — Implementation Plan

This plan covers (1) a full rebrand from OpenSora-UI to **CloudsForge**, (2) a repositioning from "Open-Sora launcher" to "the workstation for open-source AI," and (3) a restructured pricing model that creates sustainable recurring revenue without breaking the brand's anti-extraction values.

The plan is organized by website section. Each section includes the change, the rationale, and (where it matters) the exact copy.

---

## Strategic Goals

1. **Rebrand** to CloudsForge across all copy, meta tags, assets, and links.
2. **Reposition** the product as a local-first workstation for open-source AI (video first, with image, audio, and fine-tuning explicit on the roadmap).
3. **Restructure pricing**: introduce paid major-version upgrades, a Studio tier, and one optional add-on — without retroactively touching anything an existing buyer paid for.
4. **Soften the "Never Do" section** so it remains a strong trust signal but stops blocking legitimate monetization paths.
5. **Maintain the core voice**: anti-subscription tax, anti-markup, anti-telemetry, pro-ownership.

---

## 1. Global Rebrand

Search-and-replace, but prefer updating centralized constants/config over per-file edits where possible.

- `OpenSora-UI` → `CloudsForge` (case-sensitive variants too: `opensora-ui`, `OpenSoraUI`, etc.)
- `opensora-ui.com` → `cloudsforge.com` (use whatever domain you've actually registered)
- `support@opensora-ui.com` → `support@cloudsforge.com`
- HTML `<title>`, meta description, Open Graph tags, Twitter card tags
- `manifest.json`, favicon, apple-touch-icon
- Any structured data (JSON-LD) — `name`, `url`, `sameAs`
- Footer copyright: `© 2026 CloudsForge. All rights reserved.`
- Image alt text, button labels, ARIA attributes
- Final step: case-insensitive grep for `opensora`, `open-sora`, `open sora` to catch stragglers

The HPC-AI Tech / Open-Sora disclaimer can stay (it's still relevant since you support that model) but de-emphasize it. Move it from the primary footer block to a small line in the FAQ or legal section. The new name is no longer derivative, so it doesn't need to lead with attribution.

---

## 2. Hero Section

**Current headline:** "Run AI Video Generation. Own It Completely."

**New headline — pick one:**

- "The Workstation for Open-Source AI. Yours Completely."
- "Open-Source AI. On Your GPU. Without the Tax."
- "Generate Without Asking Permission."

**New subheadline:**

> CloudsForge is a desktop app that connects you to RunPod, Vast.ai, and other GPU providers so you can run open-source AI models — video today, image and audio next — without subscriptions, markups, or telemetry. Rent a GPU. Set it up in one click. Generate. Own everything.

**Tagline strip below hero:** "Cloud · Open-Source · GPU Powered" → **"Local-First · Open-Source · No Extraction"**

**CTA buttons:** keep current text ("Join Wishlist — Get 33% Off"). Trust signals row below the CTA: replace "One-time license · No subscription" with **"You own what you buy · Multi-cloud, multi-model · Zero telemetry"**.

---

## 3. Repositioning — Workstation, Not Launcher

The current site treats video generation as the entire product. The new framing treats video as the first surface, with image, audio, and fine-tuning as the explicit roadmap. Concrete changes:

- **Features section**: add a 7th feature card titled **"Built to Expand"** with copy like: _"CloudsForge is a workstation, not a single-purpose tool. Image generation, audio, and LoRA fine-tuning are on the roadmap — added to the same app, included with your current license."_
- **Problem section**: broaden the framing. Current copy is video-specific. Update intro to: _"Running open-source AI is unnecessarily hard. Whether it's video, image, or audio generation, you're stuck configuring conda environments, resolving CUDA mismatches, chasing dependency conflicts, and figuring out which cloud GPU providers to use and at what price."_
- **"Works with" model strip**: keep existing video models, but add a secondary line below: _"More model categories — image, audio, fine-tuning — coming to the same app."_
- **Comparison table**: broaden "Cloud Tools" to include image gen tools (Midjourney, DALL·E) alongside video tools. Add a new row: **"Model coverage"** — Cloud Tools: "One platform's models" / CloudsForge: "Any open-source model on the workstation."

---

## 4. Pricing Section — Restructure

Replace the single-tier pricing block with **three options** displayed side by side, plus an optional add-on note below.

### Tier 1: Personal — $59 one-time

**Headline:** "Pay once. Own it forever."

- Desktop app for Windows, macOS, Linux
- Multi-cloud GPU integration (RunPod, Vast.ai, more coming)
- All current open-source video models (Open-Sora v2, Wan2.1, more)
- Image, audio, and fine-tuning support as added (within current major version)
- Job queue with real-time log streaming
- Video gallery with download
- **Lifetime access to current major version**
- Free updates within current major version
- Future major versions: optional paid upgrade (~$29 for existing license holders)
- No subscription, ever

CTA: "Join Wishlist — Get 33% Off"

### Tier 2: Studio — $299 / year per seat

**Headline:** "For teams that ship."

- Everything in Personal
- SSO and team management
- Shared prompt libraries and workflows
- Multi-user job queue
- Audit logs
- Priority email support with SLA
- All major version upgrades included while subscribed

CTA: "Contact us" or "Get Studio access"

### Optional add-on: Cloud Queue — $5 / month

**Headline:** "Set it and forget it."

- Always-on hosted job runner
- Schedule generations while you're away from your machine
- 100% optional — the desktop app is fully functional without it
- Your prompts and outputs still never reach us; we only manage job lifecycle

Position this clearly **below** the two main tiers as an opt-in add-on, not a third tier.

### Below the pricing block, add:

> **Why a Studio tier?** Personal pricing isn't changing — Studio is a different product for teams who need shared resources, SSO, and a support SLA. If you're an individual, ignore it.
>
> **Why paid major versions?** Maintaining CloudsForge across a moving open-source ecosystem is real ongoing work. Major version upgrades fund that work without subscriptions or markups. Your current version is always yours.

Update the existing footnote: _"Models are not included. They are downloaded separately from official sources (HuggingFace, GitHub)."_ — keep this as-is, it's still accurate.

---

## 5. "What We Will Never Do" — Rewrite

Six items currently. Keep four, rewrite two.

**Keep verbatim (just update brand name):**

- #1 Charge you more for GPU access
- #4 Promote or favor any AI model or GPU provider
- #5 Watermark or interfere with your output
- #6 Use coins, tokens, or credits

**Rewrite #2:** "Ask for additional payments" → **"Charge you for software you already own."**

> The version of CloudsForge you purchased is yours, at the price you paid, forever. Future major versions are separate, optional upgrades — never required, never automatic, and your existing version keeps working indefinitely. Optional add-ons exist (like Cloud Queue), but they're never required to use what you bought.

**Rewrite #3:** "Take away what you paid for" → **"Convert your license into a subscription."**

> CloudsForge Personal is a one-time purchase, and that will not change. We will never retroactively shift purchased licenses to recurring billing or paywall features that were available in the version you bought.

These rewrites preserve the anti-extraction spirit while explicitly leaving room for paid upgrades, the Studio tier, and optional services.

---

## 6. FAQ — Updates

**Keep all current FAQs**, but update the brand name throughout. Then **add the following new entries**, ideally near the pricing-related questions:

**Q: Will there be paid upgrades?**

> Yes — for major version releases (roughly every 12–18 months). Your existing version is yours forever and keeps working. Upgrading is optional, and existing license holders get upgrade pricing (typically ~50% off new-purchase price).

**Q: What's included in the Studio tier?**

> Studio is built for teams who need shared prompt libraries, SSO, multi-user job queues, audit logs, and a support SLA. It's a different product for a different buyer — Personal users don't need it, and Personal pricing is independent of Studio pricing.

**Q: Are you adding more than video generation?**

> Yes. Image generation, audio, and LoRA fine-tuning are on the roadmap. Where feasible, these are added within the current major version — meaning Personal license holders get them at no extra cost.

**Q: What's Cloud Queue?**

> An optional add-on for users who want generations to run while they're away from their machine. The core CloudsForge app works fully without it. Even with it, your prompts and outputs are not stored or analyzed by us — we only manage the job lifecycle on your behalf.

**Q: I bought OpenSora-UI before the rebrand. What happens to my license?**

> Your license carries over to CloudsForge as a Personal license at no additional cost. Same software, same promises, new name and a broader roadmap.

(The last one is only needed if you have early buyers — delete if not.)

---

## 7. New "Roadmap" Section (recommended)

Add between Features and Pricing. Three columns:

**Available now**

- Video generation (Open-Sora v2, Wan2.1)
- RunPod + Vast.ai integration
- Job queue, real-time logs, gallery

**Next 6 months**

- Additional video models (Mochi, HunyuanVideo, CogVideoX)
- Image generation models (SDXL, Flux, others)
- Additional cloud providers
- Studio tier launch

**Beyond**

- Audio and voice generation
- LoRA fine-tuning UI
- More providers, more models

This signals "workstation" rather than "single-purpose tool" without overpromising. Keep the language honest — these are intentions, not commitments.

---

## 8. "Skip the Platform Tax" Section

Section currently titled "Skip the Platform Tax." Either keep, or rename to **"Stop Renting Software That Rents You Hardware."**

The bullet content (Pay per hour, No markups, Lifetime access, Zero telemetry, Parallel jobs, Free open-source models) all still applies — but update the **"Lifetime access — One-time $49"** card to **"Lifetime access — One-time $59"** to match the new pricing.

---

## 9. Footer

- Update copyright to CloudsForge
- Update product description below the logo: _"A local-first workstation for open-source AI. Multi-model, multi-cloud, zero extraction."_
- Move the HPC-AI Tech disclaimer to a smaller secondary line or relocate to a `/legal` page
- Update all links to use new domain

---

## Out of Scope (Do Not Change)

- The "Problem" section's terminal mockup — still works for the broader framing
- The "How It Works" four-step layout — works as-is, just update copy where it says "video"
- Visual layout, color scheme, typography, component library
- Component implementations (only copy and structure changes — no refactors unless needed for pricing tier expansion)

---

## Technical Notes for Claude Code

- This appears to be a single-page marketing site. Most changes likely live in 1–5 files. Find centralized constants (brand name, pricing data, support email) and update at the source rather than search-and-replacing across components.
- If pricing is currently a single object/component, refactor it into an array of tier objects so the three-tier layout is data-driven and easy to edit later.
- The Studio tier and add-on are structurally new — make sure they don't break existing layout grids. The pricing section should accommodate 2 main tiers (Personal, Studio) side-by-side with the Cloud Queue add-on as a smaller card or note below.
- Update SEO meta tags, Open Graph tags, Twitter card tags, `manifest.json`, favicon references, and any JSON-LD structured data.
- Verify the wishlist signup form still works after the rebrand (any backend endpoint reference may need updating).
- Run a final case-insensitive grep for `opensora`, `open-sora`, `open sora` and confirm zero matches outside of (a) FAQ entries that explicitly reference the Open-Sora model and (b) attribution to HPC-AI Tech.

---

## Open Decisions (defer to user before/during implementation)

1. **Headline** — three options provided in §2; pick one or supply your own.
2. **Domain and support email** — use whatever you've registered.
3. **Personal price** — $49 (current) or $59 (recommended). $59 gives room and signals quality without alienating the audience.
4. **Major version upgrade price** — $29 suggested.
5. **Studio tier price** — $299/year/seat is a defensible starting point; adjust based on your intended buyer.
6. **Cloud Queue pricing** — $5/mo suggested; could go $3–9 depending on what's actually involved on the backend.
7. **Should the Roadmap section ship in v1?** — recommended yes; deferable if it slows launch.
8. **Migration FAQ entry for early buyers?** — include only if you actually have OpenSora-UI buyers already.
