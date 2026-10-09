import {
  FiActivity,
  FiArrowUpRight,
  FiBookOpen,
  FiCamera,
  FiCoffee,
  FiCpu,
  FiHeart,
  FiMonitor,
  FiMusic,
  FiTarget,
  FiTruck,
} from "react-icons/fi";

import type { IconType } from "react-icons";
import type {
  FacilityIcon,
  SchoolFacility,
} from "../data/facilities.data";

import { facilitiesData } from "../data/facilities.data";

const facilityIcons: Record<FacilityIcon, IconType> = {
  classroom: FiMonitor,
  science: FiActivity,
  computer: FiCpu,
  library: FiBookOpen,
  sports: FiTarget,
  transport: FiTruck,
  canteen: FiCoffee,
  medical: FiHeart,
  activities: FiMusic,
  security: FiCamera,
};

function FacilityCard({ facility }: { facility: SchoolFacility }) {
  const Icon = facilityIcons[facility.icon];

  return (
    <article className="group flex min-h-[220px] flex-col border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-[#002147]/40 sm:p-6">
      {/* React Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-[#002147] transition-colors group-hover:bg-[#002147]/[0.07]">
        <Icon aria-hidden="true" size={25} strokeWidth={1.7} />
      </div>

      {/* Content */}
      <h3 className="mt-5 text-base font-semibold leading-6 text-slate-900">
        {facility.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {facility.description}
      </p>

      {/* Decorative indicator */}
      <div className="mt-auto flex justify-end pt-4">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors group-hover:border-[#002147] group-hover:bg-[#002147] group-hover:text-white"
        >
          <FiArrowUpRight size={16} />
        </span>
      </div>
    </article>
  );
}

export default function FacilitiesGrid() {
  return (
    <section
      id="facilities-list"
      aria-labelledby="facilities-heading"
      className="bg-white"
    >
      <div className="px-6 py-12 sm:py-16 lg:py-20 xl:px-40">
        {/* Section heading */}
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#002147] sm:text-sm">
            Facilities & Infrastructure
          </p>

          <h2
            id="facilities-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Everything You Need to Learn and Grow
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore the facilities designed to support learning,
            creativity, health, sports, and a secure school environment.
          </p>
        </div>

        {/* Facilities grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-8 border-l-2 border-[#002147] bg-slate-50 px-5 py-4 sm:px-6">
          <p className="text-sm leading-7 text-slate-600">
            Our facilities support a broad school experience by
            bringing together academic resources, practical learning,
            creative activities, physical education, and student well-being.
          </p>
        </div>
      </div>
    </section>
  );
}