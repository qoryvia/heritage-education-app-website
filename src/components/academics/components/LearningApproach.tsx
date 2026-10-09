import type { IconType } from "react-icons";
import {
  FiActivity,
  FiHeart,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";

import type {
  LearningIcon,
  LearningPillar,
} from "../data/academics.data";

import { learningPillarsData } from "../data/academics.data";

const learningIcons: Record<LearningIcon, IconType> = {
  curiosity: FiSearch,
  practical: FiActivity,
  collaboration: FiMessageCircle,
  development: FiHeart,
};

function LearningCard({
  pillar,
}: {
  pillar: LearningPillar;
}) {
  const Icon = learningIcons[pillar.icon];

  return (
    <article className="flex gap-4 border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#002147]/[0.06] text-[#002147]">
        <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
      </div>

      <div>
        <h3 className="text-base font-semibold leading-6 text-slate-900">
          {pillar.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {pillar.description}
        </p>
      </div>
    </article>
  );
}

export default function LearningApproach() {
  return (
    <section
      aria-labelledby="learning-approach-heading"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="px-6 py-12 sm:py-16 lg:py-20 xl:px-40">
        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Introductory content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#002147] sm:text-sm">
              Our Approach
            </p>

            <h2
              id="learning-approach-heading"
              className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              Education Beyond the Textbook
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Learning is about more than remembering information.
              It also involves asking questions, practising new
              skills, communicating ideas, and applying knowledge
              to different situations.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our academic approach highlights the importance of
              curiosity, participation, personal responsibility,
              and continuous development throughout a students
              educational journey.
            </p>
          </div>

          {/* Learning principles */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {learningPillarsData.map((pillar) => (
              <LearningCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}