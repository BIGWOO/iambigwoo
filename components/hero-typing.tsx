"use client";

import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { motion } from "framer-motion";

const codeLines = [
  '// bigwoo.config.ts',
  '',
  'export const bigwoo = {',
  '  name: "大吳 (Big Woo)",',
  '  title: "CTO & AI Builder",',
  '  location: "Taipei, Taiwan",',
  '  current: "綠界大數據 CTO",',
  '',
  '  expertise: [',
  '    "Full-Stack Web Development",',
  '    "AI / LLM Integration",',
  '    "Agentic Architecture",',
  '    "Payment & FinTech Systems",',
  '  ],',
  '',
  '  philosophy: "let machines think,',
  '               let humans dream",',
  '',
  '  status: "open_to_collaborate" as const,',
  '} satisfies Developer',
];

// Syntax highlighting helper
function highlightLine(line: string, lineNum: number) {
  // Comment line
  if (line.trimStart().startsWith("//")) {
    return <span className="text-surface2 italic">{line}</span>;
  }

  // Keyword lines
  return line
    .split(/("[^"]*")/g)
    .map((part, i) => {
      if (part.startsWith('"') && part.endsWith('"')) {
        return (
          <span key={i} className="text-green">
            {part}
          </span>
        );
      }

      // Keywords
      return part
        .split(/(export|const|as const|satisfies)/g)
        .map((subpart, j) => {
          if (
            subpart === "export" ||
            subpart === "const" ||
            subpart === "as const" ||
            subpart === "satisfies"
          ) {
            return (
              <span key={`${i}-${j}`} className="text-mauve">
                {subpart}
              </span>
            );
          }

          // Types
          if (subpart.includes("Developer")) {
            return (
              <span key={`${i}-${j}`}>
                {subpart.split(/(Developer)/g).map((s, k) =>
                  s === "Developer" ? (
                    <span key={k} className="text-yellow">
                      {s}
                    </span>
                  ) : (
                    <span key={k}>{s}</span>
                  )
                )}
              </span>
            );
          }

          // Property keys
          return (
            <span key={`${i}-${j}`}>
              {subpart.split(/(\w+):/g).map((s, k, arr) =>
                k < arr.length - 1 && arr[k + 1] === ":" ? (
                  <span key={k} className="text-blue">
                    {s}
                  </span>
                ) : (
                  <span key={k}>{s}</span>
                )
              )}
            </span>
          );
        });
    });
}

export function HeroTyping() {
  const { displayedLines, currentLineIndex, isComplete } = useTypingAnimation({
    lines: codeLines,
    typingSpeed: 25,
    lineDelay: 100,
    startDelay: 300,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl"
    >
      {/* Editor window chrome */}
      <div className="rounded-t-xl border border-b-0 border-surface1 bg-crust px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red/70" />
          <div className="h-3 w-3 rounded-full bg-yellow/70" />
          <div className="h-3 w-3 rounded-full bg-green/70" />
        </div>
        <span className="ml-3 font-mono text-xs text-subtext">
          bigwoo.config.ts
        </span>
      </div>

      {/* Code area */}
      <div className="rounded-b-xl border border-surface1 bg-mantle p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto">
        <pre className="leading-relaxed">
          {displayedLines.map((line, i) => (
            <div key={i} className="flex">
              {/* Line number */}
              <span className="mr-4 w-6 flex-shrink-0 select-none text-right text-surface2">
                {i + 1}
              </span>
              {/* Code content */}
              <span className="text-text">
                {highlightLine(line, i)}
                {/* Cursor */}
                {i === currentLineIndex && !isComplete && (
                  <span className="inline-block w-2 h-4 bg-blue/80 animate-pulse ml-0.5 align-middle" />
                )}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </motion.div>
  );
}
