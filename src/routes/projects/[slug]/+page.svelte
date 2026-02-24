<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel";

  export let data;
</script>

<svelte:head>
  <title>{data.project.title} | Martin Melody</title>
  <meta name="description" content={data.project.description} />
</svelte:head>

<div class="mt-8 space-y-6">
  <a href="/" class="text-sm text-primary hover:underline">← Back to home</a>

  <section class="space-y-2">
    <h1 class="text-2xl md:text-3xl font-bold">{data.project.title}</h1>
    <p class="text-muted-foreground">{data.project.description}</p>
  </section>

  {#if data.project.screenshots.length > 0}
    <section class="space-y-3">
      <h2 class="text-lg font-semibold">Screenshots</h2>
      <Carousel.Root class="w-full max-w-4xl mx-auto">
        <Carousel.Content>
          {#each data.project.screenshots as screenshot}
            <Carousel.Item>
              <figure class="rounded-lg border overflow-hidden bg-card">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  class="w-full aspect-video object-cover"
                  loading="lazy"
                />
                {#if screenshot.caption}
                  <figcaption class="p-3 text-sm text-muted-foreground">
                    {screenshot.caption}
                  </figcaption>
                {/if}
              </figure>
            </Carousel.Item>
          {/each}
        </Carousel.Content>
        <Carousel.Previous class="left-2 md:-left-12" />
        <Carousel.Next class="right-2 md:-right-12" />
      </Carousel.Root>
    </section>
  {/if}

  <section class="space-y-3">
    <h2 class="text-lg font-semibold">Overview</h2>
    <p>{data.project.details}</p>
  </section>

  <section class="space-y-3">
    <h2 class="text-lg font-semibold">Tech stack</h2>
    <ul class="list-disc pl-6 space-y-1">
      {#each data.project.stack as item}
        <li>{item}</li>
      {/each}
    </ul>
  </section>

  {#if data.project.repoUrl}
    <a
      href={data.project.repoUrl}
      target="_blank"
      rel="noreferrer"
      class="inline-block text-primary hover:underline"
    >
      View repository →
    </a>
  {/if}
</div>
