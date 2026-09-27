import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "PCBOD — Publish Hardware Like Software", template: "%s — PCBOD" },
  description: "PCBOD is a concept marketplace where PCB designers publish hardware products, buyers order them, manufacturing happens on demand, and creators earn royalties.",
  metadataBase: new URL("https://hustlenix.github.io"),
  openGraph: {
    title: "PCBOD — Publish Hardware Like Software",
    description: "A concept marketplace for creator-designed PCB products manufactured on demand.",
    type: "website",
    siteName: "PCBOD",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased"><Header />{children}<Footer /></body></html>;
}
