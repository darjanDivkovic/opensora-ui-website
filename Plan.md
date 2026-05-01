# OpenSora-UI Website Update Plan

Run this plan in the opensora-ui.com website repository.

---

## Context

The current marketing website describes a product that does NOT match the actual application. The app is a **cloud GPU orchestration tool** (RunPod + Vast.ai), not a local GPU runner. The marketing says "run it on your own GPU, fully offline" — the real product has no local inference at all in the current version.

Additionally:

- Price increases from $29 → **$49** (single one-time payment)
- Models currently live: **Open-Sora v2** and **Wan2.1 T2V-14B**. The rest (Mochi, HunyuanVideo, CogVideoX, AnimateDiff, etc.) are planned and should be listed as "coming soon" — do NOT remove them from the site.
- A new "WHAT OPEN SORA UI WILL NEVER DO" section must be added

---

## What the product actually does (source of truth)

- Desktop app (Windows primary, macOS/Linux supported)
- Connects to **RunPod** and **Vast.ai** via their APIs — users enter their own API keys
- Browses available GPU offers filtered by VRAM requirements
- Creates/manages cloud GPU instances from the UI — no SSH, no terminal
- Automatically sets up the video generation environment on the rented GPU (clones repo, installs conda env, downloads model weights from HuggingFace)
- Submits **Text-to-Video (T2V)** and **Image-to-Video (I2V)** jobs to those cloud GPUs
- Streams real-time logs via WebSocket
- Job queue that works across multiple cloud instances in parallel
- Gallery of completed videos with download
- Settings: output directory, theme, cloud API keys, HuggingFace token
- Users pay RunPod/Vast.ai directly — OpenSora-UI never touches that transaction

**Supported models:**

- **Open-Sora v2** — 11B params, requires 80 GB VRAM, resolutions: 256px / 768px, max 129 frames
- **Wan2.1 T2V-14B** — 14B params, requires 48 GB VRAM, resolutions: 480p / 720p, max 81 frames

---

## Section-by-section changes

### 1. Hero Section

**Current:** "Run AI Video Generation. Own It Completely." / "desktop app that runs open-source video models on your GPU—or any rented GPU at native cost"

**Problem:** Implies local GPU is the primary use case. Local inference doesn't exist in the app.

**Replace subheadline with something like:**

> "OpenSora-UI is a desktop app that connects you to RunPod and Vast.ai so you can rent a GPU, set it up in one click, and generate AI video — without touching a terminal. No subscriptions. No GPU markups. No data collection. Ever."

**Update CTA price from $29 → $49.**

Remove "33% off — wishlist only" and replace with the actual current offer if any, or just "One-time license · No subscription".

---

### 2. Problem Section

**Current headline:** "Running Open-Sora is unnecessarily hard." — this is fine and accurate.

**Current pain points listed:** conda, CUDA 12.1, pip conflicts, etc. — **these are accurate** because the app automates this setup on the remote GPU.

**Keep this section largely intact.** Optionally add a line about the difficulty of figuring out which GPU providers to use and at what price.

---

### 3. Solution Section / How It Works

**Current:** "Four steps. No terminal required." + "Install OpenSora-UI → Run System Check → Download a Model → Generate Video"

**Problem:** Step 2 says "8 GB VRAM minimum" (wrong — minimum is 48 GB on cloud). Step 3 lists Mochi, HunyuanVideo (not supported). Step 4 says "Runs 100% locally" (false).

**Replace the four steps with the actual flow:**

**Step 01 — Install OpenSora-UI**
Download the app for your platform. Run it once.

**Step 02 — Add your cloud API keys**
Enter your RunPod or Vast.ai API key. OpenSora-UI shows you available GPUs at their real published prices — you compare and choose.

**Step 03 — Rent a GPU & let us set it up**
Pick a GPU offer. One click starts the instance and automatically installs everything: conda environment, dependencies, and model weights (Open-Sora v2 or Wan2.1). Real-time progress shown in the app.

