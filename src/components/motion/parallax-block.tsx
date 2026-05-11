"use client";

import { SectionAtmosphere } from "@/components/background/section-atmosphere";
import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type AtmosphereVariant = "violet" | "cyan" | "mixed";

type ParallaxBlockProps = {
  children: ReactNode;
  className?: string;
  /** Larger = subtler motion */
  depth?: number;
  atmosphere?: AtmosphereVariant | false;
};

/**
 * Subtle vertical parallax only — avoids rotateX/scale that skew layout
 * and misalign grids with the rest of the page.
 */
export function ParallaxBlock({
  children,
  className,
  depth = 1,
  atmosphere = "mixed",
}: ParallaxBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [18 * depth, -18 * depth],
  );

  if (reduce) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        {atmosphere ? (
          <SectionAtmosphere variant={atmosphere} className="opacity-50" />
        ) : null}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
    >
      {atmosphere ? <SectionAtmosphere variant={atmosphere} /> : null}
      <motion.div
        className="relative z-10"
        style={{
          y,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
