import type { Metadata } from "next";
import Image from "next/image";
import { Lightning } from "@/components/ui/Lightning";

export const metadata: Metadata = {
  title: "CloudsForge",
  robots: { index: false, follow: false },
};

export default function IntroPage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-bg">
      {/* Lightning background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Lightning
          color1={[0.831, 0.365, 0.075]}
          color2={[0.953, 0.737, 0.278]}
          speed={0.4}
          intensity={0.45}
          size={1.6}
          xOffset={0}
        />
      </div>

      {/* Soft radial vignette so the brand reads cleanly */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(6,6,9,0.7) 0%, rgba(6,6,9,0.3) 50%, rgba(6,6,9,0) 80%)",
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">
        <Image
          src="/logo-nobg.png"
          alt="CloudsForge"
          width={160}
          height={160}
          priority
          className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-[0_0_40px_rgba(212,93,19,0.35)]"
        />
        <h1 className="font-syne font-800 text-[44px] sm:text-[64px] tracking-[-0.025em] text-white leading-[1.25]">
          Clouds<span className="text-accent">Forge</span>
        </h1>
      </div>
    </main>
  );
}
