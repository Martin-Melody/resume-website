<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel";

  type GalleryItem = {
    src: string;
    alt: string;
    caption: string;
  };

  export let title = "Screenshots";
  export let folderHint = "";
  export let items: GalleryItem[] = [];

  let selected: GalleryItem | null = null;
  let failed: Record<string, boolean> = {};

  function markFailed(src: string) {
    failed = { ...failed, [src]: true };
  }
</script>

<section class="space-y-3">
  <h2 class="font-semibold text-lg">{title}</h2>
  {#if folderHint}
    <p class="text-sm text-muted-foreground">
      Add images to <code>{folderHint}</code>.
    </p>
  {/if}

  <Carousel.Root
    opts={{ align: "center", loop: false }}
    class="w-full"
  >
    <Carousel.Content>
      {#each items as item}
        <Carousel.Item class="basis-full">
          {#if failed[item.src]}
            <div class="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground bg-secondary/20">
              Missing: <code>{item.src}</code>
            </div>
          {:else}
            <button
              class="w-full text-left rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
              onclick={() => (selected = item)}
            >
              <div class="w-full aspect-video bg-secondary/20 overflow-hidden flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  class="w-full h-full object-contain"
                  loading="lazy"
                  onerror={() => markFailed(item.src)}
                />
              </div>
              <div class="p-3 text-sm text-muted-foreground">{item.caption}</div>
            </button>
          {/if}
        </Carousel.Item>
      {/each}
    </Carousel.Content>

    {#if items.length > 1}
      <Carousel.Previous class="left-2 top-3" />
      <Carousel.Next class="right-2 top-3" />
    {/if}
  </Carousel.Root>
</section>

{#if selected}
  <div class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center">
    <div class="max-w-5xl w-full">
      <div class="flex justify-end mb-2">
        <button
          class="text-xs md:text-sm rounded-md border border-border px-3 py-1.5 bg-background text-foreground hover:bg-accent"
          onclick={() => (selected = null)}
        >
          Close
        </button>
      </div>
      <img
        src={selected.src}
        alt={selected.alt}
        class="w-full max-h-[75vh] object-contain rounded-lg border border-border bg-background"
      />
      <div class="mt-2 text-sm text-muted-foreground">{selected.caption}</div>
    </div>
  </div>
{/if}
