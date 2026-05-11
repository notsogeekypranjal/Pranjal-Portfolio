"use client";

import { HeroSceneLazy } from "@/components/3d/hero-scene-lazy";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    scrollRef.current = v;
  });

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-28 sm:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="hero-vignette pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <HeroSceneLazy scrollRef={scrollRef} />

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-4 sm:px-6">
        <div className="flex min-h-0 flex-1 flex-col justify-center py-6 sm:py-10">
          <div className="max-w-3xl">
            <Reveal y={48}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-[var(--hero-eyebrow)]">
                Open to internships · {siteConfig.location}
              </p>
            </Reveal>

            <Reveal delay={0.06} y={56} className="mt-6">
              <h1
                id="hero-heading"
                className="font-display grid max-w-[18ch] text-balance text-5xl font-extrabold leading-[0.92] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
                style={{ gridTemplateAreas: '"stack"' }}
              >
                <span
                  className="hero-title-stroke [grid-area:stack]"
                  aria-hidden
                >
                  {siteConfig.name}
                </span>
                <span className="hero-title-fill [grid-area:stack]">
                  {siteConfig.name}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12} y={40} className="mt-6">
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-[var(--hero-sub)] sm:text-xl md:text-2xl">
                {siteConfig.headline}
              </p>
            </Reveal>

            <Reveal delay={0.16} y={36} className="mt-8 flex flex-wrap gap-2.5">
              {siteConfig.roles.map((role) => (
                <span
                  key={role}
                  className="hero-role-chip relative z-10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
                >
                  {role}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.2} y={32} className="mt-10 flex flex-wrap gap-4">
              <MagneticButton strength={0.4}>
                <Button
                  asChild
                  size="lg"
                  className="hero-cta-primary h-12 rounded-full px-8 text-base"
                >
                  <a href="#contact">
                    Start a conversation
                    <ArrowDownRight className="size-5" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-[var(--border-strong)] bg-[var(--glass)] px-8 text-base backdrop-blur-xl"
                >
                  <a href="#projects">View work</a>
                </Button>
              </MagneticButton>
            </Reveal>
          </div>
        </div>

        {!reduce ? (
          <div className="pointer-events-none hidden shrink-0 flex-col items-center justify-end gap-2 pb-6 pt-2 sm:flex sm:pb-8 sm:pt-4">
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
                  Scroll
                </span>
                <span className="block h-10 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
