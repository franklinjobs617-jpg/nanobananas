import type { Metadata } from "next";
import Link from "next/link";
import { GameCard } from "@/components/GameCard";
import { GuideCard } from "@/components/GuideCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImageGallery, VideoCard } from "@/components/MediaBlocks";
import { JsonLd } from "@/lib/json-ld";
import { catalogGames, games } from "@/lib/games";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Game Guide Hub for 007 First Light",
  description:
    "Browse the nanobananas 007 First Light hub with release facts, walkthroughs, videos, screenshots, and Reddit-informed player questions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Game Guide Hub for 007 First Light | nanobananas",
    description:
      "A compact English 007 First Light hub with verified release facts, guide pages, videos, and screenshot-backed tutorials.",
    url: absoluteUrl("/"),
    siteName: site.name,
    type: "website",
  },
};

const featuredGame = games[0];

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Game Guide Hub for 007 First Light",
      url: absoluteUrl("/"),
      description: metadata.description,
      isPartOf: {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
      },
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <Hero game={featuredGame} />

        <section className="mx-auto max-w-[1325px] px-4 py-12 sm:px-6">
          <div className="mb-6 flex flex-col justify-between gap-3 border-b border-steel-border pb-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-gtamericamono text-caption text-electric-blue">
                CURRENT COVERAGE
              </p>
              <h2 className="mt-2 text-display font-medium leading-[1.25]">
                One active game, built like a full hub
              </h2>
            </div>
            <p className="max-w-xl text-body-sm leading-[1.5] text-silver-whisper">
              The homepage is the site entrance. It currently points to one
              complete game hub, then organizes its guides, videos, screenshots,
              Reddit signals, and official sources into clear reading paths.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,0.7fr)_minmax(300px,0.3fr)]">
            <div className="grid gap-4">
              {catalogGames.map((game) => {
                const card = (
                  <article className="group inset-card overflow-hidden">
                    <div
                      className="min-h-[260px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${game.image})` }}
                      role="img"
                      aria-label={`${game.title} game artwork`}
                    >
                      <div className="flex min-h-[260px] flex-col justify-between bg-[linear-gradient(0deg,rgba(8,8,9,0.94),rgba(8,8,9,0.18))] p-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-md border border-electric-blue/70 bg-midnight-ink/70 px-2 py-1 font-gtamericamono text-caption text-electric-blue">
                            {game.status}
                          </span>
                          <span className="rounded-md border border-steel-border bg-midnight-ink/70 px-2 py-1 font-gtamericamono text-caption text-silver-whisper">
                            {game.releaseWindow}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-heading-sm font-medium leading-[1.25]">
                            {game.title}
                          </h2>
                          <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
                            {game.summary}
                          </p>
                          <p className="mt-3 font-gtamericamono text-caption text-silver-whisper">
                            {game.platforms}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );

                return (
                  <Link
                    href={game.hubHref ?? `/games/${featuredGame.slug}`}
                    key={game.slug}
                    className="blue-focus block rounded-lg"
                  >
                    {card}
                  </Link>
                );
              })}
            </div>

            <aside className="inset-card p-4">
              <h2 className="text-heading-sm font-medium leading-[1.25]">
                Site modules
              </h2>
              <dl className="mt-4 grid gap-2 text-body-sm">
                <div className="rounded-md border border-steel-border bg-white/[0.02] p-3">
                  <dt className="text-silver-whisper">Current hub</dt>
                  <dd className="mt-1 font-gtamericamono">007 First Light</dd>
                </div>
                <div className="rounded-md border border-steel-border bg-white/[0.02] p-3">
                  <dt className="text-silver-whisper">Content types</dt>
                  <dd className="mt-1 font-gtamericamono">
                    Guides / Media / Sources
                  </dd>
                </div>
                <div className="rounded-md border border-steel-border bg-white/[0.02] p-3">
                  <dt className="text-silver-whisper">Guide pages</dt>
                  <dd className="mt-1 font-gtamericamono">
                    {featuredGame.guides.length}
                  </dd>
                </div>
              </dl>
              <div className="mt-4">
                <GameCard game={featuredGame} />
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-[1325px] px-4 pb-12 sm:px-6">
          <div className="mb-4 border-b border-steel-border pb-3">
            <p className="font-gtamericamono text-caption text-electric-blue">
              START READING
            </p>
            <h2 className="mt-2 text-heading-sm font-medium leading-[1.25]">
              Latest 007 First Light guides
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredGame.guides.slice(0, 3).map((guide) => (
              <GuideCard key={guide.slug} game={featuredGame} guide={guide} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1325px] px-4 pb-12 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)]">
            <div>
              <div className="mb-4 border-b border-steel-border pb-3">
                <p className="font-gtamericamono text-caption text-electric-blue">
                  VISUAL BRIEFING
                </p>
                <h2 className="mt-2 text-heading-sm font-medium leading-[1.25]">
                  Screenshots and official art
                </h2>
              </div>
              <ImageGallery images={featuredGame.gallery.slice(0, 2)} />
            </div>
            <div>
              <div className="mb-4 border-b border-steel-border pb-3">
                <p className="font-gtamericamono text-caption text-electric-blue">
                  WATCH
                </p>
                <h2 className="mt-2 text-heading-sm font-medium leading-[1.25]">
                  Gameplay reference
                </h2>
              </div>
              <VideoCard video={featuredGame.videos[0]} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
