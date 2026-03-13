import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AMKA Academy | Reliability Training Programs",
  description:
    "AMKA Academy provides practical thermography and partial discharge training programs for reliability teams and maintenance professionals.",
  path: "/academy",
});

export default function AcademyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
