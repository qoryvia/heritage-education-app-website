import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/components/ContactHero";
import ContactDetails from "@/components/contact/components/ContactDetails";
import ContactMap from "@/components/contact/components/ContactMap";

import {
  SEO,
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/seo";

const title = "Contact Us | Heritage International Public School";

const description =
  "Contact Heritage International Public School, Kasia, Kushinagar. Call our school, send us an email, or find our campus on Google Maps.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/contact",
  keywords: [
    "contact Heritage International Public School",
    "Heritage International Public School phone number",
    "Heritage International Public School Kasia",
    "school in Kushinagar",
    "school address Sapaha Road",
  ],
});

export default function ContactPage() {
  const schemas = [
    createWebPageSchema({
      title,
      description,
      path: "/contact",
    }),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact" },
    ]),
  ];

  return (
    <>
      <Navbar />

      <JsonLd data={schemas} />

      <main id="main-content">
        <ContactHero />
        <ContactDetails />
        <ContactMap />
      </main>

      <Footer />
    </>
  );
}