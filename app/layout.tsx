import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
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
  title: 'OpenSora-UI — Run AI Video Generation Locally',
  description:
    'A clean graphical interface for running Open-Sora and other open-source video models on your own GPU. No complex setup. No cloud. No subscription.',
  keywords: [
    'Open-Sora',
    'AI video generation',
    'local AI',
    'GPU',
    'video diffusion',
    'OpenSora UI',
    'local video generation',
  ],
  openGraph: {
    title: 'OpenSora-UI — Run AI Video Generation Locally',
    description:
      'A clean graphical interface for running Open-Sora and other open-source video generation models on your GPU.',
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
      <body>{children}</body>
    </html>
  )
}
