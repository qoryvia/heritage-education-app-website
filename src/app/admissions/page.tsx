import type { Metadata } from "next";

import {
  SEO,
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const title = "Admissions";
const description =
  "Explore the admission process, eligibility requirements and enquiry options for Heritage International Public School, Kasia, Kushinagar.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/admissions",
  keywords: [
    "school admissions Kushinagar",
    "CBSE school admission Kasia",
    "Nursery admission Kushinagar",
  ],
});

export default function AdmissionsPage() {
  const schemas = [
    createWebPageSchema({
      title,
      description,
      path: "/admissions",
    }),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Admissions", path: "/admissions" },
    ]),
  ];
  return (
    <>
      <JsonLd data={schemas} />

      <main>
        <Navbar />
        <Footer />
      </main>
    </>
  );
}
