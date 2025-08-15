import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ben Rogers",
  initials: "BR",
  url: "https://www.benrogers.dev/",
  location: "Brisbane, Australia",
  locationLink: "https://www.google.com/maps/place/brisbane",
  description:
    "Software Engineer at Humanforce. I build full-stack web applications with a focus on performance and scalability.",
  summary:
    "I'm a Software Engineer with 4 years of experience, currently working in the Platform Engineering team at Humanforce. I specialise in building scalable systems, improving developer experience, and solving platform-wide productivity and performance challenges across products like intelliHR, Thrive, and Workforce Management - serving 600,000+ users. I hold a Bachelor’s degree in Information Technology (Computer Science major) from Queensland University of Technology. I enjoy exploring new tech in my free time.",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "Backend",
      skills: [
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "PHP", icon: "logos:php" },
        { name: "C#", icon: "logos:c-sharp" },
        { name: "Python", icon: "logos:python" },
        { name: "Laravel", icon: "logos:laravel" },
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "SQL" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "MySQL", icon: "logos:mysql" },
        { name: "DynamoDB", icon: "logos:aws-dynamodb" },
        { name: "REST APIs", icon: "material-symbols:api-outline" },
        { name: "GraphQL", icon: "logos:graphql" },
        { name: "Elasticsearch", icon: "logos:elasticsearch" },
        { name: "Logstash", icon: "logos:logstash" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "Redux", icon: "logos:redux" },
        { name: "HTML5", icon: "logos:html-5" },
        { name: "CSS3", icon: "logos:css-3" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "Webpack", icon: "logos:webpack" },
        { name: "Single Page Applications" },
        { name: "Responsive Design" }
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "AWS", icon: "logos:aws" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "Kubernetes", icon: "logos:kubernetes" },
        { name: "Jenkins", icon: "logos:jenkins" },
        { name: "GitHub Actions", icon: "logos:github-actions" },
        { name: "Linux", icon: "logos:linux-tux" },
        { name: "CI/CD" },
        { name: "Infrastructure as Code" },
      ],
    },
    {
      category: "Practices",
      skills: [
        { name: "Database design" },
        { name: "Event‑driven architecture" },
        { name: "Agile" },
        { name: "Scrum" },
        { name: "Object Oriented Programming (OOP)" },
        { name: "Test Driven Development (TDD)" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: "logos:git-icon" },
        { name: "GitHub", icon: "logos:github-icon" },
        { name: "Sentry", icon: "logos:sentry-icon" },
        { name: "New Relic", icon: "logos:new-relic-icon" },
        { name: "Grafana", icon: "logos:grafana" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Humanforce",
      href: "https://humanforce.com",
      location: "Brisbane",
      title: "Software Engineer",
      logoUrl: "/humanforce.png",
      start: "January 2024",
      end: "Present",
      description:
        "Software engineer in the Humanforce platform team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.",
    },
    {
      company: "The University of Queensland",
      href: "https://uq.edu.au",
      location: "Brisbane",
      title: "Software Engineer",
      logoUrl: "/uq.png",
      start: "November 2022",
      end: "January 2024",
      description:
        "Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.",
    },
    {
      company: "YouPay",
      href: "https://youpay.me",
      badges: [],
      location: "Brisbane",
      title: "Software Developer",
      logoUrl: "/youpay.png",
      start: "February 2022",
      end: "November 2022",
      description:
        "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for merchants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. Integrated YouPay into dozens of stores.",
    },
    {
      company: "M3 Digital",
      href: "https://m3digital.com.au",
      location: "Brisbane",
      title: "Web Developer",
      logoUrl: "/m3digital.jpg",
      start: "September 2021",
      end: "February 2022",
      description:
        "Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain. Developed high quality landing pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.",
    },
  ],
  education: [
    {
      school: "Queensland University of Technology (QUT)",
      href: "https://www.qut.edu.au/",
      degree: "Bachelor of Information Technology (Computer Science)",
      logoUrl: "/qut.png",
      start: "2018",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
