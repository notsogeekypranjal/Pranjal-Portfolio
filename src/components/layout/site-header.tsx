"use client";

import { siteConfig } from "@/data/site";
import { IconGitHub, IconLinkedIn } from "@/components/icons/social";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { startTransition, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#profiles", label: "Profiles" },
  { href: "#contact", label: "Contact" },
  { href: "#resume", label: "Resume" },
] as const;

export function SiteHeader() {
  const { setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="pointer-events-auto relative w-full max-w-5xl">
        <motion.div
          className="glass-navbar flex items-center gap-2 rounded-full px-2 py-1.5 sm:gap-3 sm:px-3 sm:py-2"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="#top"
            className="font-display shrink-0 rounded-full px-2 py-1.5 text-sm font-bold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--accent)] sm:px-3"
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-[var(--muted-foreground)]">.</span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full px-2.5 py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition-colors hover:bg-[var(--nav-pill-hover)] hover:text-[var(--foreground)] xl:px-3 xl:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-1.5">
            <div className="hidden items-center sm:flex">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--nav-pill-hover)] hover:text-[var(--foreground)]"
                aria-label="GitHub"
              >
                <IconGitHub className="size-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--nav-pill-hover)] hover:text-[var(--foreground)]"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="size-4" />
              </a>
            </div>

            {mounted ? (
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-9 shrink-0 rounded-full border-[var(--nav-icon-border)] bg-[var(--nav-icon-bg)] backdrop-blur-md"
                onClick={toggleTheme}
                aria-label={
                  resolvedTheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </Button>
            ) : (
              <span className="size-9 shrink-0 rounded-full border border-[var(--border)]" />
            )}

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-9 shrink-0 rounded-full border-[var(--nav-icon-border)] bg-[var(--nav-icon-bg)] backdrop-blur-md lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </motion.div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="glass-navbar-dropdown absolute left-1/2 z-[70] mt-3 w-[min(100vw-1.5rem,24rem)] -translate-x-1/2 overflow-hidden rounded-2xl lg:hidden"
            >
              <nav
                className="flex max-h-[min(70vh,28rem)] flex-col gap-0.5 overflow-y-auto p-2"
                aria-label="Mobile primary"
              >
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--nav-pill-hover)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-1 flex justify-center gap-2 border-t border-[var(--border)] pt-2">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 text-[var(--muted-foreground)] hover:bg-[var(--nav-pill-hover)]"
                    aria-label="GitHub"
                  >
                    <IconGitHub className="size-4" />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 text-[var(--muted-foreground)] hover:bg-[var(--nav-pill-hover)]"
                    aria-label="LinkedIn"
                  >
                    <IconLinkedIn className="size-4" />
                  </a>
                </div>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
