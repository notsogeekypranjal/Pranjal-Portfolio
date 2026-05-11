import { ParallaxBlock } from "@/components/motion/parallax-block";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/layout/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { codingProfiles } from "@/data/site";
import { IconGitHub, IconLinkedIn } from "@/components/icons/social";
import { ArrowUpRight } from "lucide-react";

function Icon({ label }: { label: string }) {
  if (label === "GitHub") return <IconGitHub className="size-5" aria-hidden />;
  if (label === "LinkedIn")
    return <IconLinkedIn className="size-5" aria-hidden />;
  return <ArrowUpRight className="size-5" aria-hidden />;
}

export function ProfilesSection() {
  return (
    <section
      id="profiles"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="profiles-heading"
    >
      <ParallaxBlock depth={0.6} atmosphere="mixed">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Presence"
              title="Coding profiles"
              description="Repositories and professional history in one place."
              titleId="profiles-heading"
            />
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {codingProfiles.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.06}>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <GlassCard className="group flex h-full items-start gap-4 p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--muted)]/30 text-[var(--foreground)] shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-colors group-hover:border-[var(--accent)]/50 group-hover:text-[var(--accent)]">
                      <Icon label={p.label} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-[var(--foreground)]">
                          {p.label}
                        </h3>
                        <ArrowUpRight className="size-4 shrink-0 text-[var(--muted-foreground)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                      </div>
                      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        {p.description}
                      </p>
                    </div>
                  </GlassCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </ParallaxBlock>
    </section>
  );
}
