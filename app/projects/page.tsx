import { getProjects } from "@/lib/data";
import { ProjectList } from "@/components/project-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — export const projects",
  description:
    "CashBack 現金回饋平台、FreeStore 免費開店平台、AI Agent 工作流自動化。代表性作品集。",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen px-4 md:px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* ── Page Header ─────────────────────────── */}
        <div className="mb-12 font-mono">
          <p className="text-sm text-surface2 mb-2">{"// projects.ts"}</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-mauve">export const</span>{" "}
            <span className="text-blue">projects</span>
            <span className="text-text">:</span>{" "}
            <span className="text-yellow">Project[]</span>{" "}
            <span className="text-text">= [</span>
          </h1>
          <p className="text-subtext text-sm">
            {"// "}
            {projects.length} modules loaded
          </p>
        </div>

        {/* ── Project Cards ──────────────────────── */}
        <ProjectList projects={projects} />

        {/* ── Closing bracket ────────────────────── */}
        <div className="mt-12 font-mono text-2xl md:text-3xl font-bold text-text">
          ]
        </div>
      </div>
    </main>
  );
}
