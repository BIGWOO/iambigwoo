import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "聯繫大吳 — bigwoo.contact()",
  description: "技術顧問、專案開發、合作提案，歡迎聯繫。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center font-mono">
          <h1 className="mb-2 text-3xl font-bold">
            <span className="text-mauve">{"// "}</span>
            <span className="text-blue">bigwoo</span>
            <span className="text-text">.contact()</span>
          </h1>
          <p className="text-subtext">
            有什麼想聊的？填好表單，我會盡快回覆。
          </p>
        </div>

        <ContactForm />

        <div className="mt-12 rounded-xl border border-surface1 bg-mantle p-6 font-mono text-sm">
          <p className="mb-2 text-subtext">{"// 其他聯繫方式"}</p>
          <div className="space-y-1 text-surface2">
            <p>
              facebook: <span className="text-blue">fb.com/iambigwoo</span>
            </p>
            <p>
              github:{" "}
              <span className="text-green">github.com/BIGWOO</span>
            </p>
            <p>
              line: <span className="text-peach">iambigwoo</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
