import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      className="mx-auto max-w-[1325px] px-4 pt-6 text-caption text-silver-whisper sm:px-6"
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className="blue-focus rounded-sm hover:text-electric-blue"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white-canvas">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
