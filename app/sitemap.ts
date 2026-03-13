import type { MetadataRoute } from "next";
import { PLAYBOOK_ARTICLES } from "@/lib/playbooks";
import { serviceCategories } from "@/app/services/_data";
import { toAbsoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/academy",
  "/inside",
  "/blog",
  "/team",
  "/portfolio",
  "/playbook-growth-engine",
  "/playbook-technical-services",
  "/playbook-built-environment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: toAbsoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceCategories.map(
    (service) => ({
      url: toAbsoluteUrl(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const playbookEntries: MetadataRoute.Sitemap = PLAYBOOK_ARTICLES.map(
    (article) => ({
      url: toAbsoluteUrl(article.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  return [...staticEntries, ...serviceEntries, ...playbookEntries].filter(
    (entry, index, entries) =>
      entries.findIndex((item) => item.url === entry.url) === index,
  );
}
