import Link from "next/link";
import type { Game } from "@/lib/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="inset-card overflow-hidden">
      <Link href={`/games/${game.slug}`} className="blue-focus block">
        <div
          className="aspect-[16/9] border-b border-white/8 bg-cover bg-center"
          style={{ backgroundImage: `url(${game.cardImage})` }}
          aria-label={`${game.title} key art`}
          role="img"
        />
        <div className="space-y-4 p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-heading-sm font-medium leading-[1.25]">
                {game.title}
              </h2>
              <p className="mt-1 text-body-sm leading-[1.5] text-silver-whisper">
                {game.summary}
              </p>
            </div>
            <span className="rounded-md border border-electric-blue/70 px-2 py-1 font-gtamericamono text-caption text-electric-blue">
              {game.guides.length} guide
            </span>
          </div>
          <dl className="grid grid-cols-2 gap-2 text-caption">
            <div className="rounded-md border border-steel-border bg-white/[0.02] p-3">
              <dt className="text-silver-whisper">Release</dt>
              <dd className="mt-1 font-gtamericamono text-white-canvas">
                {game.releaseDateDisplay}
              </dd>
            </div>
            <div className="rounded-md border border-steel-border bg-white/[0.02] p-3">
              <dt className="text-silver-whisper">Platforms</dt>
              <dd className="mt-1 font-gtamericamono text-white-canvas">
                {game.platforms.length}
              </dd>
            </div>
          </dl>
        </div>
      </Link>
    </article>
  );
}
