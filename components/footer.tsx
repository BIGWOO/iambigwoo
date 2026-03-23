import { Github, Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/BIGWOO",
    icon: Github,
    label: "GitHub",
    color: "hover:text-text",
  },
  {
    href: "https://fb.com/iambigwoo",
    icon: Facebook,
    label: "Facebook",
    color: "hover:text-blue",
  },
  {
    href: "https://line.me/ti/p/~iambigwoo",
    icon: MessageCircle,
    label: "Line",
    color: "hover:text-green",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface1 bg-crust">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Left: Code-style copyright */}
          <div className="font-mono text-sm text-subtext text-center md:text-left">
            <p>
              <span className="text-mauve">export default</span>{" "}
              <span className="text-yellow">{`"© ${year} bigwoo.app"`}</span>
            </p>
            <p className="mt-1 text-surface2">
              {"// built with Next.js, TypeScript & ☕"}
            </p>
          </div>

          {/* Right: Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`text-surface2 transition-colors ${link.color}`}
              >
                <link.icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 font-mono text-xs text-surface2">
          <Link href="/" className="hover:text-subtext transition-colors">
            index.ts
          </Link>
          <span className="text-surface1">|</span>
          <Link href="/about" className="hover:text-subtext transition-colors">
            about.ts
          </Link>
          <span className="text-surface1">|</span>
          <Link
            href="/projects"
            className="hover:text-subtext transition-colors"
          >
            projects.ts
          </Link>
          <span className="text-surface1">|</span>
          <Link
            href="/services"
            className="hover:text-subtext transition-colors"
          >
            services.ts
          </Link>
          <span className="text-surface1">|</span>
          <Link
            href="/contact"
            className="hover:text-subtext transition-colors"
          >
            contact.ts
          </Link>
        </div>
      </div>
    </footer>
  );
}
