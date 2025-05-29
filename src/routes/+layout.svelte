<script>
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";

  import Header from "@/components/header/header.svelte";
  import Projects from "@/components/projects/projects.svelte";
  import ShortBio from "@/components/short-bio/short-bio.svelte";
  import SkillsList from "@/components/skills-list/skills-list.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
</script>

<div class="mx-auto w-[50%]">
  <Toaster position="bottom-right" />
  <ModeWatcher />
  <Header />
  <ShortBio />
  <SkillsList />
  <Projects />
  <slot />
</div>
