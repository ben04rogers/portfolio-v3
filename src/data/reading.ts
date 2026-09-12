import Parser from "rss-parser";

const GOODREADS_USER_ID = "160051990";
const GOODREADS_PROFILE_URL = `https://www.goodreads.com/user/show/${GOODREADS_USER_ID}-ben`;

// Cache the parsed feed for 6 hours to avoid hitting Goodreads on every request.
const REVALIDATE_SECONDS = 60 * 60 * 6;

export type GoodreadsBook = {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  link: string;
};

type GoodreadsFeedItem = {
  book_id?: string;
  book_medium_image_url?: string;
  book_large_image_url?: string;
  book_image_url?: string;
  author_name?: string;
  link?: string;
  title?: string;
  pubDate?: string;
};

const parser = new Parser<Record<string, unknown>, GoodreadsFeedItem>({
  customFields: {
    item: [
      "book_id",
      "book_image_url",
      "book_medium_image_url",
      "book_large_image_url",
      "author_name",
    ],
  },
});

function toBook(item: GoodreadsFeedItem): GoodreadsBook | null {
  if (!item.book_id || !item.title) return null;

  return {
    id: item.book_id,
    title: item.title,
    author: item.author_name ?? "Unknown author",
    imageUrl:
      item.book_large_image_url ??
      item.book_medium_image_url ??
      item.book_image_url ??
      "",
    link: item.link ?? GOODREADS_PROFILE_URL,
  };
}

export async function getCurrentlyReading(): Promise<GoodreadsBook | null> {
  try {
    const res = await fetch(
      `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=currently-reading`,
      {
        next: { revalidate: REVALIDATE_SECONDS },
        headers: {
          // Goodreads returns an empty/blocked response without a browser-like UA.
          "User-Agent": "Mozilla/5.0 (compatible; portfolio-bot/1.0)",
        },
      },
    );

    if (!res.ok) return null;

    const xml = await res.text();
    const feed = await parser.parseString(xml);
    const [firstItem] = feed.items ?? [];

    return firstItem ? toBook(firstItem) : null;
  } catch (error) {
    console.error("Failed to fetch Goodreads currently-reading shelf:", error);
    return null;
  }
}

export { GOODREADS_PROFILE_URL };
