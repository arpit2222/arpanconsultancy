import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/startup-hub",
    "/tax-audit",
    "/exporters-corner",
    "/licenses-nocs",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `https://arpanconsultancy.in${route}`,
    lastModified: new Date(),
  }));
}

