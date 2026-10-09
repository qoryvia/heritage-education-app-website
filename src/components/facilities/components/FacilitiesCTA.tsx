import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { facilitiesCTAData } from "../data/facilities.data";

export default function FacilitiesCTA() {
  return (
    <section className="bg-slate-50">
      <div className="px-6 py-12 sm:py-14 xl:px-40">
        <div className="flex flex-col gap-6 border border-slate-200 bg-white p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#002147]">
              {facilitiesCTAData.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {facilitiesCTAData.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {facilitiesCTAData.description}
            </p>
          </div>

          <Link
            href={facilitiesCTAData.buttonHref}
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-md bg-[#002147] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003566] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002147] focus-visible:ring-offset-2"
          >
            {facilitiesCTAData.buttonText}
            <FiArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}