**Step 04 — Generate video**
Write your prompt (or upload a reference image for Image-to-Video). Hit Generate. Your rented GPU does the work. Download your video. Terminate the instance when done.

**Remove:** "NVIDIA GPU required · 8 GB VRAM minimum" requirement badge (the GPU is rented, not local)
**Remove:** "Runs 100% locally on your hardware" note — replace with "Runs on your rented GPU. You pay the provider directly."

---

### 4. Features Section

**Current headline:** "Everything you need. Nothing you don't." — keep this.

**Current subheading:** "purpose-built for running open-source video models locally" — **remove "locally"**

Replace with: "purpose-built for running open-source video models on rented cloud GPUs — without the setup hell."

**Feature cards — rewrite each:**

| Current card           | Action                                                                                                                                                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One-Click Install      | Keep but reframe: "No conda, no SSH, no terminal. OpenSora-UI automatically sets up the full environment on your rented GPU — packages, dependencies, model weights."                                                                           |
| Model Manager          | Rewrite to reflect that Open-Sora v2 and Wan2.1 are live now, and more are coming: "Browse and switch between Open-Sora, Wan, Mochi, HunyuanVideo, and more — with new models added as they're ready. Open-Sora v2 and Wan2.1 available today." |
| Job Queue              | Keep as-is — this is accurate. "Queue multiple generation jobs across cloud instances. Track progress, stream logs in real time, cancel jobs, review history."                                                                                  |
| Local GPU Acceleration | **Remove entirely** or replace with: **"GPU Provider Browser"** — "Browse GPU offers from RunPod and Vast.ai filtered by model requirements. Compare real prices. Create and manage instances without leaving the app."                         |
| Clean Interface        | Keep — accurate.                                                                                                                                                                                                                                |
| Fully Offline          | **Remove entirely.** The app requires internet to call RunPod/Vast.ai APIs. Replace with: **"Zero Markups"** — "You see the provider's real price. You pay them directly. We never touch the transaction, take a cut, or mark up GPU time."     |

---

### 5. Why Local / Own Your Compute Section

**This entire section needs a reframe.** The headline "Own your compute" and "Local generation" framing is inaccurate.

**New section headline:** "Skip the platform tax. Rent GPU at cost."

**New intro:**

> "Cloud AI video tools like Runway and Kling buy GPU time in bulk and resell it to you — marked up, credit-gated, and subscription-locked. OpenSora-UI connects directly to providers like RunPod and Vast.ai so you pay their actual rate and keep full control."

**Value propositions to keep (reworded):**

1. **Unlimited generations** — "No credits, no generation limits. You pay for GPU time by the hour at provider rates. Run 50 jobs or 5 — the cost is transparent and direct."

2. **Real GPU prices** — "RunPod and Vast.ai publish their rates. We show you those rates unmodified. We don't take a commission, referral fee, or markup. Our job is to connect you, not profit from the connection."

3. **One-time $49** — "Pay once, use forever. No monthly fees, no seat licenses, no pricing tiers. The license is yours permanently." _(update from $29)_

4. **No data collection** — "Your prompts, your videos, your ideas — none of it reaches us. No telemetry, no analytics, no usage tracking." _(keep this)_

5. **Multi-instance parallelism** — "Run jobs across multiple cloud instances simultaneously. The job queue handles routing automatically."

6. **Free open-source models** — "Open-Sora, Wan, Mochi, HunyuanVideo — all open-source, downloaded directly from HuggingFace. You never pay for the models themselves." _(keep full list — these are planned)_

**Remove:**

- "0s wait time / No queue / Instant start" — cloud provisioning takes time, this is false
- "Air-gapped capable / Full privacy" — the app calls cloud APIs, it is not air-gapped

---

### 6. Comparison Table

**Current header:** "Stop paying the subscription tax." — keep this.

