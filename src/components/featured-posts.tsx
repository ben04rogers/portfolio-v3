import BlurFade from "@/components/magicui/blur-fade";
import { getFeaturedPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturedPostsProps {
  delay?: number;
}

export async function FeaturedPosts({ delay = 0 }: FeaturedPostsProps) {
  const posts = (await getFeaturedPosts()).slice(0, 2); // Show at most 2 featured posts

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="featured-posts">
      <div className="w-full py-12 pb-0">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Featured Posts
            </h2>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-6">
          {posts.map((post, id) => (
            <BlurFade key={post.slug} delay={delay + 0.01 + id * 0.05}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full border border-border p-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer flex flex-col hover:scale-[1.01] hover:-translate-y-1">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl">
                      {post.metadata.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <CardDescription>
                        {formatDate(post.metadata.publishedAt)}
                      </CardDescription>
                      {post.metadata.tags?.[0] && (
                        <span className="text-xs px-2 py-0.5 rounded-full border">
                          {post.metadata.tags[0]}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-sm line-clamp-4">
                      {post.metadata.summary}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </BlurFade>
          ))}
        </div>
        <BlurFade delay={delay + 0.01 + posts.length * 0.05}>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link href="/blog">View all posts</Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
