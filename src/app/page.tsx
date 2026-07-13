import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Work } from "@/components/work";
import { RecentPosts } from "@/components/recent-posts";
import { Skills } from "@/components/skills";
import { personalData, contactData } from "@/data/data";

const BLUR_FADE_DELAY = 0.04;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalData.name,
  url: personalData.url,
  jobTitle: "Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  description: personalData.description,
  knowsAbout: [
    ".NET",
    "C#",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "PHP",
    "Laravel",
    "React",
    "Next.js",
    "Vue.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MySQL",
    "GraphQL",
    "REST APIs",
    "Python",
    "DynamoDB",
  ],
  sameAs: [contactData.social.GitHub.url, contactData.social.LinkedIn.url],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Queensland University of Technology",
  },
  worksFor: {
    "@type": "Organization",
    name: "Humanforce",
  },
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <noscript>
        <section className="max-w-2xl mx-auto px-6 py-8">
          <h1>Ben Rogers - Software Engineer in Brisbane, Australia</h1>
          <p>
            Full stack software engineer specialising in .NET, Node.js,
            TypeScript, PHP/Laravel, React, and AWS. Based in Brisbane,
            Australia with 5 years of experience building scalable web
            applications.
          </p>
        </section>
      </noscript>

      <Hero delay={BLUR_FADE_DELAY} />

      <About delay={BLUR_FADE_DELAY * 3} />

      <Work delay={BLUR_FADE_DELAY * 5} />

      <Education delay={BLUR_FADE_DELAY * 7} />

      <RecentPosts delay={BLUR_FADE_DELAY * 9} />

      <Projects delay={BLUR_FADE_DELAY * 11} />

      <Contact delay={BLUR_FADE_DELAY * 12} />
    </main>
  );
}
