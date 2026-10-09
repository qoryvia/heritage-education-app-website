import Link from "next/link";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiCalendar,
} from "react-icons/fi";

import { newsHeroData } from "../data/news.data";

const heroImage =
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2400&q=85";

export default function NewsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#002147] text-white">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[#00152f]/65"
      />

      {/* Gradient for readable content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#00152f]/95 via-[#002147]/75 to-[#002147]/30"
      />

      {/* Subtle bottom gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-[#00152f]/50 to-transparent"
      />

      {/* Hero content */}
      <div className="relative z-10 px-6 pb-12 pt-14 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20 xl:px-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
            <FiCalendar
              aria-hidden="true"
              size={15}
              className="text-sky-200"
            />

            <span className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">
              {newsHeroData.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-7 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            Every Event.
            <br />
            <span className="text-sky-200">
              A New Experience.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            {newsHeroData.description}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#upcoming-events"
              className="inline-flex min-h-12 items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#002147] transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#002147]"
            >
              Explore Events
              <FiArrowDownRight
                aria-hidden="true"
                size={18}
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 px-2 py-3 text-sm font-medium text-white transition-colors hover:text-sky-200"
            >
              Contact Our School
              <FiArrowRight
                aria-hidden="true"
                size={16}
              />
            </Link>
          </div>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mt-10 flex items-center gap-3 text-xs text-white/65 sm:text-sm"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span aria-hidden="true" className="text-white/40">
              /
            </span>

            <span className="font-medium text-white">
              News & Events
            </span>
          </nav>
        </div>
      </div>

      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-6 z-10 h-1 w-24 bg-sky-200 sm:left-10 xl:left-40"
      />
    </section>
  );
}