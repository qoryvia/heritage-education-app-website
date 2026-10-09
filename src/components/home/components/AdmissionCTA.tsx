import Link from "next/link";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

import bannerImage from "@/assets/images/home/banner/1.jpg";

export default function AdmissionCTA() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#002147] text-white">
      {/* Full-width background image — no content padding */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-2] bg-cover bg-center"
        style={{
          backgroundImage: `url("${bannerImage.src}")`,
        }}
      />

      {/* Dark navy overlay across the entire image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-[rgba(0,20,44,0.82)]"
      />

      {/* Additional subtle gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#002147]/50 via-transparent to-black/20"
      />

      {/* Content only — fundamental padding */}
      <div className="relative px-6 py-10 sm:py-14 xl:px-40">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 sm:text-sm">
              Your next step starts here
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Get to know Heritage.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Have a question about classes or admissions? Connect with the
              school to get current information and guidance for your family.
            </p>

            <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-white/85">
              <FiMapPin
                size={18}
                className="mt-0.5 shrink-0 text-sky-200"
              />

              <span>
                Sapaha Road, Post-Kasia, Kushinagar, Uttar Pradesh 274402
              </span>
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 text-sm font-semibold text-[#002147] transition-colors hover:bg-sky-100"
            >
              Contact the school
              <FiArrowRight size={16} />
            </Link>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-sm border border-white/50 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}