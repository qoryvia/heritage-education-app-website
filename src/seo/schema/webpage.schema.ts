
import { SEO_CONFIG } from "../seo.config";
import { getCanonicalUrl } from "../SEO";

interface WebPageSchemaOptions {
  title: string;
  description: string;
  path: string;
  type?: string;
}

export function createWebPageSchema({
  title,
  description,
  path,
  type = "WebPage",
}: WebPageSchemaOptions) {
  const canonical = getCanonicalUrl(path);
  const siteUrl = SEO_CONFIG.siteUrl.replace(/\/+$/, "");

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: SEO_CONFIG.language,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#school`,
    },
    publisher: {
      "@id": `${siteUrl}/#school`,
    },
  };
}