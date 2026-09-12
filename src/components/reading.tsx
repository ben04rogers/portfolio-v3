import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GOODREADS_PROFILE_URL, getCurrentlyReading } from "@/data/reading";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ReadingProps {
  delay?: number;
}

export async function Reading({ delay = 0 }: ReadingProps) {
  const currentlyReading = await getCurrentlyReading();

  // If Goodreads is unreachable and we have nothing to show, skip the section entirely.
  if (!currentlyReading) {
    return null;
  }

  return (
    <section id="reading">
      <div className="w-full py-12 pb-0">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Currently Reading
            </h2>
          </div>
        </BlurFade>

        <div className="flex justify-center mb-6">
          <BlurFade delay={delay + 0.01}>
            <Link
              href={currentlyReading.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block max-w-full"
            >
              <Card className="group relative overflow-hidden border border-border bg-gray-50 dark:bg-white/5 p-5 inline-flex w-fit max-w-full items-center gap-5 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-150 ease-out">
                <BookOpen
                  className="absolute -right-5 -bottom-5 w-28 h-28 text-black/[0.04] dark:text-white/[0.06] rotate-[-12deg] pointer-events-none"
                  strokeWidth={1}
                />

                {currentlyReading.imageUrl && (
                  <Image
                    src={currentlyReading.imageUrl}
                    alt={currentlyReading.title}
                    width={96}
                    height={144}
                    className="relative w-24 h-36 rounded-md shadow-md object-cover shrink-0 ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-150 group-hover:scale-[1.03]"
                  />
                )}

                <div className="relative min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Reading now
                    </span>
                  </div>
                  <p className="font-semibold leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                    {currentlyReading.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1.5 line-clamp-1">
                    {currentlyReading.author}
                  </p>
                </div>
              </Card>
            </Link>
          </BlurFade>
        </div>

        <BlurFade delay={delay + 0.02}>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link
                href={GOODREADS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View all on Goodreads
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
