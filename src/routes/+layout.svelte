<script>
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import Header from "@/components/header/header.svelte";
  import Projects from "@/components/projects/projects.svelte";
  import ShortBio from "@/components/short-bio/short-bio.svelte";
  import SkillsList from "@/components/skills-list/skills-list.svelte";
  import { Toaster } from "$lib/components/ui/sonner";

  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta property="og:image" content="/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta name="twitter:image" content="/og-image.png" />
</svelte:head>

<div class="mx-auto w-[80%] md:w-[50%]">
  <Toaster position="bottom-right" />
  <ModeWatcher />
  <Header />
  <ShortBio />
  <SkillsList />
  <Projects />
  <slot />
</div>
