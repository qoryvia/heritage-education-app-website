import type { Metadata } from "next";

import {
  SEO,
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/seo";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/components/AboutHero";
import AboutIntroduction from "@/components/about/components/AboutIntroduction";
import AboutPillars from "@/components/about/components/AboutPillars";
import AboutLearning from "@/components/about/components/AboutLearning";
import SchoolDocuments from "@/components/about/components/SchoolDocuments";
import AboutCTA from "@/components/about/components/AboutCTA";

const title = "About Heritage International Public School";

const description =
  "Learn about Heritage International Public School, its educational approach, values, learning environment, and commitment to student development.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/about",
  keywords: [
    "Heritage International Public School",
    "about Heritage International Public School",
    "school education",
    "CBSE-affiliated school",
    "school values and learning",
  ],
});

export default function AboutPage() {
  const schemas = [
    createWebPageSchema({
      title,
      description,
      path: "/about",
    }),

    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ]),
  ];

  return (
    <>
      <Navbar />

      <JsonLd data={schemas} />

      <main id="main-content">
        <AboutHero />

        <AboutIntroduction />

        <AboutPillars />

        <AboutLearning />

        <SchoolDocuments />

        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}