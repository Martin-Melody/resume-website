<script lang="ts">
  const sections = [
    {
      title: "Core",
      skills: [
        ".NET Web API",
        "C#",
        "SvelteKit",
        "TypeScript",
        "SQL",
      ],
    },
    {
      title: "Also Worked With",
      skills: [
        "Angular",
        "Ionic",
        "Entity Framework Core",
        "Express",
        "PostgreSQL",
        "SQL Server",
        "Cosmos DB",
        "MongoDB",
      ],
    },
    {
      title: "Tools & Delivery",
      skills: [
        "Azure VMs / Blob Storage",
        "CI/CD (Azure DevOps)",
        "Git & GitHub",
        "PowerShell",
      ],
    },
  ];
</script>

<section class="py-8 border-b border-border/70">
  <div class="flex items-center justify-between gap-2 mb-3">
    <h2 class="text-foreground font-semibold text-lg md:text-xl">Technical Skills</h2>
    <span class="text-xs text-muted-foreground">Broad but practical</span>
  </div>

  <div class="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#each sections as section}
      <div class="rounded-lg border border-border p-4">
        <p class="font-medium text-sm text-foreground mb-3">{section.title}</p>
        <div class="flex flex-wrap gap-2">
          {#each section.skills as skill}
            <span
              class="text-xs md:text-sm px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
              >{skill}</span
            >
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
