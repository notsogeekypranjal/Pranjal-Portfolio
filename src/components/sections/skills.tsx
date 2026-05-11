import { ParallaxBlock } from "@/components/motion/parallax-block";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/layout/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { skills, softSkills } from "@/data/site";

const groups = [
  { label: "Languages", items: skills.languages },
  { label: "Core CS", items: skills.core },
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Databases", items: skills.databases },
  { label: "Machine Learning", items: skills.ml },
] as const;

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <ParallaxBlock depth={0.7} atmosphere="violet">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Stack"
              title="Skills"
              description="Languages, systems design, and ML tooling I use in production-style projects."
              titleId="skills-heading"
            />
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.04}>
                <GlassCard className="p-5">
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {g.label}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--muted)]/30 px-3 py-1 text-xs text-[var(--muted-foreground)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="mt-6">
            <GlassCard className="p-5 sm:p-6">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--foreground)]">
                Soft skills
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </ParallaxBlock>
    </section>
  );
}
