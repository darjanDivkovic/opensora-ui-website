import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { Problem } from '@/components/Problem'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { WhyLocal } from '@/components/WhyLocal'
import { NeverDo } from '@/components/NeverDo'
import { VsCloud } from '@/components/VsCloud'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Features />
        <HowItWorks />
        <WhyLocal />
        <NeverDo />
        <VsCloud />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
