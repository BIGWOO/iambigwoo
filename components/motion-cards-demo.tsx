"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  { label: "about()", desc: "// 我是誰", color: "text-blue" },
  { label: "projects()", desc: "// 做過什麼", color: "text-green" },
  { label: "services()", desc: "// 能幫你什麼", color: "text-mauve" },
  { label: "contact()", desc: "// 找到我", color: "text-peach" },
];

/**
 * Framer Motion PoC：
 * - hover 放大 + 光暈效果
 * - staggered enter animation
 * - 與 GSAP ScrollTrigger 完全分離
 */
export function MotionCardsDemo() {
  return (
    <section className="px-6 py-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 font-mono"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-mauve">const</span>{" "}
        <span className="text-blue">navigate</span> = {"{"}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="border-surface1 bg-mantle hover:border-blue/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className={`font-mono ${section.color}`}>
                  {section.label}
                </CardTitle>
                <CardDescription className="font-mono text-subtext">
                  {section.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="lg"
            className="font-mono border-surface1 text-blue hover:bg-surface0"
          >
            {">"} bigwoo.contact()
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
