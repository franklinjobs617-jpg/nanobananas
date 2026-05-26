import Link from "next/link";
import type { Game, Guide } from "@/lib/games";

export function GuideCard({ game, guide }: { game: Game; guide: Guide }) {
  return (
    <Link
      href={`/games/${game.slug}/guides/${guide.slug}`}
      className="blue-focus group block rounded-lg"
    >
      <article className="inset-card h-full overflow-hidden transition-colors group-hover:bg-deep-graphite">
      <div
        className="aspect-[16/9] border-b border-steel-border bg-cover bg-center"
        style={{ backgroundImage: `url(${guide.heroImage})` }}
        role="img"
        aria-label={`${guide.title} guide artwork`}
      />
      <div className="p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-caption">
          <span className="rounded-md border border-electric-blue/70 px-2 py-1 font-gtamericamono text-electric-blue">
            {guide.category}
          </span>
          <span className="rounded-md border border-steel-border px-2 py-1 font-gtamericamono text-silver-whisper">
            {guide.difficulty}
          </span>
        </div>
        <h3 className="text-heading-sm font-medium leading-[1.25]">
          {guide.title}
        </h3>
        <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
          {guide.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-caption">
          <span className="rounded-md border border-steel-border px-2 py-1 font-gtamericamono text-silver-whisper">
            {guide.readTime}
          </span>
          <time className="rounded-md border border-steel-border px-2 py-1 font-gtamericamono text-silver-whisper">
            Updated {guide.dateModified}
          </time>
        </div>
        <span className="ghost-button mt-5 inline-flex px-3 py-2 text-body-sm">
          Read guide
        </span>
      </div>
    </article>
    </Link>
  );
}
