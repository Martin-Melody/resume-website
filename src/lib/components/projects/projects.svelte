<script lang="ts">
  import * as Card from "$lib/components/ui/card";

  type Project = {
    title: string;
    summary: string;
    highlights: string[];
    tags: string[];
    link?: string;
    featured?: boolean;
  };

  const projects: Project[] = [
    {
      title: "Loom",
      summary: "Offline-first task and project management app for terminal-first workflows.",
      highlights: [
        "Built in .NET using Terminal.Gui + Spectre.Console for TUI and CLI UX.",
        "Exposes core features via ASP.NET Web API for future desktop/mobile clients.",
      ],
      tags: [".NET", "ASP.NET API", "Terminal.Gui", "Local-first"],
      link: "https://github.com/Martin-Melody/Loom",
      featured: true,
    },
    {
      title: "LogIt",
      summary: "Self-hosted workout companion with full control over your own data.",
      highlights: [
        "Plan, log, and review workouts online, offline, or on your own server.",
        "Designed for lifters who want privacy, ownership, and consistent tracking.",
      ],
      tags: ["Offline-first", "Fitness", "Self-hosted"],
      link: "https://github.com/LogIt-FitnessApp",
      featured: true,
    },
    {
      title: "Resume Website",
      summary: "Responsive portfolio site focused on projects, strengths, and contact paths.",
      highlights: [
        "Built with SvelteKit + Tailwind CSS and deployed via GitHub Pages.",
        "CI/CD powered by GitHub Actions.",
      ],
      tags: ["SvelteKit", "Tailwind", "GitHub Actions"],
      link: "https://github.com/Martin-Melody/resume-website",
    },
    {
      title: "E-Learning App (Capstone)",
      summary: "Cloud-hosted mobile/web education platform.",
      highlights: [
        "Built with Ionic Angular, Express, and Cosmos DB.",
        "Hosted on Azure VM + Blob Storage with CI/CD through Azure DevOps.",
      ],
      tags: ["Ionic", "Angular", "Express", "Cosmos DB", "Azure"],
    },
    {
      title: "Insecure Web App (PenTesting Project)",
      summary: "Deliberately vulnerable full-stack app used for security assessment practice.",
      highlights: [
        "Angular + .NET Web API test target scanned with OWASP ZAP.",
        "Delivered vulnerability report with mitigation recommendations.",
      ],
      tags: ["OWASP ZAP", "Angular", ".NET Web API", "Security"],
    },
  ];

</script>

<section id="projects" class="py-8">
  <div class="flex items-end justify-between gap-2 mb-4 md:mb-5">
    <h2 class="text-foreground font-semibold text-lg md:text-xl">Projects</h2>
    <span class="text-xs text-muted-foreground">Selected work</span>
  </div>

  <div class="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
    {#each projects as project}
      <div class={`h-full transition-shadow ${project.link ? "hover:shadow-lg" : ""}`}>
        <Card.Root class={`h-full flex flex-col ${project.featured ? "border-primary/50" : ""}`}>
          <Card.Header class="pb-3">
            <div class="flex flex-wrap gap-2 mb-3">
              {#each project.tags as tag}
                <span class="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              {/each}
            </div>
            <Card.Title class="text-base md:text-lg">{project.title}</Card.Title>
            <Card.Description class="text-sm md:text-base text-muted-foreground">
              {project.summary}
            </Card.Description>
          </Card.Header>
          <Card.Content class="flex-1 pt-0">
            <ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground leading-6">
              {#each project.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
            {#if project.link}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-block text-xs md:text-sm text-primary hover:underline"
              >
                View project →
              </a>
            {/if}
          </Card.Content>
        </Card.Root>
      </div>
    {/each}
  </div>
</section>
