import type { Metadata } from "next";
import "../public/assets/css/zeena.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { openSans, poppins } from "@/lib/font";
import {
  localBusinessSchema,
  organizationSchema,
  siteConfig,
  toAbsoluteUrl,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "AMKA company",
    "AMKA Digital Solutions",
    "digital solutions Malaysia",
    "digital transformation Malaysia",
    "custom software development Malaysia",
    "cloud infrastructure Malaysia",
    "business automation Malaysia",
    "business analytics Malaysia",
  ],
  applicationName: siteConfig.shortName,
  category: "business",
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [
      {
        url: toAbsoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} hero`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [toAbsoluteUrl(siteConfig.ogImagePath)],
  },
  icons: {
    icon: [
      { url: "/assets/images/favicons/favicon-32x32.png", sizes: "32x32" },
      { url: "/assets/images/favicons/favicon-16x16.png", sizes: "16x16" },
      { url: "/assets/images/favicons/favicon.ico" },
    ],
    apple: [{ url: "/assets/images/favicons/apple-touch-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY" className={`${openSans.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
