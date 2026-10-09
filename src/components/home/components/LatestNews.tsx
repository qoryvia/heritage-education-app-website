import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";

import { eventsData } from "@/components/news/data/news.data";

// Display the first four upcoming events from the central data source.
const publishedNews = eventsData
  .filter((event) => event.eventType === "upcoming")
  .slice(0, 4);

export default function LatestNews() {
  return (
    <section className="bg-white px-6 py-12 sm:py-14 xl:px-40">
      {/* Section heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#002147]">
            News & Events
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Latest News from Heritage
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Discover school announcements, activities, achievements, and
            moments from our school community.
          </p>
        </div>

        <Link
          href="/news"
          className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#00152e]"
        >
          View all news
          <FiArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>

      {/* Four upcoming event cards */}
      {publishedNews.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {publishedNews.map((item) => {
            const eventHref = `/news/${item.slug}`;

            return (
              <article
                key={item.id}
                className="group flex min-w-0 flex-col overflow-hidden border border-slate-200 bg-white transition-colors duration-200 hover:border-[#002147]/40"
              >
                {/* Event title and date */}
                <div className="flex min-h-[168px] flex-1 flex-col p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#002147]/75">
                    {item.category}
                  </span>

                  <h3 className="mt-2 line-clamp-3 text-sm font-medium leading-5 text-slate-800">
                    {item.title}
                  </h3>

                  {/* Prominent event date */}
                  <div className="mt-auto flex items-end gap-3 pt-4">
                    <span className="text-[38px] font-normal leading-none tracking-tight text-slate-900">
                      {item.day}
                    </span>

                    <span className="mb-0.5 flex flex-col text-[10px] leading-[1.35] text-slate-500">
                      <span>{item.month}</span>
                      <span>{item.year}</span>
                    </span>
                  </div>
                </div>

                {/* Event image */}
                <Link
                  href={eventHref}
                  aria-label={`Read ${item.title}`}
                  className="relative block h-[145px] overflow-hidden bg-slate-100"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      unoptimized
                      sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[#002147]/40">
                      <FiFileText aria-hidden="true" size={30} />
                    </div>
                  )}
                </Link>

                {/* Dark action bar */}
                <Link
                  href={eventHref}
                  aria-label={`Read more about ${item.title}`}
                  className="flex min-h-10 items-center justify-between gap-2 bg-[#252525] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#002147]"
                >
                  <span>Read more</span>

                  <FiArrowRight
                    aria-hidden="true"
                    size={14}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-7 border border-slate-200 bg-slate-50 px-5 py-8 text-center">
          <FiCalendar
            aria-hidden="true"
            size={24}
            className="mx-auto text-[#002147]/60"
          />

          <h3 className="mt-3 text-sm font-semibold text-slate-900">
            Latest school events will appear here.
          </h3>

          <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-slate-500">
            Add upcoming events to the central events data file to
            display them on the homepage.
          </p>

          <Link
            href="/news"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#002147] hover:underline"
          >
            Explore all events
            <FiArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
      )}
    </section>
  );
}