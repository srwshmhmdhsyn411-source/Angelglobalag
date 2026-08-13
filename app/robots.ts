import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://srwshmhmdhsyn411-source.github.io/Angelglobalag/sitemap.xml",
    host: "https://srwshmhmdhsyn411-source.github.io/Angelglobalag/",
  };
}
