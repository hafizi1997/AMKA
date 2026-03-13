import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Inside Library | AMKA Playbooks",
  description:
    "Browse AMKA inside playbook articles for training, consulting, technical services, and built environment business growth frameworks.",
  path: "/inside",
});

export default function InsideLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
