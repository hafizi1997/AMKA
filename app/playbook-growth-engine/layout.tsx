import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Playbook | Training and Consulting Growth Engine",
  description:
    "AMKA playbook for training and consulting professionals to build predictable business development and sustainable revenue growth.",
  path: "/playbook-growth-engine",
});

export default function PlaybookGrowthEngineLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
