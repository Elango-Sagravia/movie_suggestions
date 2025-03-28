import SingleBlog from "@/components/ui/singleBlog/singleBlog";
import { notFound } from "next/navigation";
import {
  getDocumentBySlug,
  getDocuments,
  getDocumentSlugs,
} from "outstatic/server";
import { Suspense } from "react";
import { remark } from "remark";
import html from "remark-html";

async function getData(params) {
  const post = getDocumentBySlug("blogs", params.slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
    "readTime",
    "cutOff",
    "relatedArticles",
    "footerBannerTitle",
    "footerBannerContent",
    "emailHtml",
    "emailHtmlPreview",
  ]);
  if (!post) {
    notFound();
  }
  console.log("post in slug", post);
  const content = await markdownToHtml(post.content || "");

  return {
    ...post,
    content,
  };
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
export async function generateStaticParams() {
  const posts = getDocumentSlugs("blogs");
  return posts.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch metadata for the slug
  const post = await getDocumentBySlug("blogs", params.slug, [
    "slug",
    "metaTitle",
    "metaDescription",
    "coverImage",
  ]);
  const canonicalOverrides = {
    "steve-jobs-radical-move": "victoria-s-secret-in-a-man-s-world",
    "volvo-won-big": "victoria-s-secret-in-a-man-s-world",
    "real-life-avengers": "victoria-s-secret-in-a-man-s-world",
    "the-story-of-virgin-group": "victoria-s-secret-in-a-man-s-world",
  };

  // Determine the correct canonical URL
  const canonicalSlug = canonicalOverrides[slug] || slug;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.moviesuggestions.com/archives/${canonicalSlug}`,
    },
    metadataBase: new URL(process.env.url),
    themeColor: "#8c3321",
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: process.env.url,
      images: [
        {
          url: post.coverImage,
          secureUrl: post.coverImage,
          alt: "Business history",
        },
      ],
      type: "article",
    },
  };
}
export default async function Home({ params }) {
  const blog = await getData(params);
  const blogs = await getDocuments("blogs", [
    "title",
    "slug",
    "coverImage",
    "readTime",
  ]);
  const index = blogs.findIndex((blog) => blog.slug === params.slug);
  const relatedBlogsSlugs = blog.relatedArticles.split(",");
  const relatedArticles = blogs.filter((el) =>
    relatedBlogsSlugs.includes(el.slug)
  );
  return (
    <div className="archive-page-slug">
      <Suspense>
        <SingleBlog
          index={index}
          blog={blog}
          relatedArticles={relatedArticles}
        />
      </Suspense>
    </div>
  );
}
