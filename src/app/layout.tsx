import { Analytics } from "@/components/providers/analytics";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig, siteUrl } from "@/data/site";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0fa" },
    { media: "(prefers-color-scheme: dark)", color: "#030306" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · ${siteConfig.title}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.summary.slice(0, 155),
  keywords: [
    "Pranjal Mishra",
    "MERN",
    "Machine Learning",
    "Intern",
    "Full-stack",
    "React",
    "DRDO",
    "New Delhi",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · Portfolio`,
    description: siteConfig.headline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · Portfolio`,
    description: siteConfig.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-fg)] transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