**Update GPU price examples** — verify these are still accurate for RunPod/Vast.ai H100/A100 offerings.

**Update comparison table rows:**

| Feature       | Cloud Tools                | OpenSora-UI                       |
| ------------- | -------------------------- | --------------------------------- |
| Monthly cost  | $30–150/mo                 | $0 after one-time $49             |
| Generations   | Limited by credits         | Unlimited (pay GPU time only)     |
| Privacy       | Uploaded to servers        | Never sent to us. Zero telemetry. |
| Queue wait    | 30s–10min (platform queue) | Your GPU, your queue              |
| Offline use   | Internet required          | Internet required (GPU is remote) |
| Customization | Platform presets           | Full control                      |
| GPU cost      | Marked up in credits       | Native provider pricing           |
| Model cost    | Bundled into subscription  | Free (open-source)                |

**Note:** "Offline use" row now correctly reflects reality for both sides.

---

### 7. NEW SECTION — "What OpenSora-UI Will Never Do"

Add this as a new section, ideally before or after the pricing section.

**Headline:** "What OpenSora-UI Will Never Do"

**Six bullet points (use exactly this copy):**

1. **Charge you more for GPU access.** We show you available providers and their real prices — you compare, you choose, you pay them directly. We never touch that transaction.

2. **Ask for additional payments.** No upsells, no premium features, no surprise charges. Ever.

3. **Take away what you paid for.** If the price goes up as we add and maintain new features, you keep your license at the price you originally paid. That's a permanent commitment.

4. **Promote or favor any AI model or GPU provider.** We don't take commissions, referral fees, or partnerships that influence what we show you. Our job is to bring as many options on board as possible so you decide what's best.

5. **Watermark or interfere with your output.** No logos, no branding, no hidden modifications. What your GPU generates is exactly what you get — unaltered, yours completely.

6. **Use coins, tokens, or credits.** All pricing is straightforward USD. No artificial currencies designed to obscure what you're actually spending.

---

### 8. Pricing Section

**Update price from $29 → $49.**

**Update the features list:**

- Desktop app for Windows, macOS, Linux
- RunPod + Vast.ai integration (compare GPU prices, create instances)
- Automated remote environment setup (no terminal required)
- Open-Sora v2 and Wan2.1 T2V-14B support
- Text-to-Video and Image-to-Video
- Job queue with real-time log streaming
- Video gallery with download
- Lifetime access — no expiry
- Free updates for current major version
- No subscription, ever

**Remove:**

- "33% off — founding members only" wishlist badge (update if a new offer exists, or remove)
- "Automatic installer & dependency manager" framing (it manages remote setup, not local)
- "Local GPU acceleration (CUDA)" — remove, no local inference

**Keep disclaimer:** "Models are not included. Downloaded separately from HuggingFace. Open-Sora is an open-source project by HPC-AI Tech."

---

### 9. FAQ Section — Item-by-item changes

**Q: Do I need a GPU?**
**Current:** "Yes... minimum 8 GB VRAM... 16–24 GB VRAM for larger models... AMD GPU support via ROCm is experimental."
**Replace with:**

> "You don't need a GPU in your own machine. OpenSora-UI connects to RunPod and Vast.ai so you rent a GPU in the cloud. The models require 48–80 GB VRAM — only available via cloud providers at this time. You pay the provider directly by the hour."

**Q: Can I use it completely offline?**
**Current:** "Yes, once you have downloaded the models..."
**Replace with:**

> "The app requires an internet connection to communicate with RunPod and Vast.ai APIs and to execute jobs on remote GPUs. Your prompts and video outputs are never sent to us — but they do pass through your chosen cloud GPU provider under their terms."

**Q: What operating systems are supported?**
**Current:** "Windows 10/11 (x64) with NVIDIA GPU. macOS and Linux support is in active development."
**Replace with:**

> "OpenSora-UI runs on Windows 10/11, macOS, and Linux. Because video generation runs on rented cloud GPUs (not your local machine), you don't need an NVIDIA GPU in your own computer."

