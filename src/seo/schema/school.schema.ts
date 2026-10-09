
import { SEO_CONFIG } from "../seo.config";

export function createSchoolSchema() {
  const siteUrl = SEO_CONFIG.siteUrl.replace(/\/+$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${siteUrl}/#school`,
    name: SEO_CONFIG.legalName,
    alternateName: SEO_CONFIG.shortName,
    url: `${siteUrl}/`,
    description: SEO_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      ...SEO_CONFIG.address,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "CBSE Affiliation Number",
      value: SEO_CONFIG.affiliationNumber,
    },
    educationalLevel: [
      "Nursery",
      "Primary School",
      "Middle School",
      "Secondary School",
      "Senior Secondary School",
    ],
    sameAs: [
      SEO_CONFIG.social.facebook,
      SEO_CONFIG.social.instagram,
      SEO_CONFIG.social.youtube,
      SEO_CONFIG.social.linkedin,
    ].filter((url): url is string => Boolean(url)),
  };
}