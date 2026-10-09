import Link from "next/link";
import {
  FiArrowLeft,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

import type { SchoolEvent } from "../data/news.data";

interface NewsDetailHeroProps {
  event: SchoolEvent;
}

export default function NewsDetailHero({
  event,
}: NewsDetailHeroProps) {
  const isUpcoming = event.eventType === "upcoming";

  return (
    <section className="relative isolate overflow-hidden bg-[#002147] text-white">
      {/* Event background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("${event.image}")`,
        }}
      />

      {/* Image overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#00152f]/65"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00152f]/95 via-[#002147]/80 to-[#002147]/35"
      />

      {/* Hero content */}
      <div className="px-6 py-12 sm:py-16 lg:py-20 xl:px-40">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/70 sm:text-sm"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/news"
              className="transition-colors hover:text-white"
            >
              News & Events
            </Link>

            <span aria-hidden="true">/</span>

            <span className="max-w-[220px] truncate text-white">
              {event.title}
            </span>
          </nav>

          {/* Category and status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {event.category}
            </span>

            <span
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                isUpcoming
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-white/15 text-white"
              }`}
            >
              {isUpcoming ? "Upcoming Event" : "Past Event"}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            {event.title}
          </h1>

          {/* Summary */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            {event.excerpt}
          </p>

          {/* Event metadata */}
          <div className="mt-7 flex flex-col gap-4 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <FiCalendar
                aria-hidden="true"
                className="shrink-0 text-sky-200"
                size={18}
              />

              <span>
                {event.day} {event.month} {event.year}
                {event.startTime && ` · ${event.startTime}`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FiMapPin
                aria-hidden="true"
                className="shrink-0 text-sky-200"
                size={18}
              />

              <span>{event.venue}</span>
            </div>
          </div>

          {/* Back link */}
          <Link
            href="/news"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sky-200"
          >
            <FiArrowLeft aria-hidden="true" size={17} />
            Back to all events
          </Link>
        </div>
      </div>
    </section>
  );
}