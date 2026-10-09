import Link from "next/link";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

import { testimonialsData } from "../data/home.data";

const approvedTestimonials = testimonialsData.filter(
  (item) => item.approved,
);

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-12 sm:py-14 xl:px-40">
      {/* Centered section heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#002147]">
          Testimonials
        </p>

        <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          What Our Parents Say
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Hear from our parent community about their experience with Heritage.
        </p>
      </div>

      {/* Testimonial cards */}
      {approvedTestimonials.length > 0 ? (
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {approvedTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="flex items-start gap-3 rounded-md border border-slate-200 bg-white p-4 transition-colors duration-200 hover:border-[#002147]/25 sm:gap-4 sm:p-4"
            >
              {/* Parent avatar */}
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#002147]/[0.07] text-xs font-semibold text-[#002147] sm:h-11 sm:w-11"
                style={
                  testimonial.avatar
                    ? {
                        backgroundImage: `url("${testimonial.avatar}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              >
                {!testimonial.avatar &&
                  testimonial.name
                    .split(" ")
                    .map((part) => part.charAt(0))
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
              </div>

              {/* Quote and parent details */}
              <div className="min-w-0 flex-1">
                <blockquote className="text-xs leading-[1.65] text-slate-600 sm:text-[13px]">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-3">
                  <p className="text-xs font-semibold text-slate-900">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
                    {testimonial.relationship}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-7 flex flex-col items-center rounded-md border border-slate-200 px-5 py-8 text-center">
          <FiMessageCircle
            size={23}
            className="text-[#002147]/60"
          />

          <p className="mt-3 text-sm font-medium text-slate-800">
            Parent testimonials will appear here.
          </p>

          <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">
            Approved parent and student experiences will be featured once
            they are available for publication.
          </p>
        </div>
      )}

      {/* Contact link */}
      <div className="mt-6 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#002147] transition-colors hover:text-[#00152E]"
        >
          Get in touch with us
          <FiArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}