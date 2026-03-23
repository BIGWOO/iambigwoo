import { HeroTyping } from "@/components/hero-typing";
import { StatsCounter } from "@/components/stats-counter";
import { QuickNav } from "@/components/quick-nav";
import { getProfile } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "大吳 (Big Woo) — CTO & AI Builder",
  description:
    "Full-Stack Developer turned AI Builder. Building things that think. 26 年開發經驗，從 ASP 到 AI Agent。",
};

export default function Home() {
  const profile = getProfile();

  return (
    <main>
      {/* ── Hero Section ─────────────────────────── */}
      <section className="flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center px-4 md:px-6">
        {/* SSR fallback: complete text always in DOM for SEO */}
        <noscript>
          <div className="font-mono text-sm text-text max-w-2xl">
            <p>export const bigwoo = {"{"}</p>
            <p>  name: &quot;{profile.name}&quot;,</p>
            <p>  title: &quot;{profile.title}&quot;,</p>
            <p>  location: &quot;{profile.location}&quot;,</p>
            <p>  philosophy: &quot;{profile.philosophy}&quot;,</p>
            <p>  status: &quot;{profile.status}&quot;,</p>
            <p>{"}"} satisfies Developer</p>
          </div>
        </noscript>

        {/* Animated hero */}
        <HeroTyping />

        {/* Spacer */}
        <div className="mt-8" />

        {/* Stats Counter */}
        <StatsCounter />
      </section>

      {/* ── Quick Navigation Cards ───────────────── */}
      <QuickNav />
    </main>
  );
}
