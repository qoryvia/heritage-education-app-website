import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { notFoundContent } from "../data/notFound.data";

export default function NotFoundContent() {
  return (
    <main className="flex min-h-[55vh] items-center justify-center bg-white px-6 py-12 xl:px-40">
      <div className="w-full max-w-2xl text-center">
        <p className="text-7xl font-semibold tracking-tight text-[#002147] sm:text-8xl">
          {notFoundContent.code}
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#002147]">
          {notFoundContent.eyebrow}
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {notFoundContent.title}
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
          {notFoundContent.description}
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-sm bg-[#002147] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#001937]"
          >
            <FiArrowLeft size={16} />
            {notFoundContent.homeLabel}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-[#002147] hover:text-[#002147]"
          >
            {notFoundContent.contactLabel}
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}