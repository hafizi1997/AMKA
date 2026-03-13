import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AMKA Digital Solutions Sdn Bhd",
    short_name: "AMKA Digital",
    description:
      "Digital transformation, software, cloud, analytics, and automation solutions for Malaysian businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d4f8b",
    icons: [
      {
        src: "/assets/images/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/images/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
