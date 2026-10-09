import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";

import { facilitiesData } from "../data/home.data";

export default function FeaturedFacilities() {
  return (
    <section className="bg-[#F8F9FB] px-6 py-14 sm:py-16 xl:px-40">
      {/* Section heading */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#002147]">
            Explore Our Campus
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Spaces That Inspire Learning
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Discover the spaces and activities that encourage students
            to learn, explore their interests, and grow with confidence.
          </p>
        </div>

        <Link
          href="/facilities"
          className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#00152E]"
        >
          Explore all facilities
          <FiArrowRight size={16} />
        </Link>
      </div>

      {/* Facilities cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facilitiesData.map((facility) => (
          <article
            key={facility.title}
            className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors duration-200 hover:border-[#002147]/30"
          >
            {/* Image */}
            <Link
              href={facility.href}
              aria-label={`Explore ${facility.title}`}
              className="relative block overflow-hidden"
            >
              <div
                role="img"
                aria-label={`Illustrative image for ${facility.title}`}
                className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03] sm:h-56"
                style={{
                  backgroundImage: `url("${facility.image}")`,
                }}
              />

              {/* Category label */}
              <span className="absolute left-4 top-4 rounded bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#002147]">
                {facility.category}
              </span>

              {/* Image arrow */}
              <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#002147] transition-colors duration-200 group-hover:bg-[#002147] group-hover:text-white">
                <FiArrowUpRight size={17} />
              </span>
            </Link>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-[#002147]">
                {facility.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {facility.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <FiMapPin size={13} className="text-[#002147]" />
                  Heritage Campus
                </span>

                <Link
                  href={facility.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#002147] transition-colors hover:text-[#00152E]"
                >
                  Explore
                  <FiArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}