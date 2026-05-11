"use client";

import { ParallaxBlock } from "@/components/motion/parallax-block";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/data/site";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const body = String(fd.get("message") ?? "").trim();
    if (!name || !email || !body) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: body }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        mailtoUrl?: string;
        error?: string;
      };
      if (res.ok && data.ok) {
        if (data.mailtoUrl) {
          window.location.href = data.mailtoUrl;
        }
        setStatus("success");
        setMessage(
          data.mailtoUrl
            ? "Your email client should open with this message pre-filled."
            : "Thanks — your message was sent.",
        );
        form.reset();
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try email directly.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again or use email directly.");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <ParallaxBlock depth={0.55} atmosphere="violet">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk"
            description="Internships, collaborations, or technical discussions — send a concise note and I will respond quickly."
            titleId="contact-heading"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Reveal delay={0.06}>
            <GlassCard className="p-6 sm:p-8">
              <p className="text-sm text-[var(--muted-foreground)]">Direct</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-lg font-medium text-[var(--foreground)] hover:text-[var(--accent)]"
              >
                {siteConfig.email}
              </a>
              <p className="mt-6 text-sm leading-relaxed text-[var(--muted-foreground)]">
                Prefer a form? Use the secure message panel. If server email is
                not configured, your default mail app opens with the same
                content.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--input-bg)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--input-bg)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--input-bg)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
                  />
                </div>
                {message ? (
                  <p
                    role="status"
                    className={
                      status === "error"
                        ? "text-sm text-red-400"
                        : "text-sm text-emerald-400"
                    }
                  >
                    {message}
                  </p>
                ) : null}
                <MagneticButton strength={0.28}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full sm:w-auto"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                  </Button>
                </MagneticButton>
              </form>
            </GlassCard>
          </Reveal>
        </div>
        </div>
      </ParallaxBlock>
    </section>
  );
}
