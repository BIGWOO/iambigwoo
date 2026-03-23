"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Code, Users } from "lucide-react";
import type { ServiceItem } from "@/lib/data";
import Link from "next/link";

const iconMap: Record<string, typeof Brain> = {
  brain: Brain,
  bot: Bot,
  code: Code,
  users: Users,
};

interface ServiceListProps {
  services: ServiceItem[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="space-y-6">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon] || Code;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-surface1 bg-mantle p-5 md:p-6 font-mono text-sm hover:border-blue/30 transition-all duration-300"
          >
            {/* Method signature */}
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-surface0 text-blue shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-base font-bold text-text mb-0.5">
                  <span className="text-mauve">async</span>{" "}
                  <span className="text-blue">{service.id}</span>
                  <span className="text-text">(): </span>
                  <span className="text-yellow">Promise</span>
                  <span className="text-text">{"<"}Result{">"}</span>
                </p>
                <p className="text-surface2 text-xs">{"// "}{service.name}</p>
              </div>
            </div>

            {/* Description as JSDoc */}
            <div className="ml-0 md:ml-11 mb-4">
              <p className="text-surface2 mb-1">{"/**"}</p>
              {service.description.split("、").map((item, j) => (
                <p key={j} className="text-subtext">
                  {" * "}{item.trim()}
                </p>
              ))}
              <p className="text-surface2">{" */"}</p>
            </div>

            {/* idealFor */}
            <div className="ml-0 md:ml-11">
              <p className="text-surface2 text-xs mb-1.5">
                {"// idealFor:"}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.idealFor.map((target) => (
                  <span
                    key={target}
                    className="text-xs px-2 py-0.5 rounded bg-surface0 text-subtext"
                  >
                    {target}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: services.length * 0.1 }}
        className="rounded-xl border border-dashed border-blue/30 bg-mantle/50 p-6 text-center font-mono"
      >
        <p className="text-subtext mb-3">
          <span className="text-mauve">return</span>{" "}
          <span className="text-blue">bigwoo</span>.
          <span className="text-green">contact</span>
          <span className="text-text">()</span>
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue text-crust font-bold text-sm hover:bg-blue/90 transition-colors"
        >
          {">"} 開始合作
        </Link>
      </motion.div>
    </div>
  );
}
