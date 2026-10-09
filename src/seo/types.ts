
import type { Metadata } from "next";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];

  /**
   * Use an absolute URL or a path relative to the website.
   */
  image?: string;
  imageAlt?: string;

  type?: "website" | "article";
  robots?: Metadata["robots"];

  /**
   * Set false for pages that should not be indexed.
   */
  index?: boolean;
  follow?: boolean;

  author?: string;
  publishedTime?: string;
  modifiedTime?: string;

  section?: string;
  tags?: string[];

  /**
   * Supply JSON-LD objects created by schema helpers.
   */
  schema?: Record<string, unknown> | Record<string, unknown>[];

  breadcrumbs?: BreadcrumbItem[];

  /**
   * Override the default title template for a particular page.
   */
  titleTemplate?: string | null;

  /**
   * Optional language alternates.
   */
  languages?: Record<string, string>;
}