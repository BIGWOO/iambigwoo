"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    href: "/about",
    label: "about()",
    desc: "// 我是誰",
    color: "text-blue",
    hoverBorder: "hover:border-blue/40",
  },
  {
    href: "/projects",
    label: "projects()",
    desc: "// 做過什麼",
    color: "text-green",
    hoverBorder: "hover:border-green/40",
  },
  {
    href: "/services",
    label: "services()",
    desc: "// 能幫你什麼",
    color: "text-mauve",
    hoverBorder: "hover:border-mauve/40",
  },
  {
    href: "/contact",
    label: "contact()",
    desc: "// 找到我",
    color: "text-peach",
    hoverBorder: "hover:border-peach/40",
  },
];

export function QuickNav() {
  return (
    <section className="px-4 md:px-6 py-20">
      <motion.p
        className="text-center font-mono text-sm text-subtext mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-mauve">const</span>{" "}
        <span className="text-blue">navigate</span> ={" "}
        <span className="text-yellow">{"["}</span>
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={section.href}>
              <Card
                className={`border-surface1 bg-mantle ${section.hoverBorder} transition-all duration-300 cursor-pointer group hover:bg-surface0/30`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className={`font-mono text-sm ${section.color}`}>
                    {section.label}
                  </CardTitle>
                  <CardDescription className="font-mono text-xs text-surface2">
                    {section.desc}
                  </CardDescription>
                </CardHeader>
                <div className="px-6 pb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-surface2 group-hover:text-subtext transition-colors">
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    navigate
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center font-mono text-sm text-subtext mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-yellow">{"]"}</span>
      </motion.p>
    </section>
  );
}
