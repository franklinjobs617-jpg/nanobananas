import Link from "next/link";
import { catalogGames, games } from "@/lib/games";
import { site } from "@/lib/site";

export function Footer() {
  const flagship = games[0];

  return (
    <footer className="mt-16 border-t border-steel-border bg-deep-graphite/70">
      <div className="mx-auto grid max-w-[1325px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(160px,0.6fr))]">
        <section>
          <Link
            href="/"
            className="blue-focus inline-flex items-center gap-2 rounded-md text-body font-medium"
          >
            <span className="h-2 w-2 rounded-full bg-electric-blue" aria-hidden />
            {site.name}
          </Link>
          <p className="mt-3 max-w-md text-body-sm leading-[1.5] text-silver-whisper">
            English 007 First Light guides built for fast scanning, source-backed release
            facts, image-rich tutorials, and launch-day updates.
          </p>
        </section>

        <section>
          <h2 className="text-body-sm font-medium">Current hub</h2>
          <ul className="mt-3 grid gap-2 text-body-sm text-silver-whisper">
            {catalogGames.slice(0, 4).map((game) => (
              <li key={game.slug}>
                {game.hubHref ? (
                  <Link
                    href={game.hubHref}
                    className="blue-focus rounded-sm hover:text-electric-blue"
                  >
                    {game.title}
                  </Link>
                ) : (
                  <span>{game.title}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-body-sm font-medium">007 guides</h2>
          <ul className="mt-3 grid gap-2 text-body-sm text-silver-whisper">
            {flagship.guides.slice(0, 5).map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/games/${flagship.slug}/guides/${guide.slug}`}
                  className="blue-focus rounded-sm hover:text-electric-blue"
                >
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-body-sm font-medium">Trust notes</h2>
          <ul className="mt-3 grid gap-2 text-body-sm text-silver-whisper">
            <li>Official sources are linked on every hub.</li>
            <li>Reddit signals are treated as discussion, not fact.</li>
            <li>No FAQ rich result schema is used for Google.</li>
            <li>Last updated: May 26, 2026.</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
