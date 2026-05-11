import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function GlassCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border-strong)] bg-[var(--glass)] p-6 shadow-[var(--card-shadow)] backdrop-blur-2xl transition-[box-shadow,transform] duration-300 hover:shadow-[var(--card-shadow-hover)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
