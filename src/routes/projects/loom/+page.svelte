<script lang="ts">
  import ProjectGallery from "$lib/components/projects/project-gallery.svelte";

  const loomImages = [
    {
      src: "/project-images/loom/screenshot-2026-02-26_19-49-47.png",
      alt: "Loom dashboard",
      caption: "Dashboard view",
    },
    {
      src: "/project-images/loom/screenshot-2026-02-26_19-50-30.png",
      alt: "Loom task list",
      caption: "Task list view",
    },
    {
      src: "/project-images/loom/screenshot-2026-02-26_19-50-45.png",
      alt: "Loom command palette",
      caption: "Command and navigation flow",
    },
    {
      src: "/project-images/loom/screenshot-2026-02-26_19-52-29.png",
      alt: "Loom additional screen",
      caption: "Additional workflow screen",
    },
  ];
</script>

<svelte:head>
  <title>Loom Case Study | Martin Melody</title>
  <meta
    name="description"
    content="Case study for Loom: a local-first .NET task manager with terminal UI and optional remote API mode."
  />
</svelte:head>

<section class="py-8 md:py-10 space-y-8">
  <a href="/#projects" class="text-sm text-primary hover:underline">← Back to projects</a>

  <header class="space-y-3">
    <p class="text-xs uppercase tracking-wide text-primary font-semibold">Case Study</p>
    <h1 class="text-2xl md:text-3xl font-bold">Loom</h1>
    <p class="text-muted-foreground max-w-3xl leading-7">
      Loom is a local-first task and project manager designed for terminal-heavy workflows.
      It combines a Terminal.Gui interface, CLI entrypoints, and an optional API-backed
      remote mode.
    </p>
    <div class="flex flex-wrap gap-2 text-xs md:text-sm">
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">.NET</span>
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">Terminal.Gui</span>
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">CLI</span>
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">Web API</span>
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">Local-first</span>
    </div>
  </header>

  <div class="grid gap-6 md:grid-cols-2">
    <article class="rounded-lg border border-border p-5">
      <h2 class="font-semibold mb-2">What it does</h2>
      <ul class="list-disc pl-5 text-muted-foreground space-y-2 leading-7">
        <li>Lets you manage tasks and projects from a keyboard-first terminal UI.</li>
        <li>Stores data locally in JSON by default for fast, offline use.</li>
        <li>Can switch to a remote connection mode that talks to API endpoints.</li>
      </ul>
    </article>

    <article class="rounded-lg border border-border p-5">
      <h2 class="font-semibold mb-2">Architecture highlights</h2>
      <ul class="list-disc pl-5 text-muted-foreground space-y-2 leading-7">
        <li>Layered structure across Core, Application, Infrastructure, and UI projects.</li>
        <li>Shared task service used by both terminal and server paths.</li>
        <li>Config-driven local vs remote storage providers.</li>
      </ul>
    </article>
  </div>

  <ProjectGallery
    title="Screenshots"
    folderHint="static/project-images/loom/"
    items={loomImages}
  />

  <div class="pt-2">
    <a
      href="https://github.com/Martin-Melody/Loom"
      target="_blank"
      rel="noopener noreferrer"
      class="text-primary hover:underline"
      >View repository ↗</a
    >
  </div>
</section>
