import {
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

import { aboutLearningData } from "../data/about.data";

export default function AboutLearning() {
  return (
    <section className="bg-white px-6 py-14 sm:py-16 xl:px-40">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Sticky image panel */}
        <div className="lg:sticky lg:top-24">
          <div
            role="img"
            aria-label="Illustrative photograph of students learning together"
            className="min-h-[300px] bg-cover bg-center sm:min-h-[400px] lg:min-h-[480px]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85")',
            }}
          />

          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <span className="h-px w-7 bg-[#002147]" />
            Knowledge, confidence, and character
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#002147]">
            {aboutLearningData.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {aboutLearningData.title}
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            {aboutLearningData.description}
          </p>

          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {aboutLearningData.points.map((point) => (
              <article key={point.number} className="py-6">
                <div className="flex items-start gap-4">
                  <span className="pt-0.5 text-sm font-semibold text-[#002147]/50">
                    {point.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {point.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {point.description}
                    </p>
                  </div>

                  <FiArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-[#002147]"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-600">
            <FiCheckCircle
              size={18}
              className="mt-0.5 shrink-0 text-[#002147]"
            />

            <p>
              We aim to help every student develop the knowledge, character,
              and confidence needed for the next stage of their journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}