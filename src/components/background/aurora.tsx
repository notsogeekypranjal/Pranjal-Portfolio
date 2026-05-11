"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[var(--bg-base)]" />
      <motion.div
        className="absolute -left-1/4 top-[-20%] h-[70vh] w-[70vw] rounded-full bg-[var(--aurora-1)] opacity-50 blur-[120px] dark:opacity-38"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 48, -12, 0],
                y: [0, 36, 12, 0],
                scale: [1, 1.08, 1.03, 1],
                rotate: [0, 8, -4, 0],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-1/4 top-[10%] h-[60vh] w-[60vw] rounded-full bg-[var(--aurora-2)] opacity-44 blur-[100px] dark:opacity-32"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -56, 20, 0],
                y: [0, 44, -8, 0],
                scale: [1, 1.1, 1.02, 1],
                rotate: [0, -10, 6, 0],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-1/3 h-[50vh] w-[50vw] rounded-full bg-[var(--aurora-3)] opacity-40 blur-[110px] dark:opacity-28"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 36, -24, 0],
                y: [0, -40, 16, 0],
                scale: [1, 1.06, 1, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-[15%] top-[40%] h-[35vh] w-[35vw] rounded-full bg-[var(--accent)] opacity-[0.2] blur-[90px] dark:opacity-[0.16]"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.25, 1],
                opacity: [0.16, 0.28, 0.16],
              }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[140vh] w-[140vh] -translate-x-1/2 -translate-y-1/2 opacity-38 dark:opacity-30"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, var(--aurora-1) 100deg, transparent 200deg, var(--aurora-2) 280deg, transparent 360deg)",
        }}
        animate={reduce ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--glow-center),transparent)]" />
    </div>
  );
}
