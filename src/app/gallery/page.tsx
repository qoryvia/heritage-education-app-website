import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import GalleryHero from "@/components/gallery/components/GalleryHero";
import GalleryGrid from "@/components/gallery/components/GalleryGrid";

import {
  SEO,
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/seo";

const title =
  "School Gallery | Heritage International Public School";

const description =
  "Explore the gallery of Heritage International Public School. Discover school activities, academics, creative learning, sports, celebrations, and student life.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/gallery",
  keywords: [
    "Heritage International Public School gallery",
    "school gallery Kasia",
    "school activities Kushinagar",
    "student life and activities",
    "school events and celebrations",
    "school campus gallery",
  ],
});

export default function GalleryPage() {
  const schemas = [
    createWebPageSchema({
      title,
      description,
      path: "/gallery",
    }),
    createBreadcrumbSchema([
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Gallery",
        path: "/gallery",
      },
    ]),
  ];

  return (
    <>
      <Navbar />

      <JsonLd data={schemas} />

      <main id="main-content">
        <GalleryHero />
        <GalleryGrid />
      </main>

      <Footer />
    </>
  );
}