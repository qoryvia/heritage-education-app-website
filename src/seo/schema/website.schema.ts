
import { SEO_CONFIG } from "../seo.config";

export function createWebsiteSchema() {
  const siteUrl = SEO_CONFIG.siteUrl.replace(/\/+$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: SEO_CONFIG.siteName,
    url: `${siteUrl}/`,
    description: SEO_CONFIG.defaultDescription,
    inLanguage: SEO_CONFIG.language,
    publisher: {
      "@id": `${siteUrl}/#school`,
    },
  };
}