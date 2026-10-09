import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import type { SchoolEvent } from "../data/news.data";

interface EventGalleryProps {
  event: SchoolEvent;
}

export default function EventGallery({ event }: EventGalleryProps) {
  const images = event.galleryImages ?? [];

  if (images.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="event-gallery-heading"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="px-6 py-12 sm:py-16 xl:px-40">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#002147]">
              Event Photos
            </p>

            <h2
              id="event-gallery-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              Explore the Gallery
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Images related to {event.title}.
            </p>
          </div>

          <span className="text-sm text-slate-500">
            {images.length} photos
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Link
              key={`${event.slug}-gallery-${index}`}
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open event photo ${index + 1} for ${event.title}`}
              className={`group relative block overflow-hidden bg-slate-200 ${
                index === 0
                  ? "aspect-[4/3] sm:col-span-2 lg:col-span-2"
                  : "aspect-[4/3]"
              }`}
            >
              <div
                role="img"
                aria-label={`${event.title} - photo ${index + 1}`}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${image}")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-sm font-medium">
                  Photo {index + 1}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <FiArrowUpRight
                    aria-hidden="true"
                    size={17}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}