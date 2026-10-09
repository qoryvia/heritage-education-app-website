import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AcademicsHero from "@/components/academics/components/AcademicsHero";
import AcademicStages from "@/components/academics/components/AcademicStages";
import LearningApproach from "@/components/academics/components/LearningApproach";
import AcademicsCTA from "@/components/academics/components/AcademicsCTA";

import {
  SEO,
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/seo";

const title =
  "Academics | Heritage International Public School";

const description =
  "Explore academic programmes, learning stages, and the educational approach of Heritage International Public School, Kasia, Kushinagar. Learn about foundational skills, subject learning, critical thinking, and student development.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/academics",
  keywords: [
    "Heritage International Public School academics",
    "school academic programmes Kasia",
    "school education Kushinagar",
    "academic learning stages",
    "student learning and development",
    "school curriculum and academics",
  ],
});

export default function AcademicsPage() {
  const schemas = [
    createWebPageSchema({
      title,
      description,
      path: "/academics",
    }),
    createBreadcrumbSchema([
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Academics",
        path: "/academics",
      },
    ]),
  ];

  return (
    <>
      <Navbar />

      <JsonLd data={schemas} />

      <main id="main-content">
        <AcademicsHero />
        <AcademicStages />
        <LearningApproach />
        <AcademicsCTA />
      </main>

      <Footer />
    </>
  );
}