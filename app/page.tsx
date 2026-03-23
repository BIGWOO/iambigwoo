import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { GsapScrollDemo } from "@/components/gsap-scroll-demo";
import { MotionCardsDemo } from "@/components/motion-cards-demo";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main>
        {/* Hero Section — SSR 完整輸出 */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight">
              <span className="text-blue">{"<"}</span>
              <span className="text-text">BigWoo</span>
              <span className="text-blue">{" />"}</span>
            </h1>
            <p className="mb-2 font-mono text-lg text-subtext">
              CTO & AI Builder — 綠界大數據
            </p>
            <p className="font-mono text-sm text-surface2">
              {`// let machines think, let humans dream`}
            </p>
          </div>
        </section>

        {/* GSAP ScrollTrigger PoC — pin + scrub */}
        <GsapScrollDemo />

        {/* Framer Motion PoC — hover + enter animations */}
        <MotionCardsDemo />

        {/* Footer placeholder */}
        <footer className="border-t border-surface1 px-6 py-12 text-center font-mono text-sm text-subtext">
          <p>
            {"// "}
            <span className="text-green">Phase 0</span>
            {" — 技術驗證完成"}
          </p>
          <p className="mt-1 text-surface2">
            &copy; {new Date().getFullYear()} bigwoo.app
          </p>
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
