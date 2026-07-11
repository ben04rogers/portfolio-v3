import BlogList from "@/components/blog-list";
import { getBlogPosts } from "@/data/blog";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description:
    "My thoughts on software development, various books and technology.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const allTags = Array.from(
    new Set(
      posts.flatMap((post) => post.metadata.tags || []).filter((tag) => tag),
    ),
  ).sort();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Posts</h1>
      <Suspense>
        <BlogList posts={posts} allTags={allTags} />
      </Suspense>
    </section>
  );
}
