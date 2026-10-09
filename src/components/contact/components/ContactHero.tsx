import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { contactHeroData } from "../data/contact.data";

const heroImage =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2400&q=85";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#002147] text-white">
      {/* Online background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#00152f]/60"
      />

      {/* Gradient for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00152f]/95 via-[#002147]/75 to-[#002147]/35"
      />

      {/* Hero content */}
      <div className="flex min-h-[380px] items-center px-6 py-14 sm:min-h-[420px] sm:py-16 lg:min-h-[460px] lg:py-20 xl:px-40">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 sm:text-sm">
            {contactHeroData.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {contactHeroData.title}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
            {contactHeroData.description}
          </p>

          <Link
            href="#contact-details"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#002147] transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#002147]"
          >
            Get in Touch
            <FiArrowRight aria-hidden="true" size={17} />
          </Link>

          <nav
            aria-label="Breadcrumb"
            className="mt-8 text-sm text-white/75"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span className="mx-3" aria-hidden="true">
              /
            </span>

            <span className="text-white">Contact Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
}