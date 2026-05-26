export type MediaImage = {
  src: string;
  alt: string;
  caption: string;
};

export type VideoEmbed = {
  title: string;
  description: string;
  embedUrl?: string;
  externalUrl: string;
  thumbnail: string;
};

export type SourceLink = {
  label: string;
  href: string;
  note?: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  heroImage: string;
  category: string;
  difficulty: string;
  takeaways: string[];
  sections: {
    heading: string;
    body: string;
    points?: string[];
  }[];
  gallery: MediaImage[];
  video?: VideoEmbed;
  sources: SourceLink[];
};

export type Game = {
  slug: string;
  title: string;
  subtitle: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  releaseDateDisplay: string;
  switch2Window: string;
  genre: string;
  heroImage: string;
  cardImage: string;
  summary: string;
  platforms: string[];
  sources: SourceLink[];
  facts: { label: string; value: string }[];
  guideQuestions: { question: string; answer: string }[];
  redditSignals: { topic: string; insight: string; href: string }[];
  gallery: MediaImage[];
  videos: VideoEmbed[];
  guides: Guide[];
};

export type CatalogGame = {
  title: string;
  slug: string;
  status: string;
  releaseWindow: string;
  image: string;
  summary: string;
  platforms: string;
  hubHref?: string;
};

const officialImages = {
  bond: "/games/007-first-light/hero.webp",
  homepage: "/games/007-first-light/homepage-feature.webp",
  screenshot5: "/games/007-first-light/screenshots/007-first-light-screenshot-5.webp",
  screenshot8: "/games/007-first-light/screenshots/007-first-light-screenshot-8.webp",
  slovakia:
    "https://cms.ioi.dk/media/yfylg0tx/slovakia-web2.jpg?width=2560",
  kensington:
    "https://cms.ioi.dk/media/szxhuulh/kensington2-web.jpg?width=2560",
  boat: "https://cms.ioi.dk/media/50hbvwsn/game-pillar-2-web.jpg?width=2560",
  stealth:
    "https://cms.ioi.dk/media/0u5kg4lp/fl-spying-01231.jpg?width=2560",
  watch: "https://cms.ioi.dk/media/ogsnwclf/watch-web2.jpg?width=2560",
  phone: "https://cms.ioi.dk/media/popefdhb/phone-web2.jpg?width=2560",
  earphones:
    "https://cms.ioi.dk/media/1z1hykcu/earphones-web2.jpg?width=2560",
};

export const catalogGames: CatalogGame[] = [
  {
    title: "007 First Light",
    slug: "007-first-light",
    status: "Primary hub",
    releaseWindow: "May 27, 2026",
    image: "/games/007-first-light/homepage-feature.webp",
    summary:
      "Bond origin-story hub with release facts, Reddit signals, stealth notes, gadget prep, and launch-day guide pages.",
    platforms: "PS5, Xbox Series X|S, PC, Switch 2",
    hubHref: "/games/007-first-light",
  },
];

const officialSite: SourceLink = {
  label: "Official 007 First Light site",
  href: "https://007firstlightgame.com/",
  note: "Official release, pillars, locations, gadgets, cast, and FAQ source.",
};

const steamSource: SourceLink = {
  label: "Steam store page",
  href: "https://store.steampowered.com/app/3768760/007_First_Light/",
  note: "Storefront source for PC listing and release positioning.",
};

const redditOpeningMission: SourceLink = {
  label: "Reddit: first 13 minutes discussion",
  href: "https://www.reddit.com/r/007FirstLight/comments/1tm5t9w/first_13_minutes_of_007_first_light/",
  note: "Community discussion around IOI's opening mission video and spoiler concerns.",
};

const redditGamesThread: SourceLink = {
  label: "Reddit: r/Games first 13 minutes thread",
  href: "https://www.reddit.com/r/Games/comments/1tm67j0/the_first_13_minutes_of_007_first_light/",
  note: "Broader player reaction to the official early gameplay upload.",
};

const redditGameplayReveal: SourceLink = {
  label: "Reddit: gameplay reveal discussion",
  href: "https://www.reddit.com/r/pcgaming/comments/1n7n1sg/007_first_light_gameplay_reveal/",
  note: "Community questions about performance, image quality, and the Hitman-to-Bond shift.",
};

