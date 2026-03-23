import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center px-4">
      <div className="max-w-lg text-center font-mono">
        <div className="rounded-xl border border-red/30 bg-mantle p-6 md:p-8 mb-6">
          <p className="text-red text-sm mb-2">{"// Unhandled Exception"}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-red mb-4">
            throw new Error(
          </h1>
          <p className="text-xl md:text-2xl text-text mb-4">
            <span className="text-green">
              &quot;404: this.page is undefined&quot;
            </span>
          </p>
          <p className="text-3xl md:text-4xl font-bold text-red">)</p>
        </div>

        <p className="text-subtext text-sm mb-6">
          {"// 你找的頁面不存在，也許試試："}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-blue text-crust text-sm font-bold hover:bg-blue/90 transition-colors"
          >
            {">"} cd ~
          </Link>
          <Link
            href="/projects"
            className="px-4 py-2 rounded-lg border border-surface1 text-subtext text-sm hover:text-text hover:border-blue/40 transition-colors"
          >
            {">"} ls projects/
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg border border-surface1 text-subtext text-sm hover:text-text hover:border-blue/40 transition-colors"
          >
            {">"} bigwoo.contact()
          </Link>
        </div>
      </div>
    </main>
  );
}
