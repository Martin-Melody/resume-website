<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { projects } from "$lib/data/projects";
</script>

<div class="mt-6 md:mt-10">
  <p class="text-foreground font-semibold text-lg md:text-xl mb-3 md:mb-4">Projects</p>
  <div
    class="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3"
  >
    {#each projects as project}
      <a
        class="h-full transition-shadow hover:shadow-lg cursor-pointer block"
        href={`/projects/${project.slug}`}
      >
        <Card.Root class="h-full flex flex-col">
          <Card.Header class="pb-3 md:pb-4">
            <Card.Title class="text-base md:text-lg">{project.title}</Card.Title>
            <Card.Description class="text-sm md:text-base">{project.description}</Card.Description>
          </Card.Header>
          <Card.Content class="flex-1 pt-0 md:pt-2">
            <p class="text-sm md:text-base">{project.summary}</p>
            <p class="mt-3 md:mt-4 text-xs md:text-sm text-primary hover:underline">View details →</p>
          </Card.Content>
        </Card.Root>
      </a>
    {/each}
  </div>
</div>
