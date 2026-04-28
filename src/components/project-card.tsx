"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  technologies?: readonly { name: string; icon?: string }[];
  className?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  link,
  image,
  video,
  links,
  technologies,
  className,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
      <section
        className="bg-gray-50 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-100 hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-300 hover:-translate-y-1 transition-all duration-150 ease-out dark:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:hover:shadow-gray-900/50 dark:hover:border-gray-600 cursor-pointer active:scale-[0.98] group-hover:scale-[1.01]"
        onClick={handleClick}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="p-6 lg:w-1/2 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>

            <Markdown className="leading-relaxed text-gray-700 dark:text-white/70 prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
              {description}
            </Markdown>

            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 my-5">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2 py-1.5 text-xs font-medium text-gray-600 bg-gray-200 rounded-md dark:text-gray-300 dark:bg-white/10"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            )}

            <div className="flex">
              {link && (
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="mr-2 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <BiLinkExternal className="mr-1 w-4 h-4" /> Live
                  </a>
                </Button>
              )}

              {links &&
                links.length > 0 &&
                links.map((linkItem, idx) => {
                  if (
                    linkItem.type.toLowerCase().includes("demo") ||
                    linkItem.type.toLowerCase().includes("video")
                  ) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        size="sm"
                        className="mr-2 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillYoutube className="mr-1 w-4 h-4" /> Demo
                        </a>
                      </Button>
                    );
                  } else if (linkItem.type.toLowerCase().includes("github")) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="outline"
                        size="sm"
                        className="mr-2 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub className="mr-1 w-4 h-4 opacity-70" />{" "}
                          <span className="opacity-70">GitHub</span>
                        </a>
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        size="sm"
                        className="mr-2 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BiLinkExternal className="mr-1 w-4 h-4" />{" "}
                          {linkItem.type}
                        </a>
                      </Button>
                    );
                  }
                })}
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:items-end lg:justify-end pr-4 pb-4">
            {image && (
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                quality={95}
                className="w-full h-64 lg:h-auto lg:max-w-md shadow-sm object-cover rounded border border-gray-300"
              />
            )}

            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 lg:h-auto lg:max-w-md rounded-lg shadow-lg object-cover"
              />
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
