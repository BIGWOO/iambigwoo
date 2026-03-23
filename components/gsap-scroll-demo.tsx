"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * GSAP ScrollTrigger PoC：
 * - pin 左側程式碼區
 * - scrub 控制右側內容進度
 */
export function GsapScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !codeRef.current) return;

      // Pin the code block while scrolling through content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: codeRef.current,
        pinSpacing: false,
      });

      // Animate code lines with scrub
      const lines = containerRef.current.querySelectorAll(".code-line");
      lines.forEach((line, i) => {
        gsap.from(line, {
          opacity: 0.2,
          x: -20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${(i / lines.length) * 100}% center`,
            end: `${((i + 1) / lines.length) * 100}% center`,
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20"
    >
      {/* Left: Pinned code block (GSAP ScrollTrigger) */}
      <div ref={codeRef} className="self-start">
        <div className="rounded-xl border border-surface1 bg-mantle p-6 font-mono text-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red" />
            <div className="h-3 w-3 rounded-full bg-yellow" />
            <div className="h-3 w-3 rounded-full bg-green" />
            <span className="ml-2 text-subtext text-xs">bigwoo.config.ts</span>
          </div>
          <pre className="space-y-1">
            <div className="code-line text-mauve">
              <span className="text-subtext mr-4 select-none">1</span>
              {"export const "}
              <span className="text-blue">bigwoo</span>
              {" = {"}
            </div>
            <div className="code-line text-text">
              <span className="text-subtext mr-4 select-none">2</span>
              {"  role: "}
              <span className="text-green">{'"CTO & AI Builder"'}</span>,
            </div>
            <div className="code-line text-text">
              <span className="text-subtext mr-4 select-none">3</span>
              {"  mind: "}
              <span className="text-green">{'"agentic_architecture"'}</span>,
            </div>
            <div className="code-line text-text">
              <span className="text-subtext mr-4 select-none">4</span>
              {"  passion: "}
              <span className="text-green">
                {'"building things that think"'}
              </span>
              ,
            </div>
            <div className="code-line text-text">
              <span className="text-subtext mr-4 select-none">5</span>
              {"  motto: "}
              <span className="text-green">
                {'"let machines think, let humans dream"'}
              </span>
              ,
            </div>
            <div className="code-line text-mauve">
              <span className="text-subtext mr-4 select-none">6</span>
              {"} "}
              <span className="text-blue">satisfies</span>
              {" Developer"}
            </div>
          </pre>
        </div>
      </div>

      {/* Right: Scroll content */}
      <div className="space-y-[50vh] py-[25vh]">
        <div className="rounded-xl border border-surface1 bg-mantle/50 p-6">
          <h3 className="text-xl font-bold text-blue mb-2">
            // Full-Stack Developer
          </h3>
          <p className="text-subtext">
            26 年開發經驗，從 ASP 到 AI Agent，見證 Web 技術的每次進化。
          </p>
        </div>
        <div className="rounded-xl border border-surface1 bg-mantle/50 p-6">
          <h3 className="text-xl font-bold text-green mb-2">// AI Builder</h3>
          <p className="text-subtext">
            用 Agentic Architecture 重新定義工作流，讓機器思考，讓人類做夢。
          </p>
        </div>
        <div className="rounded-xl border border-surface1 bg-mantle/50 p-6">
          <h3 className="text-xl font-bold text-mauve mb-2">
            // Open to Collaborate
          </h3>
          <p className="text-subtext">
            技術顧問、架構規劃、AI 整合開發——找到適合的合作方式。
          </p>
        </div>
      </div>
    </section>
  );
}
