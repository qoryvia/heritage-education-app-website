
import type { Metadata } from "next";

import { SEO_CONFIG } from "./seo.config";
import type { SEOProps } from "./types";
import { createBreadcrumbSchema } from "./schema/breadcrumb.schema";

function normalizePath(path = "/"): string {
  if (/^https?:\/\//i.test(path)) {
    const url = new URL(path);

    // Remove fragments and tracking query parameters from canonical URLs.
    return `${url.origin}${url.pathname}`.replace(/\/+$/, "") || "/";
  }

  const pathname = `/${path}`.replace(/\/+/g, "/");
  const cleanPath = pathname.split("?")[0].split("#")[0];

  return cleanPath === "/" ? "/" : cleanPath.replace(/\/+$/, "");
}

export function getCanonicalUrl(path = "/"): string {
  const cleanPath = normalizePath(path);
  const baseUrl = SEO_CONFIG.siteUrl.replace(/\/+$/, "");

  if (/^https?:\/\//i.test(cleanPath)) {
    return cleanPath;
  }

  return cleanPath === "/" ? `${baseUrl}/` : `${baseUrl}${cleanPath}`;
}

export function SEO({
  title,
  description = SEO_CONFIG.defaultDescription,
  path = "/",
  keywords = [],
  image,
  imageAlt,
  type = "website",
  robots,
  index = true,
  follow = true,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  titleTemplate,
  languages,
}: SEOProps = {}): Metadata {
  const pageTitle = title || SEO_CONFIG.defaultTitle;

  const template =
    titleTemplate === undefined
      ? SEO_CONFIG.titleTemplate
      : titleTemplate;

  const finalTitle =
    template && title
      ? template.replace("%s", pageTitle)
      : pageTitle;

  const canonical = getCanonicalUrl(path);
  const imageUrl = image
    ? /^https?:\/\//i.test(image)
      ? image
      : getCanonicalUrl(image)
    : SEO_CONFIG.defaultOgImage;

  const robotsConfig =
    robots ??
    ({
      index,
      follow,
      googleBot: {
        index,
        follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    } satisfies NonNullable<Metadata["robots"]>);

  const metadata: Metadata = {
    metadataBase: new URL(SEO_CONFIG.siteUrl),

    title: finalTitle,
    description,

    keywords: Array.from(
      new Set([...SEO_CONFIG.keywords, ...keywords]),
    ),

    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },

    robots: robotsConfig,

    openGraph: {
      title: finalTitle,
      description,
      url: canonical,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type,

      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                ...(imageAlt ? { alt: imageAlt } : {}),
              },
            ],
          }
        : {}),

      ...(type === "article"
        ? {
            ...(publishedTime
              ? { publishedTime }
              : {}),
            ...(modifiedTime
              ? { modifiedTime }
              : {}),
            ...(section ? { section } : {}),
            ...(tags ? { tags } : {}),
            ...(author ? { authors: [author] } : {}),
          }
        : {}),
    },

    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: finalTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };

  if (author) {
    metadata.authors = [{ name: author }];
  }

  return metadata;
}

/**
 * Renders JSON-LD structured data in a Server Component.
 *
 * Usage:
 * <JsonLd data={createSchoolSchema()} />
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${String(schema["@type"] ?? "schema")}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

/**
 * Convenience helper to create page-specific breadcrumb JSON-LD.
 */
export function createPageSEO({
  breadcrumbs,
  ...props
}: SEOProps = {}) {
  return {
    metadata: SEO(props),
    schema: breadcrumbs?.length
      ? createBreadcrumbSchema(breadcrumbs)
      : undefined,
  };
}