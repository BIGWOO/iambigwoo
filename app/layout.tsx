import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "大吳 (Big Woo) — CTO & AI Builder",
  description:
    "Full-Stack Developer, AI Builder, Agentic Architecture. 用 TypeScript 程式碼偽裝成文案的個人官網。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
