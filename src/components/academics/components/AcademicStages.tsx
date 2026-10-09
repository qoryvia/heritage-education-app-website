import type { IconType } from "react-icons";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCompass,
  FiLayers,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

import type {
  AcademicStage,
  AcademicStageIcon,
} from "../data/academics.data";

import { academicStagesData } from "../data/academics.data";

const stageIcons: Record<AcademicStageIcon, IconType> = {
  earlyYears: FiCompass,
  primary: FiBookOpen,
  middle: FiLayers,
  secondary: FiTarget,
  seniorSecondary: FiTrendingUp,
};

function AcademicStageCard({
  stage,
}: {
  stage: AcademicStage;
}) {
  const Icon = stageIcons[stage.icon];

  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-[#002147]/40 sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-[#002147] transition-colors group-hover:bg-[#002147]/[0.07]">
        <Icon aria-hidden="true" size={25} strokeWidth={1.7} />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-[#002147]">
        {stage.level}
      </p>

      <h3 className="mt-2 text-lg font-semibold leading-6 text-slate-900">
        {stage.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {stage.description}
      </p>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
          Learning Focus
        </p>

        <ul className="mt-3 space-y-2.5">
          {stage.focusAreas.map((area) => (
            <li
              key={area}
              className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#002147]"
              />

              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex justify-end pt-5">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors group-hover:border-[#002147] group-hover:bg-[#002147] group-hover:text-white"
        >
          <FiArrowUpRight size={16} />
        </span>
      </div>
    </article>
  );
}

export default function AcademicStages() {
  return (
    <section
      id="academic-stages"
      aria-labelledby="academic-stages-heading"
      className="bg-white"
    >
      <div className="px-6 py-12 sm:py-16 lg:py-20 xl:px-40">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#002147] sm:text-sm">
            Academic Programmes
          </p>

          <h2
            id="academic-stages-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Learning at Every Stage
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Each stage of education brings new opportunities to
            develop knowledge, strengthen essential skills, and
            become a more confident learner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {academicStagesData.map((stage) => (
            <AcademicStageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
}