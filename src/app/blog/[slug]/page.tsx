import { getBlogPosts, getPost } from "@/data/blog";
import { personalData } from "@/data/data";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = await getPost(slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `${personalData.url}${image}`
    : `${personalData.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${personalData.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  let post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${personalData.url}${post.metadata.image}`
              : `${personalData.url}/og?title=${post.metadata.title}`,
            url: `${personalData.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: personalData.name,
            },
          }),
        }}
      />
      <div className="mb-8 text-center">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
            Published on {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <h1 className="title font-medium text-3xl tracking-tighter mt-2">
          {post.metadata.title}
        </h1>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {post.readingTime}
          </span>
          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <>
              <span className="text-neutral-300 dark:text-neutral-600">·</span>
              <div className="flex flex-wrap justify-center gap-1.5">
                {post.metadata.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
