import {
  FiBookOpen,
  FiHeart,
  FiCompass,
} from "react-icons/fi";
import type { IconType } from "react-icons";

import { aboutPillarsData } from "../data/about.data";

const pillarIcons: Record<string, IconType> = {
  academics: FiBookOpen,
  values: FiHeart,
  innovation: FiCompass,
};

export default function AboutPillars() {
  return (
    <section className="bg-[#F7F8FA] px-6 py-14 sm:py-16 xl:px-40">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#002147]">
          What Guides Us
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          The Values Behind Our Approach
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Our approach brings together academic learning, strong values, and
          opportunities for exploration.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {aboutPillarsData.map((pillar) => {
          const Icon = pillarIcons[pillar.icon] ?? FiBookOpen;

          return (
            <article
              key={pillar.number}
              className="border border-slate-200 bg-white p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center bg-[#002147]/[0.07] text-[#002147]">
                  <Icon size={22} />
                </span>

                <span className="text-sm font-medium text-slate-300">
                  {pillar.number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {pillar.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}