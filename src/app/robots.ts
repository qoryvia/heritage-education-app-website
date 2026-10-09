import type { MetadataRoute } from "next";

import { SEO_CONFIG } from "@/seo/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", SEO_CONFIG.siteUrl).toString(),
  };
}