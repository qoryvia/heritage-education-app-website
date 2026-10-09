import Link from "next/link";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

import { homeFAQData } from "../data/home.data";

export default function HomeFAQ() {
  return (
    <section className="bg-[#F7F8FA] px-6 py-16 sm:py-20 xl:px-40">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:gap-20">
        {/* Left: Section introduction */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-[#002147]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            Questions about school life.
          </h2>

          <p className="mt-5 max-w-md text-base leading-8 text-slate-500">
            Find answers to common questions about Heritage International
            Public School, academics, admissions, and student life.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#00152E]"
          >
            Ask us a question
            <FiArrowUpRight size={17} />
          </Link>
        </div>

        {/* Right: Expandable questions */}
        <div className="border-t border-slate-200">
          {homeFAQData.map((item) => (
            <details
              key={item.question}
              className="group border-b border-slate-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left marker:content-none sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="text-base font-medium leading-6 text-slate-900 sm:text-lg">
                  {item.question}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-slate-200 bg-white text-slate-500 transition-colors duration-200 group-hover:border-[#002147]/40 group-hover:text-[#002147]">
                  <FiChevronDown
                    size={17}
                    className="transition-transform duration-200 group-open:rotate-180"
                  />
                </span>
              </summary>

              <div className="max-w-2xl pb-6 pr-12">
                <p className="text-sm leading-7 text-slate-500 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}