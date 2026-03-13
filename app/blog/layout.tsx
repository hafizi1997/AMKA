import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog | Insights from AMKA",
  description:
    "Read business and digital transformation insights from AMKA Digital Solutions for Malaysian companies and professional service firms.",
  path: "/blog",
});

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
