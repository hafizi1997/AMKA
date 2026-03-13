import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Playbook | Built Environment Growth Framework",
  description:
    "AMKA playbook for architecture, engineering, quantity surveying, and project management firms to build a repeatable growth engine.",
  path: "/playbook-built-environment",
});

export default function PlaybookBuiltEnvironmentLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
