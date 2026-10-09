"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

import {
  galleryImages,
  type GalleryImage,
} from "../data/gallery.data";

const categories = [
  "All",
  ...Array.from(new Set(galleryImages.map((image) => image.category))),
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (image) => image.category === activeCategory,
    );
  }, [activeCategory]);

  const selectedImage: GalleryImage | null =
    selectedIndex !== null
      ? filteredImages[selectedIndex] ?? null
      : null;

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null || filteredImages.length === 0) {
        return current;
      }

      return (
        (current - 1 + filteredImages.length) % filteredImages.length
      );
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null || filteredImages.length === 0) {
        return current;
      }

      return (current + 1) % filteredImages.length;
    });
  };

  // Keyboard controls and background scroll lock for the lightbox.
  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => {
          if (current === null || filteredImages.length === 0) {
            return current;
          }

          return (
            (current - 1 + filteredImages.length) %
            filteredImages.length
          );
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => {
          if (current === null || filteredImages.length === 0) {
            return current;
          }

          return (current + 1) % filteredImages.length;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex, filteredImages.length]);

  return (
    <>
      <section
        id="gallery-grid"
        aria-labelledby="gallery-heading"
        className="bg-white"
      >
        <div className="px-6 py-10 sm:py-14 xl:px-40">
          {/* Section heading */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#002147]">
                Moments at Heritage
              </p>

              <h2
                id="gallery-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                Explore Our Memories
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Discover moments from learning, campus life, student
                activities, and school celebrations.
              </p>
            </div>

            <p className="hidden shrink-0 text-sm text-slate-500 sm:block">
              {filteredImages.length} photos
            </p>
          </div>

        {/* Horizontally scrolling category filters */}
        <div
        className="mb-6 flex gap-2 overflow-x-auto overflow-y-hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Filter gallery by category"
        >
        {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
            <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
                }}
                className={`shrink-0 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                    ? "border-[#002147] bg-[#002147] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#002147]/40 hover:text-[#002147]"
                }`}
            >
                {category}
            </button>
            );
        })}
        </div>

          {/* ================================================= */}
          {/* MOBILE: VERTICAL REELS-STYLE GALLERY              */}
          {/* ================================================= */}
        <div
        aria-label="Scroll through gallery photos"
        className="h-[76svh] min-h-[460px] max-h-[820px] snap-y snap-mandatory space-y-3 overflow-y-auto overscroll-contain rounded-xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden"
        >
        {filteredImages.map((image, index) => (
            <button
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open photo ${index + 1}: ${image.title}`}
            className="group relative block h-[76svh] min-h-[460px] max-h-[820px] w-full snap-start snap-always overflow-hidden rounded-xl bg-slate-900 text-left text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002147] focus-visible:ring-offset-2"
            >
            {/* Full-height image */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-active:scale-[1.01]"
                style={{
                backgroundImage: `url("${image.image}")`,
                }}
            />

            {/* Overlays for contrast */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/85"
            />

            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent"
            />

            {/* Top category and image viewer indicator */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4 sm:p-5">
                <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                {image.category}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md">
                <FiMaximize2 aria-hidden="true" size={17} />
                </span>
            </div>

            {/* Bottom caption */}
            <div className="absolute inset-x-0 bottom-0 p-5 pb-7 sm:p-6 sm:pb-8">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-sky-200">
                Heritage International Public School
                </p>

                <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                {image.title}
                </h3>

                {image.description && (
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/85">
                    {image.description}
                </p>
                )}

                {/* Progress indicator */}
                <div className="mt-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                    {filteredImages.map((item, itemIndex) => (
                    <span
                        key={item.id}
                        className={`h-1 rounded-full transition-all ${
                        index === itemIndex
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/50"
                        }`}
                    />
                    ))}
                </div>

                <span className="text-xs text-white/80">
                    {index + 1} / {filteredImages.length}
                </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white">
                View full photo
                <FiArrowRight aria-hidden="true" size={16} />
                </div>
            </div>
            </button>
        ))}
        </div>

          {/* ================================================= */}
          {/* DESKTOP: ORIGINAL GRID GALLERY                     */}
          {/* ================================================= */}
          {filteredImages.length > 0 ? (
            <div className="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-3 xl:grid-cols-4">
              {filteredImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View image: ${image.title}`}
                  className="group min-w-0 overflow-hidden border border-slate-200 bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002147] focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${image.image}")`,
                      }}
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-white/95 text-[#002147] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FiMaximize2 aria-hidden="true" size={17} />
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#002147]">
                      {image.category}
                    </p>

                    <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-slate-900 transition-colors group-hover:text-[#002147]">
                      {image.title}
                    </h3>

                    {image.description && (
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                        {image.description}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex min-h-48 items-center justify-center border border-dashed border-slate-300 text-sm text-slate-500">
              No photos found in this category.
            </div>
          )}

          {/* Mobile gallery count */}
          <p className="mt-4 text-center text-xs text-slate-500 md:hidden">
            Swipe up to explore more photos
          </p>
        </div>
      </section>

      {/* =================================================== */}
      {/* SHARED LIGHTBOX                                      */}
      {/* =================================================== */}
      {selectedImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${selectedImage.title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery viewer"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <FiX aria-hidden="true" size={24} />
          </button>

          {/* Previous */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
            >
              <FiArrowLeft aria-hidden="true" size={22} />
            </button>
          )}

          {/* Image and caption */}
          <div
            className="flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[55vh] w-full sm:h-[70vh]">
              <div
                role="img"
                aria-label={selectedImage.alt}
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("${selectedImage.image}")`,
                }}
              />
            </div>

            <div className="mt-5 max-w-3xl px-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sky-200">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                {selectedImage.title}
              </h3>

              {selectedImage.description && (
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {selectedImage.description}
                </p>
              )}

              <p className="mt-4 text-xs text-white/50">
                {selectedIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
            >
              <FiArrowRight aria-hidden="true" size={22} />
            </button>
          )}
        </div>
      )}
    </>
  );
}