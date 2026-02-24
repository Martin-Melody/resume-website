export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectNarrative = {
  motivation: string[];
  approach: string[];
  challenges: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  details: string;
  stack: string[];
  repoUrl?: string;
  screenshots: ProjectScreenshot[];
  narrative: ProjectNarrative;
};

export const projects: Project[] = [
  {
    slug: "loom",
    title: "Loom",
    description: "Offline-first TUI project and task management app",
    summary:
      "A local-first project and task management application built in .NET.",
    details:
      "Loom uses Terminal.Gui for an interactive TUI, Spectre.Console for CLI commands, and open Markdown/JSON files for persistent storage. An ASP.NET Web API exposes Loom's core functionality for integration with external tools, enabling future desktop, mobile, or automation clients.",
    stack: [".NET", "Terminal.Gui", "Spectre.Console", "ASP.NET Core Web API"],
    repoUrl: "https://github.com/Martin-Melody/Loom",
    screenshots: [
      {
        src: "/project-screenshots/loom/board-view.svg",
        alt: "Loom board layout showing multiple columns",
        caption: "Board view for planning project tasks.",
      },
      {
        src: "/project-screenshots/loom/task-details.svg",
        alt: "Loom task details with sidebar and metadata",
        caption: "Task details view with rich metadata.",
      },
      {
        src: "/project-screenshots/loom/cli-summary.svg",
        alt: "Loom command-line summary output",
        caption: "CLI reporting command output.",
      },
    ],
    narrative: {
      motivation: [
        "I wanted a project manager that still works when I am disconnected from the internet and doesn't force me into a heavy GUI workflow.",
        "I also wanted to prove to myself that terminal interfaces can still feel polished, modern, and productive for daily planning.",
      ],
      approach: [
        "I split the product into three layers: a Terminal.Gui app for interactive usage, Spectre.Console commands for automation, and a shared domain layer so the business logic stayed reusable.",
        "Storage was designed to be simple and future-proof by keeping everything in human-readable Markdown/JSON files. That choice made backups and debugging much easier.",
        "I added an API on top of the same core services so I could support future frontends (desktop, mobile, scripts) without rewriting logic.",
      ],
      challenges: [
        "Keeping state consistent across the TUI and command-line flows was tricky at first; I solved this with a shared service layer and strict command boundaries.",
        "Another challenge was balancing rich functionality with startup speed, so I profiled file IO paths and reduced unnecessary reads to keep interactions snappy.",
      ],
    },
  },
  {
    slug: "logit",
    title: "LogIt",
    description: "Self-hosted, offline-first workout companion",
    summary:
      "A training app built for lifters who want complete control of their data.",
    details:
      "LogIt makes it easy to plan, record, and review workouts anywhere—whether you're online, offline, or running your own server.",
    stack: ["TypeScript", "Offline-first architecture", "Self-hosting"],
    repoUrl: "https://github.com/LogIt-FitnessApp",
    screenshots: [],
    narrative: {
      motivation: [
        "I built LogIt because most fitness apps lock your data behind subscriptions or require constant internet access.",
      ],
      approach: [
        "The app was designed around local-first principles: capture workouts immediately, sync when possible, and keep ownership with the user.",
      ],
      challenges: [
        "A major challenge was defining conflict behavior when people edit sessions on different devices; I focused on predictable merge rules and clear UX around sync state.",
      ],
    },
  },
  {
    slug: "resume-website",
    title: "Resume Website",
    description: "Personal portfolio and resume site",
    summary:
      "Built with SvelteKit and Tailwind CSS, deployed via GitHub Pages using GitHub Actions.",
    details:
      "This site is fully responsive and highlights key projects and skills. It uses static content and pre-rendering for fast performance.",
    stack: ["SvelteKit", "Tailwind CSS", "GitHub Actions", "GitHub Pages"],
    repoUrl: "https://github.com/Martin-Melody/resume-website",
    screenshots: [],
    narrative: {
      motivation: [
        "I wanted a portfolio that felt personal and maintainable, where I could quickly update content without introducing unnecessary backend complexity.",
      ],
      approach: [
        "I used a static-first architecture with local content files so edits are versioned in Git and deployment stays simple and reliable.",
      ],
      challenges: [
        "The hardest part was balancing clean design with performance and accessibility while keeping the project easy to evolve over time.",
      ],
    },
  },
  {
    slug: "e-learning-app-capstone",
    title: "E-Learning App (Capstone)",
    description: "Cloud-hosted mobile/web education platform",
    summary: "Built with Ionic Angular, Express, and Cosmos DB.",
    details:
      "Hosted on Azure VM and Blob Storage. Integrated CI/CD via Azure DevOps and delivered a mobile-first responsive design.",
    stack: ["Ionic Angular", "Express", "Cosmos DB", "Azure"],
    screenshots: [],
    narrative: {
      motivation: [
        "I wanted to deliver an end-to-end learning platform that could handle real users across both web and mobile experiences.",
      ],
      approach: [
        "I chose Ionic Angular to maximize code sharing across platforms and paired it with an Express API and cloud-native Azure services.",
      ],
      challenges: [
        "Managing deployment complexity across frontend, API, and storage services was the biggest hurdle; robust CI/CD pipelines were key to keeping releases stable.",
      ],
    },
  },
  {
    slug: "insecure-web-app-pentesting-project",
    title: "Insecure Web App (PenTesting Project)",
    description: "Full-stack security testing project",
    summary:
      "A deliberately vulnerable Angular + .NET Web API app used for penetration testing.",
    details:
      "The project focused on OWASP ZAP testing and produced an assessment report with identified vulnerabilities and mitigations.",
    stack: ["Angular", ".NET Web API", "OWASP ZAP"],
    screenshots: [],
    narrative: {
      motivation: [
        "I created this project to gain practical experience finding and explaining real vulnerabilities, not just reading about them.",
      ],
      approach: [
        "The app intentionally included insecure patterns so I could run structured tests, document exploit paths, and map each issue to clear remediations.",
      ],
      challenges: [
        "The most valuable challenge was translating technical findings into business-friendly risk language so non-security stakeholders could act on the report.",
      ],
    },
  },
];

export const projectsBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);
