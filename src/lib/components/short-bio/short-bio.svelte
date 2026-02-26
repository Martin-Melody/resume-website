<script lang="ts">
  import Button from "../ui/button/button.svelte";
</script>

<section class="pb-8 border-b border-border/70">
  <p class="text-xs md:text-sm uppercase tracking-wide text-primary font-semibold mb-2">
    Junior Software Developer
  </p>
  <h1 class="text-2xl md:text-3xl font-bold text-foreground leading-tight">
    .NET and Angular developer building practical, reliable software.
  </h1>
  <p class="mt-3 text-sm md:text-base text-muted-foreground leading-7 max-w-3xl">
    I build web apps and APIs with a focus on offline-first UX and maintainable
    architecture. Currently a Systems Installation Engineer at CBE in Mayo, with
    prior backend and testing experience from a 6-month internship at the
    Department of Social Protection.
  </p>

  <div class="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
    <span class="rounded-full border border-border px-3 py-1 text-muted-foreground"
      >Open to junior dev opportunities</span
    >
    <span class="rounded-full border border-border px-3 py-1 text-muted-foreground"
      >Mayo, Ireland</span
    >
    <span class="rounded-full border border-border px-3 py-1 text-muted-foreground"
      >Remote / Hybrid</span
    >
  </div>

  <div class="mt-6 flex flex-wrap gap-3">
    <Button href="#projects" class="font-medium">View Projects</Button>
    <Button
      href="mailto:martinmelody.work@gmail.com"
      variant="outline"
      class="font-medium"
      >Contact Me</Button
    >
  </div>
</section>
