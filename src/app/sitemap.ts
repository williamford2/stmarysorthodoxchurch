import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stmarysendicott.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/about/patron-saint",
    "/about/clergy",
    "/about/pastors-message",
    "/about/confession",
    "/about/russian-club",
    "/our-faith",
    "/our-faith/house-of-god",
    "/our-faith/worship",
    "/our-faith/liturgy",
    "/our-faith/sacraments",
    "/our-faith/special-services",
    "/our-faith/teachings",
    "/our-faith/spirituality",
    "/our-faith/history",
    "/our-faith/the-church",
    "/our-faith/links",
    "/parish-life",
    "/parish-life/service-schedule",
    "/parish-life/bulletins",
    "/parish-life/sermons",
    "/parish-life/kitchen",
    "/parish-life/coffee-hour",
    "/contact",
    "/visit",
    "/bake-sale",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
