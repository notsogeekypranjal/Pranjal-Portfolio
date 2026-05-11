import { ParallaxBlock } from "@/components/motion/parallax-block";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/layout/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { experience } from "@/data/site";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="experience-heading"
    >
      <ParallaxBlock depth={0.75} atmosphere="cyan">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Timeline"
              description="Research-grade ML workflows and collaboration in defense R&D."
              titleId="experience-heading"
            />
          </Reveal>

          <div className="relative mt-14">
            <div
              className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-[var(--accent)]/70 via-[var(--border)] to-transparent sm:left-[15px]"
              aria-hidden
            />
            <ul className="space-y-10">
              {experience.map((job, i) => (
                <li
                  key={`${job.company}-${job.period}`}
                  className="relative pl-10 sm:pl-12"
                >
                  <span
                    className="absolute top-2 left-0 flex size-6 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--glass)] shadow-[0_0_28px_rgba(139,92,246,0.35)] sm:top-1.5 sm:size-8"
                    aria-hidden
                  >
                    <Briefcase className="size-3 text-[var(--accent)] sm:size-3.5" />
                  </span>
                  <Reveal delay={i * 0.06}>
                    <GlassCard className="p-5 sm:p-6">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-display text-lg font-bold text-[var(--foreground)]">
                            {job.role}
                          </h3>
                          <p className="text-sm font-medium text-[var(--accent)]">
                            {job.company}
                          </p>
                        </div>
                        <p className="text-xs text-[var(--muted-foreground)] sm:text-right">
                          {job.period}
                          <br />
                          {job.location}
                        </p>
                      </div>
                      <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-[var(--muted-foreground)] marker:text-[var(--accent)]">
                        {job.highlights.map((h) => (
                          <li key={h} className="pl-1">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ParallaxBlock>
    </section>
  );
}
