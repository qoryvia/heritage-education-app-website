import Link from "next/link";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiImage,
} from "react-icons/fi";

const galleryHeroData = {
  eyebrow: "Explore Heritage",
  title: "Our School Gallery",
  description:
    "Discover the moments, achievements, activities, and experiences that make life at Heritage International Public School special. Explore our campus, learning environment, student activities, and celebrations.",
};

const heroImage =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2400&q=85";

export default function GalleryHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#002147] text-white">
      {/* Online background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      />

      {/* Dark overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#00152f]/65"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00152f]/95 via-[#002147]/75 to-[#002147]/30"
      />

      <div className="px-6 py-14 sm:py-16 lg:py-20 xl:px-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2">
            <FiImage
              aria-hidden="true"
              className="text-sky-200"
              size={16}
            />

            <span className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">
              {galleryHeroData.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {galleryHeroData.title}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            {galleryHeroData.description}
          </p>

          {/* CTA */}
          <Link
            href="#gallery-grid"
            className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#002147] transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#002147]"
          >
            Explore Gallery
            <FiArrowDownRight aria-hidden="true" size={18} />
          </Link>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mt-9 flex items-center gap-3 text-sm text-white/70"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <span className="text-white">Gallery</span>
          </nav>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-6 h-1 w-24 bg-sky-200 xl:left-40"
      />
    </section>
  );
}