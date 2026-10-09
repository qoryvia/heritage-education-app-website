
import type { Metadata } from "next";

import { SEO } from "@/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Replace this with your actual facilities data.
const facilities = {
  library: {
    title: "School Library",
    description:
      "Explore the library and reading resources available to students.",
  },
  laboratories: {
    title: "Science Laboratories",
    description:
      "Learn about the science laboratory facilities available at the school.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const facility =
    facilities[slug as keyof typeof facilities];

  if (!facility) {
    return SEO({
      title: "Facility Not Found",
      description: "The requested school facility could not be found.",
      path: `/facilities/${slug}`,
      index: false,
      follow: false,
    });
  }

  return SEO({
    title: facility.title,
    description: facility.description,
    path: `/facilities/${slug}`,
    keywords: [
      facility.title,
      "school facilities Kushinagar",
    ],
  });
}

export default async function FacilityPage({
  params,
}: Props) {
  const { slug } = await params;
  const facility =
    facilities[slug as keyof typeof facilities];

  if (!facility) {
    // In a real page, call notFound() from "next/navigation".
    return <main>Facility not found.</main>;
  }

  return (
    <main>
      <Navbar/>
      <Footer/>
    </main>
  );
}