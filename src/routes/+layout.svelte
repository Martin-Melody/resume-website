<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { toast } from "svelte-sonner";
  import { ModeWatcher } from "mode-watcher";
  import { Toaster } from "$lib/components/ui/sonner";
  import Header from "@/components/header/header.svelte";
  import Projects from "@/components/projects/projects.svelte";
  import ShortBio from "@/components/short-bio/short-bio.svelte";
  import SkillsList from "@/components/skills-list/skills-list.svelte";
  import { loadGoogleAnalytics } from "$lib/utils/loadGoogleAnalytics";
  import { updateGoogleAnalyticsConsent } from "@/utils/updateGoogleAnalyticsConsent";

  onMount(() => {
    const consent = localStorage.getItem("ga_consent");

    loadGoogleAnalytics();

    if (!consent) {
      toast("This site uses cookies for analytics. Do you accept?", {
        action: {
          label: "Accept",
          onClick: () => {
            localStorage.setItem("ga_consent", "granted");
            location.reload();
          },
        },
        cancel: {
          label: "Decline",
          onClick: () => {
            localStorage.setItem("ga_consent", "denied");
          },
        },
        duration: Infinity,
        actionButtonStyle:
          "background: #10b981; color: white; border-radius: 6px; padding: 8px 16px; font-weight: 500;",
        cancelButtonStyle:
          "background: #ef4444; color: white; border-radius: 6px; padding: 8px 16px; font-weight: 500;",
      });
    } else {
      updateGoogleAnalyticsConsent(consent === "granted");
    }
  });

  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <link rel="canonical" href={data.canonical} />
</svelte:head>

<div class="mx-auto pb-5 w-[80%] md:w-[50%]">
  <Toaster position="bottom-right" />
  <ModeWatcher />
  <Header />
  <ShortBio />
  <SkillsList />
  <Projects />
  <slot />
</div>
