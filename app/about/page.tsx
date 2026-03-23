import { getProfile, getTimeline } from "@/lib/data";
import { SkillsMatrix } from "@/components/skills-matrix";
import { Timeline } from "@/components/timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — interface BigWoo",
  description:
    "26 年開發經驗，從 ASP 到 AI Agent。CTO & AI Builder，用 Agentic Architecture 重新定義工作流。",
};

export default function AboutPage() {
  const profile = getProfile();
  const timeline = getTimeline();

  return (
    <main className="min-h-screen px-4 md:px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* ── Page Header ─────────────────────────── */}
        <div className="mb-12 font-mono">
          <p className="text-sm text-surface2 mb-2">{"// about.ts"}</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-mauve">interface</span>{" "}
            <span className="text-yellow">BigWoo</span>{" "}
            <span className="text-mauve">extends</span>{" "}
            <span className="text-blue">Developer</span>
            <span className="text-text">,</span>{" "}
            <span className="text-blue">Leader</span>
            <span className="text-text">,</span>{" "}
            <span className="text-blue">Builder</span>{" "}
            <span className="text-text">{"{"}</span>
          </h1>
        </div>

        {/* ── Background ─────────────────────────── */}
        <section className="mb-12 rounded-xl border border-surface1 bg-mantle p-4 md:p-6 font-mono text-sm">
          <p className="text-surface2 mb-3">{"// 背景"}</p>
          <div className="space-y-2">
            <p>
              <span className="text-blue">background</span>: {"{"}
            </p>
            <div className="ml-4 space-y-1.5">
              <p>
                <span className="text-text">started:</span>{" "}
                <span className="text-green">
                  &quot;2000&quot;
                </span>
                <span className="text-text">,</span>
                <span className="text-surface2">
                  {" "}
                  {"// ASP + Counter-Strike 的電競年代"}
                </span>
              </p>
              <p>
                <span className="text-text">evolved:</span>{" "}
                <span className="text-green">
                  &quot;ASP → PHP → Full-Stack → CTO → AI Builder&quot;
                </span>
                <span className="text-text">,</span>
              </p>
              <p>
                <span className="text-text">current:</span>{" "}
                <span className="text-green">
                  &quot;{profile.current}&quot;
                </span>
                <span className="text-text">,</span>
              </p>
              <p>
                <span className="text-text">yearsInGame:</span>{" "}
                <span className="text-peach">
                  new Date().getFullYear() - 2000
                </span>
                <span className="text-text">,</span>
                <span className="text-surface2">
                  {" "}
                  {"// "}
                  {new Date().getFullYear() - 2000} 年
                </span>
              </p>
            </div>
            <p>{"}"}</p>
          </div>
        </section>

        {/* ── Values ─────────────────────────────── */}
        <section className="mb-12 rounded-xl border border-surface1 bg-mantle p-4 md:p-6 font-mono text-sm">
          <p className="text-surface2 mb-3">{"// 價值觀"}</p>
          <p className="mb-2">
            <span className="text-blue">values</span>: [
          </p>
          <div className="ml-4 space-y-1">
            {profile.values.map((v, i) => (
              <p key={i}>
                <span className="text-green">&quot;{v}&quot;</span>
                {i < profile.values.length - 1 && (
                  <span className="text-text">,</span>
                )}
              </p>
            ))}
          </div>
          <p>]</p>
        </section>

        {/* ── Skills Matrix ──────────────────────── */}
        <section className="mb-12">
          <SkillsMatrix skills={profile.skills} />
        </section>

        {/* ── Timeline (git log) ─────────────────── */}
        <section className="mb-12">
          <Timeline entries={timeline} />
        </section>

        {/* ── Closing brace ──────────────────────── */}
        <div className="font-mono text-2xl md:text-3xl font-bold text-text">
          {"}"}
        </div>
      </div>
    </main>
  );
}
