import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { academicsCTAData } from "../data/academics.data";

export default function AcademicsCTA() {
  return (
    <section className="bg-white">
      <div className="px-6 py-12 sm:py-14 xl:px-40">
        <div className="flex flex-col gap-6 border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#002147]">
              {academicsCTAData.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {academicsCTAData.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {academicsCTAData.description}
            </p>
          </div>

          <Link
            href={academicsCTAData.buttonHref}
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-md bg-[#002147] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003566] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002147] focus-visible:ring-offset-2"
          >
            {academicsCTAData.buttonText}
            <FiArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}