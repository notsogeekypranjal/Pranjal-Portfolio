import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** Resolves Turbopack “multiple lockfiles” warning when a parent folder has its own lockfile. */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
};

export default nextConfig;
