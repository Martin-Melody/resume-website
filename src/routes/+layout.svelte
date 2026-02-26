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
      toast("Allow analytics cookies?", {
        description: "Used only to understand site traffic and improve content.",
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
          "background: hsl(174 60% 40%); color: white; border-radius: 6px; padding: 6px 12px; font-weight: 500;",
        cancelButtonStyle:
          "background: hsl(0 0% 20%); color: hsl(210 40% 98%); border: 1px solid hsl(0 0% 28%); border-radius: 6px; padding: 6px 12px; font-weight: 500;",
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

<div class="mx-auto pb-8 w-[94%] sm:w-[92%] md:w-[82%] lg:w-[68%] max-w-5xl">
  <Toaster position="bottom-right" />
  <ModeWatcher />
  <Header />
  <ShortBio />
  <SkillsList />
  <Projects />
  <slot />
</div>
