import { ParallaxBlock } from "@/components/motion/parallax-block";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/layout/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { achievements } from "@/data/site";
import { Award } from "lucide-react";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="achievements-heading"
    >
      <ParallaxBlock depth={0.65} atmosphere="cyan">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Recognition"
              title="Achievements"
              description="Competitions, summits, and challenges where outcomes were externally evaluated."
              titleId="achievements-heading"
            />
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <GlassCard className="flex gap-4 p-5 sm:p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--muted)]/30 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                    <Award className="size-5 text-[var(--accent)]" aria-hidden />
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                    {a}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </ParallaxBlock>
    </section>
  );
}
