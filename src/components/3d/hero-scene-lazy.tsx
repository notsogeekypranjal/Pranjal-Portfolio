"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroScene = dynamic(
  () => import("./hero-scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => <HeroSceneFallback /> },
);

function HeroSceneFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex min-h-[100dvh] items-center justify-center"
      aria-hidden
    >
      <div className="h-72 w-72 animate-pulse rounded-full bg-[var(--accent)]/20 blur-[100px]" />
      <div className="absolute h-48 w-48 animate-pulse rounded-full bg-cyan-400/15 blur-[80px]" />
    </div>
  );
}

type Props = {
  scrollRef?: React.MutableRefObject<number>;
};

export function HeroSceneLazy({ scrollRef }: Props) {
  return (
    <Suspense fallback={<HeroSceneFallback />}>
      <HeroScene scrollRef={scrollRef} />
    </Suspense>
  );
}
