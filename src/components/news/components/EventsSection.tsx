"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiSearch,
  FiX,
} from "react-icons/fi";

import type { EventType, SchoolEvent } from "../data/news.data";

interface EventsSectionProps {
  title: string;
  events: SchoolEvent[];
  eventType: EventType;
}

interface EventCardProps {
  event: SchoolEvent;
  showRegister: boolean;
}

function EventCard({ event, showRegister }: EventCardProps) {
  const registrationSubject = encodeURIComponent(
    `Event registration enquiry: ${event.title}`,
  );

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden bg-white">
      {/* Event information */}
      <div className="flex min-h-[175px] flex-col px-5 pb-5 pt-5 sm:px-6 sm:pt-6">
        <h3 className="line-clamp-3 text-sm font-normal leading-[1.6] text-slate-800 sm:text-[15px]">
          {event.title}
        </h3>

        {/* Date */}
        <div className="mt-auto flex items-center gap-4 pt-5">
          <time
            dateTime={event.startDate}
            className="shrink-0 text-[48px] font-normal leading-none tracking-[-0.045em] text-[#111111] sm:text-[54px]"
          >
            {event.day}
          </time>

          <div className="flex min-w-0 flex-col gap-1 text-[11px] leading-tight text-slate-600 sm:text-xs">
            <span className="whitespace-nowrap font-medium text-slate-800">
              {event.month}
            </span>

            <span className="whitespace-nowrap">{event.year}</span>
          </div>
        </div>
      </div>

      {/* Event image */}
      <div className="relative aspect-[2.1/1] w-full shrink-0 overflow-hidden bg-slate-100">
        <div
          role="img"
          aria-label={event.imageAlt}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          style={{
            backgroundImage: `url("${event.image}")`,
          }}
        />
      </div>

      {/* Dark action bar */}
      <div className="flex h-[34px] shrink-0 items-stretch bg-[#292929] text-white">
        <Link
          href={`/news/${event.slug}`}
          aria-label={`More information about ${event.title}`}
          className="flex min-w-0 flex-1 items-center justify-center gap-1 px-2 text-[11px] font-medium transition-colors hover:bg-[#414141] sm:text-xs"
        >
          More info
          <FiArrowUpRight aria-hidden="true" size={13} />
        </Link>
      </div>
    </article>
  );
}

export default function EventsSection({
  title,
  events,
  eventType,
}: EventsSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const showRegister = eventType === "upcoming";

  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return events.filter((event) => event.eventType === eventType);
    }

    return events.filter((event) => {
      if (event.eventType !== eventType) {
        return false;
      }

      const searchableContent = [
        event.title,
        event.excerpt,
        event.description.replace(/<[^>]*>/g, " "),
        event.category,
        event.day,
        event.month,
        event.year,
        event.startDate,
        event.venue,
        event.address,
        event.organizer,
        ...event.tags,
        ...event.highlights,
      ]
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(query);
    });
  }, [events, eventType, searchQuery]);

  return (
    <section
      aria-label={title}
      className="px-6 pb-10 sm:pb-12 xl:px-40 mt-10"
    >
      {/* Section heading */}
      <div className="mb-5">
        <h2 className="text-base font-normal tracking-tight text-[#292929] sm:text-lg">
          {title}
        </h2>
      </div>

      {/* Search bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <FiSearch
            aria-hidden="true"
            size={19}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search events, categories, or keywords..."
            aria-label={`Search ${title.toLowerCase()}`}
            className="h-12 w-full rounded-md border border-slate-200 bg-white pl-11 pr-11 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              <FiX aria-hidden="true" size={17} />
            </button>
          )}
        </div>

        <p
          className="text-sm text-slate-500"
          aria-live="polite"
          aria-atomic="true"
        >
          {filteredEvents.length}{" "}
          {filteredEvents.length === 1 ? "event" : "events"}
          {searchQuery.trim() ? " found" : ""}
        </p>
      </div>

      {/* Event cards */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              showRegister={showRegister}
            />
          ))}
        </div>
      ) : (
        /* Empty search results */
        <div className="flex min-h-[220px] flex-col items-center justify-center border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
            <FiSearch aria-hidden="true" size={22} />
          </div>

          <h3 className="mt-4 text-base font-semibold text-slate-900">
            No events found
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            We couldnt find any events matching &ldquo;{searchQuery.trim()}&rdquo;.
            Try another title, category, or keyword.
          </p>

          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#002147] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#003566]"
          >
            <FiX aria-hidden="true" size={16} />
            Clear Search
          </button>
        </div>
      )}
    </section>
  );
}