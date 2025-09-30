import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Ben Rogers",
  initials: "BR",
  url: "https://www.benrogers.dev/",
  location: "Brisbane, Australia",
  locationLink: "https://www.google.com/maps/place/brisbane",
  description:
    "Full Stack Software Engineer at Humanforce. I build web applications with a focus on performance and scalability.",
  summary:
    "I'm a Software Engineer with **4 years of experience**, currently working in the Platform Engineering team at Humanforce. I specialise in building scalable systems, improving developer experience, and solving platform-wide productivity and performance challenges across products like intelliHR, Thrive, and Workforce Management - serving **600,000+ users**. I hold a **Bachelor's degree in Computer Science** from Queensland University of Technology. I enjoy exploring new tech in my free time.",
  avatarUrl: "/me.png",
} as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "PHP", icon: "logos:php" },
      { name: "C#", icon: "logos:c-sharp" },
      { name: "Python", icon: "logos:python" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "DynamoDB", icon: "logos:aws-dynamodb" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Elasticsearch", icon: "logos:elasticsearch" },
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
      { name: "Single Page Applications", icon: "material-symbols:web" },
      { name: "Responsive Design", icon: "material-symbols:responsive-layout" },
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
      { name: "CI/CD", icon: "material-symbols:sync" },
      { name: "Infrastructure as Code", icon: "material-symbols:code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design", icon: "material-symbols:database" },
      { name: "Event‑driven architecture", icon: "lucide:share-2" },
      { name: "Agile", icon: "lucide:repeat" },
      { name: "Scrum", icon: "material-symbols:group" },
      {
        name: "OOP",
        icon: "material-symbols:code",
      },
      {
        name: "TDD",
        icon: "lucide:flask-conical",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Sentry", icon: "logos:sentry-icon" },
      { name: "New Relic", icon: "logos:new-relic-icon" },
      { name: "Grafana", icon: "logos:grafana" },
      {
        name: "Sumo Logic",
        icon: "material-symbols:analytics",
      },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "https://dev.to/ben04rogers", icon: NotebookIcon, label: "Blog" },
] as const;

