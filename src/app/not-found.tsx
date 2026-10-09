import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NotFoundContent from "@/components/not-found/components/NotFoundContent";

import { SEO } from "@/seo";

const title = "Page Not Found";
const description =
  "The page you are looking for could not be found. Explore Heritage International Public School's website or return to the homepage.";

export const metadata: Metadata = SEO({
  title,
  description,
  path: "/404",
  index: false,
  follow: true,
});

export default function NotFound() {
  return (
    <>
      <Navbar />
      <NotFoundContent />
      <Footer />
    </>
  );
}