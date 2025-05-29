<script lang="ts">
  import * as Card from "$lib/components/ui/card";

  const projects = [
    {
      title: "LogIt",
      description: "Offline-first workout tracker",
      content:
        "Built with React Native, Capacitor, and PostgreSQL. Supports secure offline login and markdown editing.",
      link: "https://github.com/LogIt-FitnessApp",
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

<div class="mt-10">
  <p class="text-foreground font-semibold text-xl mb-4">Projects</p>

  <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <div
        role="button"
        tabindex="0"
        class="h-full transition-shadow hover:shadow-lg cursor-pointer"
        on:click={() => handleClick(project)}
        on:keydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick(project);
          }
        }}
      >
        <Card.Root class="h-full flex flex-col">
          <Card.Header>
            <Card.Title>{project.title}</Card.Title>
            <Card.Description>{project.description}</Card.Description>
          </Card.Header>
          <Card.Content class="flex-1">
            <p>{project.content}</p>
            {#if project.link}
              <p class="mt-4 text-sm text-primary hover:underline">
                View project →
              </p>
            {/if}
          </Card.Content>
        </Card.Root>
      </div>
    {/each}
  </div>
</div>