export const contactData = {
  email: "hello@example.com",
  tel: "+123456789",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/ben04rogers",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ben-rogers-dev/",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "Humanforce",
    href: "https://humanforce.com",
    location: "Brisbane",
    title: "Software Engineer",
    logoUrl: "/humanforce.png",
    start: "Jan 2024",
    end: "Present",
    description: [
      "Worked on web applications serving 600,000+ users with a modern tech stack including a Laravel backend (PHP) with GraphQL endpoints, a React SPA frontend (TypeScript), event‑driven Node.js (TypeScript) microservices, and also AWS Lambda backends (TypeScript).",
      "Enhanced the email log in intelliHR by integrating AWS SES and a microservice to track bounce, complaint, and delivery status, allowing users to retry failed messages.",
      "Built user management features for a multi-tenant infrastructure management system, enabling administrators to create users, assign companies, and define permissions (TypeScript, Angular, Lambda, API Gateway, DynamoDB).",
      "Developed backend APIs for the intelliHR‑Thrive mobile app integration, streamlining in‑app form completion and boosting task completion rates.",
      "Automated pruning of large database tables to reduce data growth and lower long‑term storage costs.",
      "Setup Sumo Logic in Node.js and .NET lambdas to standardise logging format across codebases.",
      "Improved job data download performance by implementing a streaming mechanism, making downloads significantly faster and more memory-efficient.",
      "Implemented comprehensive testing across the stack using Playwright, PHPUnit, Jest and Cypress.",
      "Migrated legacy REST endpoints to GraphQL.",
      "Led smooth PHP and Laravel version upgrades.",
      "Setup ESLint and Prettier in CI/CD pipelines to enforce coding standards and consistent code quality across teams.",
    ],
  },
  {
    company: "The University of Queensland",
    href: "https://uq.edu.au",
    location: "Brisbane",
    title: "Software Engineer",
    logoUrl: "/uq.png",
    start: "Nov 2022",
    end: "Jan 2024",
    description: [
      "Worked on various web applications for the university such as CAHP (Casual Academic Hire and Payment), UQ Maps, Programs and Courses, my.UQ.",
      "Developed a system for staff to validate their timesheets in CAHP.",
      "Developed an events feed microservice using Node.js, AWS Lambda, Docker, and DynamoDB.",
      "Worked on an automated pipeline for UQ Donations using AWS, CDK, Code Pipeline and Docker.",
      "Developed React components for the UQ design system to reuse across different applications.",
      "Used many different technologies including TypeScript, React, Node.js, PHP, Symfony, MySQL, AWS, DynamoDB, Lambda, Jenkins and Oracle.",
      "Developed an automated access control system to ensure students completed the mandatory UQ Respect module before accessing Blackboard, using Node.js, TypeScript, Express.js, MySQL, Jenkins, and the Blackboard API to grant or revoke access based on completion status.",
    ],
  },
  {
    company: "YouPay",
    href: "https://youpay.me",
    badges: [],
    location: "Brisbane",
    title: "Software Developer",
    logoUrl: "/youpay.png",
    start: "Feb 2022",
    end: "Nov 2022",
    description: [
      "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs.",
      "Developed an email notification system for merchants to subscribe to weekly/monthly summaries of YouPay carts created, paid and cancelled on their store. The emails would also compare the current week/month with the previous.",
      "Worked on signup and login flows using Vue.js and Laravel.",
      "Built a one-click feature to automatically generate a branded 'About YouPay' page on merchants' Shopify stores, streamlining onboarding and boosting merchant adoption.",
      "Maintenance of Laravel Nova merchant dashboard.",
      "Integrated YouPay into dozens of Shopify stores.",
      "Reviewed code for colleagues.",
    ],
  },
  {
    company: "M3 Digital",
    href: "https://m3digital.com.au",
    location: "Brisbane",
    title: "Web Developer",
    logoUrl: "/m3digital.jpg",
    start: "Sep 2021",
    end: "Feb 2022",
    description: [
      "Worked on variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain.",
      "Developed custom front end features and sections using HTML, CSS, SCSS, JavaScript, and Liquid.",
      "Developed high quality landing pages from scratch with modular CSS and JS practices for maintainability.",
      "Integrated many third party plugins within existing stores, e.g. Calendly for customer bookings and Preezie for product recommendations.",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Queensland University of Technology (QUT)",
    href: "https://www.qut.edu.au/",
    degree: "Bachelor of Information Technology (Computer Science)",
    logoUrl: "/qut.png",
    start: "Feb 2018",
    end: "Aug 2023",
    description: [
      "GPA 6.2/7",
      "Major in Computer Science",
      "Minor in Networks and Security",
      "Minor in Mobile Applications",
      "Science Deans List - 2019 and 2021",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Developer Job Portal",
    href: "https://github.com/ben04rogers/ozdevs-v2",
    dates: "2023",
    active: true,
    description:
      "Job portal for companies looking to hire developers in Australia. Filter by experience, location and keyboards. Companies can pay a monthly fee to be able to message developers on the site and view their information. Built with Laravel.",
    detailedDescription: `A comprehensive job portal specifically designed for the Australian developer market. This platform connects talented developers with companies seeking technical talent across various experience levels and specialisations.`,
    keyFeatures: [
      "Filter by experience level, location, and keywords",
      "Company subscription model for accessing developer profiles and messaging",
      "User authentication and profile management",
      "Built-in messaging between developers and companies",
      "Setup automated PHPUnit tests in GitHub Actions pipeline.",
    ],
    technologies: [
      { name: "PHP", icon: "logos:php" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "MySQL", icon: "logos:mysql-icon" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/ben04rogers/ozdevs-v2",
        icon: "github",
      },
    ],
    image: "/job-portal.png",
    images: ["/job-portal.png"],
    video: "",
  },
  {
    title: "Project Management",
    href: "https://github.com/ben04rogers/ozdevs-v2",
    dates: "2023",
    active: true,
    description:
      "Project management application featuring drag-and-drop kanban boards, user assignments, and team collaboration. Built with Laravel, React and Inertia.",
    detailedDescription: `Kanban project management application to help teams manage their work.`,
    keyFeatures: [
      "Interactive drag-and-drop kanban boards for task management",
      "Create multiple boards",
      "Create cards on a board with a rich text editor for card descriptions",
      "Assign users to cards",
      "Share boards with users",
    ],
    technologies: [
      { name: "PHP", icon: "logos:php" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "React", icon: "logos:react" },
      { name: "Inertia" },
      { name: "SQLite", icon: "logos:sqlite" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/ben04rogers/kanban-laravel",
        icon: "github",
      },
    ],
    image: "/project-management.png",
    images: ["/project-management.png"],
    video: "",
  },
  {
    title: "Crypto Sentiment Analysis",
    href: "https://github.com/ben04rogers/cab432-assignment-2",
    dates: "2023",
    active: true,
    description:
      "Cryptocurrency sentiment analysis website that analyses Twitter posts to determine sentiment for different cryptocurrencies, built with React, Express.js, and AWS services including EC2, S3, and Elasticache with auto-scaling.",
    detailedDescription: `An advanced sentiment analysis platform that processes social media data to provide real-time insights into cryptocurrency market sentiment. This cloud-native application demonstrates modern full-stack development practices with scalable AWS infrastructure.`,
    keyFeatures: [
      "Real-time Twitter data collection and processing",
      "Interactive data visualization and charts",
      "Support for multiple cryptocurrencies",
      "Auto-scaling infrastructure for handling traffic spikes",
    ],
    technologies: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "React", icon: "logos:react" },
      { name: "Express.js", icon: "logos:express" },
      { name: "AWS", icon: "logos:aws" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/ben04rogers/cab432-assignment-2",
        icon: "github",
      },
      {
        type: "Demo",
        href: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
        icon: "globe",
      },
    ],
    image: "/crypto-sentiment.png",
    images: ["/crypto-sentiment.png"],
    video: "",
  },
  {
    title: "Company Asset Trading",
    href: "https://github.com/ben04rogers/organisation-asset-trading",
    dates: "2023",
    active: true,
    description:
      "Java-based desktop application for trading virtual assets within company departments using a marketplace model. Built with MariaDB and Swing GUI.",
    detailedDescription: `A comprehensive desktop application that simulates an internal marketplace for trading virtual assets within company departments. This project demonstrates object-oriented programming principles and database integration in a real-world business context.`,
    keyFeatures: [
      "Department-based user management and authentication",
      "Virtual asset marketplace with bidding system",
      "Transaction history and reporting",
      "Asset categorisation and search functionality",
    ],
    technologies: [
      { name: "Java", icon: "logos:java" },
      { name: "MariaDB", icon: "logos:mariadb-icon" },
      { name: "Swing", icon: "logos:java" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/ben04rogers/organisation-asset-trading",
        icon: "github",
      },
    ],
    image: "/asset-trading.jpg",
    images: ["/asset-trading.jpg"],
    video: "",
  },
  {
    title: "Computer Auction",
    href: "https://github.com/ben04rogers/computer-auction",
    dates: "2023",
    active: true,
    description:
      "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list.",
    detailedDescription: `A full-featured auction platform specifically designed for computer hardware and electronics. This web application provides a complete marketplace experience with user management, bidding functionality, and comprehensive item management.`,
    keyFeatures: [
      "User registration and authentication system",
      "Item listing and management with image uploads",
      "Real-time bidding system with automatic bid validation",
      "Advanced search and filtering capabilities",
      "User review and rating system",
      "Watchlist functionality for tracking favorite items",
      "Admin panel for platform management",
    ],
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "Flask", icon: "logos:flask" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "SQLite", icon: "logos:sqlite" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/ben04rogers/computer-auction",
        icon: "github",
      },
    ],
    image: "/computer-auction.png",
    images: ["/computer-auction.png"],
    video: "",
  },
  {
    title: "Arduino Binary Game",
    href: "https://github.com/ben04rogers/binary-game-microcontroller",
    dates: "2023",
    active: true,
    description:
      "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
    detailedDescription: `An educational game designed to teach binary number concepts through interactive gameplay on Arduino hardware. This embedded systems project combines programming fundamentals with hardware interaction to create an engaging learning experience.`,
    keyFeatures: [
      "Interactive LED display for visual feedback",
      "Timer-based challenges to increase engagement",
      "Score tracking and performance metrics",
      "Real-time input validation",
    ],
    technologies: [{ name: "C", icon: "logos:c" }],
    links: [
      {
        type: "Github",
        href: "https://github.com/ben04rogers/binary-game-microcontroller",
        icon: "github",
      },
      {
        type: "Demo",
        href: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
        icon: "globe",
      },
    ],
    image: "/binary-game.png",
    images: ["/binary-game.png"],
    video: "",
  },
] as const;
