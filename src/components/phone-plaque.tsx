"use client";

import { motion, useReducedMotion } from "motion/react";
import { hours, site } from "@/lib/site";

export function PhonePlaque() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={site.phoneHref}
      className="mt-8 block bg-primary text-primary-foreground"
      initial={false}
      whileHover={
        reduce
          ? undefined
          : {
              y: -3,
              boxShadow: "0 18px 32px -16px oklch(0.28 0.04 158 / 0.55)",
            }
      }
      whileFocus={
        reduce
          ? undefined
          : {
              y: -3,
              boxShadow: "0 18px 32px -16px oklch(0.28 0.04 158 / 0.55)",
            }
      }
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="block px-6 pt-6 sm:px-8 sm:pt-7">
        <span className="block text-sm font-medium">Termin vereinbaren</span>
        <span className="mt-1 block font-heading text-[clamp(2.1rem,5vw,3.4rem)] leading-none tracking-[-0.03em] tabular-nums">
          {site.phoneDisplay}
        </span>
      </span>
      <span className="mt-6 grid border-t border-primary-foreground/25 sm:grid-cols-3">
        {hours.map((row) => (
          <span
            key={row.label}
            className="block border-primary-foreground/25 px-6 py-3.5 not-first:border-t sm:border-t-0 sm:border-l sm:px-8 sm:first:border-l-0"
          >
            <span className="block text-sm text-primary-foreground/85">{row.label}</span>
            <span className="tabular-nums sm:mt-1 sm:block">{row.value}</span>
          </span>
        ))}
      </span>
    </motion.a>
  );
}
