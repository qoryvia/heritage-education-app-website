import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FacilitiesHero from "@/components/facilities/components/FacilitiesHero";
import FacilitiesGrid from "@/components/facilities/components/FacilitiesGrid";
import FacilitiesCTA from "@/components/facilities/components/FacilitiesCTA";

import {
  SEO,
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/seo";

const title =
  "School Facilities | Heritage International Public School";

const description =
  "Explore the facilities at Heritage International Public School, Kasia, Kushinagar, including smart classrooms, science laboratories, computer lab, library, sports facilities, transport, canteen, medical room, activity room, and CCTV surveillance.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/facilities",
  keywords: [
    "Heritage International Public School facilities",
    "school facilities in Kasia",
    "school infrastructure Kushinagar",
    "smart classrooms",
    "science laboratories",
    "school library and computer lab",
    "school sports facilities",
    "school transport and safety",
  ],
});

export default function FacilitiesPage() {
  const schemas = [
    createWebPageSchema({
      title,
      description,
      path: "/facilities",
    }),
    createBreadcrumbSchema([
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Facilities",
        path: "/facilities",
      },
    ]),
  ];

  return (
    <>
      <Navbar />

      <JsonLd data={schemas} />

      <main id="main-content">
        <FacilitiesHero />
        <FacilitiesGrid />
        <FacilitiesCTA />
      </main>

      <Footer />
    </>
  );
}