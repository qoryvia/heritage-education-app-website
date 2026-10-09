import Link from "next/link";
import { FiExternalLink, FiMapPin } from "react-icons/fi";

import { contactMapData } from "../data/contact.data";

export default function ContactMap() {
  return (
    <section
      aria-labelledby="contact-map-heading"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="px-6 py-14 sm:py-16 lg:py-20 xl:px-40">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#002147]">
              <FiMapPin aria-hidden="true" size={18} />
              School Location
            </div>

            <h2
              id="contact-map-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              {contactMapData.heading}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {contactMapData.description}
            </p>
          </div>

          <Link
            href={contactMapData.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md bg-[#002147] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003566]"
          >
            Get Directions
            <FiExternalLink aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <iframe
            src={contactMapData.embedUrl}
            title="Google Maps location of Heritage International Public School, Sapaha Road, Kasia, Kushinagar"
            width="600"
            height="450"
            className="block h-[320px] w-full sm:h-[400px] lg:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-800">
            Address:
          </span>{" "}
          {contactMapData.description}
        </p>
      </div>
    </section>
  );
}