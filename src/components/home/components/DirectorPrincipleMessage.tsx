"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import { BsFillChatQuoteFill } from "react-icons/bs";

import { leadershipMessagesData } from "../data/home.data";

export default function DirectorPrincipleMessage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = leadershipMessagesData.length;
  const currentMessage = leadershipMessagesData[activeIndex];

  // Automatically change the leadership message every 5 seconds.
  useEffect(() => {
    if (totalSlides <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalSlides);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [totalSlides]);

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + totalSlides) % totalSlides
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % totalSlides);
  };

  if (!currentMessage) return null;

  return (
    <section className="bg-white px-6 py-14 sm:py-16 xl:px-40">
      {/* Section heading */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#002147]">
          Leadership
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          A Message from Our School Leaders
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Discover the vision and values that guide our commitment to
          education, character, and student development.
        </p>
      </div>

      {/* Fixed-height carousel on desktop prevents layout shifting */}
      <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-[#F8F9FB] lg:h-[640px] lg:grid-cols-[0.85fr_1.15fr]">
        {/* Fixed image frame */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-full lg:min-h-0">
          <Image
            key={currentMessage.id}
            src={currentMessage.image}
            alt={`Portrait of ${currentMessage.name}, ${currentMessage.role}`}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1023px) 100vw, 40vw"
            className="object-cover object-center object-top"
          />

          {/* Image caption */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-6 pt-16 sm:px-8">
            <p className="text-xl font-semibold text-white">
              {currentMessage.name}
            </p>

            <p className="mt-1 text-sm text-white/85">
              {currentMessage.role}
            </p>
          </div>
        </div>

        {/* Stable content panel */}
        <div className="flex min-h-[660px] flex-col p-6 sm:p-8 lg:h-full lg:min-h-0 lg:overflow-hidden lg:p-8 xl:p-10">
          <BsFillChatQuoteFill
            size={28}
            className="shrink-0 text-[#002147]/30"
          />

          <p className="mt-4 shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#002147]">
            {currentMessage.eyebrow}
          </p>

          <h3 className="mt-3 shrink-0 text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            {currentMessage.title}
          </h3>

          {/* Scrollable message area only if needed on desktop */}
          <div className="mt-5 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-2">
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-7">
              {currentMessage.message}
            </p>
          </div>

          {/* Leader details */}
          <div className="mt-6 shrink-0 border-t border-slate-200 pt-4">
            <p className="font-semibold text-slate-900">
              {currentMessage.name}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {currentMessage.role}
            </p>
          </div>

          {/* Navigation controls */}
          <div className="mt-5 flex shrink-0 flex-wrap items-center justify-between gap-4">
            <Link
              href={currentMessage.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#00152E]"
            >
              Read full message
              <FiArrowUpRight size={16} />
            </Link>

            <div className="flex items-center gap-2">
              <span className="mr-1 text-xs font-medium tabular-nums text-slate-500">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(totalSlides).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous leadership message"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-[#002147] transition-colors hover:border-[#002147] hover:bg-[#002147] hover:text-white"
              >
                <FiArrowLeft size={16} />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next leadership message"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#002147] text-white transition-colors hover:bg-[#00152E]"
              >
                <FiArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Slide indicators */}
          <div
            className="mt-5 flex shrink-0 items-center gap-2"
            role="group"
            aria-label="Select a leadership message"
          >
            {leadershipMessagesData.map((leader, index) => (
              <button
                key={leader.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${leader.role}'s message`}
                aria-pressed={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  activeIndex === index
                    ? "w-8 bg-[#002147]"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}