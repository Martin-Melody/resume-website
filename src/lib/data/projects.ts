export type Project = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  details: string;
  stack: string[];
  repoUrl?: string;
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
  },
  {
    slug: "e-learning-app-capstone",
    title: "E-Learning App (Capstone)",
    description: "Cloud-hosted mobile/web education platform",
    summary:
      "Built with Ionic Angular, Express, and Cosmos DB.",
    details:
      "Hosted on Azure VM and Blob Storage. Integrated CI/CD via Azure DevOps and delivered a mobile-first responsive design.",
    stack: ["Ionic Angular", "Express", "Cosmos DB", "Azure"],
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
  },
];

export const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));
