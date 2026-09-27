import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hustlenix.github.io/PCBOD";
  return ["", "/how-it-works", "/for-creators", "/about"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path ? 0.7 : 1,
  }));
}
