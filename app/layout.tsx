import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/SmoothScroll'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cloudsforge.com'),
  title: 'CloudsForge — The Workstation for Open-Source AI',
  description:
    'A local-first desktop app that connects you to RunPod, Vast.ai, and other GPU providers so you can run open-source AI models — video today, image and audio next — without subscriptions, markups, or telemetry.',
  keywords: [
    'CloudsForge',
    'open-source AI',
    'AI workstation',
    'AI video generation',
    'AI image generation',
    'cloud GPU',
    'RunPod',
    'Vast.ai',
    'GPU rental',
    'LoRA fine-tuning',
    'Open-Sora',
  ],
  applicationName: 'CloudsForge',
  openGraph: {
    title: 'CloudsForge — The Workstation for Open-Source AI',
    description:
      'Run open-source AI on rented cloud GPUs. Multi-cloud, multi-model, zero extraction. No subscriptions, no markups, no telemetry.',
    siteName: 'CloudsForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudsForge — The Workstation for Open-Source AI',
    description:
      'Run open-source AI on rented cloud GPUs. Multi-cloud, multi-model, zero extraction.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
