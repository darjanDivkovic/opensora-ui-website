import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — CloudsForge",
  description:
    "Pay once, own it forever. Lifetime Personal license for the CloudsForge desktop workstation. No subscription, no markups, no telemetry.",
  alternates: { canonical: "/pricing" },
  robots: { index: true, follow: true },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
