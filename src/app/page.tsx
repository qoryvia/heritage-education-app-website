
import type { Metadata } from "next";

import {
  SEO,
  JsonLd,
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
} from "@/seo";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HomeHero from "@/components/home/components/HomeHero";
import WhyHeritage from "@/components/home/components/WhyHeritage";
import ProgramsSection from "@/components/home/components/ProgramsSection";
import AboutSchool from "@/components/home/components/AboutSchool";
import FeaturedFacilities from "@/components/home/components/FeaturedFacilities";
import DirectorPrincipleMessage from "@/components/home/components/DirectorPrincipleMessage";
import Testimonials from "@/components/home/components/Testimonials";
import GalleryPreview from "@/components/home/components/GalleryPreview";
import LatestNews from "@/components/home/components/LatestNews";
import HomeFAQ from "@/components/home/components/HomeFAQ";
import AdmissionCTA from "@/components/home/components/AdmissionCTA";
import SchoolLife from "@/components/home/components/SchoolLife";

const title = "Heritage International Public School, Kasia, Kushinagar";

const description =
  "Discover Heritage International Public School, a CBSE-affiliated school in Kasia, Kushinagar, offering education from Nursery to Class XII, along with academic programmes, modern facilities, extracurricular activities, and admissions information.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/",
  keywords: [
    "Heritage International Public School",
    "CBSE school in Kasia",
    "CBSE school in Kushinagar",
    "Nursery to Class 12 school",
    "school admissions in Kushinagar",
    "Heritage International Public School admissions",
    "school facilities in Kasia",
  ],
});

export default function HomePage() {
  const schemas = [
    createSchoolSchema(),
    createWebsiteSchema(),
    createWebPageSchema({
      title,
      description,
      path: "/",
    }),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Navbar />
      <main id="main-content">
        <HomeHero />
        <LatestNews />
        <WhyHeritage />
        <ProgramsSection />
        <AboutSchool />
        <FeaturedFacilities />
        <DirectorPrincipleMessage />
        <Testimonials />
        <GalleryPreview />
        <SchoolLife/>
        <HomeFAQ />
        <AdmissionCTA />
      </main>
      <Footer />
    </>
  );
}