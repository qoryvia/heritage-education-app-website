"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCalendar,
  FiSearch,
  FiX,
} from "react-icons/fi";

import { eventsData } from "@/components/news/data/news.data";
import type { SchoolEvent } from "@/components/news/data/news.data";

function getSearchableContent(event: SchoolEvent): string {
  return [
    event.title,
    event.slug,
    event.category,
    event.excerpt,
    event.description.replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " "),
    event.day,
    event.month,
    event.year,
    event.startDate,
    event.startTime,
    event.endDate ?? "",
    event.endTime ?? "",
    event.venue,
    event.address,
    event.organizer,
    event.eventType,
    ...event.tags,
    ...event.highlights,
  ]
    .join(" ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

interface SearchMenuProps {
  onClose: () => void;
}

export default function SearchMenu({ onClose }: SearchMenuProps) {
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return [];
    }

    return eventsData
      .map((event) => {
        const title = event.title.toLowerCase();
        const searchableContent = getSearchableContent(event);

        let score = 0;

        if (title === searchTerm) {
          score = 100;
        } else if (title.startsWith(searchTerm)) {
          score = 80;
        } else if (title.includes(searchTerm)) {
          score = 60;
        } else if (event.category.toLowerCase().includes(searchTerm)) {
          score = 40;
        } else if (searchableContent.includes(searchTerm)) {
          score = 20;
        }

        return { event, score, searchableContent };
      })
      .filter(({ score, searchableContent }) =>
        score > 0 || searchableContent.includes(searchTerm),
      )
      .sort((a, b) => {
        // More relevant title matches appear first.
        if (b.score !== a.score) {
          return b.score - a.score;
        }

        // Prefer upcoming events when relevance is equal.
        if (a.event.eventType !== b.event.eventType) {
          return a.event.eventType === "upcoming" ? -1 : 1;
        }

        return a.event.title.localeCompare(b.event.title);
      })
      .slice(0, 4)
      .map(({ event }) => event);
  }, [query]);

  const searchStarted = query.trim().length > 0;

  return (
    <div
      id="heritage-search-menu"
      className="absolute right-6 top-full z-[100] mt-3 w-[min(92vw,390px)] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-900/10 xl:right-40"
    >
      {/* Search input */}
      <div className="border-b border-slate-100 p-4">
        <label
          htmlFor="heritage-search-menu-input"
          className="mb-3 block text-base font-semibold text-slate-900"
        >
          Search Heritage
        </label>

        <div className="relative">
          <FiSearch
            aria-hidden="true"
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="heritage-search-menu-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search events, activities..."
            autoComplete="off"
            className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-10 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#002147] focus:bg-white focus:ring-2 focus:ring-[#002147]/10"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
            >
              <FiX aria-hidden="true" size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Results heading */}
      <div className="flex items-center justify-between gap-3 px-4 pb-2 pt-3">
        {searchStarted && (
          <span className="text-xs text-slate-400">
            {suggestions.length}{" "}
            {suggestions.length === 1 ? "result" : "results"}
          </span>
        )}
      </div>

      {/* Suggestions */}
      <div className="max-h-[min(55vh,390px)] overflow-y-auto px-2 pb-2 [scrollbar-width:thin]">
        {!searchStarted ? (
          <div className="px-4 py-7 text-center">
            <FiSearch
              aria-hidden="true"
              size={25}
              className="mx-auto text-slate-300"
            />

            <p className="mt-3 text-sm font-medium text-slate-800">
              Discover school events
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Start typing to find events and activities.
            </p>
          </div>
        ) : suggestions.length > 0 ? (
          <div className="space-y-0.5">
            {suggestions.map((event) => (
              <Link
                key={event.id}
                href={`/news/${event.slug}`}
                onClick={onClose}
                className="group flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none"
              >
                {/* Event thumbnail */}
                <div className="relative h-[60px] w-[76px] shrink-0 overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    fill
                    unoptimized
                    sizes="76px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Event title and metadata */}
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-medium leading-5 text-slate-800 transition-colors group-hover:text-[#002147]">
                    {event.title}
                  </p>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500">
                    <span className="truncate">{event.category}</span>

                    <span aria-hidden="true">·</span>

                    <span className="inline-flex items-center gap-1">
                      <FiCalendar aria-hidden="true" size={11} />
                      {event.day} {event.month} {event.year}
                    </span>
                  </div>
                </div>

                <FiArrowUpRight
                  aria-hidden="true"
                  size={17}
                  className="mr-1 shrink-0 text-slate-400 transition-colors group-hover:text-[#002147]"
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="px-4 py-8 text-center">
            <FiSearch
              aria-hidden="true"
              size={25}
              className="mx-auto text-slate-300"
            />

            <p className="mt-3 text-sm font-semibold text-slate-800">
              No matching results
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              No events match &ldquo;{query.trim()}&rdquo;. Try a different
              title, category, or keyword.
            </p>

            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-4 text-xs font-semibold text-[#002147] hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-3">
        <span className="text-xs text-slate-500">
          Heritage International Public School
        </span>

        <Link
          href="/news"
          onClick={onClose}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#002147] transition-colors hover:text-[#003566]"
        >
          All events
          <FiArrowUpRight aria-hidden="true" size={14} />
        </Link>
      </div>
    </div>
  );
}