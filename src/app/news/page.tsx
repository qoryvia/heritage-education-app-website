import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import NewsHero from "@/components/news/components/NewsHero";
import EventsSection from "@/components/news/components/EventsSection";

import {
  SEO,
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/seo";

import { eventsData } from "@/components/news/data/news.data";

const title = "School News and Events | Heritage International Public School";

const description =
  "Explore upcoming events and past activities at Heritage International Public School, Kasia, Kushinagar. Discover student exhibitions, performances, sports, and educational activities.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/news",
  keywords: [
    "Heritage International Public School events",
    "school news Kushinagar",
    "school activities Kasia",
    "student events and activities",
    "school exhibitions and sports",
  ],
});

export default function NewsPage() {
  const schemas = [
    createWebPageSchema({
      title,
      description,
      path: "/news",
    }),
    createBreadcrumbSchema([
      {
        name: "Home",
        path: "/",
      },
      {
        name: "News & Events",
        path: "/news",
      },
    ]),
  ];

  return (
    <>
      <Navbar />

      <JsonLd data={schemas} />

      <main id="main-content" className="bg-[#f8f8f6]">
        <NewsHero />

        {/* Upcoming events */}
        <EventsSection
          title="Upcoming events"
          events={eventsData}
          eventType="upcoming"
        />

        {/* Past events */}
        <EventsSection
          title="Past events"
          events={eventsData}
          eventType="past"
        />
      </main>

      <Footer />
    </>
  );
}