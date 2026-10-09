
import { SEO_CONFIG } from "../seo.config";
import { getCanonicalUrl } from "../SEO";

interface CourseSchemaOptions {
  name: string;
  description: string;
  path: string;
  educationalLevel?: string;
  image?: string;
}

export function createCourseSchema({
  name,
  description,
  path,
  educationalLevel,
  image,
}: CourseSchemaOptions) {
  const siteUrl = SEO_CONFIG.siteUrl.replace(/\/+$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${getCanonicalUrl(path)}#course`,
    name,
    description,
    url: getCanonicalUrl(path),
    provider: {
      "@type": "School",
      "@id": `${siteUrl}/#school`,
      name: SEO_CONFIG.legalName,
      url: `${siteUrl}/`,
    },
    ...(educationalLevel ? { educationalLevel } : {}),
    ...(image ? { image } : {}),
  };
}