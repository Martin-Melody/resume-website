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

<div class=" container flex justify-between px-0 py-5 mt-20">
  <div class="flex items-center">
    <div class="avatar mr-3">
      <Avatar.Root>
        <Avatar.Image
          src="https://media.licdn.com/dms/image/v2/D4E03AQE0RXm0Iy17Rg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709763771819?e=1753920000&v=beta&t=NoAN1i8g0umDWh7oHIs01j2NvQ7Cv7S6QNfgOFvc9HY"
          alt="@shadcn"
        />
        <Avatar.Fallback>MM</Avatar.Fallback>
      </Avatar.Root>
    </div>

    <div class="info h-full flex flex-col align-middle justify-center">
      <p class="leading-3">Martin Melody</p>
      <p class="text-muted">
        <a
          href="https://careersportal.ie/articles/article.php?article_id=694"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline cursor-pointer text-muted"
        >
          Commis Chef
        </a>

        @
        <a
          href="https://langs.ie/"
          target="_blank"
          rel="noopener noreferrer"
          class="italic text-foreground hover:underline cursor-pointer"
        >
          Langs
        </a>
      </p>
    </div>
  </div>

  <div class="link-icons flex items-center gap-2">
    <Button
      variant="ghost"
      size="icon"
      on:click={() =>
        window.open("https://www.github.com/martin-melody", "_blank")}
    >
      <Github class="text-muted hover:text-foreground" />
    </Button>

    <Button
      variant="ghost"
      size="icon"
      on:click={() =>
        window.open("https://www.linkedin.com/in/martinmelody/", "_blank")}
    >
      <Linkedin class="text-muted hover:text-foreground" />
    </Button>

    <Button
      variant="ghost"
      size="icon"
      aria-label="Copy email to clipboard"
      on:click={async () => {
        if (!navigator.clipboard) {
          toast.error("Clipboard not supported by your browser.");
          return;
        }
        try {
          await navigator.clipboard.writeText("martinmelody.work@gmail.com");
          toast.success("Email successfully copied to your clipboard.", {
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

<style>
</style>
