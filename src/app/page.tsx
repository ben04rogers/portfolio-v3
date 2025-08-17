"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  personalData,
  skillsData,
  experiencesData,
  educationData,
  projectsData,
} from "@/data/data";
import Markdown from "react-markdown";
import { Icon } from "@iconify/react";
import { Contact } from "@/components/contact";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>(
    skillsData[0]?.category || "",
  );

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${personalData.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={personalData.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={personalData.name}
                  src={personalData.avatarUrl}
                />
                <AvatarFallback>{personalData.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {personalData.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {experiencesData.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {educationData.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                My Projects
              </h2>
            </div>
          </BlurFade>
          <div className="grid gap-5 max-w-[800px] mx-auto">
            {projectsData.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-wrap justify-center gap-3">
              {skillsData.map((group) => (
                <Button
                  key={group.category}
                  variant={
                    selectedSkillCategory === group.category
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedSkillCategory(group.category)}
                  className="px-4 py-2"
                >
                  {group.category}
                </Button>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-3 max-w-2xl justify-center">
                {skillsData
                  .find((group) => group.category === selectedSkillCategory)
                  ?.skills.map((skill, skillIndex) => (
                    <BlurFade
                      key={skill.name}
                      delay={BLUR_FADE_DELAY * 12 + skillIndex * 0.05}
                    >
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-normal"
                      >
                        {"icon" in skill && skill.icon && (
                          <Icon icon={skill.icon} className="text-base" />
                        )}
                        <span>{skill.name}</span>
                      </Badge>
                    </BlurFade>
                  ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <Contact delay={BLUR_FADE_DELAY * 16} />
    </main>
  );
}
