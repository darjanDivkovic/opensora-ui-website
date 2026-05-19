import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MockupShowcase } from "@/components/MockupShowcase";
import { TrustStrip } from "@/components/TrustStrip";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import { DiscordCTA } from "@/components/DiscordCTA";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyLocal } from "@/components/WhyLocal";
import { NeverDo } from "@/components/NeverDo";
import { VsCloud } from "@/components/VsCloud";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MockupShowcase />
        <Pricing />
        {/* <TrustStrip /> */}
        <Problem />
        <Features />
        <Roadmap />
        <DiscordCTA />
        <HowItWorks />
        <WhyLocal />
        <NeverDo />
        <VsCloud />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
