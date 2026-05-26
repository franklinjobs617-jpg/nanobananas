import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Header } from "@/components/Header";
import { ImageGallery, SourceList, VideoCard } from "@/components/MediaBlocks";
import { JsonLd } from "@/lib/json-ld";
import { games, getGame, getGuide } from "@/lib/games";
import { absoluteUrl, site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string; guideSlug: string }>;
};

export function generateStaticParams() {
  return games.flatMap((game) =>
    game.guides.map((guide) => ({
      slug: game.slug,
      guideSlug: guide.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, guideSlug } = await params;
  const game = getGame(slug);
  const guide = game ? getGuide(game, guideSlug) : undefined;

  if (!game || !guide) {
    return {};
  }

  const path = `/games/${game.slug}/guides/${guide.slug}`;

  return {
    title: `${guide.title} - ${game.title}`,
    description: guide.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${guide.title} | nanobananas`,
      description: guide.description,
      url: absoluteUrl(path),
      siteName: site.name,
      type: "article",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      images: [
        {
          url: guide.heroImage,
          alt: `${game.title} guide artwork`,
        },
      ],
    },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug, guideSlug } = await params;
  const game = getGame(slug);
  const guide = game ? getGuide(game, guideSlug) : undefined;

  if (!game || !guide) {
    notFound();
  }

  const path = `/games/${game.slug}/guides/${guide.slug}`;
  const hubPath = `/games/${game.slug}`;
  const videoThumbnail = guide.video
    ? guide.video.thumbnail.startsWith("http")
      ? guide.video.thumbnail
      : absoluteUrl(guide.video.thumbnail)
    : undefined;
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
          item: absoluteUrl(hubPath),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: guide.title,
          item: absoluteUrl(path),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${guide.title} - ${game.title}`,
      description: guide.description,
      image: guide.heroImage,
      url: absoluteUrl(path),
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      author: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": absoluteUrl(path),
      },
      about: {
        "@type": "VideoGame",
        name: game.title,
        url: absoluteUrl(hubPath),
      },
    },
    ...(guide.video
      ? [
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: guide.video.title,
            description: guide.video.description,
            thumbnailUrl: videoThumbnail ? [videoThumbnail] : undefined,
            uploadDate: guide.datePublished,
            embedUrl: guide.video.embedUrl,
            contentUrl: guide.video.externalUrl,
          },
        ]
      : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: game.title, href: hubPath },
          { label: guide.title },
        ]}
      />
      <main className="mx-auto max-w-[1325px] px-4 py-8 sm:px-6">
        <article className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="inset-card p-5">
            <div
              className="-m-5 mb-5 min-h-[360px] bg-cover bg-center"
              style={{ backgroundImage: `url(${guide.heroImage})` }}
              role="img"
              aria-label={`${guide.title} hero image`}
            >
              <div className="flex min-h-[360px] items-end bg-[linear-gradient(0deg,rgba(8,8,9,0.96),rgba(8,8,9,0.24))] p-5">
                <div>
                  <p className="font-gtamericamono text-caption text-electric-blue">
                    {guide.category.toUpperCase()} GUIDE
                  </p>
                  <h1 className="mt-2 max-w-3xl text-display font-medium leading-[1.25]">
                    {guide.title}
                  </h1>
                  <p className="mt-3 max-w-3xl text-body leading-[1.5] text-silver-whisper">
                    {guide.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-caption">
              <span className="rounded-md border border-electric-blue/70 px-2 py-1 font-gtamericamono text-electric-blue">
                {guide.difficulty}
              </span>
              <span className="rounded-md border border-steel-border px-2 py-1 font-gtamericamono text-silver-whisper">
                {guide.readTime}
              </span>
              <time
                className="rounded-md border border-steel-border px-2 py-1 font-gtamericamono text-silver-whisper"
                dateTime={guide.dateModified}
              >
                Updated {guide.dateModified}
              </time>
            </div>

            <section
              id="overview"
              className="mt-8 rounded-lg border border-steel-border bg-white/[0.02] p-4"
            >
              <h2 className="text-heading-sm font-medium leading-[1.25]">
                Key takeaways
              </h2>
              <ul className="mt-4 grid gap-2 text-body-sm text-white-canvas">
                {guide.takeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="rounded-md border border-steel-border bg-midnight-ink/40 p-3"
                  >
                    {takeaway}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-8 grid gap-8">
              {guide.sections.map((section) => (
                <section
                  key={section.heading}
                  id={section.heading
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")}
                >
                  <h2 className="text-heading-sm font-medium leading-[1.25]">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-body leading-[1.5] text-silver-whisper">
                    {section.body}
                  </p>
                  {section.points ? (
                    <ul className="mt-4 grid gap-2 text-body-sm text-white-canvas">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-md border border-steel-border bg-white/[0.02] p-3"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-8">
              <h2 className="text-heading-sm font-medium leading-[1.25]">
                Visual references
              </h2>
              <div className="mt-4">
                <ImageGallery images={guide.gallery} />
              </div>
            </section>

            {guide.video ? (
              <section className="mt-8">
                <h2 className="text-heading-sm font-medium leading-[1.25]">
                  Video reference
                </h2>
                <div className="mt-4">
                  <VideoCard video={guide.video} />
                </div>
              </section>
            ) : null}

            <section className="mt-8">
              <h2 className="text-heading-sm font-medium leading-[1.25]">
                Frequently asked questions
              </h2>
              <div className="mt-4 grid gap-3">
                {game.guideQuestions.slice(0, 3).map((item) => (
                  <article
                    key={item.question}
                    className="rounded-md border border-steel-border bg-white/[0.02] p-3"
                  >
                    <h3 className="text-body-sm font-medium">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 id="sources" className="text-heading-sm font-medium leading-[1.25]">
                Sources
              </h2>
              <div className="mt-4">
                <SourceList sources={guide.sources} />
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="inset-card p-4">
              <h2 className="text-heading-sm font-medium leading-[1.25]">
                On this page
              </h2>
              <ol className="mt-4 grid gap-2 text-body-sm">
                <li>
                  <a
                    href="#overview"
                    className="blue-focus rounded-sm text-silver-whisper hover:text-electric-blue"
                  >
                    Overview
                  </a>
                </li>
                {guide.sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${section.heading
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "")}`}
                      className="blue-focus rounded-sm text-silver-whisper hover:text-electric-blue"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#sources"
                    className="blue-focus rounded-sm text-silver-whisper hover:text-electric-blue"
                  >
                    Sources
                  </a>
                </li>
              </ol>
            </div>

            <div className="inset-card overflow-hidden">
              <div
                className="aspect-[16/9] bg-cover bg-center"
                style={{ backgroundImage: `url(${game.cardImage})` }}
                role="img"
                aria-label={`${game.title} artwork`}
              />
              <div className="p-4">
                <h2 className="text-heading-sm font-medium leading-[1.25]">
                  {game.title}
                </h2>
                <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
                  {game.summary}
                </p>
                <Link
                  href={hubPath}
                  className="ghost-button blue-focus mt-4 inline-flex px-3 py-2 text-body-sm"
                >
                  Back to hub
                </Link>
              </div>
            </div>

            <div className="inset-card p-4">
              <h2 className="text-heading-sm font-medium leading-[1.25]">
                Related guides
              </h2>
              <div className="mt-4 grid gap-2 text-body-sm">
                {game.guides
                  .filter((related) => related.slug !== guide.slug)
                  .slice(0, 4)
                  .map((related) => (
                    <Link
                      key={related.slug}
                      href={`/games/${game.slug}/guides/${related.slug}`}
                      className="blue-focus rounded-md border border-steel-border bg-white/[0.02] p-3 hover:border-electric-blue/70"
                    >
                      <span className="block font-medium">{related.title}</span>
                      <span className="mt-1 block text-silver-whisper">
                        {related.category} · {related.readTime}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </article>
      </main>
    </>
  );
}
