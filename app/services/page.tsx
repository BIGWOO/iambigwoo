import { getServices } from "@/lib/data";
import { ServiceList } from "@/components/service-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — class Services implements API",
  description:
    "技術顧問、AI/LLM 整合開發、全端 Web 應用開發、技術團隊 Mentoring。大吳的專業服務。",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <main className="min-h-screen px-4 md:px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* ── Page Header ─────────────────────────── */}
        <div className="mb-12 font-mono">
          <p className="text-sm text-surface2 mb-2">{"// services.ts"}</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-mauve">class</span>{" "}
            <span className="text-yellow">Services</span>{" "}
            <span className="text-mauve">implements</span>{" "}
            <span className="text-blue">API</span>{" "}
            <span className="text-text">{"{"}</span>
          </h1>
          <p className="text-subtext text-sm">
            {"// "}
            {services.length} endpoints available
          </p>
        </div>

        {/* ── Service Cards ──────────────────────── */}
        <ServiceList services={services} />

        {/* ── Closing brace ──────────────────────── */}
        <div className="mt-12 font-mono text-2xl md:text-3xl font-bold text-text">
          {"}"}
        </div>
      </div>
    </main>
  );
}
