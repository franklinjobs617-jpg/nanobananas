import type { MetadataRoute } from "next";
import { games } from "@/lib/games";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-05-26");

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
    },
    ...games.flatMap((game) => [
      {
        url: absoluteUrl(`/games/${game.slug}`),
        lastModified: now,
      },
      ...game.guides.map((guide) => ({
        url: absoluteUrl(`/games/${game.slug}/guides/${guide.slug}`),
        lastModified: new Date(guide.dateModified),
      })),
    ]),
  ];
}
