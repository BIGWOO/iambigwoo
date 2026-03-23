import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "大吳 (Big Woo) — CTO & AI Builder",
    template: "%s — bigwoo.app",
  },
  description:
    "Full-Stack Developer turned AI Builder. Building things that think. 用 TypeScript 程式碼偽裝成文案的個人官網。",
  metadataBase: new URL("https://bigwoo.app"),
  openGraph: {
    title: "大吳 (Big Woo) — CTO & AI Builder",
    description:
      "Full-Stack Developer turned AI Builder. Building things that think.",
    url: "https://bigwoo.app",
    siteName: "bigwoo.app",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "大吳 (Big Woo) — CTO & AI Builder",
    description:
      "Full-Stack Developer turned AI Builder. Building things that think.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-base text-text antialiased">
        <Nav />
        <div className="pt-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
