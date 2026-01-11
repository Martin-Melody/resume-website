<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import { Github } from "lucide-svelte";
  import { Linkedin } from "lucide-svelte";
  import { Mail } from "lucide-svelte";
  import ToggleTheme from "@/components/toggle-theme/toggle-theme.svelte";
  import Button from "../ui/button/button.svelte";
  import { toast } from "svelte-sonner";
</script>

<!-- TODO: might need to change this avatar link at some point -->

<div
  class="container px-4 py-5 mt-10 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0"
>
  <!-- Left Side: Avatar + Info -->
  <div class="flex items-center text-center sm:text-left">
    <div class="avatar mr-3 shrink-0">
      <Avatar.Root>
        <Avatar.Image src="/head-shot.webp" alt="Martin Melody headshot" />
        <Avatar.Fallback>MM</Avatar.Fallback>
      </Avatar.Root>
    </div>

    <div class="info flex flex-col justify-center">
      <p class="leading-3 text-sm md:text-base lg:text-lg font-semibold">
        Martin Melody
      </p>
      <p class="text-muted text-sm">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline"
        >
          Systems Engineer
        </a>
        @
        <a
          href="https://www.cbe.ie/"
          target="_blank"
          rel="noopener noreferrer"
          class="italic text-foreground hover:underline"
        >
          CBE
        </a>
      </p>
    </div>
  </div>

  <!-- Right Side: Icons -->
  <div class="link-icons flex items-center gap-2">
    <Button
      variant="ghost"
      size="icon"
      onclick={() =>
        window.open("https://www.github.com/martin-melody", "_blank")}
    >
      <Github class="text-muted hover:text-foreground" />
    </Button>

    <Button
      variant="ghost"
      size="icon"
      onclick={() =>
        window.open("https://www.linkedin.com/in/martinmelody/", "_blank")}
    >
      <Linkedin class="text-muted hover:text-foreground" />
    </Button>

    <Button
      variant="ghost"
      size="icon"
      aria-label="Copy email to clipboard"
      onclick={async () => {
        if (!navigator.clipboard) {
          toast.error("Clipboard not supported by your browser.");
          return;
        }
        try {
          await navigator.clipboard.writeText("martinmelody.work@gmail.com");
          toast.success("Email copied to clipboard.", {
            description: "Email me with any questions or inquiries!",
          });
        } catch (err) {
          toast.error("Failed to copy email.");
        }
      }}
    >
      <Mail class="text-muted hover:text-foreground" />
    </Button>

    <ToggleTheme />
  </div>
</div>
