import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import type { SchoolEvent } from "../data/news.data";
import { eventsData } from "../data/news.data";

interface RelatedEventsProps {
  event: SchoolEvent;
}

export default function RelatedEvents({
  event,
}: RelatedEventsProps) {
  const relatedEvents = eventsData
    .filter((item) => item.slug !== event.slug)
    .sort((a, b) => {
      const aSameCategory = a.category === event.category ? 1 : 0;
      const bSameCategory = b.category === event.category ? 1 : 0;

      const aSameType = a.eventType === event.eventType ? 1 : 0;
      const bSameType = b.eventType === event.eventType ? 1 : 0;

      return (
        bSameCategory - aSameCategory ||
        bSameType - aSameType
      );
    })
    .slice(0, 4);

  if (relatedEvents.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-events-heading"
      className="bg-white"
    >
      <div className="px-6 py-12 sm:py-16 xl:px-40">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#002147]">
              Discover More
            </p>

            <h2
              id="related-events-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              Related Events
            </h2>
          </div>

          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#003566]"
          >
            All events
            <FiArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedEvents.map((relatedEvent) => (
            <Link
              key={relatedEvent.id}
              href={`/news/${relatedEvent.slug}`}
              className="group overflow-hidden border border-slate-200 bg-white transition-colors hover:border-[#002147]/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <div
                  role="img"
                  aria-label={relatedEvent.imageAlt}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${relatedEvent.image}")`,
                  }}
                />

                <span className="absolute left-3 top-3 bg-white px-3 py-1.5 text-xs font-medium text-[#002147]">
                  {relatedEvent.category}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs text-slate-500">
                  {relatedEvent.day} {relatedEvent.month}{" "}
                  {relatedEvent.year}
                </p>

                <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-6 text-slate-900 transition-colors group-hover:text-[#002147]">
                  {relatedEvent.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                  {relatedEvent.excerpt}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#002147]">
                  Read event details
                  <FiArrowRight
                    aria-hidden="true"
                    size={15}
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