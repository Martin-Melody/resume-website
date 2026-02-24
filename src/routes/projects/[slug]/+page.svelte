<script lang="ts">
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
