import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface AdjacentPost {
  slug: string;
  metadata: {
    title: string;
    [key: string]: unknown;
  };
}

interface PostNavigationProps {
  previousPost: AdjacentPost | null;
  nextPost: AdjacentPost | null;
}

export default function PostNavigation({
  previousPost,
  nextPost,
}: PostNavigationProps) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <nav
      aria-label="Post navigation"
      className="mt-12 flex flex-col sm:flex-row gap-2 border-t pt-6"
    >
      <div className="flex-1">
        {previousPost && (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="group flex flex-col items-start rounded-lg border p-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-[1.01] hover:-translate-y-1 transition-all"
          >
            <span className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </span>
            <span className="mt-1 line-clamp-1 text-sm font-medium">
              {previousPost.metadata.title}
            </span>
          </Link>
        )}
      </div>
      <div className="flex-1">
        {nextPost && (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex flex-col items-end text-right rounded-lg border p-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-[1.01] hover:-translate-y-1 transition-all"
          >
            <span className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-foreground transition-colors">
              Next
              <ChevronRight className="w-4 h-4" />
            </span>
            <span className="mt-1 line-clamp-1 text-sm font-medium">
              {nextPost.metadata.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
