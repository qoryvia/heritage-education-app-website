"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import hero01 from "@/assets/images/home/hero/hero-01.jpg";
import hero02 from "@/assets/images/home/hero/hero-02.jpg";
import hero03 from "@/assets/images/home/hero/hero-03.jpg";
import hero04 from "@/assets/images/home/hero/hero-04.jpg";

const heroImages = [
  hero01.src,
  hero02.src,
  hero03.src,
  hero04.src,
];

const getRandomImageIndex = (currentIndex: number): number => {
  const availableIndexes = heroImages
    .map((_, index) => index)
    .filter((index) => index !== currentIndex);

  return (
    availableIndexes[
      Math.floor(Math.random() * availableIndexes.length)
    ] ?? 0
  );
};

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically shuffle the background every 5 seconds.
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        getRandomImageIndex(currentIndex)
      );
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  // Move to the previous image.
  const handlePrevious = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + heroImages.length) % heroImages.length
    );
  };

  // Move to the next image.
  const handleNext = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex + 1) % heroImages.length
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* Background image carousel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-1000 ease-in-out ${
              activeIndex === index
                ? "scale-100 opacity-100"
                : "scale-[1.02] opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-black/35"
      />

      {/* Left-to-right contrast gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/50 to-black/20"
      />

      {/* Hero content */}
      <div className="px-6 py-16 sm:py-20 lg:py-24 xl:px-40">
        <div className="max-w-3xl">
          {/* School label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3.5 py-2 text-xs font-medium tracking-wide text-white/90 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            CBSE-AFFILIATED · NURSERY TO CLASS XII
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            A strong foundation for a{" "}
            <span className="text-sky-200">
              bright future.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-7">
            Welcome to Heritage International Public School,
            Kasia, Kushinagar. Discover a learning journey focused
            on knowledge, curiosity, values, and personal growth.
          </p>

          {/* Action buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#002147] transition-colors hover:bg-sky-100"
            >
              Admissions enquiry
              <FiArrowRight size={16} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-white/45 bg-black/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Discover Heritage
            </Link>
          </div>

          {/* School information */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/85 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <FiCheckCircle className="text-sky-200" size={15} />
              CBSE affiliation 2132083
            </span>

            <span className="inline-flex items-center gap-2">
              <FiCheckCircle className="text-sky-200" size={15} />
              Kasia, Kushinagar
            </span>
          </div>
        </div>

        {/* Carousel controls */}
        <div
          className="mt-8 flex items-center gap-3"
          role="group"
          aria-label="Background image carousel controls"
        >
          {/* Previous image */}
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous background image"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/15"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Slide indicators */}
          <div className="flex items-center gap-2">
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show background image ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Next image */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next background image"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/15"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Slide counter */}
          <span className="ml-1 text-xs tabular-nums text-white/75">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(heroImages.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}