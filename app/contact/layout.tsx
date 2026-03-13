import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact AMKA Digital Solutions",
  description:
    "Contact AMKA Digital Solutions Sdn Bhd in Petaling Jaya, Selangor to discuss digital transformation, software development, analytics, cloud, and automation projects.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
