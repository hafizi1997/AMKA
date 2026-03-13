import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Team | AMKA Digital Solutions",
  description:
    "Meet the AMKA Digital Solutions team delivering digital strategy, software engineering, and growth-focused business transformation initiatives.",
  path: "/team",
});

export default function TeamLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