export const games: Game[] = [
  {
    slug: "007-first-light",
    title: "007 First Light",
    subtitle: "A launch-ready guide hub for Bond's origin story.",
    developer: "IO Interactive",
    publisher: "IO Interactive",
    releaseDate: "2026-05-27",
    releaseDateDisplay: "May 27, 2026",
    switch2Window: "Summer 2026",
    genre: "Action-adventure",
    heroImage: officialImages.bond,
    cardImage: officialImages.homepage,
    summary:
      "Track verified release details, platform availability, player questions, and practical launch guide material for 007 First Light.",
    platforms: ["PlayStation 5", "Xbox Series X|S", "PC", "Nintendo Switch 2"],
    sources: [
      officialSite,
      steamSource,
      redditOpeningMission,
      redditGamesThread,
      redditGameplayReveal,
    ],
    facts: [
      { label: "Developer", value: "IO Interactive" },
      { label: "Publisher", value: "IO Interactive" },
      { label: "Launch date", value: "May 27, 2026" },
      { label: "Switch 2 window", value: "Summer 2026" },
      { label: "Genre", value: "Action-adventure" },
      { label: "Confirmed rating notes", value: "Teen: violence, blood, language" },
    ],
    guideQuestions: [
      {
        question: "What is 007 First Light?",
        answer:
          "007 First Light is an IO Interactive narrative action-adventure game centered on a young James Bond in MI6's training program.",
      },
      {
        question: "Which platforms are listed for launch?",
        answer:
          "The verified platform list includes PlayStation 5, Xbox Series X|S, and PC for May 27, 2026, with Nintendo Switch 2 planned for Summer 2026.",
      },
      {
        question: "Why are these guides pre-launch focused?",
        answer:
          "The game launches on May 27, 2026, so these pages separate official facts and public gameplay footage from claims that still need release-day verification.",
      },
      {
        question: "What are Reddit players asking about most?",
        answer:
          "The strongest discussion signals are whether the game feels closer to Hitman, Uncharted, or Splinter Cell, how combat and stealth work, and whether the opening gameplay is too spoiler-heavy.",
      },
    ],
    redditSignals: [
      {
        topic: "Spoiler-safe first look",
        insight:
          "Reddit threads around the first 13 minutes show that many players want gameplay proof but still want opening mission spoilers clearly labeled.",
        href: redditOpeningMission.href,
      },
      {
        topic: "Hitman, Uncharted, or Splinter Cell?",
        insight:
          "Community reactions repeatedly compare the game to IOI stealth sandboxes, cinematic climbing, and classic infiltration pacing.",
        href: redditGamesThread.href,
      },
      {
        topic: "Performance and image quality",
        insight:
          "Gameplay reveal discussion includes concerns about image clarity, YouTube compression, and whether PC/console versions will hold up at launch.",
        href: redditGameplayReveal.href,
      },
    ],
    gallery: [
      {
        src: officialImages.slovakia,
        alt: "Grand Carpathian Hotel in the High Tatra Mountains in 007 First Light",
        caption: "Slovakia: the Grand Carpathian Hotel field assignment.",
      },
      {
        src: officialImages.kensington,
        alt: "Kensington museum gala location in 007 First Light",
        caption: "Kensington: a museum gala built for social infiltration.",
      },
      {
        src: officialImages.watch,
        alt: "Q-Watch gadget image from 007 First Light",
        caption: "Q-Watch: official gadget artwork from IO Interactive.",
      },
      {
        src: officialImages.boat,
        alt: "Boat chase location from 007 First Light",
        caption: "Vehicle set pieces are one of the official game pillars.",
      },
    ],
    videos: [
      {
        title: "Official 34 Minute Gameplay Reveal",
        description:
          "A long-form gameplay reveal showing stealth, infiltration, driving, and action pacing.",
        embedUrl: "https://www.dailymotion.com/embed/video/x9q3shs",
        externalUrl: "https://www.gamespot.com/games/007-first-light/videos/",
        thumbnail: officialImages.kensington,
      },
      {
        title: "The First 13 Minutes of 007 First Light",
        description:
          "IOI's official opening mission video became the center of launch-week Reddit discussion; watch only if you are comfortable with early-game spoilers.",
        externalUrl: redditOpeningMission.href,
        thumbnail: officialImages.stealth,
      },
      {
        title: "Launch Trailer Watch Card",
        description:
          "The launch trailer frames the young Bond origin story and the broader spy-thriller tone.",
        externalUrl:
          "https://www.reddit.com/r/Tekkens/comments/1tknic0/tekkens_007_first_light_a_new_spy_thriller_begins/",
        thumbnail: officialImages.bond,
      },
    ],
    guides: [
      {
        slug: "release-date-platforms-guide",
        title: "Release Date and Platforms Guide",
        description:
          "A direct answer page for 007 First Light release timing, platform status, Switch 2 timing, and what still needs launch-day verification.",
        readTime: "8 min read",
        datePublished: "2026-05-26",
        dateModified: "2026-05-26",
        heroImage: officialImages.screenshot8,
        category: "Release facts",
        difficulty: "Beginner",
        takeaways: [
          "007 First Light launches May 27, 2026 on PlayStation 5, Xbox Series X|S, and PC.",
          "Nintendo Switch 2 is listed for a separate Summer 2026 window.",
          "Edition details, preload timing, and final PC options need store-level verification.",
        ],
        sections: [
          {
            heading: "Direct answer",
            body: "007 First Light is listed for May 27, 2026 on PlayStation 5, Xbox Series X|S, and PC. Nintendo Switch 2 is listed separately for Summer 2026. This page keeps the release answer short first, then separates platform facts from items that still need store confirmation.",
            points: [
              "Confirmed launch date: May 27, 2026.",
              "Confirmed primary platforms: PlayStation 5, Xbox Series X|S, and PC.",
              "Separate platform window: Nintendo Switch 2 in Summer 2026.",
            ],
          },
          {
            heading: "Platform status",
            body: "The best platform guide is a table, not a paragraph. Readers should immediately see which versions share the same launch date and which version has a later window.",
            points: [
              "PC players should watch Steam for preload, install size, controller support, and graphics feature notes.",
              "Console players should check store pages for performance modes, language packs, and preorder availability.",
              "Switch 2 players should treat Summer 2026 as a window until a specific date appears.",
            ],
          },
          {
            heading: "What needs verification",
            body: "Do not invent edition, bonus, file size, preload, or review embargo details before they appear on official pages. Mark those items as watchlist entries and update this page when they are visible in stores.",
          },
        ],
        gallery: [
          {
            src: officialImages.screenshot8,
            alt: "007 First Light release guide hero screenshot",
            caption: "Use release pages for facts, not speculation.",
          },
          {
            src: officialImages.homepage,
            alt: "007 First Light homepage feature artwork",
            caption: "The hub keeps launch timing visible across the site.",
          },
        ],
        video: {
          title: "Release and Platform Watch Card",
          description:
            "Use official videos and storefront pages to confirm launch timing, platforms, and final feature notes.",
          externalUrl: steamSource.href,
          thumbnail: officialImages.screenshot8,
        },
        sources: [officialSite, steamSource],
      },
      {
        slug: "preorder-editions-bonuses-guide",
        title: "Preorder, Editions, and Bonuses Watch",
        description:
          "A verification checklist for preorder pages, edition differences, bonus content, and store claims that should not be guessed before launch.",
        readTime: "7 min read",
        datePublished: "2026-05-26",
        dateModified: "2026-05-26",
        heroImage: officialImages.kensington,
        category: "Buying guide",
        difficulty: "Beginner",
        takeaways: [
          "Only list preorder bonuses after an official store or publisher page states them.",
          "Separate platform bonuses, edition bonuses, and timed offers.",
          "Use screenshots and source dates when a store page changes.",
        ],
        sections: [
          {
            heading: "Do not guess editions",
            body: "Preorder pages are a common source of bad SEO content because sites fill gaps before stores publish final information. This guide deliberately treats editions, bonuses, and preorder windows as a verification workflow.",
            points: [
              "Check publisher pages first, then platform storefronts.",
              "Record the date when an offer was seen.",
              "Separate cosmetic items, early access, soundtrack, artbook, and upgrade claims.",
            ],
          },
          {
            heading: "Build a comparison table",
            body: "When editions are confirmed, the page should use a real comparison table with rows for price, platforms, included content, preorder deadline, and upgrade path. Until then, the page should say exactly what is not confirmed.",
            points: [
              "Use one row per edition.",
              "Avoid vague labels such as best value unless the contents justify it.",
              "Keep external purchase links clearly labeled as official stores.",
            ],
          },
          {
            heading: "Update after store pages settle",
            body: "A good buying guide improves near launch. The final version should include official links, screenshots of edition names, store-specific notes, and a clear recommendation for players who only want the base game.",
          },
        ],
        gallery: [
          {
            src: officialImages.kensington,
            alt: "007 First Light Kensington gala image",
            caption: "Use polished visuals, but keep purchase claims factual.",
          },
          {
            src: officialImages.bond,
            alt: "007 First Light Bond close-up",
            caption: "Edition pages should be clear enough for quick decisions.",
          },
        ],
        sources: [officialSite, steamSource],
      },
      {
        slug: "beginners-guide",
        title: "Beginner's Field Dossier",
        description:
          "A spoiler-light starting point for launch facts, first-session settings, and the checks every new player should make before committing to a full playthrough.",
        readTime: "7 min read",
        datePublished: "2026-05-26",
        dateModified: "2026-05-26",
        heroImage: officialImages.bond,
        category: "Start here",
        difficulty: "Beginner",
        takeaways: [
          "Separate verified release facts from community speculation.",
          "Check display, controls, subtitles, and accessibility before the first mission.",
          "Treat the opening mission video as spoiler content.",
        ],
        sections: [
          {
            heading: "Start with verified launch facts",
            body: "Before release, the safest preparation is to separate confirmed information from speculation. Keep the launch date, platform list, official site, and storefront links in one place so every later guide can cite the same source data.",
            points: [
              "Primary launch date: May 27, 2026 for PlayStation 5, Xbox Series X|S, and PC.",
              "Nintendo Switch 2 has a separate Summer 2026 window.",
              "IO Interactive is listed as both developer and publisher.",
            ],
          },
          {
            heading: "Plan your first-session checklist",
            body: "Once the game is live, begin by checking the practical settings that affect every mission. This is especially important for a cinematic action-adventure where stealth readability, subtitles, controller mapping, and camera behavior can change how cleanly you read a room.",
            points: [
              "Record graphics mode, performance mode, and HDR settings before the first mission.",
              "Check aim, camera, subtitle, vibration, and accessibility settings.",
              "Note any tutorial mechanics that appear repeatedly in early missions.",
            ],
          },
          {
            heading: "Use this guide as a live notebook",
            body: "This guide is intentionally structured as a launch notebook. After release, it can grow into mission tips, stealth recommendations, combat notes, and collectible tracking without changing the URL.",
          },
        ],
        gallery: [
          {
            src: officialImages.bond,
            alt: "Young James Bond character art in 007 First Light",
            caption: "Bond's origin-story framing is the site's core topic.",
          },
          {
            src: officialImages.slovakia,
            alt: "007 First Light Slovakia mission location",
            caption: "The first field assignment sets up route planning and observation.",
          },
        ],
        video: {
          title: "Opening Mission Spoiler Warning",
          description:
            "Use the first 13 minutes only if you want to preview the opening mission structure before launch.",
          externalUrl: redditOpeningMission.href,
          thumbnail: officialImages.stealth,
        },
        sources: [officialSite, steamSource, redditOpeningMission],
      },
      {
        slug: "spoiler-safe-opening-mission-prep",
        title: "Spoiler-Safe Opening Mission Prep",
        description:
          "How to prepare for the opening mission without watching every beat of the first 13 minutes.",
        readTime: "8 min read",
        datePublished: "2026-05-26",
        dateModified: "2026-05-26",
        heroImage: officialImages.stealth,
        category: "Mission prep",
        difficulty: "Beginner",
        takeaways: [
          "Watch trailers for systems, not story beats, if you are avoiding spoilers.",
          "Expect tutorialized movement, stealth, and infiltration onboarding.",
          "Use Reddit reaction threads to identify concerns, not to replace playing blind.",
        ],
        sections: [
          {
            heading: "Decide your spoiler boundary first",
            body: "The first 13 minutes video is useful because it shows the launch build's opening flow, but it is also the start of the story. If you care about first-time impact, treat the video like a mission spoiler rather than a neutral trailer.",
            points: [
              "Safe to watch: official trailers, gadget clips, location showcases, and non-story previews.",
              "Risky to watch: first 13 minutes, opening mission uploads, and early retail-copy footage.",
              "Best compromise: read system summaries, then skip minute-by-minute footage.",
            ],
          },
          {
            heading: "Prepare for tutorial pacing",
            body: "Community discussion around the opening footage focuses heavily on crouching, climbing, cinematic movement, and early stealth prompts. That makes this first mission useful as a mechanics introduction rather than as proof of the full game's mission variety.",
            points: [
              "Expect early prompts to teach movement before broader sandbox choices appear.",
              "Do not judge replay depth from the first tutorial stretch alone.",
              "Track which mechanics return later before writing a final walkthrough.",
            ],
          },
          {
            heading: "Build a first-run note template",
            body: "For a guide site, the most useful launch-day artifact is a repeatable note template: objective, route options, stealth opportunities, combat triggers, collectibles, checkpoints, fail states, and settings that affect visibility.",
          },
        ],
        gallery: [
          {
            src: officialImages.stealth,
            alt: "007 First Light stealth-focused official image",
            caption: "Opening prep should focus on systems, not plot beats.",
          },
          {
            src: officialImages.slovakia,
            alt: "007 First Light mountain hotel location",
            caption: "Large spaces should be mapped by route, objective, and exit.",
          },
        ],
        video: {
          title: "The First 13 Minutes of 007 First Light",
          description:
            "Spoiler-sensitive players should skip; guide writers can use it to structure early-mission checklists.",
          externalUrl: redditGamesThread.href,
          thumbnail: officialImages.stealth,
        },
        sources: [officialSite, redditOpeningMission, redditGamesThread],
      },
      {
        slug: "stealth-gadgets-field-manual",
        title: "Stealth and Gadgets Field Manual",
        description:
          "A practical guide to reading the official gadget list and preparing for stealth, bluffing, and infiltration routes.",
        readTime: "9 min read",
        datePublished: "2026-05-26",
        dateModified: "2026-05-26",
        heroImage: officialImages.watch,
        category: "Systems",
        difficulty: "Intermediate",
        takeaways: [
          "Official pillars say players can go silent, go loud, use gadgets, or bluff past guards.",
          "Q-Watch, phone, earphones, lighter, and pen are official gadget categories.",
          "A good guide should document what each tool reveals, distracts, unlocks, or bypasses.",
        ],
        sections: [
          {
            heading: "Read gadgets as route tools",
            body: "The official site frames gadgets as part of player choice: using technology to infiltrate, bluff, or fight through a space. That means a useful guide should explain each gadget by the route problem it solves, not just by its name.",
            points: [
              "Scanner-style tools should be documented by what they reveal and how far they reach.",
              "Social or bluff tools should be documented by which NPC states they affect.",
              "Distraction tools should be documented by timing, sound radius, and recovery windows.",
            ],
          },
          {
            heading: "Pair stealth notes with visual evidence",
            body: "For every mission page, pair a route description with a screenshot or location image. Readers skim faster when a route label, landmark, and risk note are visible in the same content block.",
            points: [
              "Use landmarks such as bars, galleries, checkpoints, hotel wings, and guard posts.",
              "Mark whether a route is silent, social, loud, or mixed.",
              "Keep unverified claims in a 'needs launch-day confirmation' note until tested.",
            ],
          },
          {
            heading: "Convert Reddit questions into guide sections",
            body: "Player discussion is already asking whether the game is closer to Hitman, Uncharted, or Splinter Cell. The guide answer should not be a debate; it should show when a mission favors freeform infiltration, when it becomes cinematic traversal, and when combat takes over.",
          },
        ],
        gallery: [
          {
            src: officialImages.watch,
            alt: "Q-Watch gadget in 007 First Light",
            caption: "Q-Watch: likely the most important UI-facing gadget.",
          },
          {
            src: officialImages.phone,
            alt: "Phone gadget in 007 First Light",
            caption: "Phone: document its uses by mission objective.",
          },
          {
            src: officialImages.earphones,
            alt: "Earphones gadget in 007 First Light",
            caption: "Earphones: track communication and distraction use cases.",
          },
        ],
        video: {
          title: "Gameplay Reveal Reference",
          description:
            "Use long gameplay footage to identify stealth, gadget, and social route examples.",
          embedUrl: "https://www.dailymotion.com/embed/video/x9q3shs",
          externalUrl: "https://www.gamespot.com/games/007-first-light/videos/",
          thumbnail: officialImages.kensington,
        },
        sources: [officialSite, redditGameplayReveal],
      },
      {
        slug: "locations-route-planning",
        title: "Locations and Route Planning Guide",
        description:
          "A visual route-planning guide for Slovakia, Kensington, and future locations as IO Interactive reveals more of the campaign.",
        readTime: "8 min read",
        datePublished: "2026-05-26",
        dateModified: "2026-05-26",
        heroImage: officialImages.slovakia,
        category: "Routes",
        difficulty: "Intermediate",
        takeaways: [
          "Slovakia centers on the Grand Carpathian Hotel and a chess-tournament field assignment.",
          "Kensington centers on a museum gala with social blending potential.",
          "Each mission guide should separate entry, objective, escalation, and exit routes.",
        ],
        sections: [
          {
            heading: "Slovakia: map the hotel like a hub",
            body: "The official location description points to a Grand Carpathian Hotel field assignment surrounded by mountains, lakes, forests, and high-end architecture. That suggests a mission guide should organize routes by exterior approach, public interior, restricted areas, and vertical movement.",
            points: [
              "Use visible landmarks to name routes before exact map labels are known.",
              "Track how public spaces become restricted spaces.",
              "Separate exploration notes from objective-critical paths.",
            ],
          },
          {
            heading: "Kensington: plan social infiltration",
            body: "The museum gala setup is ideal for a social-stealth guide. Readers will want to know which outfits, conversations, staff doors, exhibit rooms, and security layers matter, even if final details need launch-day confirmation.",
            points: [
              "Document crowd-safe actions separately from suspicious actions.",
              "Mark guard sightlines, staff-only passages, and objective triggers.",
              "Use screenshots to show route starts, route pivots, and exits.",
            ],
          },
          {
            heading: "Future-proof the page structure",
            body: "Every new location page should use the same template: mission purpose, public area, restricted area, route table, gadget opportunities, combat escalation, collectibles, and source status.",
          },
        ],
        gallery: [
          {
            src: officialImages.slovakia,
            alt: "Slovakia Grand Carpathian Hotel location in 007 First Light",
            caption: "Slovakia route notes should begin with exterior approach points.",
          },
          {
            src: officialImages.kensington,
            alt: "Kensington museum gala location in 007 First Light",
            caption: "Kensington route notes should track social blending and staff access.",
          },
        ],
        sources: [officialSite, redditGamesThread],
      },
      {
        slug: "combat-driving-settings",
        title: "Combat, Driving, and Settings Checklist",
        description:
          "A launch-day checklist for tuning combat readability, driving control, camera settings, and performance before serious guide testing.",
        readTime: "7 min read",
        datePublished: "2026-05-26",
        dateModified: "2026-05-26",
        heroImage: officialImages.boat,
        category: "Settings",
        difficulty: "Beginner",
        takeaways: [
          "Official pillars include vehicles, fists, firepower, gadgets, and cinematic missions.",
          "Reddit discussion shows players care about scripted movement, melee feel, and image quality.",
          "Every platform test should record performance mode and control settings first.",
        ],
        sections: [
          {
            heading: "Create a settings baseline",
            body: "Before writing mission advice, lock a clear baseline. Readers need to know whether your observations came from performance mode, quality mode, keyboard and mouse, controller, default aim assist, or adjusted camera sensitivity.",
            points: [
              "Capture graphics mode, HDR, motion blur, subtitles, and accessibility toggles.",
              "Record aim assist, camera sensitivity, and controller vibration settings.",
              "Test at least one stealth encounter and one combat encounter before recommending changes.",
            ],
          },
          {
            heading: "Separate combat from traversal",
            body: "Player discussion around preview footage often mixes cinematic traversal complaints with combat expectations. Keep guide sections separate: movement routes, melee timing, gunplay readability, cover behavior, and vehicle handling should each have their own notes.",
            points: [
              "Use a short combat test note for melee counters, dodge timing, and weapon swap flow.",
              "Use a traversal note for climbing, crouch-walking, ledges, and camera transitions.",
              "Use a driving note for steering, braking, camera angle, and mission fail conditions.",
            ],
          },
          {
            heading: "Document platform differences carefully",
            body: "Do not assume all platform versions behave the same. A good launch guide should mark whether a finding was tested on PC, PS5, Xbox Series X|S, or Switch 2 after its later window.",
          },
        ],
        gallery: [
          {
            src: officialImages.boat,
            alt: "Vehicle sequence artwork from 007 First Light",
            caption: "Vehicle sections need control and camera notes, not only story summaries.",
          },
          {
            src: officialImages.stealth,
            alt: "Stealth and action image from 007 First Light",
            caption: "Combat guidance should be separated from stealth route guidance.",
          },
        ],
        sources: [officialSite, redditGameplayReveal, redditGamesThread],
      },
    ],
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function getGuide(game: Game, guideSlug: string) {
  return game.guides.find((guide) => guide.slug === guideSlug);
}
