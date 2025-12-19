import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://funngro.com/",
      lastModified: new Date(),
    },
    {
      url: "https://funngro.com/for-teens",
      lastModified: new Date(),
    },
    {
      url: "https://funngro.com/for-companies",
      lastModified: new Date(),
    },
  ];
}
