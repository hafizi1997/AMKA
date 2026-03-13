import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio | AMKA Digital Solutions",
  description:
    "Explore selected AMKA digital projects and implementation work across software, operations, and business optimization initiatives.",
  path: "/portfolio",
});

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
