<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import { Github, Linkedin, Mail } from "lucide-svelte";
  import ToggleTheme from "@/components/toggle-theme/toggle-theme.svelte";
  import Button from "../ui/button/button.svelte";
  import { toast } from "svelte-sonner";
</script>

<div
  class="container px-2 md:px-4 py-6 mt-6 md:mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
>
  <div class="flex items-center text-left">
    <div class="avatar mr-3 shrink-0">
      <Avatar.Root>
        <Avatar.Image src="/head-shot.webp" alt="Martin Melody headshot" />
        <Avatar.Fallback>MM</Avatar.Fallback>
      </Avatar.Root>
    </div>

    <div class="info flex flex-col justify-center">
      <p class="leading-tight text-base md:text-lg font-semibold">Martin Melody</p>
      <p class="text-muted-foreground text-sm md:text-base">
        Systems Installation Engineer @
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

  <div class="link-icons flex items-center gap-2 self-end lg:self-auto">
    <Button
      variant="ghost"
      size="icon"
      aria-label="Open GitHub profile"
      onclick={() =>
        window.open("https://www.github.com/martin-melody", "_blank")}
    >
      <Github class="text-muted-foreground hover:text-foreground" />
    </Button>

    <Button
      variant="ghost"
      size="icon"
      aria-label="Open LinkedIn profile"
      onclick={() =>
        window.open("https://www.linkedin.com/in/martinmelody/", "_blank")}
    >
      <Linkedin class="text-muted-foreground hover:text-foreground" />
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
        } catch {
          toast.error("Failed to copy email.");
        }
      }}
    >
      <Mail class="text-muted-foreground hover:text-foreground" />
    </Button>

    <ToggleTheme />
  </div>
</div>
