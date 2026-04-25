"use client";

import "react-github-calendar/tooltips.css";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import BlurFade from "@/components/magicui/blur-fade";

interface GitHubContributionsProps {
  delay?: number;
}

const GITHUB_USERNAME = "ben04rogers";

export function GitHubContributions({ delay = 0 }: GitHubContributionsProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorScheme = mounted && theme === "dark" ? "dark" : "light";

  if (!mounted) {
    return (
      <section id="github-contributions">
        <div className="space-y-12 w-full py-6">
          <BlurFade delay={delay}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                GitHub Activity
              </h2>
            </div>
          </BlurFade>
        </div>
      </section>
    );
  }

  return (
    <section id="github-contributions">
      <div className="space-y-12 w-full py-6">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">
              GitHub Activity
            </h2>
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.05}>
          <div className="flex justify-center">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={13}
              blockMargin={4}
              fontSize={14}
              colorScheme={colorScheme as "light" | "dark"}
              tooltips={{
                activity: {
                  text: (activity) =>
                    `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${activity.date}`,
                },
              }}
              style={{
                maxWidth: "100%",
              }}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
