"use client";

import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <div className="space-y-4">
        {sortedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <Card className="border p-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-[1.01] hover:-translate-y-1 transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{post.metadata.title}</CardTitle>
              </CardHeader>
              {post.metadata.summary && (
                <CardContent>
                  <p>{post.metadata.summary}</p>
                </CardContent>
              )}
              <CardFooter className="justify-between gap-2">
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.metadata.publishedAt)}
                </p>
                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