**Q: Can I use a rented GPU instead of my own?**
**Current:** Treats rented GPU as an alternative. In the new framing, rented GPU IS the primary use case.
**Replace with:**

> "Yes — that's the primary way OpenSora-UI works. You connect your RunPod or Vast.ai account, browse available GPU offers (filtered by what each model needs), and rent one directly at the provider's published rate. OpenSora-UI handles setup and job execution. You pay the provider directly — we're not involved in that transaction."

**Q: Do you track how many videos I generate?**
Keep as-is — it's accurate and compelling.

**Q: Is this a subscription?**
Update price reference from $29 → $49. Keep everything else.

**Q: Does the license include the models?**
Update to: "The actual AI models (Open-Sora v2, Wan2.1 T2V-14B, and others as they're added) are open-source and free, downloaded directly from HuggingFace through the app."

**Q: What models are supported?**
**Add this new FAQ entry:**

> "**Open-Sora v2** and **Wan2.1 T2V-14B** are available today. Both support Text-to-Video and Image-to-Video. Mochi, HunyuanVideo, CogVideoX, and AnimateDiff are in the pipeline and will be added as support is ready."

---

### 10. Supported Models List (footer / features)

**Current:** "Open-Sora, Stable Video Diffusion, Diffusers, Wan T2V, Mochi 1, HunyuanVideo, CogVideoX, AnimateDiff"

**Keep the list** — these models are planned. Add a small note like "Open-Sora v2 and Wan2.1 available now · more coming soon" near the list so it's honest without removing the roadmap.

Remove only "Stable Video Diffusion" and "Diffusers" — these are libraries/older models unlikely to be on the roadmap. Keep: Open-Sora, Wan T2V, Mochi 1, HunyuanVideo, CogVideoX, AnimateDiff.

---

### 11. System Requirements

**Current:** "GPU: NVIDIA CUDA-capable GPU (8 GB VRAM minimum)"

**Replace with:** "Cloud GPU account required (RunPod or Vast.ai). Models require 48–80 GB VRAM — provided by your rented cloud GPU. Your local machine needs no GPU."

**OS line:** "Windows 10/11, macOS, Linux"

Remove: "Metal (Apple Silicon) support planned" — this is local GPU framing that doesn't apply.

---

### 12. Footer description

**Current:** "A desktop app for running open-source video models on your own hardware—or rented GPU at cost."

**Replace with:** "A desktop app for renting cloud GPUs at cost and generating AI video without touching a terminal. No subscriptions. No markups. No data."

---

## Summary of all price changes

Find and replace every instance of `$29` with `$49` across the entire site.

---

## Files to search/edit (find in the website repo)

When you're in the website repository, search for these strings to locate what needs changing:

```
"$29"              → all pricing
"8 GB VRAM"        → system requirements, how it works
"locally"          → framing of local GPU
"Fully Offline"    → feature card
"100% locally"     → step 4 of how it works
"Stable Video"     → remove (not on roadmap; replace with actual planned models)
"Diffusers"        → remove (this is a library, not a model)
"AMD GPU"          → FAQ
"ROCm"             → FAQ
"Metal (Apple"     → system requirements
"33% off"          → wishlist pricing
"wishlist"         → CTA
"Local GPU"        → feature card title
"Air-gapped"       → value prop card
"0s wait"          → value prop stat
"Instant start"    → value prop
"8 GB VRAM minimum" → how it works step
```

---

## What NOT to change

- The core problem statement (conda hell, CUDA conflicts) — the app solves this on the remote GPU side
- Job queue description — accurate
- "Clean interface" feature card — accurate
- Privacy / no telemetry claims — accurate
- The affiliate/commission disclaimer framing — align with new "will never do" section
- HPC-AI Tech / Open-Sora attribution in footer and FAQ — keep
- Legal section — keep
