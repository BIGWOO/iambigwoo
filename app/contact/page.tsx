import { ContactForm } from "@/components/contact-form";
import { getContactInfo } from "@/lib/data";
import { Github, Facebook, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — bigwoo.contact()",
  description: "技術顧問、專案開發、合作提案，歡迎聯繫大吳。",
};

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  facebook: Facebook,
  line: MessageCircle,
};

const socialColors: Record<string, string> = {
  github: "text-green",
  facebook: "text-blue",
  line: "text-peach",
  instagram: "text-mauve",
};

export default function ContactPage() {
  const contact = getContactInfo();

  return (
    <main className="min-h-screen px-4 md:px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        {/* ── Page Header ─────────────────────────── */}
        <div className="mb-10 font-mono">
          <p className="text-sm text-surface2 mb-2">{"// contact.ts"}</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-mauve">await</span>{" "}
            <span className="text-blue">bigwoo</span>
            <span className="text-text">.</span>
            <span className="text-green">contact</span>
            <span className="text-text">({"{"}</span>
          </h1>
          <p className="text-subtext text-sm">
            {"// "}有什麼想聊的？填好 payload，我會盡快回覆。
          </p>
        </div>

        {/* ── Contact Form ───────────────────────── */}
        <ContactForm />

        {/* ── Closing paren ──────────────────────── */}
        <div className="mt-6 font-mono text-2xl md:text-3xl font-bold text-text">
          {"})"}
        </div>

        {/* ── Social Links ───────────────────────── */}
        <div className="mt-12 rounded-xl border border-surface1 bg-mantle p-5 font-mono text-sm">
          <p className="text-surface2 mb-3">{"// 其他聯繫方式"}</p>
          <p className="mb-2">
            <span className="text-mauve">const</span>{" "}
            <span className="text-blue">channels</span> = {"{"}
          </p>
          <div className="ml-4 space-y-1.5">
            {Object.entries(contact).map(([key, value]) => (
              <p key={key}>
                <span className="text-text">{key}</span>:{" "}
                <span className={socialColors[key] || "text-green"}>
                  &quot;{value}&quot;
                </span>
                ,
              </p>
            ))}
          </div>
          <p>{"}"}</p>
        </div>
      </div>
    </main>
  );
}
