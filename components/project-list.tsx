"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ProjectItem } from "@/lib/data";

const categoryColors: Record<string, string> = {
  fintech: "text-yellow",
  ai_agent: "text-mauve",
  saas: "text-blue",
  open_source: "text-green",
};

const categoryLabels: Record<string, string> = {
  fintech: "金融科技",
  ai_agent: "AI / Agent",
  saas: "SaaS 平台",
  open_source: "開源專案",
};

const statusBadge: Record<string, { color: string; label: string }> = {
  production: { color: "bg-green/20 text-green", label: "production" },
  development: { color: "bg-yellow/20 text-yellow", label: "development" },
  archived: { color: "bg-surface2/20 text-surface2", label: "archived" },
  "side-project": { color: "bg-mauve/20 text-mauve", label: "side-project" },
};

interface ProjectListProps {
  projects: ProjectItem[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelected(project)}
            className="cursor-pointer group"
          >
            <div className="rounded-xl border border-surface1 bg-mantle p-5 font-mono text-sm hover:border-blue/40 transition-all duration-300 hover:bg-surface0/30 h-full flex flex-col">
              {/* Module header */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs ${categoryColors[project.category] || "text-text"}`}
                >
                  {categoryLabels[project.category]}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${statusBadge[project.status]?.color}`}
                >
                  {statusBadge[project.status]?.label}
                </span>
              </div>

              {/* Export line */}
              <p className="mb-2">
                <span className="text-mauve">export</span>{" "}
                <span className="text-blue">{`{`}</span>
              </p>

              {/* Project name */}
              <h3 className="text-text font-bold text-base mb-1 group-hover:text-blue transition-colors">
                {project.name}
              </h3>

              {/* Role */}
              <p className="text-surface2 text-xs mb-3">
                {"// "}{project.role}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded bg-surface0 text-subtext"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-blue mt-3">{`}`}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Detail Modal ─────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-crust/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-xl border border-surface1 bg-mantle p-6 font-mono text-sm max-h-[80vh] overflow-y-auto"
            >
              {/* Close button */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-surface2">
                  {"// "}{selected.id}.ts
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1 text-surface2 hover:text-text transition-colors"
                  aria-label="關閉"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Module export */}
              <p className="mb-4">
                <span className="text-mauve">export default</span>{" "}
                <span className="text-text">{"{"}</span>
              </p>

              {/* Name */}
              <div className="ml-4 space-y-2.5">
                <p>
                  <span className="text-blue">name</span>:{" "}
                  <span className="text-green">
                    &quot;{selected.name}&quot;
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-blue">role</span>:{" "}
                  <span className="text-green">
                    &quot;{selected.role}&quot;
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-blue">category</span>:{" "}
                  <span className={categoryColors[selected.category]}>
                    &quot;{categoryLabels[selected.category]}&quot;
                  </span>
                  ,
                </p>

                {/* Stack */}
                <div>
                  <p>
                    <span className="text-blue">stack</span>: [
                  </p>
                  <div className="ml-4">
                    {selected.stack.map((tech, i) => (
                      <p key={tech}>
                        <span className="text-green">&quot;{tech}&quot;</span>
                        {i < selected.stack.length - 1 && ","}
                      </p>
                    ))}
                  </div>
                  <p>],</p>
                </div>

                {/* Highlights */}
                <div>
                  <p>
                    <span className="text-blue">highlights</span>: [
                  </p>
                  <div className="ml-4">
                    {selected.highlights.map((h, i) => (
                      <p key={i}>
                        <span className="text-green">&quot;{h}&quot;</span>
                        {i < selected.highlights.length - 1 && ","}
                      </p>
                    ))}
                  </div>
                  <p>],</p>
                </div>

                {/* Impact */}
                <p>
                  <span className="text-blue">impact</span>:{" "}
                  <span className="text-green">
                    &quot;{selected.impact}&quot;
                  </span>
                  ,
                </p>

                {/* Status */}
                <p>
                  <span className="text-blue">status</span>:{" "}
                  <span className="text-green">
                    &quot;{selected.status}&quot;
                  </span>
                </p>
              </div>

              <p className="mt-4">
                <span className="text-text">{"}"}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
