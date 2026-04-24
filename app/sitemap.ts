import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/news",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `https://arpanconsultancy.in${route}`,
    lastModified: new Date(),
  }));
}
