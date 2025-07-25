import BlogInfo from "@/components/ui/blogInfo/blogInfo";
import BlogTitle from "@/components/ui/blogTitle/blogTitle";

import { notFound, redirect } from "next/navigation";
import {
  getDocumentBySlug,
  getDocuments,
  getDocumentSlugs,
} from "outstatic/server";
import { remark } from "remark";
import html from "remark-html";

async function getData(params) {
  const post = getDocumentBySlug("articles", params.slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
    "readTime",
  ]);
  if (!post) {
    redirect("/articles");
  }
  console.log("post in slug", post);
  const content = await markdownToHtml(post.content || "");

  return {
    ...post,
    content,
  };
}
export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch metadata for the slug
  const post = await getDocumentBySlug("articles", params.slug, [
    "slug",
    "title",
    "description",
    "coverImage",
    "metaTitle",
    "metaDescription",
  ]);
  return {
    title: post?.metaTitle || post?.title,
    description: post?.metaDescription || post?.description,
    alternates: {
      canonical: `https://www.moviesuggestions.com/articles/${slug}`,
    },
    metadataBase: new URL(process.env.url),
    themeColor: "#8c3321",
    openGraph: {
      title: post?.metaTitle || post?.title,
      description: post?.metaDescription || post?.description,
      url: process.env.url,
      images: [
        {
          url: post?.coverImage,
          secureUrl: post?.coverImage,
          alt: "Movie Suggestions",
        },
      ],
      type: "article",
    },
  };
}
export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
export async function generateStaticParams() {
  const posts = getDocumentSlugs("articles");
  return posts.map((slug) => ({ slug }));
}
const customStyles = {
  h2: "text-3xl font-bold mt-8 mb-4 text-nl_background",
  h3: "text-2xl font-bold mt-8 mb-4 text-nl_background",
  p: "mb-4 text-gray-300",
  img: "max-w-full h-auto",
  a: "no-underline border-b-2 border-[#f9d543]",
  ol: "list-decimal mb-4",
  ul: "list-disc mb-4",
  li: "ml-4 mb-4",
};
export default async function Home({ params }) {
  const blog = await getData(params);

  const styledContent = blog.content
    .replace(/<h2>/g, `<h2 class="${customStyles.h2}">`)
    .replace(/<h3>/g, `<h3 class="${customStyles.h3}">`)
    .replace(/<p>/g, `<p class="${customStyles.p}">`)
    .replace(/<img /g, `<img class="${customStyles.img}" `)
    .replace(/<a /g, `<a target="_blank" class="${customStyles.a}" `)
    .replace(/<ol>/g, `<ol class="${customStyles.ol}">`)
    .replace(/<ul>/g, `<ul class="${customStyles.ul}">`)
    .replace(/<li>/g, `<li class="${customStyles.li}">`)
    .replace(
      /<p class="mb-4 text-gray-300"><em>source-/g,
      `<p class="mb-4 text-gray-300 source-link"><em>`
    )
    .replace(
      /<p class="mb-4 text-gray-300">source-/g,
      `<p class="mb-4 text-gray-300 source-link">`
    )
    .replace(
      /<p class="mb-4 text-gray-300"><img/g,
      `<p class="mb-2" style=""><img`
    )
    .replaceAll("*", "");
  return (
    <>
      <section className="bg-nl_sec_background">
        <div
          className={`article w-full md:w-3/5 lg:w-1/2 px-4 md:px-0 mx-auto pt-20 pb-16 md:pt-44 max-w-7xl min-h-screen `}
        >
          <BlogInfo date={blog.publishedAt} read_time={blog.readTime} />
          <BlogTitle title={blog.title} />
          <div className="mt-10">
            <div dangerouslySetInnerHTML={{ __html: styledContent }}></div>
          </div>
        </div>
      </section>
    </>
  );
}
