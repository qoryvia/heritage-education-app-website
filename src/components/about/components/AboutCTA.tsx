import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { aboutCTAData } from "../data/about.data";

export default function AboutCTA() {
  return (
    <section className="bg-white px-6 pb-14 pt-2 sm:pb-16 xl:px-40">
      <div className="flex flex-col gap-6 bg-[#002147] px-6 py-8 text-white sm:px-9 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
            {aboutCTAData.eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {aboutCTAData.title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/80 sm:text-base">
            {aboutCTAData.description}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <Link
            href={aboutCTAData.primaryHref}
            className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#002147] transition-colors hover:bg-slate-100"
          >
            {aboutCTAData.primaryLabel}
            <FiArrowRight size={16} />
          </Link>

          <Link
            href={aboutCTAData.secondaryHref}
            className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {aboutCTAData.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}