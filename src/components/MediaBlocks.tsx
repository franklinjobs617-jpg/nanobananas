import Image from "next/image";
import type { MediaImage, SourceLink, VideoEmbed } from "@/lib/games";

export function ImageGallery({ images }: { images: MediaImage[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {images.map((image) => (
        <figure
          key={`${image.src}-${image.caption}`}
          className="inset-card overflow-hidden"
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
            unoptimized
            width={1600}
            height={900}
          />
          <figcaption className="border-t border-steel-border p-3 text-body-sm leading-[1.5] text-silver-whisper">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function VideoCard({ video }: { video: VideoEmbed }) {
  return (
    <article className="inset-card overflow-hidden">
      {video.embedUrl ? (
        <iframe
          src={video.embedUrl}
          title={video.title}
          className="aspect-video w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <a
          href={video.externalUrl}
          className="blue-focus block"
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={video.thumbnail}
              alt={`${video.title} thumbnail`}
              className="h-full w-full object-cover"
              loading="lazy"
              unoptimized
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/45">
              <span className="rounded-md border border-electric-blue bg-midnight-ink/80 px-3 py-2 text-body-sm text-white-canvas">
                Open video
              </span>
            </div>
          </div>
        </a>
      )}
      <div className="border-t border-steel-border p-4">
        <h3 className="text-body font-medium leading-[1.5]">{video.title}</h3>
        <p className="mt-2 text-body-sm leading-[1.5] text-silver-whisper">
          {video.description}
        </p>
        <a
          href={video.externalUrl}
          className="blue-focus mt-3 inline-flex rounded-sm text-body-sm text-electric-blue hover:text-white-canvas"
          target="_blank"
          rel="noreferrer"
        >
          View source
        </a>
      </div>
    </article>
  );
}

export function SourceList({ sources }: { sources: SourceLink[] }) {
  return (
    <ul className="grid gap-2 text-body-sm">
      {sources.map((source) => (
        <li
          key={source.href}
          className="rounded-md border border-steel-border bg-white/[0.02] p-3"
        >
          <a
            href={source.href}
            className="blue-focus rounded-sm text-electric-blue hover:text-white-canvas"
            target="_blank"
            rel="noreferrer"
          >
            {source.label}
          </a>
          {source.note ? (
            <p className="mt-1 leading-[1.5] text-silver-whisper">
              {source.note}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
