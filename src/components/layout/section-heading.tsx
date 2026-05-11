"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleId,
}: SectionHeadingProps) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <div className="mb-4 flex items-center gap-3">
          <motion.span
            className="h-px w-10 origin-left bg-gradient-to-r from-[var(--accent)] to-transparent sm:w-14"
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2
        id={titleId}
        className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
      >
        <span className="section-title-gradient">{title}</span>
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
