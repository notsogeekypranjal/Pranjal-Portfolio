"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionAtmosphereProps = {
  className?: string;
  /** Slight hue shift per section */
  variant?: "violet" | "cyan" | "mixed";
};

const tones = {
  violet: {
    a: "from-violet-500/25 to-transparent",
    b: "from-fuchsia-500/15 to-transparent",
  },
  cyan: {
    a: "from-cyan-500/20 to-transparent",
    b: "from-indigo-500/18 to-transparent",
  },
  mixed: {
    a: "from-violet-500/22 to-transparent",
    b: "from-cyan-400/18 to-transparent",
  },
} as const;

export function SectionAtmosphere({
  className,
  variant = "mixed",
}: SectionAtmosphereProps) {
  const reduce = useReducedMotion();
  const t = tones[variant];

  if (reduce) {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden opacity-40",
          className,
        )}
        aria-hidden
      >
        <div
          className={cn(
            "absolute -right-24 top-0 h-72 w-72 rounded-full bg-gradient-to-bl",
            t.a,
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <motion.div
        className={cn(
          "absolute -right-24 top-0 h-80 w-80 rounded-full bg-gradient-to-bl blur-3xl",
          t.a,
        )}
        animate={{
          x: [0, 18, -8, 0],
          y: [0, 22, 10, 0],
          scale: [1, 1.08, 1.04, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-gradient-to-tr blur-3xl",
          t.b,
        )}
        animate={{
          x: [0, -24, 12, 0],
          y: [0, -16, 8, 0],
          scale: [1, 1.12, 1, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
