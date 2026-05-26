import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DataTable } from "@/components/DataTable";
import { GuideCard } from "@/components/GuideCard";
import { Header } from "@/components/Header";
import { ImageGallery, SourceList, VideoCard } from "@/components/MediaBlocks";
import { JsonLd } from "@/lib/json-ld";
import { games, getGame } from "@/lib/games";
import { absoluteUrl, site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    return {};
  }

  const path = `/games/${game.slug}`;

  return {
    title: `${game.title} Guide Hub`,
    description: `${game.title} guide hub with verified launch facts, Reddit discussion signals, videos, screenshots, and launch-ready guide pages.`,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${game.title} Guide Hub | nanobananas`,
      description: game.summary,
      url: absoluteUrl(path),
      siteName: site.name,
      type: "website",
      images: [
        {
          url: game.cardImage,
          alt: `${game.title} key art`,
        },
      ],
    },
  };
}

export default async function GameHubPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    notFound();
  }

  const path = `/games/${game.slug}`;
  const rows = [
    ...game.facts,
    { label: "Genre", value: game.genre },
    { label: "Guide count", value: String(game.guides.length) },
    { label: "Platforms", value: game.platforms.join(", ") },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: game.title,
          item: absoluteUrl(path),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${game.title} Guide Hub`,
      url: absoluteUrl(path),
      description: game.summary,
      isPartOf: {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
      },
      about: {
        "@type": "VideoGame",
        name: game.title,
        url: absoluteUrl(path),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: game.title,
      description: game.summary,
      image: game.cardImage,
      url: absoluteUrl(path),
      datePublished: game.releaseDate,
      applicationCategory: "Game",
      genre: game.genre,
      creator: {
        "@type": "Organization",
        name: game.developer,
      },
      publisher: {
        "@type": "Organization",
        name: game.publisher,
      },
      gamePlatform: game.platforms,
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: game.title }]}
      />
      <main className="mx-auto max-w-[1325px] px-4 py-8 sm:px-6">
        <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="inset-card overflow-hidden">
            <div
              className="min-h-[340px] bg-cover bg-center"
              style={{ backgroundImage: `url(${game.heroImage})` }}
              role="img"
              aria-label={`${game.title} background art`}
            >
              <div className="flex min-h-[340px] items-end bg-[linear-gradient(0deg,rgba(8,8,9,0.92),rgba(8,8,9,0.28))] p-5">
                <div>
                  <p className="font-gtamericamono text-caption text-electric-blue">
                    GUIDE HUB
                  </p>
                  <h1 className="mt-2 max-w-2xl text-display font-medium leading-[1.25]">
                    {game.title} guide hub
                  </h1>
                  <p className="mt-3 max-w-2xl text-body leading-[1.5] text-silver-whisper">
                    {game.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="inset-card p-4">
            <h2 className="text-heading-sm font-medium leading-[1.25]">
              Quick facts
            </h2>
            <DataTable rows={rows} />
          </aside>
        </section>

        <section id="start-here" className="mt-12">
          <div className="mb-4 border-b border-steel-border pb-3">
            <p className="font-gtamericamono text-caption text-electric-blue">
              START HERE
            </p>
            <h2 className="mt-2 text-heading-sm font-medium leading-[1.25]">
              Fast answers before the full library
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="inset-card p-4">
              <h3 className="text-body font-medium">Release facts</h3>
              <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
                Confirm launch date, platforms, Switch 2 timing, and source
                links before reading speculative guide material.
              </p>
            </article>
            <article className="inset-card p-4">
              <h3 className="text-body font-medium">Spycraft basics</h3>
              <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
                Start with stealth, gadgets, route planning, and spoiler-safe
                opening mission prep.
              </p>
            </article>
            <article className="inset-card p-4">
              <h3 className="text-body font-medium">PC readiness</h3>
              <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
                Track settings, storefront details, video evidence, and
                launch-day verification items.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-4 flex items-end justify-between gap-4 border-b border-steel-border pb-3">
            <div>
              <p className="font-gtamericamono text-caption text-electric-blue">
                GUIDE LIBRARY
              </p>
              <h2 className="mt-2 text-heading-sm font-medium">
                007 First Light tutorials
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {game.guides.map((guide) => (
              <GuideCard key={guide.slug} game={game} guide={guide} />
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,0.56fr)_minmax(320px,0.44fr)]">
          <div className="inset-card p-4">
            <p className="font-gtamericamono text-caption text-electric-blue">
              REDDIT SIGNALS
            </p>
            <h2 className="mt-2 text-heading-sm font-medium leading-[1.25]">
              What players are already asking
            </h2>
            <div className="mt-4 grid gap-3">
              {game.redditSignals.map((signal) => (
                <article
                  key={signal.topic}
                  className="rounded-md border border-steel-border bg-white/[0.02] p-3"
                >
                  <h3 className="text-body-sm font-medium">{signal.topic}</h3>
                  <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
                    {signal.insight}
                  </p>
                  <a
                    href={signal.href}
                    className="blue-focus mt-3 inline-flex rounded-sm text-body-sm text-electric-blue hover:text-white-canvas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read discussion
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="inset-card p-4">
            <p className="font-gtamericamono text-caption text-electric-blue">
              RECOMMENDED PATH
            </p>
            <h2 className="mt-2 text-heading-sm font-medium leading-[1.25]">
              Best order to read
            </h2>
            <ol className="mt-4 grid gap-2 text-body-sm">
              {game.guides.map((guide, index) => (
                <li
                  key={guide.slug}
                  className="rounded-md border border-steel-border bg-white/[0.02] p-3"
                >
                  <a
                    href={`/games/${game.slug}/guides/${guide.slug}`}
                    className="blue-focus flex items-start gap-3 rounded-sm hover:text-electric-blue"
                  >
                    <span className="font-gtamericamono text-electric-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-medium">{guide.title}</span>
                      <span className="mt-1 block text-silver-whisper">
                        {guide.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-4 border-b border-steel-border pb-3">
            <p className="font-gtamericamono text-caption text-electric-blue">
              WATCH
            </p>
            <h2 className="mt-2 text-heading-sm font-medium leading-[1.25]">
              Videos and gameplay references
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {game.videos.map((video) => (
              <VideoCard key={video.title} video={video} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-4 border-b border-steel-border pb-3">
            <p className="font-gtamericamono text-caption text-electric-blue">
              VISUAL BRIEFING
            </p>
            <h2 className="mt-2 text-heading-sm font-medium leading-[1.25]">
              Screenshots and reference images
            </h2>
          </div>
          <ImageGallery images={game.gallery} />
        </section>

        <section className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,0.58fr)_minmax(300px,0.42fr)]">
          <div className="inset-card p-4">
            <h2 className="text-heading-sm font-medium leading-[1.25]">
              Platform availability
            </h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-steel-border">
              <table className="w-full border-collapse text-left text-body-sm">
                <thead className="bg-deep-graphite text-caption uppercase text-silver-whisper">
                  <tr>
                    <th className="px-3 py-3 font-medium">Platform</th>
                    <th className="px-3 py-3 font-medium">Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {game.platforms.map((platform) => (
                    <tr key={platform} className="border-t border-steel-border">
                      <th className="px-3 py-3 font-medium text-white-canvas">
                        {platform}
                      </th>
                      <td className="px-3 py-3 font-gtamericamono text-silver-whisper">
                        {platform === "Nintendo Switch 2"
                          ? game.switch2Window
                          : game.releaseDateDisplay}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="inset-card p-4">
            <h2 className="text-heading-sm font-medium leading-[1.25]">
              Common questions
            </h2>
            <div className="mt-4 grid gap-3">
              {game.guideQuestions.map((item) => (
                <article
                  key={item.question}
                  className="rounded-md border border-steel-border bg-white/[0.02] p-3"
                >
                  <h3 className="text-body-sm font-medium">{item.question}</h3>
                  <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 inset-card p-4">
          <h2 className="text-heading-sm font-medium leading-[1.25]">
            Sources and discussions
          </h2>
          <div className="mt-4">
            <SourceList sources={game.sources} />
          </div>
        </section>
      </main>
    </>
  );
}
