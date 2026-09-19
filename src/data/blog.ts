import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data } = matter(source);
  const metadata: Metadata = data as Metadata;
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
    readingTime: getReadingTime(rawContent),
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
  return posts;
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

export async function getFeaturedPosts() {
  const posts = await getBlogPosts();

  return posts
    .filter((post) => post.metadata.featured)
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    });
}

export async function getAdjacentPosts(slug: string) {
  const posts = await getBlogPosts();

  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const currentIndex = sortedPosts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return { previousPost: null, nextPost: null };
  }

  return {
    // Older post (published before the current one)
    previousPost: sortedPosts[currentIndex + 1] ?? null,
    // Newer post (published after the current one)
    nextPost: sortedPosts[currentIndex - 1] ?? null,
  };
}
