"use client";

import { motion } from "framer-motion";
import type { TimelineEntry } from "@/lib/data";

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="rounded-xl border border-surface1 bg-mantle p-4 md:p-6 font-mono text-sm">
      <p className="text-surface2 mb-4">{"$ git log --oneline --graph"}</p>

      <div className="space-y-6">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.hash}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Commit header */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-yellow">{entry.hash}</span>
              {entry.ref && (
                <span className="text-green text-xs">
                  ({entry.ref})
                </span>
              )}
            </div>

            {/* Author + Date */}
            <p className="text-surface2 text-xs mt-1">
              Author: bigwoo | Date: {entry.date}
            </p>

            {/* Commit message */}
            <div className="mt-2 ml-4 border-l-2 border-surface1 pl-4">
              <p className="text-blue">
                {entry.type}
                {entry.scope && `(${entry.scope})`}: {entry.title}
              </p>
              {entry.description.map((d, j) => (
                <p key={j} className="text-subtext text-xs mt-0.5">
                  - {d}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
