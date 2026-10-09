import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import NewsDetailHero from "@/components/news/pages/NewsDetailHero";
import EventDetailsContent from "@/components/news/pages/EventDetailsContent";
import EventGallery from "@/components/news/pages/EventGallery";
import RelatedEvents from "@/components/news/pages/RelatedEvents";

import { eventsData } from "@/components/news/data/news.data";

import {
  SEO,
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/seo";

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getEventBySlug(slug: string) {
  return eventsData.find((event) => event.slug === slug);
}

export function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return SEO({
      title: "Event Not Found | Heritage International Public School",
      description: "The requested school event could not be found.",
      path: `/news/${slug}`,
      index: false,
      follow: true,
    });
  }

  return SEO({
    title: event.seoTitle,
    description: event.seoDescription,
    path: `/news/${event.slug}`,
    keywords: event.tags,
    type: "article",
  });
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const title = event.seoTitle;
  const description = event.seoDescription;
  const path = `/news/${event.slug}`;

  const schemas = [
    createWebPageSchema({
      title,
      description,
      path,
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
      {
        name: event.title,
        path,
      },
    ]),
  ];

  return (
    <>
      <Navbar />

      <JsonLd data={schemas} />

      <main id="main-content" className="min-h-screen bg-white">
        <NewsDetailHero event={event} />
        <EventDetailsContent event={event} />
        <EventGallery event={event} />
        <RelatedEvents event={event} />
      </main>

      <Footer />
    </>
  );
}