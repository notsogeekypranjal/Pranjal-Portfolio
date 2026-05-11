"use client";

import { ParallaxBlock } from "@/components/motion/parallax-block";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/layout/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { projects } from "@/data/site";
import { ExternalLink } from "lucide-react";
import Tilt from "react-parallax-tilt";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <ParallaxBlock depth={0.9} atmosphere="mixed">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Work"
              title="Featured projects"
              description="Full-stack platforms and applied ML systems."
              titleId="projects-heading"
            />
          </Reveal>

          <div
            className="mt-14 grid gap-6 lg:grid-cols-3"
            style={{ perspective: "1600px" }}
          >
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="h-full">
                <Tilt
                  tiltMaxAngleX={14}
                  tiltMaxAngleY={14}
                  perspective={1600}
                  scale={1.02}
                  transitionSpeed={1800}
                  gyroscope={false}
                  glareEnable
                  glareMaxOpacity={0.35}
                  glareColor="rgba(255,255,255,0.45)"
                  glarePosition="all"
                  glareBorderRadius="1rem"
                  className="h-full [transform-style:preserve-3d]"
                >
                  <GlassCard className="flex h-full flex-col p-5 sm:p-6">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--border)] bg-[var(--muted)]/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display mt-4 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                      {p.subtitle}
                    </p>
                    <ul className="mt-4 flex-1 list-inside list-disc space-y-1.5 text-sm text-[var(--muted-foreground)] marker:text-[var(--accent)]">
                      {p.description.map((line) => (
                        <li key={line} className="pl-1">
                          {line}
                        </li>
                      ))}
                    </ul>
                    {p.links?.length ? (
                      <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--border)] pt-4">
                        {p.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] hover:underline"
                          >
                            {l.label}
                            <ExternalLink className="size-3.5" />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </GlassCard>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </ParallaxBlock>
    </section>
  );
}
