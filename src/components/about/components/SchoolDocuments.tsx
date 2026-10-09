import Link from "next/link";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

import { schoolDocumentsData } from "../data/about.data";

export default function SchoolDocuments() {
  return (
    <section className="bg-white px-6 py-14 sm:py-16 xl:px-40">
      <div className="relative isolate overflow-hidden border border-slate-200 bg-[#F7F8FA]">

        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-10">
          {/* Introduction */}
          <div>
            <div className="flex h-11 w-11 items-center justify-center bg-[#002147]/[0.07] text-[#002147]">
              <FiFileText size={22} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#002147]">
              {schoolDocumentsData.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              {schoolDocumentsData.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {schoolDocumentsData.description}
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#002147] hover:underline"
            >
              Request information
              <FiArrowUpRight size={16} />
            </Link>
          </div>

          {/* Document information */}
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {schoolDocumentsData.items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 py-5 first:pt-5 last:pb-5"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  aria-label={`Request ${item.title}`}
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-slate-200 bg-white/80 text-[#002147] transition-colors hover:border-[#002147]"
                >
                  <FiArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}