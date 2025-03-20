import { getDocumentSlugs } from "outstatic/server";

export default function sitemap() {
  const mainPages = [""];
  const mainPagesUrl = mainPages.map((slug) => ({
    url: `${process.env.url}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return [...mainPagesUrl];
}
