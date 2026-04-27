"use client";

import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface Post {
  metadata: {
    title: string;
    publishedAt: string;
    summary?: string;
    tags?: string[];
    [key: string]: unknown;
  };
  slug: string;
  source: string;
}

interface BlogListProps {
  posts: Post[];
  allTags: string[];
}

export default function BlogList({ posts, allTags }: BlogListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.metadata.tags?.includes(selectedTag))
    : posts;

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <>
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
              selectedTag === null
                ? "bg-foreground text-background"
                : "bg-transparent hover:bg-muted"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                selectedTag === tag
                  ? "bg-foreground text-background"
                  : "bg-transparent hover:bg-muted"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      {sortedPosts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-2 mb-8 hover:opacity-70 transition-opacity"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-base md:text-lg font-medium tracking-tight">
              {post.metadata.title}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}
