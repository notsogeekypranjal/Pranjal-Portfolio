import { siteConfig, siteUrl } from "@/data/site";
import { IconGitHub, IconLinkedIn } from "@/components/icons/social";
import { Download, Mail } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[var(--border-strong)] bg-[var(--glass)] pb-12 pt-16 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          id="resume"
          className="relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-gradient-to-br from-[var(--glass)] via-[var(--muted)]/20 to-transparent p-8 shadow-[0_0_80px_-20px_rgba(139,92,246,0.35)] sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                CV
              </p>
              <h2 className="font-display mt-2 max-w-md text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Download the full resume
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                One PDF with experience, projects, education, and skills formatted
                for recruiters and applicant systems.
              </p>
            </div>
            <a
              href={siteConfig.resumePath}
              download
              className="font-display inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#67e8f9] px-10 py-4 text-base font-bold text-[#0a0a0a] shadow-[0_16px_48px_rgba(139,92,246,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="size-5" aria-hidden />
              Download PDF
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-[var(--foreground)]">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              {siteConfig.title} · {siteConfig.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted-foreground)]">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 font-medium hover:text-[var(--foreground)]"
            >
              <Mail className="size-4" />
              Email
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium hover:text-[var(--foreground)]"
            >
              <IconLinkedIn className="size-4" />
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium hover:text-[var(--foreground)]"
            >
              <IconGitHub className="size-4" />
              GitHub
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-[var(--muted-foreground)] sm:text-left">
          © {year} {siteConfig.name}. Built with Next.js.{" "}
          <span className="sr-only">Site URL: {siteUrl}</span>
        </p>
      </div>
    </footer>
  );
}
