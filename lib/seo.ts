import type { Metadata } from "next";

export const siteConfig = {
  siteName: "AMKA Digital Solutions Sdn Bhd",
  shortName: "AMKA Digital Solutions",
  url: "https://amkasolutions.my",
  description:
    "AMKA Digital Solutions Sdn Bhd helps Malaysian businesses scale through digital transformation, custom software, cloud infrastructure, analytics, and automation.",
  locale: "en_MY",
  country: "MY",
  phone: "+60193623141",
  email: "contact@amkatech.com",
  address: {
    streetAddress: "Cube Self Storage Suite 2.1, Seksyen 51a",
    postalCode: "46100",
    addressLocality: "Petaling Jaya",
    addressRegion: "Selangor",
    addressCountry: "MY",
  },
  logoPath: "/assets/images/resources/logo-3.png",
  ogImagePath: "/assets/images/backgrounds/services-banner.png",
};

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function toAbsoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataInput): Metadata {
  const absoluteUrl = toAbsoluteUrl(path);
  const absoluteOgImage = toAbsoluteUrl(siteConfig.ogImagePath);

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl,
      siteName: siteConfig.siteName,
      title,
      description,
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.shortName} visual`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteOgImage],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}#organization`,
  name: siteConfig.siteName,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: toAbsoluteUrl(siteConfig.logoPath),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  areaServed: "Malaysia",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}#local-business`,
  name: siteConfig.siteName,
  url: siteConfig.url,
  image: toAbsoluteUrl(siteConfig.ogImagePath),
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  areaServed: "Malaysia",
  parentOrganization: {
    "@id": `${siteConfig.url}#organization`,
  },
};
