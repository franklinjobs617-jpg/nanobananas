import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel-border/80 bg-midnight-ink/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-16 max-w-[1325px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="blue-focus group flex items-center gap-3 rounded-lg border border-steel-border bg-white/[0.02] px-3 py-2"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-md border border-electric-blue/60 bg-electric-blue/10 font-gtamericamono text-caption text-electric-blue"
            aria-hidden
          >
            NB
          </span>
          <span>
            <span className="block text-body-sm font-medium leading-none text-white-canvas">
              nanobananas
            </span>
            <span className="mt-1 block font-gtamericamono text-[10px] leading-none text-silver-whisper">
              GAME GUIDE HUB
            </span>
          </span>
        </Link>

        <div className="order-3 flex w-full items-center gap-1 overflow-x-auto rounded-lg border border-steel-border bg-deep-graphite/85 p-1 text-body-sm sm:order-2 sm:w-auto">
          <Link
            href="/"
            className="blue-focus whitespace-nowrap rounded-md px-3 py-2 text-white-canvas shadow-subtle"
          >
            Overview
          </Link>
          <Link
            href="/games/007-first-light"
            className="blue-focus whitespace-nowrap rounded-md px-3 py-2 text-silver-whisper hover:bg-white/[0.03] hover:text-white-canvas"
          >
            007 Hub
          </Link>
          <Link
            href="/games/007-first-light/guides/release-date-platforms-guide"
            className="blue-focus whitespace-nowrap rounded-md px-3 py-2 text-silver-whisper hover:bg-white/[0.03] hover:text-white-canvas"
          >
            Release
          </Link>
          <Link
            href="/games/007-first-light/guides/stealth-gadgets-field-manual"
            className="blue-focus whitespace-nowrap rounded-md px-3 py-2 text-silver-whisper hover:bg-white/[0.03] hover:text-white-canvas"
          >
            Spycraft
          </Link>
        </div>

        <div className="order-2 flex items-center gap-2 sm:order-3">
          <span className="hidden rounded-md border border-success-green/50 px-2 py-1 font-gtamericamono text-caption text-success-green sm:inline-flex">
            UPDATED MAY 26
          </span>
          <a
            href="https://007firstlightgame.com/"
            className="blue-focus rounded-md border border-electric-blue/80 px-3 py-2 text-body-sm font-medium text-white-canvas hover:bg-electric-blue/10"
            target="_blank"
            rel="noreferrer"
          >
            Official source
          </a>
        </div>
      </nav>
    </header>
  );
}
