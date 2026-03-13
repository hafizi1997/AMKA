import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Playbook | Technical Services Business Growth",
  description:
    "AMKA playbook for technical services companies to build trust-based positioning and a predictable business development pipeline.",
  path: "/playbook-technical-services",
});

export default function PlaybookTechnicalServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
