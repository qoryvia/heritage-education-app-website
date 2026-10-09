import {
  FiAward,
  FiUsers,
  FiBookOpen,
  FiHeart,
} from "react-icons/fi";
import type { IconType } from "react-icons";

import { whyHeritageData } from "../data/home.data";

const icons: Record<string, IconType> = {
  scholarship: FiAward,
  faculty: FiUsers,
  library: FiBookOpen,
  development: FiHeart,
};

export default function WhyHeritage() {
  return (
    <section className="bg-[#FAF9F7] px-6 py-8 sm:py-10 xl:px-40">
      <div className="grid grid-cols-1 divide-y divide-[#002147]/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:gap-y-7 xl:grid-cols-4 xl:gap-y-0 xl:divide-x xl:divide-[#002147]/[0.08]">
        {whyHeritageData.map((item) => {
          const Icon = icons[item.icon] ?? FiBookOpen;

          return (
            <article
              key={item.title}
              className="flex flex-col items-center px-5 py-6 text-center sm:px-7 xl:py-2"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center  text-[#002147]">
                <Icon size={50} strokeWidth={1.7} />
              </div>

              {/* Heading */}
              <h3 className="mt-4 text-base font-semibold leading-6 text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[270px] text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}