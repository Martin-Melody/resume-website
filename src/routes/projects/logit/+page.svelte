<svelte:head>
  <title>LogIt Case Study | Martin Melody</title>
  <meta
    name="description"
    content="Case study for LogIt: a mobile-first, offline-first workout tracker built with SvelteKit and Capacitor."
  />
</svelte:head>

<section class="py-8 md:py-10 space-y-8">
  <a href="/#projects" class="text-sm text-primary hover:underline">← Back to projects</a>

  <header class="space-y-3">
    <p class="text-xs uppercase tracking-wide text-primary font-semibold">Case Study</p>
    <h1 class="text-2xl md:text-3xl font-bold">LogIt</h1>
    <p class="text-muted-foreground max-w-3xl leading-7">
      LogIt is a mobile-first workout tracker aimed at fast session logging and strong data ownership.
      It is designed offline-first and uses platform-appropriate local persistence.
    </p>
    <div class="flex flex-wrap gap-2 text-xs md:text-sm">
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">SvelteKit</span>
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">Capacitor</span>
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">SQLite</span>
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">Offline-first</span>
      <span class="rounded-full border border-border px-3 py-1 text-muted-foreground">Fitness</span>
    </div>
  </header>

  <div class="grid gap-6 md:grid-cols-2">
    <article class="rounded-lg border border-border p-5">
      <h2 class="font-semibold mb-2">What it does</h2>
      <ul class="list-disc pl-5 text-muted-foreground space-y-2 leading-7">
        <li>Tracks workouts, split plans, and recent sessions in a quick mobile flow.</li>
        <li>Supports planned and unplanned sessions with minimal friction.</li>
        <li>Prioritises reliability and speed when logging in real-world gym sessions.</li>
      </ul>
    </article>

    <article class="rounded-lg border border-border p-5">
      <h2 class="font-semibold mb-2">Architecture highlights</h2>
      <ul class="list-disc pl-5 text-muted-foreground space-y-2 leading-7">
        <li>Repository-based data layer for workouts, splits, and exercises.</li>
        <li>Uses browser local persistence on web builds.</li>
        <li>Switches to SQLite-backed storage for native builds via Capacitor.</li>
      </ul>
    </article>
  </div>

  <section class="space-y-3">
    <h2 class="font-semibold text-lg">Screenshots</h2>
    <p class="text-sm text-muted-foreground">
      Add images to <code>static/project-images/logit/</code> and update these placeholders.
    </p>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground bg-secondary/20">
        Add <code>logit-home.png</code> to <code>static/project-images/logit/</code>
      </div>
      <div class="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground bg-secondary/20">
        Add <code>logit-session.png</code> to <code>static/project-images/logit/</code>
      </div>
    </div>
  </section>

  <div class="pt-2">
    <a
      href="https://github.com/LogIt-FitnessApp"
      target="_blank"
      rel="noopener noreferrer"
      class="text-primary hover:underline"
      >View repository ↗</a
    >
  </div>
</section>
