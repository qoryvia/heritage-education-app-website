import { aboutHeroData } from "../data/about.data";
import aboutHeroImage from "@/assets/images/about/hero/about-hero.png";

export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#002147] text-white sm:min-h-[480px] lg:min-h-[520px]">
      {/* Local background image with parallax */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage: `url("${aboutHeroImage.src}")`,
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/55"
      />

      {/* Navy gradient for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#002147]/80 via-[#002147]/45 to-transparent"
      />

      {/* Content */}
      <div className="w-full px-6 py-20 sm:py-24 xl:px-40">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 sm:text-sm">
            {aboutHeroData.eyebrow}
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {aboutHeroData.title}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            {aboutHeroData.description}
          </p>

          <div className="mt-6 text-xs text-white/70 sm:text-sm">
            Home <span className="mx-2">/</span> About Us
          </div>
        </div>
      </div>
    </section>
  );
}