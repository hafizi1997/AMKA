import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services | Digital Transformation, Software, Cloud, AI",
  description:
    "Explore AMKA services: digitalization strategy, custom software, business analytics, cloud infrastructure, and automation solutions for growth-focused organizations.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
