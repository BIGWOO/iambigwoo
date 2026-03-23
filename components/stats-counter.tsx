"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  key: string;
  value: string | number;
  comment: string;
  isNumeric: boolean;
}

const stats: StatItem[] = [
  {
    key: "yearsOfExperience",
    value: 26,
    comment: "// since 2000",
    isNumeric: true,
  },
  {
    key: "projectsDelivered",
    value: 71,
    comment: "// 專案數",
    isNumeric: true,
  },
  {
    key: "techStackDepth",
    value: '"full-stack"',
    comment: "// 技術深度",
    isNumeric: false,
  },
  {
    key: "aiAgentsBuilt",
    value: '"∞"',
    comment: "// AI Agents",
    isNumeric: false,
  },
];

function AnimatedNumber({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return <span className="text-peach">{count}</span>;
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-2xl"
    >
      <div className="rounded-xl border border-surface1 bg-mantle p-4 md:p-6 font-mono text-xs md:text-sm">
        <p className="text-surface2 mb-2">{"// stats.ts"}</p>
        <p className="mb-1">
          <span className="text-mauve">const</span>{" "}
          <span className="text-blue">stats</span> = {"{"}
        </p>
        <div className="ml-4 space-y-1">
          {stats.map((stat) => (
            <div key={stat.key} className="flex flex-wrap gap-x-1">
              <span className="text-text">{stat.key}:</span>
              {stat.isNumeric ? (
                <AnimatedNumber
                  target={stat.value as number}
                  isInView={isInView}
                />
              ) : (
                <span className="text-green">{String(stat.value)}</span>
              )}
              <span className="text-peach">,</span>
              <span className="text-surface2 ml-2">{stat.comment}</span>
            </div>
          ))}
        </div>
        <p>{"}"}</p>
      </div>
    </motion.div>
  );
}
