<script lang="ts">
  import Button from "../ui/button/button.svelte";
</script>

<section class="pb-8 border-b border-border/70">
  <p class="hero-animate hero-animate-1 text-xs md:text-sm uppercase tracking-wide text-primary font-semibold mb-2">
    Junior Software Developer
  </p>
  <h1 class="hero-animate hero-animate-2 text-2xl md:text-3xl font-bold text-foreground leading-tight">
    Junior developer building clean, reliable web apps and APIs.
  </h1>
  <p class="hero-animate hero-animate-3 mt-3 text-sm md:text-base text-muted-foreground leading-7 max-w-2xl">
    I’m based in Sligo and currently focused on .NET and SvelteKit, with previous
    hands-on work in Angular and backend testing. I care about clean architecture,
    offline-first thinking, and building software that stays maintainable over time.
  </p>
  <p class="hero-animate hero-animate-4 mt-2 text-sm md:text-base text-muted-foreground leading-7 max-w-2xl">
    I currently work in a systems role at CBE and completed a 6-month developer
    internship with the Department of Social Protection.
  </p>

  <div class="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
    <span class="rounded-full border border-border px-3 py-1 text-muted-foreground"
      >Open to junior dev opportunities</span
    >
    <span class="rounded-full border border-border px-3 py-1 text-muted-foreground"
      >Available for freelance websites and web apps</span
    >
    <span class="rounded-full border border-border px-3 py-1 text-muted-foreground"
      >Sligo, Ireland</span
    >
    <span class="rounded-full border border-border px-3 py-1 text-muted-foreground"
      >Remote / Hybrid</span
    >
  </div>

  <div class="hero-animate hero-animate-5 mt-6 grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
    <Button href="#projects" class="font-medium w-full sm:w-auto">View Projects</Button>
    <Button
      href="mailto:martinmelody.work@gmail.com"
      variant="outline"
      class="font-medium w-full sm:w-auto"
      >Contact Me</Button
    >
  </div>
</section>

<style>
  .hero-animate {
    opacity: 0;
    transform: translateY(10px);
    animation: hero-fade-up 480ms ease-out forwards;
  }

  .hero-animate-1 { animation-delay: 40ms; }
  .hero-animate-2 { animation-delay: 100ms; }
  .hero-animate-3 { animation-delay: 160ms; }
  .hero-animate-4 { animation-delay: 220ms; }
  .hero-animate-5 { animation-delay: 280ms; }

  @keyframes hero-fade-up {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-animate {
      opacity: 1;
      transform: none;
      animation: none;
    }
  }
</style>
