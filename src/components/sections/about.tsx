import { ParallaxBlock } from "@/components/motion/parallax-block";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/layout/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <ParallaxBlock depth={0.85} atmosphere="violet">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Background"
              description="What I focus on and how I work with teams."
              titleId="about-heading"
            />
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <GlassCard className="p-6 sm:p-8">
              <p className="text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
                {siteConfig.summary}
              </p>
              <div className="mt-8 grid gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--foreground)]">
                    Education
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {siteConfig.education.degree}
                    <br />
                    {siteConfig.education.school}
                    <br />
                    {siteConfig.education.period}
                    <br />
                    {siteConfig.education.location}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--foreground)]">
                    Target roles
                  </h3>
                  <ul className="mt-2 list-inside list-disc text-sm text-[var(--muted-foreground)]">
                    {siteConfig.targetRoles.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </ParallaxBlock>
    </section>
  );
}
