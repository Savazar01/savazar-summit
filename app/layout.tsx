import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savazar India AI Summit 2026 | Sovereign AI & Agentic Automation",
  description:
    "Join Savazar India at the Savazar India AI Summit 2026. Discover Agentic AI Automation, AI Solution Architecture, and enterprise-grade private AI consulting for Indian businesses.",
  keywords:
    "Savazar India, AI Summit 2026, Agentic AI, n8n, Private AI, Data Sovereignty, AI Workshop India",
  openGraph: {
    title: "Savazar India AI Summit 2026",
    description:
      "Sovereign AI. Private Infrastructure. Bridging the gap between AI potential and enterprise reality.",
    siteName: "Savazar India AI Summit",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
