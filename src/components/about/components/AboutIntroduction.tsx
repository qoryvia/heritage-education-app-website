import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { aboutIntroductionData } from "../data/about.data";

export default function AboutIntroduction() {
  return (
    <section className="bg-white px-6 py-14 sm:py-16 xl:px-40">
      <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image */}
        <div
          role="img"
          aria-label="Illustrative image of a school learning environment"
          className="min-h-[280px] bg-cover bg-center sm:min-h-[380px] lg:min-h-[480px]"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85")',
          }}
        />

        {/* Text */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#002147]">
            {aboutIntroductionData.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {aboutIntroductionData.title}
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            {aboutIntroductionData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link
            href="/academics"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#00152e]"
          >
            Explore Our Academics
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}