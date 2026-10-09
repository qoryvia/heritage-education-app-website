import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import gallery01 from "@/assets/images/home/gallery/1.jpg";
import gallery02 from "@/assets/images/home/gallery/2.jpg";
import gallery03 from "@/assets/images/home/gallery/3.jpg";
import gallery04 from "@/assets/images/home/gallery/4.jpg";
import gallery05 from "@/assets/images/home/gallery/5.jpg";

const galleryImages = [
  {
    image: gallery01,
    title: "Achievements and Celebrations",
    alt: "Students celebrating their achievements at school",
  },
  {
    image: gallery02,
    title: "School Celebrations",
    alt: "School community participating in a celebration",
  },
  {
    image: gallery03,
    title: "Sports and Activities",
    alt: "Students participating in a school activity",
  },
  {
    image: gallery04,
    title: "Learning and Creativity",
    alt: "Students presenting their school projects",
  },
  {
    image: gallery05,
    title: "Cultural Performances",
    alt: "Students participating in a cultural performance",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-white px-6 py-12 sm:py-14 xl:px-40">
      {/* Centered heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#002147]">
          Our Gallery
        </p>

        <h2 className="mt-2 text-3xl font-medium leading-tight tracking-tight text-[#002147] sm:text-4xl lg:text-[2.7rem]">
          Explore Life at Heritage International Public School
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Discover a glimpse of our vibrant campus life, dynamic classrooms,
          extracurricular activities, and events that shape the all-round
          development of our students.
        </p>
      </div>

      {/* Top row: two images with asymmetric widths */}
      <div className="mt-8 grid grid-cols-1 gap-1.5 sm:grid-cols-[1.4fr_1fr]">
        {galleryImages.slice(0, 2).map((item) => (
          <Link
            key={item.title}
            href="/gallery"
            aria-label={`View gallery: ${item.title}`}
            className="group relative block h-[210px] overflow-hidden bg-slate-100 sm:h-[230px] lg:h-[245px]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1279px) 60vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />

            <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-white/95 text-[#002147] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <FiArrowUpRight size={17} />
            </span>
          </Link>
        ))}
      </div>

      {/* Bottom row: three equal images */}
      <div className="mt-1.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.slice(2).map((item) => (
          <Link
            key={item.title}
            href="/gallery"
            aria-label={`View gallery: ${item.title}`}
            className="group relative block h-[210px] overflow-hidden bg-slate-100 sm:h-[220px] lg:h-[240px]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />

            <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-white/95 text-[#002147] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <FiArrowUpRight size={17} />
            </span>
          </Link>
        ))}
      </div>

      {/* View all gallery */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#00152e]"
        >
          Explore Full Gallery
          <FiArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}