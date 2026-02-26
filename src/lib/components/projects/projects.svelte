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
      summary: "A local-first task manager for terminal workflows with optional remote sync mode.",
      highlights: [
        "Built in .NET with a Terminal.Gui interface and command-driven workflows.",
        "Supports local JSON storage by default, with optional API-backed remote mode via ASP.NET endpoints.",
      ],
      tags: [".NET", "Terminal.Gui", "CLI", "Local-first", "Web API"],
      link: "https://github.com/Martin-Melody/Loom",
      featured: true,
    },
    {
      title: "LogIt",
      summary: "A mobile-first workout tracker focused on fast logging and local data ownership.",
      highlights: [
        "Built with SvelteKit + Capacitor, with repository-based data layers for workouts, splits, and sessions.",
        "Offline-first by design: uses local storage on web and SQLite on native builds.",
      ],
      tags: ["SvelteKit", "Capacitor", "SQLite", "Offline-first", "Fitness"],
      link: "https://github.com/LogIt-FitnessApp",
      featured: true,
    },
    {
      title: "Resume Website",
      summary: "My personal portfolio site (this one).",
      highlights: [
        "Built with SvelteKit + Tailwind and deployed on GitHub Pages.",
        "Automated deploys with GitHub Actions.",
      ],
      tags: ["SvelteKit", "Tailwind", "GitHub Actions"],
      link: "https://github.com/Martin-Melody/resume-website",
    },
    {
      title: "E-Learning App (Capstone)",
      summary: "Capstone project for a cloud-hosted education platform.",
      highlights: [
        "Built with Ionic Angular, Express, and Cosmos DB.",
        "Deployed on Azure with CI/CD via Azure DevOps.",
      ],
      tags: ["Ionic", "Angular", "Express", "Cosmos DB", "Azure"],
    },
    {
      title: "Insecure Web App (PenTesting Project)",
      summary: "A deliberately vulnerable app built for security testing practice.",
      highlights: [
        "Angular + .NET Web API target tested with OWASP ZAP.",
        "Produced a report with findings and mitigation steps.",
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
          <Card.Header class="pb-2 md:pb-3 px-4 md:px-6 pt-4 md:pt-6">
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
          <Card.Content class="flex-1 pt-0 px-4 md:px-6 pb-4 md:pb-6">
            <ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-muted-foreground leading-6">
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
