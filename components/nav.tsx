"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "index.ts", shortLabel: "~/" },
  { href: "/about", label: "about.ts", shortLabel: "about" },
  { href: "/projects", label: "projects.ts", shortLabel: "projects" },
  { href: "/services", label: "services.ts", shortLabel: "services" },
  { href: "/contact", label: "contact.ts", shortLabel: "contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface1 bg-crust/80 backdrop-blur-md">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
        {/* Logo / File explorer icon */}
        <Link
          href="/"
          className="font-mono text-sm font-bold text-blue hover:text-blue/80 transition-colors"
        >
          <span className="text-mauve">{">"}</span> bigwoo
          <span className="text-surface2">.app</span>
        </Link>

        {/* Desktop: IDE tab bar */}
        <div className="hidden md:flex items-center gap-0">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 border-r border-surface1 px-4 py-2 font-mono text-xs transition-colors",
                  isActive
                    ? "bg-base text-text"
                    : "text-subtext hover:text-text hover:bg-surface0/50"
                )}
              >
                {/* File type icon dot */}
                <span
                  className={cn(
                    "inline-block h-2 w-2 rounded-full",
                    isActive ? "bg-blue" : "bg-surface2"
                  )}
                />
                {item.label}
                {/* Active tab indicator */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-subtext hover:text-text transition-colors"
          aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-surface1 bg-crust md:hidden overflow-hidden"
          >
            <div className="py-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 font-mono text-sm transition-colors",
                      isActive
                        ? "text-blue bg-surface0/30"
                        : "text-subtext hover:text-text hover:bg-surface0/20"
                    )}
                  >
                    <span className="text-surface2">{">"}</span>
                    {item.shortLabel}
                    {isActive && (
                      <span className="ml-auto text-xs text-blue">●</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
