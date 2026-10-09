import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { programsData } from "../data/home.data";

export default function ProgramsSection() {
  return (
    <section className="bg-white px-6 py-12 sm:py-14 xl:px-40">
      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#002147]">
          Our Programs
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Academic Excellence Across All Levels
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Explore a comprehensive learning journey from early years to
          senior secondary, focused on academic growth, personal
          development, and future readiness.
        </p>
      </div>

      {/* Program cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {programsData.slice(0, 4).map((program) => (
          <article
            key={program.number}
            className="group overflow-hidden rounded-md border border-slate-200/90 bg-white transition-colors duration-200 hover:border-[#002147]/30"
          >
            {/* Online card image */}
            <Link
              href={program.href}
              aria-label={`Explore ${program.title}`}
              className="block overflow-hidden"
            >
              <div
                role="img"
                aria-label={`Illustrative image for ${program.title}`}
                className="h-40 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03] sm:h-44"
                style={{
                  backgroundImage: `url("${program.image}")`,
                }}
              />
            </Link>

            {/* Card content */}
            <div className="p-4">
              <Link href={program.href} className="block">
                <h3 className="text-sm font-semibold leading-5 text-slate-900 transition-colors group-hover:text-[#002147]">
                  {program.title}
                </h3>
              </Link>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {program.classes}
              </p>

              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="line-clamp-2 flex-1 text-xs leading-5 text-slate-600">
                  {program.description}
                </p>

                <Link
                  href={program.href}
                  aria-label={`Read more about ${program.title}`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#002147] text-white transition-colors hover:bg-[#001937]"
                >
                  <FiArrowRight size={15} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View all programs */}
      <div className="mt-7 text-center">
        <Link
          href="/academics"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#001937]"
        >
          Explore all academic programs
          <FiArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}