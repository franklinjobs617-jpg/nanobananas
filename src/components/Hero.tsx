import Link from "next/link";
import type { Game } from "@/lib/games";

export function Hero({ game }: { game: Game }) {
  return (
    <section
      className="relative min-h-[620px] overflow-hidden border-b border-steel-border bg-cover bg-center"
      style={{ backgroundImage: `url(${game.heroImage})` }}
      aria-labelledby="page-title"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,9,0.96)_0%,rgba(8,8,9,0.82)_42%,rgba(8,8,9,0.45)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(131,195,255,0.22),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-[620px] max-w-[1325px] items-end gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-3 font-gtamericamono text-caption text-electric-blue">
            GUIDE HUB INDEX
          </p>
          <h1
            id="page-title"
            className="max-w-xl text-display font-medium leading-[1.25]"
          >
            Source-backed game guides for launch-day readers.
          </h1>
          <p className="mt-4 max-w-xl text-body leading-[1.5] text-silver-whisper">
            A compact hub for players who want release facts, walkthrough
            routes, videos, screenshots, and Reddit-informed questions in one
            place. Current covered game: {game.title}.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={`/games/${game.slug}`}
              className="blue-focus rounded-md border border-electric-blue px-4 py-2 text-body-sm font-medium text-white-canvas"
            >
              Open Current Hub
            </Link>
            <a
              href={game.sources[0].href}
              className="ghost-button blue-focus px-4 py-2 text-body-sm"
              target="_blank"
              rel="noreferrer"
            >
              Verify on Steam
            </a>
          </div>
        </div>

        <aside className="inset-card p-4" aria-label="007 First Light facts">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-body-sm font-medium">Current covered game</h2>
            <span className="rounded-md border border-electric-blue/70 px-2 py-1 font-gtamericamono text-caption text-electric-blue">
              ACTIVE
            </span>
          </div>
          <p className="mt-3 text-heading-sm font-medium leading-[1.25]">
            {game.title}
          </p>
          <dl className="mt-4 grid gap-2">
            {game.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center justify-between gap-4 rounded-md border border-steel-border bg-white/[0.02] px-3 py-3"
              >
                <dt className="text-caption text-silver-whisper">
                  {fact.label}
                </dt>
                <dd className="text-right font-gtamericamono text-caption text-white-canvas">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
