import Link from "next/link";
import {
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiTag,
  FiUser,
} from "react-icons/fi";

import type { SchoolEvent } from "../data/news.data";

interface EventDetailsContentProps {
  event: SchoolEvent;
}

export default function EventDetailsContent({
  event,
}: EventDetailsContentProps) {
  const directionsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      event.address,
    )}`;

  const registrationSubject = encodeURIComponent(
    `Event registration enquiry: ${event.title}`,
  );

  return (
    <section className="bg-white">
      <div className="px-6 py-12 sm:py-16 xl:px-40">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px] xl:gap-14">
          {/* Main content */}
          <article className="min-w-0">
            <div className="border-b border-slate-200 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#002147]">
                About this event
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {event.title}
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {event.excerpt}
              </p>
            </div>

            {/* HTML description */}
            <div
              className="
                mt-8 max-w-none text-[15px] leading-8 text-slate-600
                [&_h2]:mb-4
                [&_h2]:mt-10
                [&_h2]:text-xl
                [&_h2]:font-semibold
                [&_h2]:leading-snug
                [&_h2]:tracking-tight
                [&_h2]:text-slate-900
                [&_p]:mb-5
                [&_ul]:mb-6
                [&_ul]:list-disc
                [&_ul]:space-y-3
                [&_ul]:pl-6
                [&_li]:pl-1
                [&_strong]:font-semibold
                [&_strong]:text-slate-900
                [&_a]:font-medium
                [&_a]:text-[#002147]
                [&_a]:underline
              "
              dangerouslySetInnerHTML={{
                __html: event.description,
              }}
            />

            {/* Highlights */}
            {event.highlights.length > 0 && (
              <div className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Event Highlights
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {event.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 rounded-md border border-slate-200 p-4"
                    >
                      <FiCheckCircle
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#002147]"
                        size={18}
                      />

                      <p className="text-sm leading-6 text-slate-700">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {event.tags.length > 0 && (
              <div className="mt-9 border-t border-slate-200 pt-7">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <FiTag aria-hidden="true" size={17} />
                  Topics
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Event information sidebar */}
          <aside className="lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="bg-[#002147] px-5 py-5 text-white">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
                  Event Information
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  {event.day} {event.month} {event.year}
                </h2>

                <p className="mt-1 text-sm text-white/80">
                  {event.eventType === "upcoming"
                    ? "Upcoming event"
                    : "Past event"}
                </p>
              </div>

              <div className="space-y-5 p-5">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <FiCalendar
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#002147]"
                    size={19}
                  />

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Date
                    </p>

                    <p className="mt-1 text-sm font-medium leading-6 text-slate-900">
                      {event.day} {event.month} {event.year}
                    </p>
                  </div>
                </div>

                {/* Time */}
                {event.startTime && (
                  <div className="flex items-start gap-3">
                    <FiClock
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#002147]"
                      size={19}
                    />

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">
                        Time
                      </p>

                      <p className="mt-1 text-sm font-medium leading-6 text-slate-900">
                        {event.startTime}
                        {event.endTime && ` – ${event.endTime}`}
                      </p>
                    </div>
                  </div>
                )}

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <FiMapPin
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#002147]"
                    size={19}
                  />

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Venue
                    </p>

                    <p className="mt-1 text-sm font-medium leading-6 text-slate-900">
                      {event.venue}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {event.address}
                    </p>

                    <Link
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#002147] hover:underline"
                    >
                      Get directions
                      <FiArrowUpRight
                        aria-hidden="true"
                        size={15}
                      />
                    </Link>
                  </div>
                </div>

                {/* Organiser */}
                <div className="flex items-start gap-3">
                  <FiUser
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#002147]"
                    size={19}
                  />

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Organised by
                    </p>

                    <p className="mt-1 text-sm font-medium leading-6 text-slate-900">
                      {event.organizer}
                    </p>
                  </div>
                </div>

                {/* Registration */}
                <div className="border-t border-slate-200 pt-5">
                  {event.eventType === "upcoming" &&
                  event.registration.enabled ? (
                    <>
                      <p className="mb-3 text-sm leading-6 text-slate-600">
                        Interested in this event? Contact the school
                        for registration and visitor information.
                      </p>

                      <Link
                        href={`mailto:${event.registration.email}?subject=${registrationSubject}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#002147] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003566]"
                      >
                        {event.registration.label}
                        <FiArrowUpRight
                          aria-hidden="true"
                          size={16}
                        />
                      </Link>
                    </>
                  ) : (
                    <p className="text-sm leading-6 text-slate-500">
                      Registration is not currently available for this event.
                    </p>
                  )}

                  <Link
                    href={`mailto:${event.registration.email}`}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-[#002147]/40 hover:text-[#002147]"
                  >
                    <FiMail aria-hidden="true" size={16} />
                    Contact the School
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}