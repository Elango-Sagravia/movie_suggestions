import ArchiveHeader from "@/components/ui/archiveHeader/archiveHeader";
import GridContainer from "@/components/ui/gridContainer/gridContainer";
import Subscribe from "@/components/ui/subscribe/subscribe";
import blogs from "@/blogs";

import { getDocuments } from "outstatic/server";

export const metadata = {
  title: "Movie Suggestions Archives – Past Editions & Recommendations",
  description:
    "Catch up on all past editions of the Movie Suggestions newsletter. Browse previous movie picks, themed lists, and recommendations you might have missed.",
  alternates: {
    canonical: "https://www.moviesuggestions.com/archives",
  },
};

async function getData() {
  const blogs = getDocuments("blogs", [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
    "readTime",
  ]);

  return blogs;
}

export default async function archive() {
  const blogs = await getData();
  return (
    <main className="bg-nl_sec_background min-h-screen mt-10">
      <ArchiveHeader />
      <section className="px-4 md:px-16 pt-4 pb-32 max-w-7xl mx-auto">
        <GridContainer hideButton={true} articles={blogs} />
      </section>
      <Subscribe />
    </main>
  );
}
