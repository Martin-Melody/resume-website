<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  const projects = [
    {
      title: "LogIt",
      description: "Self-hosted, offline-first workout companion",
      content:
        "A training app built for lifters who want complete control of their data. LogIt makes it easy to plan, record, and review workouts anywhere—whether you’re online, offline, or running your own server.",
      link: "https://github.com/LogIt-FitnessApp",
    },
    {
      title: "Resume Website",
      description: "Personal portfolio and resume site",
      content:
        "Built with SvelteKit and Tailwind CSS, deployed via GitHub Pages using GitHub Actions for CI/CD. Fully responsive and highlights key projects and skills.",
      link: "https://github.com/Martin-Melody/resume-website",
    },

    {
      title: "E-Learning App (Capstone)",
      description: "Cloud-hosted mobile/web education platform",
      content:
        "Built with Ionic Angular, Express, and Cosmos DB. Hosted on Azure VM and Blob Storage. Integrated CI/CD via Azure DevOps and delivered a mobile-first responsive design.",
    },
    {
      title: "Insecure Web App (PenTesting Project)",
      description: "Full-stack security testing project",
      content:
        "Deliberately vulnerable Angular + .NET Web API app used for penetration testing with OWASP ZAP. Delivered an assessment report with identified vulnerabilities and mitigations.",
    },
  ];
  function handleClick(project: any) {
    console.log(`Clicked on project: ${project.title}`);
    if (project.link) {
      window.open(project.link, "_blank");
    }
  }
</script>

<div class="mt-6 md:mt-10">
  <p class="text-foreground font-semibold text-lg md:text-xl mb-3 md:mb-4">
    Projects
  </p>
  <div
    class="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3"
  >
    {#each projects as project}
      <div
        role="button"
        tabindex="0"
        class="h-full transition-shadow hover:shadow-lg cursor-pointer"
        onclick={() => handleClick(project)}
        onkeydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick(project);
          }
        }}
      >
        <Card.Root class="h-full flex flex-col">
          <Card.Header class="pb-3 md:pb-4">
            <Card.Title class="text-base md:text-lg">{project.title}</Card.Title
            >
            <Card.Description class="text-sm md:text-base"
              >{project.description}</Card.Description
            >
          </Card.Header>
          <Card.Content class="flex-1 pt-0 md:pt-2">
            <p class="text-sm md:text-base">{project.content}</p>
            {#if project.link}
              <p
                class="mt-3 md:mt-4 text-xs md:text-sm text-primary hover:underline"
              >
                View project →
              </p>
            {/if}
          </Card.Content>
        </Card.Root>
      </div>
    {/each}
  </div>
</div>
