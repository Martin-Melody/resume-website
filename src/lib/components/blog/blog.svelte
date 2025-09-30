<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { blogPosts } from "$lib/data/blogPosts";

  const navigateToPost = (slug: string) => {
    window.open(`/blog/${slug}`, "_self");
  };

  const handleKeyDown = (event: KeyboardEvent, slug: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigateToPost(slug);
    }
  };
</script>

<div class="mt-6 md:mt-10">
  <p class="text-foreground font-semibold text-lg md:text-xl mb-3 md:mb-4">
    Blog
  </p>

  <div class="flex flex-col gap-4">
    {#each blogPosts as post}
      <Card.Root
        role="button"
        tabindex={0}
        class="transition-shadow hover:shadow-lg cursor-pointer"
        on:click={() => navigateToPost(post.slug)}
        on:keydown={(event) => handleKeyDown(event as unknown as KeyboardEvent, post.slug)}
      >
        <Card.Header class="pb-2 md:pb-3">
          <Card.Title class="text-base md:text-lg">{post.title}</Card.Title>
          <Card.Description class="text-xs md:text-sm">
            {new Date(post.published).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Card.Description>
        </Card.Header>
        <Card.Content class="pt-0 md:pt-1">
          <p class="text-sm md:text-base">{post.summary}</p>
          <p class="mt-3 text-xs md:text-sm text-primary hover:underline">
            Read more →
          </p>
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
</div>
