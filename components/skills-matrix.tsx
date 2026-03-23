"use client";

import { motion } from "framer-motion";

interface SkillsMatrixProps {
  skills: {
    core: Record<string, string>;
    ai: Record<string, string>;
    infrastructure: Record<string, string>;
  };
}

const levelColors: Record<string, string> = {
  expert: "text-green",
  veteran: "text-blue",
  advanced: "text-mauve",
  proficient: "text-yellow",
  retired: "text-surface2",
};

const categoryLabels: Record<string, string> = {
  core: "core",
  ai: "ai",
  infrastructure: "infrastructure",
};

export function SkillsMatrix({ skills }: SkillsMatrixProps) {
  const categories = Object.entries(skills);

  return (
    <div className="rounded-xl border border-surface1 bg-mantle p-4 md:p-6 font-mono text-sm">
      <p className="text-surface2 mb-3">{"// package.json — skills"}</p>
      <p className="mb-2 text-text">{"{"}</p>

      {categories.map(([category, items], catIdx) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: catIdx * 0.15 }}
          className="ml-4 mb-3"
        >
          <p className="mb-1">
            <span className="text-blue">
              &quot;{categoryLabels[category]}&quot;
            </span>
            : {"{"}
          </p>
          <div className="ml-4 space-y-0.5">
            {Object.entries(items).map(([skill, level], i) => (
              <p key={skill}>
                <span className="text-text">&quot;{skill}&quot;</span>:{" "}
                <span className={levelColors[level] || "text-text"}>
                  &quot;{level}&quot;
                </span>
                {i < Object.keys(items).length - 1 && (
                  <span className="text-text">,</span>
                )}
                {level === "retired" && (
                  <span className="text-surface2">
                    {" // 2000-2002, 永遠的起點"}
                  </span>
                )}
              </p>
            ))}
          </div>
          <p>
            {"}"}
            {catIdx < categories.length - 1 && (
              <span className="text-text">,</span>
            )}
          </p>
        </motion.div>
      ))}

      <p className="text-text">{"}"}</p>

      {/* Legend */}
      <div className="mt-4 pt-3 border-t border-surface1 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {Object.entries(levelColors).map(([level, color]) => (
          <span key={level} className="flex items-center gap-1">
            <span className={`inline-block h-2 w-2 rounded-full ${color.replace("text-", "bg-")}`} />
            <span className="text-surface2">{level}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
