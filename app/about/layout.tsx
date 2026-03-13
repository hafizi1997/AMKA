import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About AMKA Company",
  description:
    "Learn about AMKA Digital Solutions Sdn Bhd and how we help organizations modernize operations with practical digital transformation and software execution.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
