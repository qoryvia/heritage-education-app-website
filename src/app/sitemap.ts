import type { MetadataRoute } from "next";

import { eventsData } from "@/components/news/data/news.data";
import { SEO_CONFIG } from "@/seo/seo.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/academics",
    "/admissions",
    "/calendar",
    "/contact",
    "/facilities",
    "/faculty",
    "/gallery",
    "/news",
    "/facilities/library",
    "/facilities/laboratories",
    ...eventsData.map((event) => `/news/${event.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, SEO_CONFIG.siteUrl).toString(),
  }));
}