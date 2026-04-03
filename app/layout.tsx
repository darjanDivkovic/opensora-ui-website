import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

export const metadata: Metadata = {
  title: 'OpenSora-UI — Rent Cloud GPUs for AI Video Generation',
  description:
    'A desktop app that connects you to RunPod, Vast.ai, and more so you can rent GPUs at cost and generate AI video without touching a terminal. No subscriptions. No markups.',
  keywords: [
    'Open-Sora',
    'AI video generation',
    'cloud GPU',
    'RunPod',
    'Vast.ai',
    'video diffusion',
    'OpenSora UI',
    'cloud video generation',
    'GPU rental',
  ],
  openGraph: {
    title: 'OpenSora-UI — Rent Cloud GPUs for AI Video Generation',
    description:
      'A desktop app that connects you to RunPod, Vast.ai, and more so you can rent GPUs at cost and generate AI video without touching a terminal.',
    type: 'website',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
